'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Header from '@/components/Header';
import MapViewer from '@/components/MapViewer';
import PlotDetailDrawer from '@/components/PlotDetailDrawer';
import FilterModal from '@/components/FilterModal';
import ProjectInfoModal from '@/components/ProjectInfoModal';
import BookingModal from '@/components/BookingModal';
import { NAKSHATRA_PLOTS } from '@/data/nakshatraPlots';
import { Plot, PlotStatus, FilterState } from '@/types/plot';

export default function Home() {
  const [plots, setPlots] = useState<Plot[]>(NAKSHATRA_PLOTS);
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);

  // Modals state
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isProjectInfoModalOpen, setIsProjectInfoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
        activeFilterCount={activeFilterCount}
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
    </main>
  );
}
