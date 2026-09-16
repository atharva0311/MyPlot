'use client';

import React, { useState } from 'react';
import { Plot, PlotStatus } from '@/types/plot';
import { LinearUnit } from '@/utils/formatters';
import { MASTERPLAN_CENTER } from '@/data/nakshatraPlots';
import LeafletMapContainer from './LeafletMapContainer';
import MapControls from './MapControls';
import StatusLegend from './StatusLegend';
import GalleryModal from './GalleryModal';

interface MapViewerProps {
  plots: Plot[];
  selectedPlot: Plot | null;
  onSelectPlot: (plot: Plot | null) => void;
  activeStatusFilter: PlotStatus[];
  onToggleStatusFilter: (status: PlotStatus) => void;
  availableCount: number;
  bookedCount: number;
  soldCount: number;
  linearUnit?: LinearUnit;
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
  linearUnit = 'ft',
}: MapViewerProps) {
  const [mapMode, setMapMode] = useState<'satellite' | 'vector'>('satellite');
  const [is3dPerspective, setIs3dPerspective] = useState(false);
  const [showDimensions, setShowDimensions] = useState(false);
  const [showStatus, setShowStatus] = useState(true);
  const [siteFocus, setSiteFocus] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleResetView = () => {
    onSelectPlot(null);
  };

  const handleDownloadBrochure = () => {
    const content = `NAKSHATRA LUXURY RESIDENTIAL ENCLAVE\nMasterplan Architecture Brochure\nRERA: P02400007891\nLocation: Gachibowli ORR, Hyderabad\nTotal Plots: 109 Plotted Units (24.5 Acres)\nAmenities: 15,000 sq.ft Clubhouse, Swimming Pool, Box Cricket Turf, Oxygen Park, Underground Utilities\nContact Sales Office for plot bookings.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nakshatra_Enclave_Brochure.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleNavigateCoordinates = () => {
    const dest = selectedPlot
      ? `${selectedPlot.polygon[0][0]},${selectedPlot.polygon[0][1]}`
      : `${MASTERPLAN_CENTER[0]},${MASTERPLAN_CENTER[1]}`;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${dest}`, '_blank');
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
        showStatus={showStatus}
        siteFocus={siteFocus}
        linearUnit={linearUnit}
      />

      {/* Map Controls (Top-Right / Bottom-Right Floating) matching Screenshot 2 */}
      <MapControls
        mapMode={mapMode}
        onToggleMapMode={() => setMapMode((prev) => (prev === 'satellite' ? 'vector' : 'satellite'))}
        is3dPerspective={is3dPerspective}
        onToggle3dPerspective={() => setIs3dPerspective((prev) => !prev)}
        showDimensions={showDimensions}
        onToggleDimensions={() => setShowDimensions((prev) => !prev)}
        showStatus={showStatus}
        onToggleStatus={() => setShowStatus((prev) => !prev)}
        siteFocus={siteFocus}
        onToggleSiteFocus={() => setSiteFocus((prev) => !prev)}
        onOpenGallery={() => setIsGalleryOpen(true)}
        onDownloadBrochure={handleDownloadBrochure}
        onNavigateCoordinates={handleNavigateCoordinates}
        onResetView={handleResetView}
      />

      {/* Bottom Left Status Legend (Visible when showStatus is true) */}
      {showStatus && (
        <StatusLegend
          activeStatusFilter={activeStatusFilter}
          onToggleStatusFilter={onToggleStatusFilter}
          availableCount={availableCount}
          bookedCount={bookedCount}
          soldCount={soldCount}
        />
      )}

      {/* Fullscreen Photo Gallery & Blueprints Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
}

