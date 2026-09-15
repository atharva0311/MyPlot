'use client';

import React, { useState } from 'react';
import { Plot, PlotStatus } from '@/types/plot';
import LeafletMapContainer from './LeafletMapContainer';
import MapControls from './MapControls';
import StatusLegend from './StatusLegend';

interface MapViewerProps {
  plots: Plot[];
  selectedPlot: Plot | null;
  onSelectPlot: (plot: Plot | null) => void;
  activeStatusFilter: PlotStatus[];
  onToggleStatusFilter: (status: PlotStatus) => void;
  availableCount: number;
  bookedCount: number;
  soldCount: number;
}

export default function MapViewer({
  plots,
  selectedPlot,
  onSelectPlot,
  activeStatusFilter,
  onToggleStatusFilter,
  availableCount,
  bookedCount,
  soldCount,
}: MapViewerProps) {
  const [mapMode, setMapMode] = useState<'satellite' | 'vector'>('satellite');
  const [is3dPerspective, setIs3dPerspective] = useState(false);
  const [showDimensions, setShowDimensions] = useState(false);

  const handleResetView = () => {
    // Reset selected plot to center view
    onSelectPlot(null);
  };

  return (
    <div className="relative w-full h-full bg-spacer-bg overflow-hidden">
      {/* Map Engine Container */}
      <LeafletMapContainer
        plots={plots}
        selectedPlot={selectedPlot}
        onSelectPlot={onSelectPlot}
        mapMode={mapMode}
        is3dPerspective={is3dPerspective}
        showDimensions={showDimensions}
      />

      {/* Map Controls (Top-Right / Bottom-Right Floating) */}
      <MapControls
        mapMode={mapMode}
        onToggleMapMode={() => setMapMode((prev) => (prev === 'satellite' ? 'vector' : 'satellite'))}
        is3dPerspective={is3dPerspective}
        onToggle3dPerspective={() => setIs3dPerspective((prev) => !prev)}
        showDimensions={showDimensions}
        onToggleDimensions={() => setShowDimensions((prev) => !prev)}
        onResetView={handleResetView}
      />

      {/* Bottom Left Status Legend */}
      <StatusLegend
        activeStatusFilter={activeStatusFilter}
        onToggleStatusFilter={onToggleStatusFilter}
        availableCount={availableCount}
        bookedCount={bookedCount}
        soldCount={soldCount}
      />
    </div>
  );
}
