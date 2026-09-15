'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin } from 'lucide-react';
import { Plot } from '@/types/plot';
import { getStatusBadgeStyle, formatCurrency } from '@/utils/formatters';

interface SearchAutocompleteProps {
  plots: Plot[];
  onSelectPlot: (plot: Plot) => void;
}

export default function SearchAutocomplete({ plots, onSelectPlot }: SearchAutocompleteProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = query.trim()
    ? plots.filter((plot) => {
        const q = query.toLowerCase();
        return (
          plot.plotNumber.toLowerCase().includes(q) ||
          `plot ${plot.plotNumber}`.toLowerCase().includes(q) ||
          plot.zone.toLowerCase().includes(q) ||
          plot.facing.toLowerCase().includes(q) ||
          plot.category.toLowerCase().includes(q)
        );
      }).slice(0, 8)
    : [];

  const handleSelect = (plot: Plot) => {
    onSelectPlot(plot);
    setQuery(`Plot ${plot.plotNumber}`);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-48 sm:w-64 md:w-72">
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search Plot # (e.g. 012, Block A)..."
          className="w-full pl-9 pr-8 py-2 text-xs font-medium bg-slate-900/85 backdrop-blur-md border border-slate-700/70 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40 transition-all shadow-xl"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-2.5 p-1 text-slate-400 hover:text-white rounded-md"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-panel rounded-2xl shadow-2xl overflow-hidden border border-slate-700/80 z-50 max-h-80 overflow-y-auto divide-y divide-slate-800/60">
          {results.map((plot) => {
            const badge = getStatusBadgeStyle(plot.status);
            return (
              <button
                key={plot.id}
                onClick={() => handleSelect(plot)}
                className="w-full px-3.5 py-2.5 flex items-center justify-between hover:bg-slate-800/80 transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-sky-400 font-bold text-xs">
                    {plot.plotNumber}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-xs text-white">
                        Plot #{plot.plotNumber}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 text-[9px] font-bold rounded-md uppercase border ${badge.bg} ${badge.text} ${badge.border}`}
                      >
                        {badge.label}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {plot.zone} • {plot.facing} Facing • {plot.areaSqFt} sq.ft
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-200">
                    {formatCurrency(plot.totalPrice)}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    ₹{plot.pricePerSqFt}/sq.ft
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-panel p-4 text-center rounded-2xl shadow-2xl border border-slate-700/80 text-xs text-slate-400">
          No plots found matching &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
