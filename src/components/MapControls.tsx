'use client';

import React from 'react';
import { 
  Box, 
  Ruler, 
  Globe, 
  Image as ImageIcon, 
  BookOpen, 
  Navigation, 
  Search, 
  Crosshair, 
  Info, 
  Home, 
  Share2,
  Compass,
  Focus
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface MapControlsProps {
  mapMode: 'satellite' | 'vector';
  onToggleMapMode: () => void;
  is3dPerspective: boolean;
  onToggle3dPerspective: () => void;
  showDimensions: boolean;
  onToggleDimensions: () => void;
  showStatus: boolean;
  onToggleStatus: () => void;
  siteFocus: boolean;
  onToggleSiteFocus: () => void;
  onOpenGallery: () => void;
  onOpenSearch?: () => void;
  onOpenInfo?: () => void;
  onDownloadBrochure: () => void;
  onNavigateCoordinates: () => void;
  onResetView: () => void;
  onOpenCADManager?: () => void;
}

export default function MapControls({
  mapMode,
  onToggleMapMode,
  is3dPerspective,
  onToggle3dPerspective,
  showDimensions,
  onToggleDimensions,
  showStatus,
  onToggleStatus,
  siteFocus,
  onToggleSiteFocus,
  onOpenGallery,
  onOpenSearch,
  onOpenInfo,
  onDownloadBrochure,
  onNavigateCoordinates,
  onResetView,
  onOpenCADManager,
}: MapControlsProps) {
  const { language, t } = useLanguage();

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'mr' ? 'लिंक क्लिपबोर्डवर कॉपी झाली!' : 'Link copied to clipboard!');
    }
  };

  return (
    <div className="absolute bottom-6 right-4 md:right-6 z-20 flex items-end space-x-3 pointer-events-auto select-none">
      
      {/* Left Column: Status pill & 2-Row Action Buttons (Matches Screenshot 1 & 2) */}
      <div className="flex flex-col items-end space-y-2.5">
        
        {/* Status Toggle Switch Pill */}
        <div 
          onClick={onToggleStatus}
          className="flex items-center space-x-3 px-4 py-2 rounded-full glass-panel border border-slate-700/80 shadow-2xl hover:border-slate-500/80 transition-all cursor-pointer bg-slate-900/90"
        >
          <span className="text-xs font-bold text-slate-200">{t('statusToggle')}</span>
          <div className={`w-9 h-5 rounded-full transition-colors relative flex items-center p-0.5 ${showStatus ? 'bg-emerald-500' : 'bg-slate-700'}`}>
            <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${showStatus ? 'translate-x-4' : 'translate-x-0'}`} />
          </div>
        </div>

        {/* Action Buttons arranged exactly matching Screenshot 1 */}
        {/* Row 1: Search, GPS */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full glass-panel border border-slate-700/80 shadow-xl hover:border-sky-500/60 hover:bg-slate-800/95 text-slate-200 hover:text-white transition-all bg-slate-900/90 text-xs font-bold"
            title={t('searchBtn')}
          >
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span>{t('searchBtn')}</span>
          </button>

          <button
            onClick={onResetView}
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full glass-panel border border-slate-700/80 shadow-xl hover:border-emerald-500/60 hover:bg-slate-800/95 text-slate-200 hover:text-white transition-all bg-slate-900/90 text-xs font-bold"
            title={t('gpsBtn')}
          >
            <Crosshair className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('gpsBtn')}</span>
          </button>
        </div>

        {/* Row 2: Gallery, Info, Locate */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenGallery}
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full glass-panel border border-slate-700/80 shadow-xl hover:border-sky-500/60 hover:bg-slate-800/95 text-slate-200 hover:text-white transition-all bg-slate-900/90 text-xs font-bold"
            title={t('gallery')}
          >
            <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
            <span>{t('gallery')}</span>
          </button>

          <button
            onClick={onOpenInfo}
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full glass-panel border border-slate-700/80 shadow-xl hover:border-sky-500/60 hover:bg-slate-800/95 text-slate-200 hover:text-white transition-all bg-slate-900/90 text-xs font-bold"
            title={t('infoBtn')}
          >
            <Info className="w-3.5 h-3.5 text-sky-400" />
            <span>{t('infoBtn')}</span>
          </button>

          <button
            onClick={onNavigateCoordinates}
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full glass-panel border border-slate-700/80 shadow-xl hover:border-emerald-500/60 hover:bg-slate-800/95 text-slate-200 hover:text-white transition-all bg-slate-900/90 text-xs font-bold"
            title={t('googleMapsDirections')}
          >
            <Navigation className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('locateBtn')}</span>
          </button>
        </div>

      </div>

      {/* Right Column: Vertical Tool Bar (Matches Screenshot 1 & 2) */}
      <div className="flex flex-col space-y-2">
        {/* CAD Map / Satellite Toggle */}
        <button
          onClick={onToggleMapMode}
          className={`p-2.5 rounded-2xl glass-panel text-xs font-bold shadow-2xl transition-all border ${
            mapMode === 'vector'
              ? 'bg-sky-500/25 text-sky-400 border-sky-400 shadow-sky-500/25'
              : 'bg-slate-900/90 text-slate-300 hover:text-white border-slate-700/80 hover:bg-slate-800'
          }`}
          title={mapMode === 'satellite' ? t('cadMode') : t('satelliteMode')}
        >
          <Globe className="w-5 h-5 text-sky-400" />
        </button>

        {/* Dimensions Toggle */}
        <button
          onClick={onToggleDimensions}
          className={`p-2.5 rounded-2xl glass-panel text-xs font-bold shadow-2xl transition-all border ${
            showDimensions
              ? 'bg-indigo-500/25 text-indigo-400 border-indigo-400 shadow-indigo-500/25'
              : 'bg-slate-900/90 text-slate-300 hover:text-white border-slate-700/80 hover:bg-slate-800'
          }`}
          title={t('dimensions')}
        >
          <Ruler className="w-5 h-5 text-indigo-400" />
        </button>

        {/* Site Focus Spotlight Toggle (Matches Screenshot 2) */}
        <button
          onClick={onToggleSiteFocus}
          className={`p-2.5 rounded-2xl glass-panel text-xs font-bold shadow-2xl transition-all border ${
            siteFocus
              ? 'bg-amber-500/25 text-amber-400 border-amber-400 shadow-amber-500/25'
              : 'bg-slate-900/90 text-slate-300 hover:text-white border-slate-700/80 hover:bg-slate-800'
          }`}
          title={siteFocus ? (language === 'mr' ? 'प्लॉट फोकस चालू' : 'Plot Focus: ON') : (language === 'mr' ? 'प्लॉट फोकस बंद' : 'Plot Focus: OFF')}
        >
          <Focus className="w-5 h-5 text-amber-400" />
        </button>

        {/* 3D View Toggle */}
        <button
          onClick={onToggle3dPerspective}
          className={`p-2.5 rounded-2xl glass-panel text-xs font-bold shadow-2xl transition-all border ${
            is3dPerspective
              ? 'bg-sky-500/25 text-sky-400 border-sky-400 shadow-sky-500/25'
              : 'bg-slate-900/90 text-slate-300 hover:text-white border-slate-700/80 hover:bg-slate-800'
          }`}
          title={is3dPerspective ? t('view3d') : t('view2d')}
        >
          <span className="font-extrabold text-xs">3D</span>
        </button>

        {/* Reset View Home Button */}
        <button
          onClick={onResetView}
          className="p-2.5 rounded-2xl glass-panel bg-slate-900/90 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-all border border-slate-700/80 shadow-2xl"
          title={t('resetCenter')}
        >
          <Home className="w-5 h-5 text-slate-300 hover:text-sky-400 transition-colors" />
        </button>

        {/* Dynamic Location & CAD Manager */}
        {onOpenCADManager && (
          <button
            onClick={onOpenCADManager}
            className="p-2.5 rounded-2xl glass-panel bg-slate-900/90 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all border border-slate-700/80 shadow-2xl relative group"
            title={language === 'mr' ? 'लोकेशन व कॅड व्यवस्थापक' : 'Dynamic Location & CAD Manager'}
          >
            <Compass className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
          </button>
        )}

        {/* Share Link Button */}
        <button
          onClick={handleShare}
          className="p-2.5 rounded-2xl glass-panel bg-slate-900/90 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all border border-slate-700/80 shadow-2xl"
          title={t('share')}
        >
          <Share2 className="w-5 h-5 text-slate-300 hover:text-emerald-400 transition-colors" />
        </button>
      </div>

    </div>
  );
}

