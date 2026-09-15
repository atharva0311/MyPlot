'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  ShieldCheck, 
  MapPin, 
  Trees, 
  Route, 
  Zap, 
  Droplets, 
  Sparkles, 
  Image as ImageIcon,
  CheckCircle,
  Calendar,
  Award
} from 'lucide-react';
import { PROJECT_DATA } from '@/data/projectDetails';

interface ProjectInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectInfoModal({ isOpen, onClose }: ProjectInfoModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'gallery' | 'location'>('overview');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-2xl glass-panel rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-white">{PROJECT_DATA.name}</h2>
                <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-md">
                  RERA APPROVED
                </span>
              </div>
              <p className="text-xs text-slate-400">{PROJECT_DATA.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800/80 bg-slate-900/50 p-1.5 gap-1 text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold transition-all ${
                activeTab === 'overview'
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('amenities')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold transition-all ${
                activeTab === 'amenities'
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Amenities
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold transition-all ${
                activeTab === 'gallery'
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold transition-all ${
                activeTab === 'location'
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Location
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="p-5 overflow-y-auto flex-1 space-y-5 text-xs">
            
            {activeTab === 'overview' && (
              <div className="space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl glass-card text-center">
                    <span className="text-slate-400 text-[10px] uppercase font-bold">Total Plots</span>
                    <div className="text-xl font-black text-sky-400 mt-0.5">{PROJECT_DATA.totalPlots}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl glass-card text-center">
                    <span className="text-slate-400 text-[10px] uppercase font-bold">Total Area</span>
                    <div className="text-xl font-black text-emerald-400 mt-0.5">{PROJECT_DATA.totalAcres} Acres</div>
                  </div>
                  <div className="p-3.5 rounded-2xl glass-card text-center">
                    <span className="text-slate-400 text-[10px] uppercase font-bold">Possession</span>
                    <div className="text-sm font-bold text-amber-300 mt-1">{PROJECT_DATA.possessionDate}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl glass-card text-center">
                    <span className="text-slate-400 text-[10px] uppercase font-bold">RERA Number</span>
                    <div className="text-[11px] font-bold text-purple-300 mt-1">{PROJECT_DATA.reraId}</div>
                  </div>
                </div>

                {/* Developer Profile */}
                <div className="p-4 rounded-2xl glass-card space-y-2 border border-slate-700/60">
                  <div className="flex items-center space-x-2 text-slate-200 font-bold">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Developer & Architectural Team</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Developed by <strong>{PROJECT_DATA.developer}</strong>. Featuring modern layout masterplanning, underground utilities, and 100% Vastu-aligned residential plotting.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_DATA.amenities.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-2xl glass-card border border-slate-700/60 space-y-1.5">
                    <div className="flex items-center space-x-2 font-bold text-slate-100">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_DATA.gallery.map((img) => (
                  <div key={img.id} className="relative rounded-2xl overflow-hidden group border border-slate-700/60 h-40">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3">
                      <span className="font-semibold text-white text-xs">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'location' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl glass-card border border-slate-700/60 flex items-center space-x-2 text-slate-200 font-bold">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Strategic Outer Ring Road Connectivity</span>
                </div>
                <div className="divide-y divide-slate-800/80 glass-card rounded-2xl overflow-hidden border border-slate-700/60">
                  {PROJECT_DATA.locationHighlights.map((loc, idx) => (
                    <div key={idx} className="p-3 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
                      <div>
                        <div className="font-semibold text-white">{loc.title}</div>
                        <div className="text-[10px] text-slate-400">{loc.category}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sky-400">{loc.distance}</div>
                        <div className="text-[10px] text-slate-400">{loc.travelTime} drive</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/90 text-center">
            <button
              onClick={onClose}
              className="py-2.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all"
            >
              Close Overview
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
