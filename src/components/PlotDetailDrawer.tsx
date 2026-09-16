'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MapPin, 
  Ruler, 
  Compass, 
  CheckCircle2, 
  MessageSquare, 
  Download, 
  ArrowRight,
  Zap,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { Plot } from '@/types/plot';
import { 
  formatCurrency, 
  formatArea, 
  getStatusBadgeStyle, 
  LinearUnit, 
  convertLength, 
  convertArea 
} from '@/utils/formatters';
import { useLanguage } from '@/context/LanguageContext';

interface PlotDetailDrawerProps {
  plot: Plot | null;
  onClose: () => void;
  onBookPlot: (plot: Plot) => void;
}

export default function PlotDetailDrawer({
  plot,
  onClose,
  onBookPlot,
}: PlotDetailDrawerProps) {
  const { language, t } = useLanguage();
  const [boundaryUnit, setBoundaryUnit] = useState<LinearUnit>('ft');

  if (!plot) return null;

  const badge = getStatusBadgeStyle(plot.status, language);
  const areaInfo = formatArea(plot.areaSqFt, language);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello! I am interested in Plot #${plot.plotNumber} (${plot.zone}, ${plot.facing} Facing, ${plot.areaSqFt} sq.ft) at Nakshatra Enclave. Please share booking details.`
    );
    window.open(`https://api.whatsapp.com/send?phone=919662906600&text=${text}`, '_blank');
  };

  const handleDownloadSheet = () => {
    const content = `NAKSHATRA PLOT DETAILS SHEET\nPlot #: ${plot.plotNumber}\nZone: ${plot.zone}\nCategory: ${plot.category}\nFacing: ${plot.facing}\nStatus: ${plot.status.toUpperCase()}\nArea: ${plot.areaSqFt} sq.ft (${plot.areaSqYds} sq.yds / ${plot.areaSqMeters} sq.m / ${plot.guntas} guntas)\nPrice per sq.ft: ₹${plot.pricePerSqFt}\nTotal Price: ${formatCurrency(plot.totalPrice, language)}\nDimensions: N: ${plot.dimensions.north}ft | S: ${plot.dimensions.south}ft | E: ${plot.dimensions.east}ft | W: ${plot.dimensions.west}ft\nRoad Access: ${plot.roadWidthFt}ft Blacktop Road\nVastu Compliant: ${plot.vastuCompliant ? 'YES' : 'NO'}\nGPS Coordinates: ${plot.polygon[0][0]}, ${plot.polygon[0][1]}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Plot_${plot.plotNumber}_Nakshatra.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleNavigateToPlot = () => {
    const [lat, lng] = plot.polygon[0];
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  // Translated Facing
  const getFacingLabel = (facing: string) => {
    switch (facing) {
      case 'East': return t('facingEast');
      case 'West': return t('facingWest');
      case 'North': return t('facingNorth');
      case 'South': return t('facingSouth');
      case 'North-East': return t('facingNorthEast');
      case 'North-West': return t('facingNorthWest');
      case 'South-East': return t('facingSouthEast');
      case 'South-West': return t('facingSouthWest');
      default: return facing;
    }
  };

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 z-40 w-full md:w-[430px] glass-panel border-l border-slate-700/80 shadow-2xl flex flex-col pointer-events-auto"
      >
        {/* Header */}
        <div className="p-4 md:p-5 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/70">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white font-black text-lg shadow-lg shadow-sky-500/20">
              {plot.plotNumber}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base font-bold text-white">{t('plotNumber')} {plot.plotNumber}</h2>
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md uppercase border ${badge.bg} ${badge.text} ${badge.border} ${badge.glow}`}>
                  {badge.label}
                </span>
              </div>
              <p className="text-xs text-slate-400">{plot.zone} • {plot.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-5">
          
          {/* Price Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-800/80 to-slate-900/95 border border-slate-700/60 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              {t('totalInvestmentPrice')}
            </div>
            <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-indigo-300">
              {formatCurrency(plot.totalPrice, language)}
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300 mt-2 pt-2 border-t border-slate-800">
              <span>{t('baseRate')}: <strong className="text-white">₹{plot.pricePerSqFt}/sq.ft</strong></span>
              {plot.isCornerPlot && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {t('cornerPlotPremium')}
                </span>
              )}
            </div>
          </div>

          {/* Area & Dimensions Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                <Ruler className="w-4 h-4 text-sky-400" />
                <span>{t('measurementsAndDimensions')}</span>
              </h3>

              {/* Boundary Unit Toggle (ft / m / yd) */}
              <div className="flex items-center bg-slate-900/80 p-0.5 rounded-lg border border-slate-700/60 text-[10px]">
                {(['ft', 'm', 'yd'] as LinearUnit[]).map((u) => (
                  <button
                    key={u}
                    onClick={() => setBoundaryUnit(u)}
                    className={`px-2 py-0.5 rounded-md font-bold transition-all ${
                      boundaryUnit === u
                        ? 'bg-sky-500 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {u === 'ft' ? (language === 'mr' ? 'फूट' : 'ft') : (u === 'm' ? (language === 'mr' ? 'मीटर' : 'm') : (language === 'mr' ? 'गज' : 'yd'))}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Units Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl glass-card">
                <span className="text-slate-400 text-[11px]">{t('squareFeet')}:</span>
                <div className="font-bold text-slate-100 text-sm mt-0.5">{areaInfo.sqFt}</div>
              </div>
              <div className="p-3 rounded-xl glass-card">
                <span className="text-slate-400 text-[11px]">{t('squareYards')}:</span>
                <div className="font-bold text-slate-100 text-sm mt-0.5">{areaInfo.sqYds}</div>
              </div>
              <div className="p-3 rounded-xl glass-card">
                <span className="text-slate-400 text-[11px]">{t('squareMeters')}:</span>
                <div className="font-bold text-slate-100 text-sm mt-0.5">{areaInfo.sqMeters}</div>
              </div>
              <div className="p-3 rounded-xl glass-card">
                <span className="text-slate-400 text-[11px]">{t('guntas')}:</span>
                <div className="font-bold text-slate-100 text-sm mt-0.5">{areaInfo.guntas}</div>
              </div>
            </div>

            {/* Acres Conversion Badge */}
            <div className="px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
              <span className="text-[11px] text-slate-400">{t('acres')}:</span>
              <span className="font-bold text-emerald-400">{areaInfo.acres}</span>
            </div>

            {/* Edge Boundary Dimensions Table */}
            <div className="p-3.5 rounded-xl glass-card space-y-2">
              <div className="text-[11px] font-semibold text-slate-300 flex items-center justify-between">
                <span>{t('sideBoundary')}</span>
                <span>{t('length')} ({boundaryUnit.toUpperCase()})</span>
              </div>
              <div className="divide-y divide-slate-800/80 text-xs text-slate-300">
                <div className="py-1.5 flex justify-between">
                  <span className="text-slate-400">{t('northFace')}:</span>
                  <span className="font-semibold text-sky-300">
                    {convertLength(plot.dimensions.north, boundaryUnit, language).full}
                  </span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span className="text-slate-400">{t('southFace')}:</span>
                  <span className="font-semibold text-sky-300">
                    {convertLength(plot.dimensions.south, boundaryUnit, language).full}
                  </span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span className="text-slate-400">{t('eastFace')}:</span>
                  <span className="font-semibold text-sky-300">
                    {convertLength(plot.dimensions.east, boundaryUnit, language).full}
                  </span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span className="text-slate-400">{t('westFace')}:</span>
                  <span className="font-semibold text-sky-300">
                    {convertLength(plot.dimensions.west, boundaryUnit, language).full}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Plot Attributes */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>{t('orientationAndSpecs')}</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl glass-card">
                <span className="text-slate-400">{t('plotFacing')}:</span>
                <span className="font-semibold text-emerald-400">{getFacingLabel(plot.facing)}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl glass-card">
                <span className="text-slate-400">{t('roadWidthAccess')}:</span>
                <span className="font-semibold text-white">
                  {plot.roadWidthFt} {language === 'mr' ? 'फूट रुंद काळा डांबरी रस्ता' : 'ft Wide Blacktop Road'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl glass-card">
                <span className="text-slate-400">{t('vastuCompliance')}:</span>
                <span className={`font-semibold flex items-center space-x-1 ${plot.vastuCompliant ? 'text-emerald-400' : 'text-slate-400'}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{plot.vastuCompliant ? t('vastuCompliant') : t('standardAlignment')}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Google Maps Direct Navigation Button */}
          <button
            onClick={handleNavigateToPlot}
            className="w-full py-2.5 px-3.5 rounded-xl glass-card border border-sky-500/40 hover:border-sky-400 text-sky-300 hover:text-white hover:bg-sky-500/20 text-xs font-bold flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-sky-400" />
              <span>{t('navigatePlot')}</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Description */}
          {plot.description && (
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              {plot.description}
            </div>
          )}

        </div>

        {/* Action Buttons Footer */}
        <div className="p-4 md:p-5 border-t border-slate-800/80 bg-slate-900/90 space-y-2.5">
          {plot.status === 'available' ? (
            <button
              onClick={() => onBookPlot(plot)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all flex items-center justify-center space-x-2"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>{t('bookPlotNow')} #{plot.plotNumber}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              disabled
              className="w-full py-3 px-4 rounded-xl bg-slate-800 text-slate-500 font-bold text-sm border border-slate-700 cursor-not-allowed text-center uppercase tracking-wider"
            >
              {t('plotCurrently')} {badge.label}
            </button>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleWhatsAppInquiry}
              className="py-2.5 px-3 rounded-xl glass-panel text-xs font-semibold text-emerald-400 hover:text-white hover:bg-emerald-500/20 border border-emerald-500/40 transition-all flex items-center justify-center space-x-1.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{t('whatsAppInquiry')}</span>
            </button>

            <button
              onClick={handleDownloadSheet}
              className="py-2.5 px-3 rounded-xl glass-panel text-xs font-semibold text-sky-400 hover:text-white hover:bg-sky-500/20 border border-sky-500/40 transition-all flex items-center justify-center space-x-1.5"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>{t('plotSheet')}</span>
            </button>
          </div>
        </div>

      </motion.aside>
    </AnimatePresence>
  );
}

