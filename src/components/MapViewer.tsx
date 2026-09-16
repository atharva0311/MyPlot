'use client';

import React, { useState } from 'react';
import { Plot, PlotStatus, Landmark } from '@/types/plot';
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
  onOpenSearch?: () => void;
  onOpenInfo?: () => void;
  onOpenCADManager?: () => void;
  center?: [number, number];
  landmarks?: Landmark[];
  projectName?: string;
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
  onOpenSearch,
  onOpenInfo,
  onOpenCADManager,
  center,
  landmarks,
  projectName,
}: MapViewerProps) {
  const [mapMode, setMapMode] = useState<'satellite' | 'vector'>('satellite');
  const [is3dPerspective, setIs3dPerspective] = useState(false);
  const [showDimensions, setShowDimensions] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [siteFocus, setSiteFocus] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [resetViewTrigger, setResetViewTrigger] = useState(0);

  const handleResetView = () => {
    onSelectPlot(null);
    setResetViewTrigger((prev) => prev + 1);
  };

  const handleDownloadBrochure = () => {
    const content = `NAKSHATRA LUXURY RESIDENTIAL ENCLAVE\nMasterplan Architecture Brochure\nMahaRERA: P53000034120\nLocation: Kalamba Outskirts, Kolhapur, Maharashtra\nTotal Plots: 109 Plotted Units (24.5 Acres)\nAmenities: 15,000 sq.ft Clubhouse, Swimming Pool, Box Cricket Turf, Oxygen Park, Underground Utilities\nContact Sales Office for plot bookings.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nakshatra_Enclave_Brochure.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleNavigateCoordinates = () => {
    const activeCoords = center || MASTERPLAN_CENTER;
    const dest = selectedPlot
      ? `${selectedPlot.polygon[0][0]},${selectedPlot.polygon[0][1]}`
      : `${activeCoords[0]},${activeCoords[1]}`;
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
        center={center}
        landmarks={landmarks}
        projectName={projectName}
        resetViewTrigger={resetViewTrigger}
      />

      {/* Map Controls (Bottom-Right Floating) matching Screenshot 1 & 2 */}
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
        onOpenSearch={onOpenSearch}
        onOpenInfo={onOpenInfo}
        onDownloadBrochure={handleDownloadBrochure}
        onNavigateCoordinates={handleNavigateCoordinates}
        onResetView={handleResetView}
        onOpenCADManager={onOpenCADManager}
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

