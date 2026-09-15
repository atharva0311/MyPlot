'use client';

import React from 'react';
import { PlotStatus } from '@/types/plot';

interface StatusLegendProps {
  activeStatusFilter: PlotStatus[];
  onToggleStatusFilter: (status: PlotStatus) => void;
  availableCount: number;
  bookedCount: number;
  soldCount: number;
}

export default function StatusLegend({
  activeStatusFilter,
  onToggleStatusFilter,
  availableCount,
  bookedCount,
  soldCount,
}: StatusLegendProps) {
  const isSelected = (status: PlotStatus) =>
    activeStatusFilter.length === 0 || activeStatusFilter.includes(status);

  return (
    <div className="absolute bottom-6 left-4 md:left-6 z-20 pointer-events-auto">
      <div className="glass-panel px-3.5 py-2.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center space-x-2 md:space-x-3 text-xs">
        
        {/* Available Pill */}
        <button
          onClick={() => onToggleStatusFilter('available')}
          className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl transition-all border ${
            isSelected('available')
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
              : 'opacity-40 border-transparent hover:opacity-80'
          }`}
          title="Click to filter Available plots"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium">Available ({availableCount})</span>
        </button>

        {/* Booked Pill */}
        <button
          onClick={() => onToggleStatusFilter('booked')}
          className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl transition-all border ${
            isSelected('booked')
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
              : 'opacity-40 border-transparent hover:opacity-80'
          }`}
          title="Click to filter Booked plots"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="font-medium">Booked ({bookedCount})</span>
        </button>

        {/* Sold Pill */}
        <button
          onClick={() => onToggleStatusFilter('sold')}
          className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl transition-all border ${
            isSelected('sold')
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
              : 'opacity-40 border-transparent hover:opacity-80'
          }`}
          title="Click to filter Sold plots"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
          <span className="font-medium">Sold ({soldCount})</span>
        </button>

      </div>
    </div>
  );
}
