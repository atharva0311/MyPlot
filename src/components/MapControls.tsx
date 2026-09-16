'use client';

import React from 'react';
import { 
  Compass, 
  Box, 
  Ruler, 
  Globe, 
  Image as ImageIcon, 
  BookOpen, 
  Navigation,
  ExternalLink,
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
  onDownloadBrochure: () => void;
  onNavigateCoordinates: () => void;
  onResetView: () => void;
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
  onDownloadBrochure,
  onNavigateCoordinates,
  onResetView,
}: MapControlsProps) {
  const { language, t } = useLanguage();

  return (
    <div className="absolute bottom-6 right-4 md:right-6 z-20 flex flex-col items-end space-y-2 pointer-events-auto">
      
      {/* Top utility row: 2D/3D, CAD/Satellite, Dimensions, Reset */}
      <div className="flex items-center space-x-1.5 mb-1">
        {/* CAD Map / Satellite Toggle Pill */}
        <button
          onClick={onToggleMapMode}
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl glass-panel text-xs font-bold shadow-xl transition-all border ${
            mapMode === 'vector'
              ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white border-sky-400 shadow-sky-500/20'
              : 'bg-slate-900/90 text-slate-300 hover:text-white border-slate-700/80 hover:bg-slate-800'
          }`}
          title={mapMode === 'satellite' ? t('cadMode') : t('satelliteMode')}
        >
          <Globe className="w-3.5 h-3.5 text-sky-400" />
          <span>{mapMode === 'vector' ? t('cadMode') : t('satelliteMode')}</span>
        </button>

        {/* 2D / 3D Toggle */}
        <button
          onClick={onToggle3dPerspective}
          className={`p-2 rounded-xl glass-panel text-xs font-semibold shadow-xl transition-all border ${
            is3dPerspective
              ? 'bg-sky-500/25 text-sky-400 border-sky-500/50 shadow-sky-500/20'
              : 'text-slate-300 hover:text-white border-slate-700/70 hover:bg-slate-800/80'
          }`}
          title={is3dPerspective ? t('view3d') : t('view2d')}
        >
          <Box className={`w-4 h-4 ${is3dPerspective ? 'text-sky-400' : 'text-slate-300'}`} />
        </button>

        {/* Dimensions Toggle */}
        <button
          onClick={onToggleDimensions}
          className={`p-2 rounded-xl glass-panel text-xs font-semibold shadow-xl transition-all border ${
            showDimensions
              ? 'bg-indigo-500/25 text-indigo-400 border-indigo-500/50'
              : 'text-slate-300 hover:text-white border-slate-700/70 hover:bg-slate-800/80'
          }`}
          title={t('dimensions')}
        >
          <Ruler className="w-4 h-4" />
        </button>

        {/* Site Focus (Vignette Mask) Toggle */}
        <button
          onClick={onToggleSiteFocus}
          className={`p-2 rounded-xl glass-panel text-xs font-semibold shadow-xl transition-all border ${
            siteFocus
              ? 'bg-amber-500/25 text-amber-400 border-amber-500/50 shadow-amber-500/20'
              : 'text-slate-300 hover:text-white border-slate-700/70 hover:bg-slate-800/80'
          }`}
          title={siteFocus ? t('siteFocus') : t('siteContext')}
        >
          <Focus className={`w-4 h-4 ${siteFocus ? 'text-amber-400' : 'text-slate-300'}`} />
        </button>

        {/* Reset View Compass */}
        <button
          onClick={onResetView}
          className="p-2 rounded-xl glass-panel text-slate-300 hover:text-sky-400 hover:bg-slate-800/80 transition-all border border-slate-700/70 shadow-xl group"
          title={t('resetCenter')}
        >
          <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500 text-sky-400" />
        </button>
      </div>

      {/* Floating Action Pills matching Screenshot 2 */}

      {/* 1. Status Toggle Switch */}
      <div 
        onClick={onToggleStatus}
        className="flex items-center space-x-3 px-4 py-2 rounded-full glass-panel border border-slate-700/80 shadow-2xl hover:border-slate-600 transition-all cursor-pointer select-none bg-slate-900/90"
      >
        <span className="text-xs font-bold text-slate-200">{t('statusToggle')}</span>
        {/* Toggle Switch */}
        <div className={`w-9 h-5 rounded-full transition-colors relative flex items-center p-0.5 ${showStatus ? 'bg-emerald-500' : 'bg-slate-700'}`}>
          <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${showStatus ? 'translate-x-4' : 'translate-x-0'}`} />
        </div>
      </div>

      {/* 2. Gallery Button */}
      <button
        onClick={onOpenGallery}
        className="flex items-center space-x-2.5 px-4 py-2 rounded-full glass-panel border border-slate-700/80 shadow-2xl hover:border-sky-500/50 hover:bg-slate-800/90 text-slate-200 hover:text-sky-300 transition-all group bg-slate-900/90"
        title={t('gallery')}
      >
        <ImageIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold">{t('gallery')}</span>
      </button>

      {/* 3. Brochure Button */}
      <button
        onClick={onDownloadBrochure}
        className="flex items-center space-x-2.5 px-4 py-2 rounded-full glass-panel border border-slate-700/80 shadow-2xl hover:border-amber-500/50 hover:bg-slate-800/90 text-slate-200 hover:text-amber-300 transition-all group bg-slate-900/90"
        title={t('brochure')}
      >
        <BookOpen className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold">{t('brochure')}</span>
      </button>

      {/* 4. Google Maps Navigation Button */}
      <button
        onClick={onNavigateCoordinates}
        className="flex items-center space-x-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-sky-600/90 to-emerald-600/90 border border-sky-400/40 shadow-2xl hover:from-sky-500 hover:to-emerald-500 text-white font-bold transition-all group"
        title={t('googleMapsDirections')}
      >
        <Navigation className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
        <span className="text-xs">{t('navigateSite')}</span>
        <ExternalLink className="w-3 h-3 text-white/80" />
      </button>

    </div>
  );
}

