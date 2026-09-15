import { Plot } from '@/types/plot';

// Center anchor point for Nakshatra Layout Masterplan
export const MASTERPLAN_CENTER: [number, number] = [17.4455, 78.3780];
export const DEFAULT_ZOOM = 18.5;

// Generate 109 realistic plots with precise layout coordinates, dimensions, facing, pricing, status & blocks
function generateNakshatraPlots(): Plot[] {
  const plots: Plot[] = [];
  const baseLat = 17.4440;
  const baseLng = 78.3760;

  // Layout grid configuration
  const numRows = 10;
  const plotsPerRow = 11;
  const plotWidthLng = 0.00028;  // ~30-40 ft width
  const plotHeightLat = 0.00045; // ~50-60 ft depth
  const roadGapLat = 0.00020;    // 40-60 ft wide roads between blocks
  const roadGapLng = 0.00025;

  let plotCounter = 1;

  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < plotsPerRow; c++) {
      if (plotCounter > 109) break;

      const plotNum = plotCounter.toString().padStart(3, '0');
      
      // Determine Zone Block
      let zone: Plot['zone'] = 'Block A';
      if (r >= 3 && r < 6) zone = 'Block B';
      else if (r >= 6 && r < 8) zone = 'Block C';
      else if (r >= 8) zone = 'Premium Enclave';

      // Determine Category
      let category: Plot['category'] = 'Standard Residential';
      if (zone === 'Premium Enclave') category = 'Villa Plot';
      else if (c === 0 || c === plotsPerRow - 1) category = 'Commercial Corner';
      else if (r === 4) category = 'Park Facing';

      // Status distribution: ~45% Available, ~25% Booked, ~30% Sold
      const statusRandom = (r * 13 + c * 7 + plotCounter * 3) % 100;
      let status: Plot['status'] = 'available';
      if (statusRandom < 30) status = 'sold';
      else if (statusRandom < 55) status = 'booked';
      else status = 'available';

      // Facing direction based on row/column position
      const isCornerPlot = (c === 0 || c === plotsPerRow - 1 || r === 0 || r === numRows - 1);
      let facing: Plot['facing'] = (r % 2 === 0) ? 'East' : 'West';
      if (c % 3 === 0) facing = 'North';
      if (c % 4 === 0) facing = 'South';
      if (isCornerPlot && (r + c) % 2 === 0) facing = 'North-East';

      // Dimensions math (randomized realistic dimensions e.g. 30x50, 40x60, 50x80)
      const baseW = isCornerPlot ? 45 : (plotCounter % 2 === 0 ? 30 : 40);
      const baseH = isCornerPlot ? 65 : (plotCounter % 3 === 0 ? 50 : 60);

      const north = baseW;
      const south = baseW;
      const east = baseH;
      const west = baseH;

      const areaSqFt = baseW * baseH;
      const areaSqYds = Math.round(areaSqFt / 9);
      const areaSqMeters = Math.round(areaSqFt / 10.764);
      const guntas = Number((areaSqFt / 1089).toFixed(2));

      // Price calculation
      const basePricePerSqFt = zone === 'Premium Enclave' ? 6500 : (category === 'Commercial Corner' ? 7200 : 5500);
      const cornerPremium = isCornerPlot ? 500 : 0;
      const pricePerSqFt = basePricePerSqFt + cornerPremium;
      const totalPrice = areaSqFt * pricePerSqFt;

      // Coordinate offset math for clean grid with roads & parks
      const blockOffsetLat = Math.floor(r / 2) * roadGapLat;
      const blockOffsetLng = Math.floor(c / 4) * roadGapLng;

      const latStart = baseLat + r * plotHeightLat + blockOffsetLat;
      const lngStart = baseLng + c * plotWidthLng + blockOffsetLng;

      // Polygon points: Top-Left, Top-Right, Bottom-Right, Bottom-Left
      const polygon: [number, number][] = [
        [latStart + plotHeightLat, lngStart],
        [latStart + plotHeightLat, lngStart + plotWidthLng],
        [latStart, lngStart + plotWidthLng],
        [latStart, lngStart],
      ];

      plots.push({
        id: `PLOT-${plotNum}`,
        plotNumber: plotNum,
        zone,
        category,
        facing,
        status,
        areaSqFt,
        areaSqYds,
        areaSqMeters,
        guntas,
        pricePerSqFt,
        totalPrice,
        dimensions: { north, south, east, west },
        polygon,
        isCornerPlot,
        vastuCompliant: facing === 'East' || facing === 'North' || facing === 'North-East',
        roadWidthFt: isCornerPlot ? 60 : 40,
        description: `Premium ${category} located in ${zone} with ${facing} orientation and ${isCornerPlot ? '60ft dual-side road access' : '40ft wide blacktop road access'}.`,
      });

      plotCounter++;
    }
  }

  return plots;
}

export const NAKSHATRA_PLOTS: Plot[] = generateNakshatraPlots();
