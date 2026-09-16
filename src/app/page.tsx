'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Header from '@/components/Header';
import MapViewer from '@/components/MapViewer';
import PlotDetailDrawer from '@/components/PlotDetailDrawer';
import FilterModal from '@/components/FilterModal';
import ProjectInfoModal from '@/components/ProjectInfoModal';
import BookingModal from '@/components/BookingModal';
import CADImportModal from '@/components/CADImportModal';
import { NAKSHATRA_PLOTS, MASTERPLAN_CENTER, NEARBY_LANDMARKS } from '@/data/nakshatraPlots';
import { Plot, PlotStatus, FilterState, Landmark } from '@/types/plot';
import { LinearUnit } from '@/utils/formatters';
import { LanguageProvider } from '@/context/LanguageContext';

function MasterplanViewer() {
  const [plots, setPlots] = useState<Plot[]>(NAKSHATRA_PLOTS);
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [linearUnit, setLinearUnit] = useState<LinearUnit>('ft');

  // Dynamic Location, Landmarks, & Masterplan State
  const [center, setCenter] = useState<[number, number]>(MASTERPLAN_CENTER);
  const [landmarks, setLandmarks] = useState<Landmark[]>(NEARBY_LANDMARKS);
  const [projectName, setProjectName] = useState<string>('Nakshatra Enclave');
  const [projectSubtitle, setProjectSubtitle] = useState<string>('Kalamba Outskirts, Kolhapur • 109 Residential Plots');

  // Modals state
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isProjectInfoModalOpen, setIsProjectInfoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCADModalOpen, setIsCADModalOpen] = useState(false);

  // Restore saved customization from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCenter = localStorage.getItem('nakshatra_custom_center');
        const savedLandmarks = localStorage.getItem('nakshatra_custom_landmarks');
        const savedName = localStorage.getItem('nakshatra_custom_name');
        if (savedCenter) {
          const parsedCenter = JSON.parse(savedCenter);
          // If cached center was old Bhuj location, reset to Kolhapur default
          if (Math.abs(parsedCenter[0] - 23.25) < 0.05) {
            localStorage.removeItem('nakshatra_custom_center');
            localStorage.removeItem('nakshatra_custom_landmarks');
            setCenter(MASTERPLAN_CENTER);
            setLandmarks(NEARBY_LANDMARKS);
            setProjectSubtitle('Kalamba Outskirts, Kolhapur • 109 Residential Plots');
          } else {
            setCenter(parsedCenter);
            setProjectSubtitle(`${parsedCenter[0].toFixed(4)}, ${parsedCenter[1].toFixed(4)} • Plotted Development`);
          }
        }
        if (savedLandmarks && !savedCenter?.includes('23.25')) setLandmarks(JSON.parse(savedLandmarks));
        if (savedName) setProjectName(savedName);
      } catch {}
    }
  }, []);

  const handleApplyCADChanges = ({
    center: newCenter,
    plots: newPlots,
    landmarks: newLandmarks,
    projectName: newName,
  }: {
    center: [number, number];
    plots: Plot[];
    landmarks: Landmark[];
    projectName?: string;
  }) => {
    setCenter(newCenter);
    setPlots(newPlots);
    setLandmarks(newLandmarks);
    if (newName) setProjectName(newName);
    setProjectSubtitle(`${newCenter[0].toFixed(4)}, ${newCenter[1].toFixed(4)} • ${newPlots.length} Plots`);
    setSelectedPlot(null);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('nakshatra_custom_center', JSON.stringify(newCenter));
        localStorage.setItem('nakshatra_custom_landmarks', JSON.stringify(newLandmarks));
        if (newName) localStorage.setItem('nakshatra_custom_name', newName);
      } catch {}
    }
  };

  const handleResetDefault = () => {
    setCenter(MASTERPLAN_CENTER);
    setPlots(NAKSHATRA_PLOTS);
    setLandmarks(NEARBY_LANDMARKS);
    setProjectName('Nakshatra Enclave');
    setProjectSubtitle('Kalamba Outskirts, Kolhapur • 109 Residential Plots');
    setSelectedPlot(null);

    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('nakshatra_custom_center');
        localStorage.removeItem('nakshatra_custom_landmarks');
        localStorage.removeItem('nakshatra_custom_name');
      } catch {}
    }
  };

  // Initial Filter State
  const [filters, setFilters] = useState<FilterState>({
    statuses: [],
    facings: [],
    zones: [],
    minArea: 1000,
    maxArea: 5000,
    minPrice: 0,
    maxPrice: 100000000,
    searchQuery: '',
    showOnlyCorner: false,
    showOnlyVastu: false,
  });

  // URL query sync: e.g. ?plot=012
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const plotParam = params.get('plot');
      if (plotParam) {
        const found = plots.find((p) => p.plotNumber === plotParam || p.id === plotParam);
        if (found) {
          setSelectedPlot(found);
        }
      }
    }
  }, [plots]);

  const handleSelectPlot = (plot: Plot | null) => {
    setSelectedPlot(plot);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (plot) {
        url.searchParams.set('plot', plot.plotNumber);
      } else {
        url.searchParams.delete('plot');
      }
      window.history.pushState(null, '', url.toString());
    }
  };

  // Filter calculation
  const filteredPlots = useMemo(() => {
    return plots.filter((plot) => {
      // Status filter
      if (filters.statuses.length > 0 && !filters.statuses.includes(plot.status)) {
        return false;
      }
      // Facing filter
      if (filters.facings.length > 0 && !filters.facings.includes(plot.facing)) {
        return false;
      }
      // Zone filter
      if (filters.zones.length > 0 && !filters.zones.includes(plot.zone)) {
        return false;
      }
      // Area filter
      if (plot.areaSqFt < filters.minArea) {
        return false;
      }
      // Corner plot filter
      if (filters.showOnlyCorner && !plot.isCornerPlot) {
        return false;
      }
      // Vastu filter
      if (filters.showOnlyVastu && !plot.vastuCompliant) {
        return false;
      }
      return true;
    });
  }, [plots, filters]);

  // Counts
  const availableCount = useMemo(() => plots.filter((p) => p.status === 'available').length, [plots]);
  const bookedCount = useMemo(() => plots.filter((p) => p.status === 'booked').length, [plots]);
  const soldCount = useMemo(() => plots.filter((p) => p.status === 'sold').length, [plots]);

  // Status Legend toggle
  const handleToggleStatusFilter = (status: PlotStatus) => {
    setFilters((prev) => {
      const updated = prev.statuses.includes(status)
        ? prev.statuses.filter((s) => s !== status)
        : [...prev.statuses, status];
      return { ...prev, statuses: updated };
    });
  };

  const handleResetFilters = () => {
    setFilters({
      statuses: [],
      facings: [],
      zones: [],
      minArea: 1000,
      maxArea: 5000,
      minPrice: 0,
      maxPrice: 100000000,
      searchQuery: '',
      showOnlyCorner: false,
      showOnlyVastu: false,
    });
  };

  const handleBookPlotTrigger = (plot: Plot) => {
    setSelectedPlot(plot);
    setIsBookingModalOpen(true);
  };

  // Update plot status to 'booked' upon reservation confirmation
  const handleConfirmBooking = (plotId: string) => {
    setPlots((prev) =>
      prev.map((p) => (p.id === plotId ? { ...p, status: 'booked' } : p))
    );
    if (selectedPlot && selectedPlot.id === plotId) {
      setSelectedPlot((prev) => (prev ? { ...prev, status: 'booked' } : null));
    }
  };

  // Active filter count badge calculation
  const activeFilterCount =
    filters.statuses.length +
    filters.facings.length +
    filters.zones.length +
    (filters.minArea > 1000 ? 1 : 0) +
    (filters.showOnlyCorner ? 1 : 0) +
    (filters.showOnlyVastu ? 1 : 0);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-spacer-bg">
      {/* Floating Header */}
      <Header
        plots={plots}
        filteredPlots={filteredPlots}
        onSelectPlot={handleSelectPlot}
        onOpenFilters={() => setIsFilterModalOpen(true)}
        onOpenProjectInfo={() => setIsProjectInfoModalOpen(true)}
        onOpenCADManager={() => setIsCADModalOpen(true)}
        activeFilterCount={activeFilterCount}
        center={center}
        projectName={projectName}
        projectSubtitle={projectSubtitle}
      />

      {/* Main Interactive Map Canvas View */}
      <MapViewer
        plots={filteredPlots}
        selectedPlot={selectedPlot}
        onSelectPlot={handleSelectPlot}
        activeStatusFilter={filters.statuses}
        onToggleStatusFilter={handleToggleStatusFilter}
        availableCount={availableCount}
        bookedCount={bookedCount}
        soldCount={soldCount}
        linearUnit={linearUnit}
        onOpenSearch={() => setIsFilterModalOpen(true)}
        onOpenInfo={() => setIsProjectInfoModalOpen(true)}
        onOpenCADManager={() => setIsCADModalOpen(true)}
        center={center}
        landmarks={landmarks}
        projectName={projectName}
      />

      {/* Plot Detail Sidebar Drawer */}
      <PlotDetailDrawer
        plot={selectedPlot}
        onClose={() => handleSelectPlot(null)}
        onBookPlot={handleBookPlotTrigger}
      />

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filters={filters}
        onUpdateFilters={setFilters}
        onResetFilters={handleResetFilters}
        totalFilteredCount={filteredPlots.length}
      />

      {/* Project Overview Info & Amenities Modal */}
      <ProjectInfoModal
        isOpen={isProjectInfoModalOpen}
        onClose={() => setIsProjectInfoModalOpen(false)}
      />

      {/* Plot Booking Dialog Modal */}
      <BookingModal
        plot={selectedPlot}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onConfirmBooking={handleConfirmBooking}
      />

      {/* Dynamic Location & CAD Manager Modal */}
      <CADImportModal
        isOpen={isCADModalOpen}
        onClose={() => setIsCADModalOpen(false)}
        currentCenter={center}
        currentPlots={plots}
        currentLandmarks={landmarks}
        onApplyChanges={handleApplyCADChanges}
        onResetDefault={handleResetDefault}
      />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <MasterplanViewer />
    </LanguageProvider>
  );
}

