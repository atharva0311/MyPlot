'use client';

import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Info, 
  Download, 
  Share2, 
  Check, 
  MapPin,
  Layers,
  Globe2,
  Navigation,
  Compass
} from 'lucide-react';
import { Plot } from '@/types/plot';
import SearchAutocomplete from './SearchAutocomplete';
import { useLanguage } from '@/context/LanguageContext';
import { MASTERPLAN_CENTER } from '@/data/nakshatraPlots';

interface HeaderProps {
  plots: Plot[];
  filteredPlots: Plot[];
  onSelectPlot: (plot: Plot) => void;
  onOpenFilters: () => void;
  onOpenProjectInfo: () => void;
  onOpenCADManager?: () => void;
  activeFilterCount: number;
  center?: [number, number];
  projectName?: string;
  projectSubtitle?: string;
}

export default function Header({
  plots,
  filteredPlots,
  onSelectPlot,
  onOpenFilters,
  onOpenProjectInfo,
  onOpenCADManager,
  activeFilterCount,
  center,
  projectName,
  projectSubtitle,
}: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
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
    const content = `NAKSHATRA LUXURY ENCLAVE - MASTERPLAN BROCHURE\nMahaRERA ID: P53000034120\nTotal Plots: 109 | Location: Kalamba Outskirts, Kolhapur, Maharashtra\nDeveloper: Nakshatra Urban Developers & SPACER Tech\n\nContact Sales Office for bookings.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nakshatra_Masterplan_Brochure.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleNavigateGoogleMaps = () => {
    const active = center || MASTERPLAN_CENTER;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${active[0]},${active[1]}`, '_blank');
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
                  {projectName || t('projectName')}
                </h1>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-md">
                  {t('projectBadge')}
                </span>
              </div>
              <div 
                onClick={handleNavigateGoogleMaps}
                className="flex items-center space-x-1 text-xs text-slate-400 hover:text-sky-300 cursor-pointer transition-colors group"
                title={t('navigateSite')}
              >
                <MapPin className="w-3 h-3 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="truncate max-w-[170px] md:max-w-xs">{projectSubtitle || t('projectSubtitle')}</span>
                <Navigation className="w-2.5 h-2.5 text-sky-400 opacity-80" />
              </div>
            </div>
          </div>

          {/* Mobile Info Trigger */}
          <button
            onClick={onOpenProjectInfo}
            className="md:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
            title={t('overview')}
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
              <span className="text-slate-400">{t('total')}:</span>
              <span className="font-bold text-white">{total}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t('available')}:</span>
              <span className="font-bold">{available}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>{t('booked')}:</span>
              <span className="font-bold">{booked}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>{t('sold')}:</span>
              <span className="font-bold">{sold}</span>
            </div>
          </div>
        </div>

        {/* Right: Language Switcher, Filters, Overview & Actions */}
        <div className="pointer-events-auto flex items-center space-x-2">
          
          {/* Language Switcher Button (English / Marathi) */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl glass-panel border border-slate-700/80 shadow-lg">
            <Globe2 className="w-3.5 h-3.5 text-sky-400 ml-1.5 mr-1" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                language === 'en'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('mr')}
              className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                language === 'mr'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              मराठी
            </button>
          </div>

          {/* Filter Button */}
          <button
            onClick={onOpenFilters}
            className="relative flex items-center space-x-2 glass-panel px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/60 shadow-lg"
          >
            <SlidersHorizontal className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">{t('filters')}</span>
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
            <span>{t('overview')}</span>
          </button>

          {/* Dynamic Location & CAD Manager Button */}
          {onOpenCADManager && (
            <button
              onClick={onOpenCADManager}
              className="flex items-center space-x-1.5 glass-panel px-3.5 py-2 rounded-xl text-xs font-semibold text-amber-300 hover:text-white hover:bg-slate-800/80 transition-all border border-amber-500/40 relative shadow-lg shadow-amber-500/10 group"
              title={language === 'mr' ? 'कॅड व लोकेशन व्यवस्थापक' : 'Dynamic Location & CAD Manager'}
            >
              <Compass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span className="hidden lg:inline">{language === 'mr' ? 'कॅड / लोकेशन' : 'CAD / Location'}</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </button>
          )}

          {/* Download Brochure Button */}
          <button
            onClick={handleDownloadBrochure}
            className="hidden sm:flex items-center space-x-1.5 glass-panel px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/60"
            title={t('brochure')}
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">{t('brochure')}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center space-x-1.5 glass-panel px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/60"
            title={t('share')}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">{t('copied')}</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-purple-400" />
                <span className="hidden sm:inline">{t('share')}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}

