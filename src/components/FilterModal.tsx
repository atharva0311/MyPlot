'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Check, SlidersHorizontal, Compass, Building2 } from 'lucide-react';
import { FilterState, PlotStatus, FacingDirection } from '@/types/plot';
import { useLanguage } from '@/context/LanguageContext';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onUpdateFilters: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  totalFilteredCount: number;
}

const ALL_FACINGS: FacingDirection[] = ['East', 'North', 'West', 'South', 'North-East'];
const ALL_ZONES = ['Block A', 'Block B', 'Block C', 'Premium Enclave'];

export default function FilterModal({
  isOpen,
  onClose,
  filters,
  onUpdateFilters,
  onResetFilters,
  totalFilteredCount,
}: FilterModalProps) {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const ALL_STATUSES: { id: PlotStatus; label: string; color: string }[] = [
    { id: 'available', label: t('available'), color: 'emerald' },
    { id: 'booked', label: t('booked'), color: 'amber' },
    { id: 'sold', label: t('sold'), color: 'rose' },
  ];

  const toggleStatus = (status: PlotStatus) => {
    const updated = filters.statuses.includes(status)
      ? filters.statuses.filter((s) => s !== status)
      : [...filters.statuses, status];
    onUpdateFilters({ ...filters, statuses: updated });
  };

  const toggleFacing = (facing: FacingDirection) => {
    const updated = filters.facings.includes(facing)
      ? filters.facings.filter((f) => f !== facing)
      : [...filters.facings, facing];
    onUpdateFilters({ ...filters, facings: updated });
  };

  const toggleZone = (zone: string) => {
    const updated = filters.zones.includes(zone)
      ? filters.zones.filter((z) => z !== zone)
      : [...filters.zones, zone];
    onUpdateFilters({ ...filters, zones: updated });
  };

  const getFacingLabel = (facing: string) => {
    switch (facing) {
      case 'East': return t('facingEast');
      case 'West': return t('facingWest');
      case 'North': return t('facingNorth');
      case 'South': return t('facingSouth');
      case 'North-East': return t('facingNorthEast');
      default: return facing;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-lg glass-panel rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-sky-500/20 border border-sky-500/30 text-sky-400">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">{t('filterTitle')}</h2>
                <p className="text-xs text-slate-400">
                  {language === 'mr' ? 'प्लॉट्सची स्थिती, दिशा आणि आकारानुसार निवड करा' : 'Narrow down masterplan plots by criteria'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Scroll Area */}
          <div className="p-5 overflow-y-auto space-y-6 flex-1 text-xs">
            
            {/* Status Filter */}
            <div>
              <label className="block font-bold text-slate-200 mb-2.5 uppercase tracking-wider">
                {t('allStatuses')}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {ALL_STATUSES.map((st) => {
                  const active = filters.statuses.includes(st.id);
                  return (
                    <button
                      key={st.id}
                      onClick={() => toggleStatus(st.id)}
                      className={`py-2.5 px-3 rounded-xl border font-semibold transition-all flex items-center justify-center space-x-1.5 ${
                        active
                          ? 'bg-sky-500/20 border-sky-500/50 text-white shadow-lg shadow-sky-500/10'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full bg-${st.color}-400`}></span>
                      <span>{st.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Facing Direction */}
            <div>
              <label className="block font-bold text-slate-200 mb-2.5 uppercase tracking-wider flex items-center space-x-1.5">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>{t('facingFilter')}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {ALL_FACINGS.map((facing) => {
                  const active = filters.facings.includes(facing);
                  return (
                    <button
                      key={facing}
                      onClick={() => toggleFacing(facing)}
                      className={`py-2 px-3 rounded-xl border font-medium transition-all ${
                        active
                          ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {getFacingLabel(facing)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Zone / Block Filter */}
            <div>
              <label className="block font-bold text-slate-200 mb-2.5 uppercase tracking-wider flex items-center space-x-1.5">
                <Building2 className="w-4 h-4 text-purple-400" />
                <span>{t('zoneFilter')}</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {ALL_ZONES.map((zone) => {
                  const active = filters.zones.includes(zone);
                  return (
                    <button
                      key={zone}
                      onClick={() => toggleZone(zone)}
                      className={`py-2.5 px-3 rounded-xl border text-left font-medium transition-all flex items-center justify-between ${
                        active
                          ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>{zone}</span>
                      {active && <Check className="w-3.5 h-3.5 text-purple-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Area Range Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-bold text-slate-200 uppercase tracking-wider">
                  {t('areaRange')}: <span className="text-sky-400 font-bold">{filters.minArea} sq.ft</span>
                </label>
              </div>
              <input
                type="range"
                min="1000"
                max="4000"
                step="100"
                value={filters.minArea}
                onChange={(e) => onUpdateFilters({ ...filters, minArea: Number(e.target.value) })}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>

            {/* Toggles */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="flex items-center justify-between p-3 rounded-xl glass-card cursor-pointer">
                <span className="font-semibold text-slate-300">{t('cornerOnly')}</span>
                <input
                  type="checkbox"
                  checked={filters.showOnlyCorner}
                  onChange={(e) => onUpdateFilters({ ...filters, showOnlyCorner: e.target.checked })}
                  className="w-4 h-4 rounded accent-sky-500 cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl glass-card cursor-pointer">
                <span className="font-semibold text-slate-300">{t('vastuOnly')}</span>
                <input
                  type="checkbox"
                  checked={filters.showOnlyVastu}
                  onChange={(e) => onUpdateFilters({ ...filters, showOnlyVastu: e.target.checked })}
                  className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                />
              </label>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-4 md:p-5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between gap-3">
            <button
              onClick={onResetFilters}
              className="py-2.5 px-4 rounded-xl glass-panel text-slate-400 hover:text-white border border-slate-700/60 font-semibold flex items-center space-x-1.5 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('resetFilters')}</span>
            </button>

            <button
              onClick={onClose}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold shadow-xl shadow-sky-500/20 text-center transition-all"
            >
              {language === 'mr' ? `${totalFilteredCount} प्लॉट्स दाखवा` : `Show ${totalFilteredCount} Plots`}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

