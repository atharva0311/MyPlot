'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  SlidersHorizontal, 
  Info, 
  Download, 
  Share2, 
  Check, 
  Sparkles,
  MapPin,
  Layers
} from 'lucide-react';
import { Plot } from '@/types/plot';
import SearchAutocomplete from './SearchAutocomplete';

interface HeaderProps {
  plots: Plot[];
  filteredPlots: Plot[];
  onSelectPlot: (plot: Plot) => void;
  onOpenFilters: () => void;
  onOpenProjectInfo: () => void;
  activeFilterCount: number;
}

export default function Header({
  plots,
  filteredPlots,
  onSelectPlot,
  onOpenFilters,
  onOpenProjectInfo,
  activeFilterCount,
}: HeaderProps) {
  const [copied, setCopied] = useState(false);

  // Status counts
  const total = plots.length;
  const available = plots.filter((p) => p.status === 'available').length;
  const booked = plots.filter((p) => p.status === 'booked').length;
  const sold = plots.filter((p) => p.status === 'sold').length;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadBrochure = () => {
    // Generate brochure download simulation
    const content = `NAKSHATRA LUXURY ENCLAVE - MASTERPLAN BROCHURE\nRERA ID: P02400007891\nTotal Plots: 109 | Location: Gachibowli ORR, Hyderabad\nDeveloper: Nakshatra Urban Developers & SPACER Tech\n\nContact Sales Office for bookings.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nakshatra_Masterplan_Brochure.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-3 py-2 md:px-6 md:py-3 pointer-events-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Branding & Project Title */}
        <div className="pointer-events-auto flex items-center justify-between w-full md:w-auto glass-panel px-4 py-2.5 rounded-2xl shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-sky-600 to-indigo-600 shadow-lg shadow-sky-500/20">
              <Layers className="w-5 h-5 text-white" />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-bold text-sm md:text-base text-white tracking-wide">
                  NAKSHATRA
                </h1>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-md">
                  SPACER 3D
                </span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-slate-400">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span className="truncate max-w-[170px] md:max-w-xs">Gachibowli ORR • 109 Residential Plots</span>
              </div>
            </div>
          </div>

          {/* Mobile Info Trigger */}
          <button
            onClick={onOpenProjectInfo}
            className="md:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
            title="Project Details"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>

        {/* Center: Search & Status Counter Pills */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-2">
          {/* Search Autocomplete */}
          <SearchAutocomplete plots={plots} onSelectPlot={onSelectPlot} />

          {/* Status Pills */}
          <div className="hidden lg:flex items-center space-x-1.5 glass-panel px-3 py-1.5 rounded-xl text-xs font-medium">
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400">Total:</span>
              <span className="font-bold text-white">{total}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available:</span>
              <span className="font-bold">{available}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Booked:</span>
              <span className="font-bold">{booked}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>Sold:</span>
              <span className="font-bold">{sold}</span>
            </div>
          </div>
        </div>

        {/* Right: Controls & Actions */}
        <div className="pointer-events-auto flex items-center space-x-2">
          {/* Filter Button */}
          <button
            onClick={onOpenFilters}
            className="relative flex items-center space-x-2 glass-panel px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/60 shadow-lg"
          >
            <SlidersHorizontal className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">Filters</span>
            {activeFilterCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-500 text-white text-[10px] font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Project Details Modal Button */}
          <button
            onClick={onOpenProjectInfo}
            className="hidden md:flex items-center space-x-1.5 glass-panel px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/60"
          >
            <Info className="w-4 h-4 text-emerald-400" />
            <span>Overview</span>
          </button>

          {/* Download Brochure Button */}
          <button
            onClick={handleDownloadBrochure}
            className="hidden sm:flex items-center space-x-1.5 glass-panel px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/60"
            title="Download Brochure"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">Brochure</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center space-x-1.5 glass-panel px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/60"
            title="Share Link"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-purple-400" />
                <span className="hidden sm:inline">Share</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
