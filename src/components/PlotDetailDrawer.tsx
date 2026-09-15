'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MapPin, 
  Ruler, 
  Compass, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Download, 
  ArrowRight,
  Zap,
  Sparkles,
  Building
} from 'lucide-react';
import { Plot } from '@/types/plot';
import { formatCurrency, formatArea, getStatusBadgeStyle } from '@/utils/formatters';

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
  if (!plot) return null;

  const badge = getStatusBadgeStyle(plot.status);
  const areaInfo = formatArea(plot.areaSqFt);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello! I am interested in Plot #${plot.plotNumber} (${plot.zone}, ${plot.facing} Facing, ${plot.areaSqFt} sq.ft) at Nakshatra Enclave. Please share booking details.`
    );
    window.open(`https://api.whatsapp.com/send?phone=919662906600&text=${text}`, '_blank');
  };

  const handleDownloadSheet = () => {
    const content = `NAKSHATRA PLOT DETAILS SHEET\nPlot #: ${plot.plotNumber}\nZone: ${plot.zone}\nCategory: ${plot.category}\nFacing: ${plot.facing}\nStatus: ${plot.status.toUpperCase()}\nArea: ${plot.areaSqFt} sq.ft (${plot.areaSqYds} sq.yds)\nPrice per sq.ft: ₹${plot.pricePerSqFt}\nTotal Price: ${formatCurrency(plot.totalPrice)}\nDimensions: N: ${plot.dimensions.north}ft | S: ${plot.dimensions.south}ft | E: ${plot.dimensions.east}ft | W: ${plot.dimensions.west}ft\nRoad Access: ${plot.roadWidthFt}ft Blacktop Road\nVastu Compliant: ${plot.vastuCompliant ? 'YES' : 'NO'}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Plot_${plot.plotNumber}_Nakshatra.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 z-40 w-full md:w-[420px] glass-panel border-l border-slate-700/80 shadow-2xl flex flex-col pointer-events-auto"
      >
        {/* Header */}
        <div className="p-4 md:p-5 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white font-black text-lg shadow-lg shadow-sky-500/20">
              {plot.plotNumber}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base font-bold text-white">Plot #{plot.plotNumber}</h2>
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
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 border border-slate-700/60 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Total Investment Price
            </div>
            <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-indigo-300">
              {formatCurrency(plot.totalPrice)}
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300 mt-2 pt-2 border-t border-slate-800">
              <span>Base Rate: <strong className="text-white">₹{plot.pricePerSqFt}/sq.ft</strong></span>
              {plot.isCornerPlot && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Corner Plot Premium
                </span>
              )}
            </div>
          </div>

          {/* Area & Dimensions */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
              <Ruler className="w-4 h-4 text-sky-400" />
              <span>Plot Measurements & Dimensions</span>
            </h3>

            {/* Area Grid */}
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl glass-card">
                <span className="text-slate-400 text-[11px]">Square Feet:</span>
                <div className="font-bold text-slate-100 text-sm">{areaInfo.sqFt}</div>
              </div>
              <div className="p-3 rounded-xl glass-card">
                <span className="text-slate-400 text-[11px]">Square Yards:</span>
                <div className="font-bold text-slate-100 text-sm">{areaInfo.sqYds}</div>
              </div>
              <div className="p-3 rounded-xl glass-card">
                <span className="text-slate-400 text-[11px]">Square Meters:</span>
                <div className="font-bold text-slate-100 text-sm">{areaInfo.sqMeters}</div>
              </div>
              <div className="p-3 rounded-xl glass-card">
                <span className="text-slate-400 text-[11px]">Guntas:</span>
                <div className="font-bold text-slate-100 text-sm">{areaInfo.guntas}</div>
              </div>
            </div>

            {/* Edge Boundary Dimensions Table */}
            <div className="p-3.5 rounded-xl glass-card space-y-2">
              <div className="text-[11px] font-semibold text-slate-300 flex items-center justify-between">
                <span>Side Boundary</span>
                <span>Length (Feet)</span>
              </div>
              <div className="divide-y divide-slate-800/80 text-xs text-slate-300">
                <div className="py-1.5 flex justify-between">
                  <span className="text-slate-400">North Face:</span>
                  <span className="font-semibold text-sky-300">{plot.dimensions.north} ft</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span className="text-slate-400">South Face:</span>
                  <span className="font-semibold text-sky-300">{plot.dimensions.south} ft</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span className="text-slate-400">East Face:</span>
                  <span className="font-semibold text-sky-300">{plot.dimensions.east} ft</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span className="text-slate-400">West Face:</span>
                  <span className="font-semibold text-sky-300">{plot.dimensions.west} ft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Plot Attributes */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Orientation & Specifications</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl glass-card">
                <span className="text-slate-400">Plot Facing:</span>
                <span className="font-semibold text-emerald-400">{plot.facing} Facing</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl glass-card">
                <span className="text-slate-400">Road Width Access:</span>
                <span className="font-semibold text-white">{plot.roadWidthFt}ft Wide Blacktop Road</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl glass-card">
                <span className="text-slate-400">Vastu Compliance:</span>
                <span className={`font-semibold flex items-center space-x-1 ${plot.vastuCompliant ? 'text-emerald-400' : 'text-slate-400'}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{plot.vastuCompliant ? '100% Vastu Compliant' : 'Standard Alignment'}</span>
                </span>
              </div>
            </div>
          </div>

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
              <span>Book Plot #{plot.plotNumber} Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              disabled
              className="w-full py-3 px-4 rounded-xl bg-slate-800 text-slate-500 font-bold text-sm border border-slate-700 cursor-not-allowed text-center uppercase tracking-wider"
            >
              Plot is currently {plot.status}
            </button>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleWhatsAppInquiry}
              className="py-2.5 px-3 rounded-xl glass-panel text-xs font-semibold text-emerald-400 hover:text-white hover:bg-emerald-500/20 border border-emerald-500/40 transition-all flex items-center justify-center space-x-1.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </button>

            <button
              onClick={handleDownloadSheet}
              className="py-2.5 px-3 rounded-xl glass-panel text-xs font-semibold text-sky-400 hover:text-white hover:bg-sky-500/20 border border-sky-500/40 transition-all flex items-center justify-center space-x-1.5"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Plot Sheet</span>
            </button>
          </div>
        </div>

      </motion.aside>
    </AnimatePresence>
  );
}
