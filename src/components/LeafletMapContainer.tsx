'use client';

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Plot, Landmark } from '@/types/plot';
import { MASTERPLAN_CENTER, DEFAULT_ZOOM, MASTERPLAN_INFRASTRUCTURE, NEARBY_LANDMARKS } from '@/data/nakshatraPlots';
import { getPolygonCentroid, getPolygonEdges } from '@/utils/mapHelpers';
import { LinearUnit, convertLength, formatCurrency } from '@/utils/formatters';
import { computePlotsBounds, computePlotsCentroid } from '@/utils/cadParser';
import { useLanguage } from '@/context/LanguageContext';

interface LeafletMapContainerProps {
  plots: Plot[];
  selectedPlot: Plot | null;
  onSelectPlot: (plot: Plot | null) => void;
  mapMode: 'satellite' | 'vector';
  is3dPerspective: boolean;
  showDimensions: boolean;
  showStatus: boolean;
  siteFocus?: boolean;
  linearUnit: LinearUnit;
  center?: [number, number];
  landmarks?: Landmark[];
  projectName?: string;
  resetViewTrigger?: number;
}

// Helper to compute plot polygon style dynamically without tearing down SVG DOM elements
function getPlotStyle(plot: Plot, isSelected: boolean, showStatus: boolean) {
  // Architectural CAD warm ivory fill matching Screenshot 2
  let color = '#384252';
  let fillColor = '#e2dac7';
  let fillOpacity = 0.98;
  let weight = 1.2;
  let dashArray: string | undefined = undefined;

  if (showStatus) {
    if (plot.status === 'available') {
      color = '#059669';
      fillColor = '#10b981';
      fillOpacity = 0.82;
      weight = 1.5;
    } else if (plot.status === 'booked') {
      color = '#d97706';
      fillColor = '#f59e0b';
      fillOpacity = 0.82;
      weight = 1.5;
      dashArray = '4, 4';
    } else if (plot.status === 'sold') {
      color = '#dc2626';
      fillColor = '#ef4444';
      fillOpacity = 0.65;
      weight = 1.5;
    }
  }

  if (isSelected) {
    color = '#ffffff';
    fillColor = '#0284c7';
    fillOpacity = 0.95;
    weight = 3;
    dashArray = undefined;
  }

  return { color, fillColor, fillOpacity, weight, dashArray };
}

export default function LeafletMapContainer({
  plots,
  selectedPlot,
  onSelectPlot,
  mapMode,
  is3dPerspective,
  showDimensions,
  showStatus,
  siteFocus = true,
  linearUnit,
  center,
  landmarks,
  projectName,
  resetViewTrigger,
}: LeafletMapContainerProps) {
  const { language, t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  
  // Dynamic masterplan center & landmarks
  const activeCenter: [number, number] = center || (plots.length > 0 ? computePlotsCentroid(plots) : MASTERPLAN_CENTER);
  const activeLandmarks: Landmark[] = landmarks && landmarks.length > 0 ? landmarks : NEARBY_LANDMARKS;
  const isDefaultSite = Math.abs(activeCenter[0] - MASTERPLAN_CENTER[0]) < 0.05 && Math.abs(activeCenter[1] - MASTERPLAN_CENTER[1]) < 0.05;

  // Layer Groups in z-order
  const maskLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const infraLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const plotLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const landmarksLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const beaconLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const labelLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const dimensionLayerGroupRef = useRef<L.LayerGroup | null>(null);

  // Persistent reference to created Leaflet polygon instances (key: plot.id)
  const plotPolygonsMapRef = useRef<Map<string, L.Polygon>>(new Map());

  // Callback ref to avoid re-binding click listeners
  const onSelectPlotRef = useRef(onSelectPlot);
  onSelectPlotRef.current = onSelectPlot;

  const [currentZoom, setCurrentZoom] = useState<number>(18.8);
  const [visiblePlotCount, setVisiblePlotCount] = useState<number>(plots.length || 109);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to fit map camera tightly around the masterplan plot boundaries (Matches Screenshot 2)
  const fitPlotBounds = () => {
    if (!mapRef.current) return;
    let boundsToFit: L.LatLngBounds | null = null;
    if (isDefaultSite && MASTERPLAN_INFRASTRUCTURE.outerBoundary) {
      boundsToFit = L.latLngBounds(MASTERPLAN_INFRASTRUCTURE.outerBoundary as [number, number][]);
    } else if (plots.length > 0) {
      boundsToFit = L.latLngBounds(computePlotsBounds(plots));
    }

    if (boundsToFit) {
      mapRef.current.fitBounds(boundsToFit, {
        padding: [30, 30],
        maxZoom: 19.5,
        animate: true,
        duration: 1.0,
      });
    } else {
      mapRef.current.flyTo(activeCenter, 18.8, { duration: 1.0 });
    }
  };

  // Auto-focus camera on plot area on initial mount or when plots change
  useEffect(() => {
    const timer = setTimeout(() => {
      fitPlotBounds();
    }, 250);
    return () => clearTimeout(timer);
  }, [activeCenter[0], activeCenter[1], plots.length]);

  // Trigger camera fit when resetViewTrigger increments (Home / GPS / Reset View button)
  useEffect(() => {
    if (resetViewTrigger && resetViewTrigger > 0) {
      fitPlotBounds();
    }
  }, [resetViewTrigger]);

  // Initialize Leaflet Map (Run once) with Complete World Zoom capability
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: activeCenter,
      zoom: 18.8,
      minZoom: 2.0, // Allows zooming out to the entire world map!
      maxZoom: 20.5, // 20.5 provides razor-sharp plot dimensions
      worldCopyJump: true,
      zoomControl: false,
      attributionControl: false,
      zoomAnimation: true,
      fadeAnimation: true,
    });

    mapRef.current = map;

    // Debounced Viewport State Update: Prevents lag/stutter during active zoom animations
    const updateViewportState = () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      debounceTimerRef.current = setTimeout(() => {
        if (mapRef.current) {
          const zoom = mapRef.current.getZoom();
          const bounds = mapRef.current.getBounds();
          const visible = plots.filter((plot) => {
            const centroid = getPolygonCentroid(plot.polygon);
            return bounds.contains(L.latLng(centroid[0], centroid[1]));
          });
          setCurrentZoom(zoom);
          setVisiblePlotCount(visible.length);
        }
      }, 75); // 75ms debounce allows silky 60fps wheel and pinch zoom
    };

    map.on('zoomend', updateViewportState);
    map.on('moveend', updateViewportState);

    // Initial check
    setTimeout(updateViewportState, 200);

    // Handle Window Resize
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };
    // 1. Base Satellite Tile Layer (Initialized synchronously with map instance)
    const isSatelliteMode = mapMode === 'satellite';
    const initialTileUrl = isSatelliteMode
      ? 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
      : 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';

    const tileLayer = L.tileLayer(initialTileUrl, {
      maxZoom: 21,
      maxNativeZoom: 20,
      opacity: 1.0,
      updateWhenZooming: false,
      updateWhenIdle: true,
      keepBuffer: 3,
    }).addTo(map);

    tileLayer.on('tileerror', () => {
      // Fallback to ArcGIS World Imagery if Google is ever unreachable
      if (tileLayerRef.current && !(tileLayerRef.current as any)._fallbackActive) {
        (tileLayerRef.current as any)._fallbackActive = true;
        tileLayerRef.current.setUrl('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
      }
    });

    tileLayerRef.current = tileLayer;

    // Layer Groups in z-order
    maskLayerGroupRef.current = L.layerGroup().addTo(map);
    infraLayerGroupRef.current = L.layerGroup().addTo(map);
    plotLayerGroupRef.current = L.layerGroup().addTo(map);
    landmarksLayerGroupRef.current = L.layerGroup().addTo(map);
    beaconLayerGroupRef.current = L.layerGroup().addTo(map);
    labelLayerGroupRef.current = L.layerGroup().addTo(map);
    dimensionLayerGroupRef.current = L.layerGroup().addTo(map);

    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      window.removeEventListener('resize', handleResize);
      map.off('zoomend', updateViewportState);
      map.off('moveend', updateViewportState);
      map.remove();
      mapRef.current = null;
      tileLayerRef.current = null;
    };
  }, []);

  // Update Tile Layer URL only when mapMode changes
  useEffect(() => {
    if (!tileLayerRef.current) return;
    const isSatellite = mapMode === 'satellite';
    const tileUrl = isSatellite
      ? 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
      : 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';
    tileLayerRef.current.setUrl(tileUrl);
  }, [mapMode]);

  // Smoothly fly camera to active center when masterplan coordinates change
  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.flyTo(activeCenter, 18.0, { duration: 1.2 });
  }, [activeCenter[0], activeCenter[1]]);

  // Render Site Beacon at low zoom levels (Zoom < 14.5) for World/Regional View
  useEffect(() => {
    if (!mapRef.current || !beaconLayerGroupRef.current) return;
    beaconLayerGroupRef.current.clearLayers();

    if (currentZoom < 14.5) {
      const siteIcon = L.divIcon({
        className: 'site-beacon-marker-wrapper',
        html: `
          <div class="site-beacon-container">
            <div class="site-beacon-pulse"></div>
            <div class="site-beacon-badge">
              <div class="site-beacon-title">📍 ${projectName || (language === 'mr' ? 'नक्षत्र एन्क्लेव्ह' : 'Nakshatra Masterplan')}</div>
              <div class="site-beacon-stats">${plots.length} ${language === 'mr' ? 'प्लॉट्स • झूम करण्यासाठी क्लिक करा' : 'Plots • Click to Focus'}</div>
            </div>
          </div>
        `,
        iconSize: [220, 50],
        iconAnchor: [110, 25],
      });

      const beaconMarker = L.marker(activeCenter, { icon: siteIcon, interactive: true });
      beaconMarker.on('click', () => {
        fitPlotBounds();
      });
      beaconMarker.addTo(beaconLayerGroupRef.current);
    }
  }, [currentZoom, activeCenter[0], activeCenter[1], plots.length, projectName, language]);

  // Native Dynamic Landmarks: Automatically rendered directly by Google Hybrid tiles
  // No manual landmark files needed - map tiles show all local POIs, lakes, transit, and institutions dynamically
  useEffect(() => {
    if (!mapRef.current || !landmarksLayerGroupRef.current) return;
    landmarksLayerGroupRef.current.clearLayers();
  }, []);

  // Render Spotlight Focus Inverted Mask & Project Perimeter (Matches Screenshot 2)
  useEffect(() => {
    if (!mapRef.current || !maskLayerGroupRef.current) return;

    maskLayerGroupRef.current.clearLayers();

    let outerBoundary: [number, number][] = [];
    if (isDefaultSite && MASTERPLAN_INFRASTRUCTURE.outerBoundary) {
      outerBoundary = MASTERPLAN_INFRASTRUCTURE.outerBoundary as [number, number][];
    } else if (plots.length > 0) {
      const [[minLat, minLng], [maxLat, maxLng]] = computePlotsBounds(plots);
      outerBoundary = [
        [minLat - 0.0003, minLng - 0.0003],
        [minLat - 0.0003, maxLng + 0.0003],
        [maxLat + 0.0003, maxLng + 0.0003],
        [maxLat + 0.0003, minLng - 0.0003],
      ];
    }

    if (outerBoundary.length === 0) return;

    // SPOTLIGHT FOCUS ON PLOT AREA (Activates when zoomed in >= 16.0, exactly matching Screenshot 2)
    // Softly dims surrounding terrain (48% opacity) so the satellite imagery (streets, houses, trees) remains visible,
    // while making the central plotted masterplan pop forward in clear spotlight focus!
    if (siteFocus && currentZoom >= 16.0) {
      const worldRing: [number, number][] = [
        [-89.9, -179.9],
        [-89.9, 179.9],
        [89.9, 179.9],
        [89.9, -179.9],
      ];

      const focusMask = L.polygon([worldRing, outerBoundary], {
        stroke: false,
        fillColor: '#000000',
        fillOpacity: 0.48, // 48% soft dimming: satellite photo is clearly visible underneath, matching Screenshot 2!
        interactive: false,
      });
      focusMask.addTo(maskLayerGroupRef.current);
    }

    // Clean Subtle Project Perimeter Line (clean dashed boundary as in Screenshot 1 & 2)
    const perimeterLine = L.polygon(outerBoundary, {
      color: '#38bdf8',
      weight: 1.5,
      dashArray: '6, 6',
      fill: false,
      interactive: false,
      opacity: 0.85,
    });
    perimeterLine.addTo(maskLayerGroupRef.current);

  }, [siteFocus, mapMode, language, isDefaultSite, plots, currentZoom]);

  // Render Masterplan Infrastructure (Only for default Kolhapur masterplan layout)
  useEffect(() => {
    if (!mapRef.current || !infraLayerGroupRef.current) return;

    infraLayerGroupRef.current.clearLayers();
    if (!isDefaultSite) return; // Don't draw roads on custom or relocated sites
    const infra = MASTERPLAN_INFRASTRUCTURE;

    // 1. Outer Buffer Perimeter
    if (infra.outerBoundary) {
      L.polygon(infra.outerBoundary as [number, number][], {
        color: '#4ade80',
        weight: 1.5,
        fillColor: '#166534',
        fillOpacity: 0.15,
        dashArray: '5, 5',
        interactive: false,
      }).addTo(infraLayerGroupRef.current);
    }

    // 2. Internal Asphalt Roads
    const roadStyle = {
      color: '#0f172a',
      weight: 1,
      fillColor: '#1e293b',
      fillOpacity: 0.92,
      interactive: false,
    };

    if (infra.mainRoad1) {
      L.polygon(infra.mainRoad1 as [number, number][], roadStyle).addTo(infraLayerGroupRef.current);
    }
    if (infra.mainRoad2) {
      L.polygon(infra.mainRoad2 as [number, number][], roadStyle).addTo(infraLayerGroupRef.current);
    }
    if (infra.topAvenue) {
      L.polygon(infra.topAvenue as [number, number][], roadStyle).addTo(infraLayerGroupRef.current);
    }

    // 3. Entrance Boulevard & Gate
    if (infra.entranceRoad) {
      L.polygon(infra.entranceRoad as [number, number][], {
        color: '#0f172a',
        weight: 1.5,
        fillColor: '#1e293b',
        fillOpacity: 0.95,
        interactive: false,
      }).addTo(infraLayerGroupRef.current);

      const entryCenter = getPolygonCentroid(infra.entranceRoad as [number, number][]);
      const entryIcon = L.divIcon({
        className: 'infra-entry-badge',
        html: `<div style="background: rgba(15,23,42,0.9); color: #38bdf8; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 6px; border: 1px solid rgba(56,189,248,0.5); text-transform: uppercase; letter-spacing: 1px; white-space: nowrap;">ENTRY GATE</div>`,
        iconSize: [80, 20],
        iconAnchor: [40, 10],
      });
      L.marker(entryCenter, { icon: entryIcon, interactive: false }).addTo(infraLayerGroupRef.current);
    }

    // 4. Oxygen Park
    if (infra.oxygenPark) {
      L.polygon(infra.oxygenPark as [number, number][], {
        color: '#22c55e',
        weight: 1.5,
        fillColor: '#15803d',
        fillOpacity: 0.85,
        interactive: false,
      }).addTo(infraLayerGroupRef.current);

      const oxyCenter = getPolygonCentroid(infra.oxygenPark as [number, number][]);
      const oxyIcon = L.divIcon({
        className: 'infra-park-badge',
        html: `<div style="color: #bbf7d0; font-size: 10px; font-weight: 900; letter-spacing: 0.5px; text-shadow: 0 1px 4px rgba(0,0,0,0.9); transform: rotate(-38deg); white-space: nowrap;">OXYGEN PARK</div>`,
        iconSize: [90, 20],
        iconAnchor: [45, 10],
      });
      L.marker(oxyCenter, { icon: oxyIcon, interactive: false }).addTo(infraLayerGroupRef.current);
    }

    // 5. Party Plot
    if (infra.partyPlot) {
      L.polygon(infra.partyPlot as [number, number][], {
        color: '#4ade80',
        weight: 1.5,
        fillColor: '#4d7c0f',
        fillOpacity: 0.9,
        interactive: false,
      }).addTo(infraLayerGroupRef.current);

      const partyCenter = getPolygonCentroid(infra.partyPlot as [number, number][]);
      const partyIcon = L.divIcon({
        className: 'infra-party-badge',
        html: `<div style="color: #ffffff; font-size: 11px; font-weight: 900; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.9); text-align: center; white-space: nowrap;">PARTY PLOT</div>`,
        iconSize: [80, 20],
        iconAnchor: [40, 10],
      });
      L.marker(partyCenter, { icon: partyIcon, interactive: false }).addTo(infraLayerGroupRef.current);
    }

    // 6. Club Building
    if (infra.clubhouse) {
      L.polygon(infra.clubhouse as [number, number][], {
        color: '#64748b',
        weight: 1.5,
        fillColor: '#334155',
        fillOpacity: 0.95,
        interactive: false,
      }).addTo(infraLayerGroupRef.current);

      const clubCenter = getPolygonCentroid(infra.clubhouse as [number, number][]);
      const clubIcon = L.divIcon({
        className: 'infra-club-badge',
        html: `<div style="color: #38bdf8; font-size: 11px; font-weight: 900; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.9); text-align: center; white-space: nowrap;">CLUB</div>`,
        iconSize: [60, 20],
        iconAnchor: [30, 10],
      });
      L.marker(clubCenter, { icon: clubIcon, interactive: false }).addTo(infraLayerGroupRef.current);
    }

    // 7. Box Cricket
    if (infra.boxCricket) {
      L.polygon(infra.boxCricket as [number, number][], {
        color: '#38bdf8',
        weight: 1.5,
        fillColor: '#0369a1',
        fillOpacity: 0.85,
        interactive: false,
      }).addTo(infraLayerGroupRef.current);

      const courtCenter = getPolygonCentroid(infra.boxCricket as [number, number][]);
      const courtIcon = L.divIcon({
        className: 'infra-court-badge',
        html: `<div style="color: #e0f2fe; font-size: 9px; font-weight: 900; text-align: center; line-height: 1.2; text-shadow: 0 2px 4px rgba(0,0,0,0.9); white-space: nowrap;">BOX CRICKET<br/><span style="font-size: 7.5px; opacity: 0.9;">MULTI PURPOSE COURT</span></div>`,
        iconSize: [110, 26],
        iconAnchor: [55, 13],
      });
      L.marker(courtCenter, { icon: courtIcon, interactive: false }).addTo(infraLayerGroupRef.current);
    }

    // 8. Children Park
    if (infra.childrenPark) {
      L.polygon(infra.childrenPark as [number, number][], {
        color: '#22c55e',
        weight: 1.5,
        fillColor: '#15803d',
        fillOpacity: 0.85,
        interactive: false,
      }).addTo(infraLayerGroupRef.current);

      const parkCenter = getPolygonCentroid(infra.childrenPark as [number, number][]);
      const parkIcon = L.divIcon({
        className: 'infra-cpark-badge',
        html: `<div style="color: #bbf7d0; font-size: 9px; font-weight: 900; text-align: center; text-shadow: 0 1px 4px rgba(0,0,0,0.9); white-space: nowrap;">CHILDREN PARK<br/><span style="font-size: 7.5px; opacity: 0.9;">& GARDEN</span></div>`,
        iconSize: [90, 24],
        iconAnchor: [45, 12],
      });
      L.marker(parkCenter, { icon: parkIcon, interactive: false }).addTo(infraLayerGroupRef.current);
    }

    // 9. Road Annotation
    if (infra.mainRoad1) {
      const roadMid = getPolygonCentroid(infra.mainRoad1 as [number, number][]);
      const roadIcon = L.divIcon({
        className: 'infra-road-badge',
        html: `<div style="color: #f1f5f9; font-size: 9.5px; font-weight: 900; letter-spacing: 1.5px; transform: rotate(-38deg); text-shadow: 0 2px 4px rgba(0,0,0,0.9); white-space: nowrap;">12 METER ROAD ↑</div>`,
        iconSize: [120, 20],
        iconAnchor: [60, 10],
      });
      L.marker(roadMid, { icon: roadIcon, interactive: false }).addTo(infraLayerGroupRef.current);
    }

  }, [isDefaultSite]);

  // BUILD PLOT POLYGONS & LABELS ONCE (Only when `plots` or `language` changes)
  // NEVER rebuild polygons on zoom or pan!
  useEffect(() => {
    if (!mapRef.current || !plotLayerGroupRef.current || !labelLayerGroupRef.current) return;

    plotLayerGroupRef.current.clearLayers();
    labelLayerGroupRef.current.clearLayers();
    plotPolygonsMapRef.current.clear();

    plots.forEach((plot) => {
      const isSelected = selectedPlot?.id === plot.id;
      const initialStyle = getPlotStyle(plot, isSelected, showStatus);

      // Plot Polygon
      const polygon = L.polygon(plot.polygon, {
        ...initialStyle,
      });

      // Hover Tooltip
      const statusLabel = plot.status === 'available'
        ? (language === 'mr' ? 'उपलब्ध' : 'Available')
        : (plot.status === 'booked'
            ? (language === 'mr' ? 'बुक केलेले' : 'Booked')
            : (language === 'mr' ? 'विक्री झालेले' : 'Sold'));

      const tooltipContent = `
        <div style="font-family: inherit; font-size: 12px; line-height: 1.4;">
          <div style="font-weight: 700; color: #fff; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
            <span>${language === 'mr' ? 'प्लॉट क्र.' : 'Plot #'} ${plot.plotNumber}</span>
            <span style="font-size: 10px; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; background: ${initialStyle.color}25; color: ${initialStyle.color}; border: 1px solid ${initialStyle.color}50;">
              ${statusLabel}
            </span>
          </div>
          <div style="color: #94a3b8; font-size: 11px; margin-top: 2px;">
            ${plot.zone} • ${plot.facing}
          </div>
          <div style="color: #cbd5e1; font-weight: 600; margin-top: 4px;">
            ${plot.areaSqFt} sq.ft (${plot.areaSqYds} sq.yds)
          </div>
          <div style="color: #38bdf8; font-weight: 700; font-size: 13px; margin-top: 2px;">
            ${formatCurrency(plot.totalPrice, language)}
          </div>
        </div>
      `;

      polygon.bindTooltip(tooltipContent, {
        className: 'plot-tooltip-custom',
        sticky: false,
        direction: 'top',
        offset: [0, -10],
      });

      polygon.on('click', () => {
        polygon.closeTooltip();
        onSelectPlotRef.current(plot);
      });

      polygon.on('mouseover', () => {
        polygon.setStyle({
          fillOpacity: 0.98,
          weight: 2.5,
          color: '#38bdf8',
        });
      });

      polygon.on('mouseout', () => {
        polygon.closeTooltip();
        const curSelected = selectedPlot?.id === plot.id;
        polygon.setStyle(getPlotStyle(plot, curSelected, showStatus));
      });

      polygon.addTo(plotLayerGroupRef.current!);
      plotPolygonsMapRef.current.set(plot.id, polygon);

      // Plot Number Label (Matches Screenshot 2 bold numbers)
      const center = getPolygonCentroid(plot.polygon);
      const labelIcon = L.divIcon({
        className: 'plot-center-label',
        html: `<div style="color: #1e293b; font-weight: 900; font-size: 11px; text-shadow: 0 0 4px #ffffff, 0 0 2px #ffffff; text-align: center; pointer-events: none; transform: rotate(-38deg);">${parseInt(plot.plotNumber, 10)}</div>`,
        iconSize: [28, 16],
        iconAnchor: [14, 8],
      });
      L.marker(center, { icon: labelIcon, interactive: false }).addTo(labelLayerGroupRef.current!);
    });

  }, [plots, language]);

  // FAST STYLE UPDATE (0ms, no DOM destruction): Triggered on `selectedPlot` or `showStatus` change
  useEffect(() => {
    plotPolygonsMapRef.current.forEach((polygon, plotId) => {
      const plot = plots.find((p) => p.id === plotId);
      if (plot) {
        const isSelected = selectedPlot?.id === plot.id;
        polygon.setStyle(getPlotStyle(plot, isSelected, showStatus));
      }
    });
  }, [selectedPlot, showStatus, plots]);

  // TOGGLE LABELS ON ZOOM: Instant show/hide of label layer group without rebuilding
  useEffect(() => {
    if (!mapRef.current || !labelLayerGroupRef.current) return;
    if (currentZoom < 16.5) {
      if (mapRef.current.hasLayer(labelLayerGroupRef.current)) {
        mapRef.current.removeLayer(labelLayerGroupRef.current);
      }
    } else {
      if (!mapRef.current.hasLayer(labelLayerGroupRef.current)) {
        mapRef.current.addLayer(labelLayerGroupRef.current);
      }
    }
  }, [currentZoom]);

  // RENDER DIMENSIONS: Only updates debounced when zoomed in and ONLY for visible plots
  useEffect(() => {
    if (!mapRef.current || !dimensionLayerGroupRef.current) return;

    dimensionLayerGroupRef.current.clearLayers();

    // 1. ALWAYS render Selected Plot Dimensions when a plot is clicked/selected
    if (selectedPlot) {
      const selectedEdges = getPolygonEdges(selectedPlot.polygon, selectedPlot.dimensions);
      selectedEdges.forEach((edge) => {
        const converted = convertLength(edge.lengthFeet, linearUnit, language);
        const sideName = language === 'mr'
          ? (edge.side === 'North' ? 'उत्तर' : (edge.side === 'South' ? 'दक्षिण' : (edge.side === 'East' ? 'पूर्व' : 'पश्चिम')))
          : edge.side;

        const dimIcon = L.divIcon({
          className: 'edge-dim-wrapper-selected',
          html: `<div class="selected-edge-dimension-badge">${sideName}: ${converted.full}</div>`,
          iconSize: [95, 20],
          iconAnchor: [47, 10],
        });
        L.marker(edge.midpoint, { icon: dimIcon, interactive: false, zIndexOffset: 1000 }).addTo(dimensionLayerGroupRef.current!);
      });
    }

    // 2. ONLY allow displaying all plot dimensions if:
    // - User has enabled dimensions (`showDimensions`)
    // - Zoomed in to where only 10 to 14 plots (or fewer) are visible in the viewport (`visiblePlotCount <= 14`)
    // - Zoom level is close (`currentZoom >= 19.0`)
    const allowAllDimensions = showDimensions && visiblePlotCount <= 14 && currentZoom >= 19.0;

    if (allowAllDimensions) {
      const bounds = mapRef.current.getBounds();
      // CRITICAL: Filter ONLY plots currently inside the viewport to avoid processing 109 plots
      const visiblePlots = plots.filter((plot) => {
        const center = getPolygonCentroid(plot.polygon);
        return bounds.contains(L.latLng(center[0], center[1]));
      });

      const renderedEdges = new Set<string>();

      visiblePlots.forEach((plot) => {
        if (plot.id === selectedPlot?.id) return; // Skip selected plot since it's already rendered above
        const edges = getPolygonEdges(plot.polygon, plot.dimensions);
        edges.forEach((edge) => {
          const key = `${edge.midpoint[0].toFixed(5)},${edge.midpoint[1].toFixed(5)}`;
          if (!renderedEdges.has(key)) {
            renderedEdges.add(key);
            const converted = convertLength(edge.lengthFeet, linearUnit, language);
            const dimIcon = L.divIcon({
              className: 'edge-dim-wrapper',
              html: `<div class="edge-dimension-badge">${converted.full}</div>`,
              iconSize: [42, 14],
              iconAnchor: [21, 7],
            });
            L.marker(edge.midpoint, { icon: dimIcon, interactive: false }).addTo(dimensionLayerGroupRef.current!);
          }
        });
      });
    }

  }, [showDimensions, currentZoom, visiblePlotCount, selectedPlot, linearUnit, language, plots]);

  // Fly-to animation
  useEffect(() => {
    if (!mapRef.current || !selectedPlot) return;
    const center = getPolygonCentroid(selectedPlot.polygon);
    mapRef.current.flyTo(center, 19.2, {
      duration: 1.0,
      easeLinearity: 0.25,
    });
  }, [selectedPlot]);

  return (
    <div
      className={`w-full h-full relative overflow-hidden ${
        is3dPerspective ? 'map-perspective-3d' : 'map-perspective-2d'
      }`}
    >
      {/* Subtle CAD Drafting Grid Overlay (Matches Screenshot 2) */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px]"></div>
      
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}


