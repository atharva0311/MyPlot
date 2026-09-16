import { Plot, PlotStatus, FacingDirection, PlotCategory } from '@/types/plot';
import { calculateHaversineDistance } from './landmarkEngine';

/**
 * Computes centroid of a polygon [lat, lng][]
 */
export function computePolygonCentroid(coords: [number, number][]): [number, number] {
  if (!coords || coords.length === 0) return [0, 0];
  let sumLat = 0;
  let sumLng = 0;
  for (const [lat, lng] of coords) {
    sumLat += lat;
    sumLng += lng;
  }
  return [sumLat / coords.length, sumLng / coords.length];
}

/**
 * Computes centroid across an entire array of plots
 */
export function computePlotsCentroid(plots: Plot[]): [number, number] {
  if (!plots || plots.length === 0) return [23.2518, 69.6338];
  let totalLat = 0;
  let totalLng = 0;
  let pointCount = 0;

  for (const plot of plots) {
    for (const [lat, lng] of plot.polygon) {
      totalLat += lat;
      totalLng += lng;
      pointCount++;
    }
  }

  return pointCount > 0 ? [totalLat / pointCount, totalLng / pointCount] : [23.2518, 69.6338];
}

/**
 * Computes bounding box [[minLat, minLng], [maxLat, maxLng]]
 */
export function computePlotsBounds(plots: Plot[]): [[number, number], [number, number]] {
  if (!plots || plots.length === 0) {
    return [[23.24, 69.62], [23.26, 69.64]];
  }

  let minLat = Infinity;
  let maxLat = -Infinity;
  let minLng = Infinity;
  let maxLng = -Infinity;

  for (const plot of plots) {
    for (const [lat, lng] of plot.polygon) {
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
    }
  }

  return [[minLat, minLng], [maxLat, maxLng]];
}

/**
 * Shifts / relocates an array of plots to a new target center coordinate [targetLat, targetLng]
 */
export function repositionPlots(plots: Plot[], targetCenter: [number, number]): Plot[] {
  if (!plots || plots.length === 0) return [];
  const currentCenter = computePlotsCentroid(plots);
  const dLat = targetCenter[0] - currentCenter[0];
  const dLng = targetCenter[1] - currentCenter[1];

  return plots.map((plot) => ({
    ...plot,
    polygon: plot.polygon.map(([lat, lng]) => [lat + dLat, lng + dLng] as [number, number]),
  }));
}

/**
 * Computes boundary edge lengths in feet from polygon vertices
 */
function computePolygonDimensions(polygon: [number, number][]): {
  north: number;
  south: number;
  east: number;
  west: number;
} {
  if (polygon.length < 4) {
    return { north: 40, south: 40, east: 30, west: 30 };
  }

  // Calculate side lengths in meters then convert to feet
  // 1 meter = 3.28084 feet
  const mToFt = 3.28084;
  const d01 = Math.round(calculateHaversineDistance(polygon[0][0], polygon[0][1], polygon[1][0], polygon[1][1]) * mToFt);
  const d12 = Math.round(calculateHaversineDistance(polygon[1][0], polygon[1][1], polygon[2][0], polygon[2][1]) * mToFt);
  const d23 = Math.round(calculateHaversineDistance(polygon[2][0], polygon[2][1], polygon[3][0], polygon[3][1]) * mToFt);
  const d30 = Math.round(calculateHaversineDistance(polygon[3][0], polygon[3][1], polygon[0][0], polygon[0][1]) * mToFt);

  return {
    north: Math.max(d01, 15),
    east: Math.max(d12, 15),
    south: Math.max(d23, 15),
    west: Math.max(d30, 15),
  };
}

/**
 * Parse GeoJSON content (FeatureCollection / Geometry) into standard Plot[] array
 */
export function parseGeoJSONToPlots(geoJsonText: string, basePriceSqFt: number = 6500): Plot[] {
  let data: any;
  try {
    data = JSON.parse(geoJsonText);
  } catch (err: any) {
    throw new Error(`Invalid JSON format: ${err.message}`);
  }

  let features: any[] = [];
  if (data.type === 'FeatureCollection' && Array.isArray(data.features)) {
    features = data.features;
  } else if (data.type === 'Feature') {
    features = [data];
  } else if (Array.isArray(data)) {
    features = data;
  } else if (data.coordinates && (data.type === 'Polygon' || data.type === 'MultiPolygon')) {
    features = [{ type: 'Feature', geometry: data, properties: {} }];
  } else {
    throw new Error('Unsupported GeoJSON format. Must be a FeatureCollection or Polygon features.');
  }

  const parsedPlots: Plot[] = [];
  let plotCounter = 1;

  const facingOptions: FacingDirection[] = ['East', 'West', 'North', 'South', 'North-East', 'North-West'];

  for (const feat of features) {
    const geom = feat.geometry || feat;
    if (!geom || !geom.coordinates) continue;

    let ringCoords: number[][] = [];
    if (geom.type === 'Polygon' && Array.isArray(geom.coordinates[0])) {
      ringCoords = geom.coordinates[0];
    } else if (geom.type === 'MultiPolygon' && Array.isArray(geom.coordinates[0]?.[0])) {
      ringCoords = geom.coordinates[0][0];
    }

    if (ringCoords.length < 3) continue;

    // GeoJSON is [longitude, latitude]. Convert to Leaflet [latitude, longitude].
    const latLngPolygon: [number, number][] = ringCoords.map((pt) => {
      // Check if coordinates were already in [lat, lng] or GeoJSON standard [lng, lat]
      // Latitude in India/world typically -90 to +90, Longitude -180 to +180
      const first = Number(pt[0]);
      const second = Number(pt[1]);
      if (Math.abs(first) > 90 && Math.abs(second) <= 90) {
        // First is longitude, second is latitude (standard GeoJSON)
        return [second, first] as [number, number];
      }
      return [first, second] as [number, number];
    });

    const props = feat.properties || {};
    const plotNumber = String(props.plotNumber || props.PLOT_NO || props.PlotNo || props.name || props.id || plotCounter).padStart(3, '0');
    plotCounter++;

    const dims = computePolygonDimensions(latLngPolygon);
    const avgWidth = (dims.east + dims.west) / 2;
    const avgLength = (dims.north + dims.south) / 2;
    const areaSqFt = Math.round(props.areaSqFt || props.area || avgWidth * avgLength);
    const areaSqYds = Math.round(areaSqFt / 9);
    const areaSqMeters = Number((areaSqFt / 10.7639).toFixed(1));
    const guntas = Number((areaSqFt / 1089).toFixed(2));

    let status: PlotStatus = 'available';
    if (props.status === 'booked' || props.status === 'sold') {
      status = props.status;
    } else {
      // Distribute realistically if not given
      const hash = plotNumber.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      if (hash % 5 === 0) status = 'sold';
      else if (hash % 3 === 0) status = 'booked';
      else status = 'available';
    }

    const facing: FacingDirection = props.facing || facingOptions[plotCounter % facingOptions.length];
    const category: PlotCategory = props.category || (areaSqFt > 2000 ? 'Villa Plot' : 'Standard Residential');
    const isCorner = Boolean(props.isCornerPlot || plotCounter % 7 === 0);
    const vastu = props.vastuCompliant !== undefined ? Boolean(props.vastuCompliant) : true;
    const pricePerSqFt = Number(props.pricePerSqFt || basePriceSqFt);
    const totalPrice = areaSqFt * pricePerSqFt;

    parsedPlots.push({
      id: `PLOT-${plotNumber}`,
      plotNumber,
      zone: (props.zone || (plotCounter < 30 ? 'Block A' : plotCounter < 70 ? 'Block B' : 'Premium Enclave')) as any,
      category,
      facing,
      status,
      areaSqFt,
      areaSqYds,
      areaSqMeters,
      guntas,
      pricePerSqFt,
      totalPrice,
      dimensions: dims,
      polygon: latLngPolygon,
      isCornerPlot: isCorner,
      vastuCompliant: vastu,
      roadWidthFt: Number(props.roadWidthFt || 40),
      description: props.description || `Plot #${plotNumber} in masterplan layout with prime road access.`,
    });
  }

  if (parsedPlots.length === 0) {
    throw new Error('No valid polygon geometries found in the provided GeoJSON file.');
  }

  return parsedPlots;
}
