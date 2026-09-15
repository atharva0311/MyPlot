'use client';

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Plot } from '@/types/plot';
import { MASTERPLAN_CENTER, DEFAULT_ZOOM } from '@/data/nakshatraPlots';
import { getPolygonCentroid, getPolygonEdges } from '@/utils/mapHelpers';
import { formatCurrency } from '@/utils/formatters';

interface LeafletMapContainerProps {
  plots: Plot[];
  selectedPlot: Plot | null;
  onSelectPlot: (plot: Plot | null) => void;
  mapMode: 'satellite' | 'vector';
  is3dPerspective: boolean;
  showDimensions: boolean;
}

export default function LeafletMapContainer({
  plots,
  selectedPlot,
  onSelectPlot,
  mapMode,
  is3dPerspective,
  showDimensions,
}: LeafletMapContainerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const plotLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const labelLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const dimensionLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const [currentZoom, setCurrentZoom] = useState<number>(DEFAULT_ZOOM);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: MASTERPLAN_CENTER,
      zoom: DEFAULT_ZOOM,
      minZoom: 15,
      maxZoom: 21,
      zoomControl: false,
      attributionControl: false,
    });

    mapRef.current = map;

    // Track zoom level changes
    const handleZoomEnd = () => {
      if (mapRef.current) {
        setCurrentZoom(mapRef.current.getZoom());
      }
    };
    map.on('zoomend', handleZoomEnd);

    // Layer Groups
    const plotGroup = L.layerGroup().addTo(map);
    const labelGroup = L.layerGroup().addTo(map);
    const dimensionGroup = L.layerGroup().addTo(map);

    plotLayerGroupRef.current = plotGroup;
    labelLayerGroupRef.current = labelGroup;
    dimensionLayerGroupRef.current = dimensionGroup;

    return () => {
      map.off('zoomend', handleZoomEnd);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update Tile Layer based on mapMode
  useEffect(() => {
    if (!mapRef.current) return;

    if (tileLayerRef.current) {
      mapRef.current.removeLayer(tileLayerRef.current);
    }

    // Clean basemaps requiring NO API key
    const tileUrl =
      mapMode === 'satellite'
        ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        : 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}';

    const tileLayer = L.tileLayer(tileUrl, {
      maxZoom: 21,
      subdomains: 'abcd',
    }).addTo(mapRef.current);

    tileLayerRef.current = tileLayer;
  }, [mapMode]);

  // Render Plot Polygons, Labels & Edge Dimensions
  useEffect(() => {
    if (!mapRef.current || !plotLayerGroupRef.current || !labelLayerGroupRef.current || !dimensionLayerGroupRef.current) {
      return;
    }

    plotLayerGroupRef.current.clearLayers();
    labelLayerGroupRef.current.clearLayers();
    dimensionLayerGroupRef.current.clearLayers();

    // Track rendered edge midpoints to prevent duplicate overlapping labels on shared boundaries
    const renderedEdges = new Set<string>();

    plots.forEach((plot) => {
      const isSelected = selectedPlot?.id === plot.id;
      
      // Plot Colors
      let color = '#10b981'; // available emerald
      let fillColor = '#10b981';
      let fillOpacity = 0.35;

      if (plot.status === 'booked') {
        color = '#f59e0b';
        fillColor = '#f59e0b';
        fillOpacity = 0.35;
      } else if (plot.status === 'sold') {
        color = '#ef4444';
        fillColor = '#ef4444';
        fillOpacity = 0.20;
      }

      if (isSelected) {
        color = '#38bdf8';
        fillColor = '#38bdf8';
        fillOpacity = 0.60;
      }

      // Polygon Leaflet Object
      const polygon = L.polygon(plot.polygon, {
        color: isSelected ? '#ffffff' : color,
        weight: isSelected ? 3 : 1.5,
        fillColor,
        fillOpacity,
        dashArray: plot.status === 'booked' ? '4, 4' : undefined,
      });

      // Hover Tooltip
      const tooltipContent = `
        <div style="font-family: inherit; font-size: 12px; line-height: 1.4;">
          <div style="font-weight: 700; color: #fff; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
            <span>Plot #${plot.plotNumber}</span>
            <span style="font-size: 10px; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; background: ${color}25; color: ${color}; border: 1px solid ${color}50;">
              ${plot.status}
            </span>
          </div>
          <div style="color: #94a3b8; font-size: 11px; margin-top: 2px;">
            ${plot.zone} • ${plot.facing} Facing
          </div>
          <div style="color: #cbd5e1; font-weight: 600; margin-top: 4px;">
            ${plot.areaSqFt} sq.ft (${plot.areaSqYds} sq.yds)
          </div>
          <div style="color: #38bdf8; font-weight: 700; font-size: 13px; margin-top: 2px;">
            ${formatCurrency(plot.totalPrice)}
          </div>
        </div>
      `;

      polygon.bindTooltip(tooltipContent, {
        className: 'plot-tooltip-custom',
        sticky: true,
        direction: 'top',
        offset: [0, -10],
      });

      // Click event
      polygon.on('click', () => {
        onSelectPlot(plot);
      });

      // Hover effects
      polygon.on('mouseover', () => {
        if (!isSelected) {
          polygon.setStyle({
            fillOpacity: 0.65,
            weight: 2.5,
            color: '#38bdf8',
          });
        }
      });

      polygon.on('mouseout', () => {
        if (!isSelected) {
          polygon.setStyle({
            fillOpacity,
            weight: 1.5,
            color,
          });
        }
      });

      polygon.addTo(plotLayerGroupRef.current!);

      // Centroid for Plot Number label (only display when zoomed in >= 16.5)
      if (currentZoom >= 16.5) {
        const center = getPolygonCentroid(plot.polygon);
        const labelIcon = L.divIcon({
          className: 'plot-center-label',
          html: `<div style="color: ${isSelected ? '#ffffff' : '#f8fafc'}; font-weight: 800; font-size: ${isSelected ? '12px' : '10px'}; text-shadow: 0 1px 4px rgba(0,0,0,0.9); text-align: center; pointer-events: none;">${plot.plotNumber}</div>`,
          iconSize: [30, 16],
          iconAnchor: [15, 8],
        });

        L.marker(center, { icon: labelIcon, interactive: false }).addTo(labelLayerGroupRef.current!);
      }

      // Render Edge Dimensions if globally toggled (and zoomed in >= 18.5) and not selected (selected rendered separately)
      if (showDimensions && currentZoom >= 18.5 && !isSelected) {
        const edges = getPolygonEdges(plot.polygon, plot.dimensions);
        edges.forEach((edge) => {
          const key = `${edge.midpoint[0].toFixed(5)},${edge.midpoint[1].toFixed(5)}`;
          if (!renderedEdges.has(key)) {
            renderedEdges.add(key);
            const dimIcon = L.divIcon({
              className: 'edge-dim-wrapper',
              html: `<div class="edge-dimension-badge">${edge.lengthFeet}ft</div>`,
              iconSize: [36, 14],
              iconAnchor: [18, 7],
            });
            L.marker(edge.midpoint, { icon: dimIcon, interactive: false }).addTo(dimensionLayerGroupRef.current!);
          }
        });
      }
    });

    // Render Selected Plot Dimensions with high prominence & direction tags
    if (selectedPlot) {
      const selectedEdges = getPolygonEdges(selectedPlot.polygon, selectedPlot.dimensions);
      selectedEdges.forEach((edge) => {
        const dimIcon = L.divIcon({
          className: 'edge-dim-wrapper-selected',
          html: `<div class="selected-edge-dimension-badge">${edge.side}: ${edge.lengthFeet}ft</div>`,
          iconSize: [80, 20],
          iconAnchor: [40, 10],
        });
        L.marker(edge.midpoint, { icon: dimIcon, interactive: false, zIndexOffset: 1000 }).addTo(dimensionLayerGroupRef.current!);
      });
    }

  }, [plots, selectedPlot, onSelectPlot, showDimensions, currentZoom]);

  // Fly-to selected plot camera animation
  useEffect(() => {
    if (!mapRef.current || !selectedPlot) return;
    const center = getPolygonCentroid(selectedPlot.polygon);
    mapRef.current.flyTo(center, 19, {
      duration: 1.2,
      easeLinearity: 0.25,
    });
  }, [selectedPlot]);

  return (
    <div
      className={`w-full h-full relative overflow-hidden ${
        is3dPerspective ? 'map-perspective-3d' : 'map-perspective-2d'
      }`}
    >
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}

