'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Layers, Building2, Trees, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GalleryPhoto {
  id: string;
  category: 'all' | 'masterplan' | 'amenities' | 'aerial' | 'site';
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  url: string;
  badgeEn: string;
  badgeMr: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'p1',
    category: 'masterplan',
    titleEn: 'Angled CAD Masterplan & Plot Matrix',
    titleMr: 'अँगल्ड कॅड मास्टरप्लॅन आणि प्लॉट मॅट्रिक्स',
    descriptionEn: 'Official layout architecture showing 109 residential plots, 7.50M internal avenues, and zoning.',
    descriptionMr: '१०९ निवासी प्लॉट्स, ७.५० मी. चे अंतर्गत रस्ते आणि झोनिंग दर्शविणारा अधिकृत आर्किटेक्चरल नकाशा.',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    badgeEn: 'CAD Layout',
    badgeMr: 'कॅड लेआउट',
  },
  {
    id: 'p2',
    category: 'site',
    titleEn: 'Grand Entrance Boulevard & Arch Gateway',
    titleMr: 'भव्य प्रवेशद्वार आणि ६० फूट रुंद मुख्य रस्ता',
    descriptionEn: '60ft wide entrance boulevard with boom barriers, security cabin, and palm tree landscaping.',
    descriptionMr: '६० फूट रुंद मुख्य प्रवेश रस्ता, बूम बॅरियर्स, सुरक्षा केबिन आणि आकर्षक वृक्षारोपण.',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    badgeEn: 'Boulevard & Gate',
    badgeMr: 'प्रवेशद्वार',
  },
  {
    id: 'p3',
    category: 'amenities',
    titleEn: '15,000 sq.ft Luxury Clubhouse & Pool',
    titleMr: '१५,००० चौ. फूट भव्य क्लबहाऊस आणि जलतरण तलाव',
    descriptionEn: 'Featuring indoor badminton courts, gym, banquet hall, and infinity-edge swimming pool.',
    descriptionMr: 'इनडोअर बॅडमिंटन कोर्ट, अत्याधुनिक व्यायामशाळा, बँक्वेट हॉल आणि जलतरण तलाव.',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    badgeEn: 'Clubhouse',
    badgeMr: 'क्लबहाऊस',
  },
  {
    id: 'p4',
    category: 'amenities',
    titleEn: 'Box Cricket Arena & Multi-Sport Court',
    titleMr: 'बॉक्स क्रिकेट टर्फ आणि बहुउद्देशीय क्रीडांगण',
    descriptionEn: 'Floodlit artificial turf box cricket arena and basketball court for sports enthusiasts.',
    descriptionMr: 'रात्रीच्या खेळांसाठी फ्लडलाइट्ससह कृत्रिम टर्फ बॉक्स क्रिकेट व बास्केटबॉल कोर्ट.',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    badgeEn: 'Sports Court',
    badgeMr: 'क्रीडांगण',
  },
  {
    id: 'p5',
    category: 'aerial',
    titleEn: 'Aerial Drone Perspective of Surrounding Enclave',
    titleMr: 'परिसराचे विहंगम ड्रोन छायाचित्र',
    descriptionEn: 'High-altitude panoramic view of the 24.5-acre plotted project and serene green hills.',
    descriptionMr: '२४.५ एकर परिसराचे विहंगम ड्रोन दृश्य आणि नैसर्गिक हिरवेगार डोंगर.',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
    badgeEn: 'Drone Aerial',
    badgeMr: 'ड्रोन दृश्य',
  },
  {
    id: 'p6',
    category: 'site',
    titleEn: 'Oxygen Park & Children Play Enclave',
    titleMr: 'ऑक्सिजन पार्क आणि मुलांचे खेळाचे उद्यान',
    descriptionEn: 'Curated herbal plantations, walking tracks, wooden gazebos, and safe play zones.',
    descriptionMr: 'विविध वनौषधी, जॉगिंग ट्रॅक, बसण्यासाठी सुंदर गॅझेबो आणि मुलांसाठी सुरक्षित खेळणी.',
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
    badgeEn: 'Oxygen Park',
    badgeMr: 'ऑक्सिजन पार्क',
  },
  {
    id: 'p7',
    category: 'masterplan',
    titleEn: 'Asphalt Roads & Underground Infrastructure',
    titleMr: 'डांबरी रस्ते व भूमिगत वीज-पाणी व्यवस्था',
    descriptionEn: 'Concealed power cables, stormwater drainage, and LED solar street poles along all plot lines.',
    descriptionMr: 'सर्व प्लॉट्ससाठी भूमिगत वीज केबल्स, पावसाळी पाणी निचरा व एलईडी सोलर दिवे.',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    badgeEn: 'Infrastructure',
    badgeMr: 'पायाभूत सुविधा',
  },
  {
    id: 'p8',
    category: 'amenities',
    titleEn: 'Party Lawn & Community Celebration Zone',
    titleMr: 'पार्टी लॉन आणि समुदाय उत्सव प्रांगण',
    descriptionEn: 'Spacious manicured green lawn capable of hosting family functions and festive gatherings.',
    descriptionMr: 'कौटुंबिक समारंभ व उत्सवांसाठी प्रशस्त आणि निसर्गरम्य हिरवेगार पार्टी लॉन.',
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
    badgeEn: 'Party Plot',
    badgeMr: 'पार्टी लॉन',
  },
];

export default function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'masterplan' | 'amenities' | 'aerial' | 'site'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/85 backdrop-blur-md pointer-events-auto">
        
        {/* Main Gallery Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-5xl glass-panel rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-4 md:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-bold text-white flex items-center space-x-2">
                  <span>{t('galleryTitle')}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    {filteredPhotos.length} {language === 'mr' ? 'छायाचित्रे' : 'Photos'}
                  </span>
                </h2>
                <p className="text-xs text-slate-400">{t('gallerySubtitle')}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 p-2 md:p-3 border-b border-slate-800/80 bg-slate-900/50 overflow-x-auto text-xs">
            {[
              { id: 'all', label: t('tabAll') },
              { id: 'masterplan', label: t('tabMasterplan') },
              { id: 'amenities', label: t('tabAmenities') },
              { id: 'aerial', label: t('tabAerial') },
              { id: 'site', label: t('tabSite') },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id as any);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/25 border border-sky-400/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Photo Grid */}
          <div className="p-4 md:p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                whileHover={{ y: -3 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden glass-card border border-slate-700/60 cursor-pointer shadow-lg aspect-[4/3]"
              >
                <img
                  src={photo.url}
                  alt={language === 'mr' ? photo.titleMr : photo.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-3">
                  <div className="flex justify-end">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-slate-900/80 backdrop-blur-md text-sky-400 border border-slate-700">
                      {language === 'mr' ? photo.badgeMr : photo.badgeEn}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                      {language === 'mr' ? photo.titleMr : photo.titleEn}
                    </h3>
                    <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">
                      {language === 'mr' ? photo.descriptionMr : photo.descriptionEn}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3.5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400">
            <span>{language === 'mr' ? 'प्रतिमेवर क्लिक करून मोठे दृश्य पहा' : 'Click any photo to view in high-resolution full screen'}</span>
            <button
              onClick={onClose}
              className="py-1.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700"
            >
              {t('close')}
            </button>
          </div>
        </motion.div>

        {/* Fullscreen Lightbox Overlay */}
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-60 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 md:p-8"
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between max-w-5xl">
              <span className="text-xs font-semibold text-slate-400">
                {lightboxIndex! + 1} / {filteredPhotos.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Photo & Navigation Controls */}
            <div className="relative flex items-center justify-center w-full max-w-5xl my-auto">
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-12 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-sky-600 transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div
                onClick={(e) => e.stopPropagation()}
                className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl max-h-[70vh] max-w-full"
              >
                <img
                  src={activePhoto.url}
                  alt={language === 'mr' ? activePhoto.titleMr : activePhoto.titleEn}
                  className="w-auto h-auto max-h-[70vh] object-contain rounded-2xl"
                />
              </div>

              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-12 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-sky-600 transition-all z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption Card */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl text-center glass-panel p-4 rounded-2xl border border-slate-700/80"
            >
              <div className="text-sm font-bold text-white">
                {language === 'mr' ? activePhoto.titleMr : activePhoto.titleEn}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {language === 'mr' ? activePhoto.descriptionMr : activePhoto.descriptionEn}
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </AnimatePresence>
  );
}
