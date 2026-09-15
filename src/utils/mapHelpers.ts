/**
 * Helper utilities for plot polygon math, edge labels, bounding boxes, and camera positioning
 */

export interface Point {
  lat: number;
  lng: number;
}

// Calculate centroid (center point) of a polygon
export function getPolygonCentroid(coordinates: [number, number][]): [number, number] {
  if (!coordinates || coordinates.length === 0) return [0, 0];
  
  let totalLat = 0;
  let totalLng = 0;

  coordinates.forEach(([lat, lng]) => {
    totalLat += lat;
    totalLng += lng;
  });

  return [totalLat / coordinates.length, totalLng / coordinates.length];
}

// Calculate bounding box [minLat, minLng, maxLat, maxLng]
export function getPolygonBounds(coordinates: [number, number][]): {
  minLat: number;
  minLng: number;
  maxLat: number;
  maxLng: number;
} {
  let minLat = Infinity;
  let minLng = Infinity;
  let maxLat = -Infinity;
  let maxLng = -Infinity;

  coordinates.forEach(([lat, lng]) => {
    if (lat < minLat) minLat = lat;
    if (lng < minLng) minLng = lng;
    if (lat > maxLat) maxLat = lat;
    if (lng > maxLng) maxLng = lng;
  });

  return { minLat, minLng, maxLat, maxLng };
}

// Edge label info for rendering dimensions along polygon edges
export interface EdgeInfo {
  start: [number, number];
  end: [number, number];
  midpoint: [number, number];
  lengthFeet: number;
  label: string;
  side: 'North' | 'East' | 'South' | 'West';
}

export function getPolygonEdges(
  coordinates: [number, number][],
  dimensions: { north: number; south: number; east: number; west: number }
): EdgeInfo[] {
  if (coordinates.length < 4) return [];

  const sides: ('North' | 'East' | 'South' | 'West')[] = ['North', 'East', 'South', 'West'];
  const sideLengths = [dimensions.north, dimensions.east, dimensions.south, dimensions.west];

  const edges: EdgeInfo[] = [];

  for (let i = 0; i < 4; i++) {
    const start = coordinates[i];
    const end = coordinates[(i + 1) % coordinates.length];
    const midpoint: [number, number] = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2
    ];

    edges.push({
      start,
      end,
      midpoint,
      lengthFeet: sideLengths[i],
      label: `${sideLengths[i]} ft`,
      side: sides[i],
    });
  }

  return edges;
}
