'use client';

import React from 'react';
import { 
  Compass, 
  Layers, 
  Box, 
  Ruler, 
  Plus, 
  Minus, 
  Globe
} from 'lucide-react';

interface MapControlsProps {
  mapMode: 'satellite' | 'vector';
  onToggleMapMode: () => void;
  is3dPerspective: boolean;
  onToggle3dPerspective: () => void;
  showDimensions: boolean;
  onToggleDimensions: () => void;
  onResetView: () => void;
}

export default function MapControls({
  mapMode,
  onToggleMapMode,
  is3dPerspective,
  onToggle3dPerspective,
  showDimensions,
  onToggleDimensions,
  onResetView,
}: MapControlsProps) {
  return (
    <div className="absolute bottom-6 right-4 md:right-6 z-20 flex flex-col space-y-2 pointer-events-auto">
      
      {/* 2D / 3D Perspective Toggle */}
      <button
        onClick={onToggle3dPerspective}
        className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl glass-panel text-xs font-semibold shadow-2xl transition-all border ${
          is3dPerspective
            ? 'bg-sky-500/20 text-sky-400 border-sky-500/50 shadow-sky-500/20'
            : 'text-slate-300 hover:text-white border-slate-700/70 hover:bg-slate-800/80'
        }`}
        title="Toggle 2D / 3D Perspective Tilt View"
      >
        <Box className={`w-4 h-4 ${is3dPerspective ? 'text-sky-400 animate-pulse' : 'text-slate-400'}`} />
        <span className="hidden sm:inline">{is3dPerspective ? '3D View' : '2D View'}</span>
      </button>

      {/* Satellite / Vector Map Toggle */}
      <button
        onClick={onToggleMapMode}
        className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl glass-panel text-xs font-semibold shadow-2xl transition-all border ${
          mapMode === 'satellite'
            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
            : 'text-slate-300 hover:text-white border-slate-700/70 hover:bg-slate-800/80'
        }`}
        title="Toggle Satellite vs CAD Vector Map Mode"
      >
        <Globe className={`w-4 h-4 ${mapMode === 'satellite' ? 'text-emerald-400' : 'text-slate-400'}`} />
        <span className="hidden sm:inline">{mapMode === 'satellite' ? 'Satellite' : 'CAD Map'}</span>
      </button>

      {/* Edge Dimensions Toggle */}
      <button
        onClick={onToggleDimensions}
        className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl glass-panel text-xs font-semibold shadow-2xl transition-all border ${
          showDimensions
            ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/50'
            : 'text-slate-300 hover:text-white border-slate-700/70 hover:bg-slate-800/80'
        }`}
        title="Show / Hide Plot Feet Dimensions"
      >
        <Ruler className={`w-4 h-4 ${showDimensions ? 'text-indigo-400' : 'text-slate-400'}`} />
        <span className="hidden sm:inline">Dimensions</span>
      </button>

      {/* Compass / Reset View Button */}
      <button
        onClick={onResetView}
        className="flex items-center justify-center p-3 rounded-2xl glass-panel text-slate-300 hover:text-sky-400 hover:bg-slate-800/80 transition-all border border-slate-700/70 shadow-2xl group"
        title="Reset Masterplan View & Center"
      >
        <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500 text-sky-400" />
      </button>

    </div>
  );
}
