'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MapPin, 
  UploadCloud, 
  Navigation, 
  Compass, 
  Sparkles, 
  RotateCcw, 
  FileCode2, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Layers
} from 'lucide-react';
import { Plot, Landmark } from '@/types/plot';
import { fetchLiveLandmarks, generateFallbackLandmarks, reverseGeocode } from '@/utils/landmarkEngine';
import { parseGeoJSONToPlots, repositionPlots, computePlotsCentroid } from '@/utils/cadParser';
import { MASTERPLAN_CENTER, NAKSHATRA_PLOTS, NEARBY_LANDMARKS } from '@/data/nakshatraPlots';
import { useLanguage } from '@/context/LanguageContext';

interface CADImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCenter: [number, number];
  currentPlots: Plot[];
  currentLandmarks: Landmark[];
  onApplyChanges: (params: {
    center: [number, number];
    plots: Plot[];
    landmarks: Landmark[];
    projectName?: string;
  }) => void;
  onResetDefault: () => void;
}

const PRESET_LOCATIONS = [
  {
    id: 'kolhapur',
    name: 'Kalamba Outskirts, Kolhapur (Maharashtra)',
    nameMr: 'काळांबा परिसर, कोल्हापूर (महाराष्ट्र)',
    coords: [16.6628, 74.2235] as [number, number],
    desc: 'Scenic lakeside villa plots along Kolhapur-Gargoti corridor',
  },
  {
    id: 'bhuj',
    name: 'Khari Nadi, Bhuj (Gujarat)',
    nameMr: 'खारी नदी, भुज (गुजरात)',
    coords: [23.2518, 69.6338] as [number, number],
    desc: 'Scenic river gorge plotted enclave',
  },
  {
    id: 'pune',
    name: 'Hinjewadi Tech Hub, Pune (Maharashtra)',
    nameMr: 'हिंजवडी टेक हब, पुणे (महाराष्ट्र)',
    coords: [18.5912, 73.7389] as [number, number],
    desc: 'Prime plotted enclave near Phase 1 IT Park',
  },
  {
    id: 'hyderabad',
    name: 'Gachibowli ORR, Hyderabad (Telangana)',
    nameMr: 'गचीबोवली ओआरआर, हैदराबाद (तेलंगणा)',
    coords: [17.4435, 78.3587] as [number, number],
    desc: 'Luxury gated community along Outer Ring Road',
  },
  {
    id: 'bangalore',
    name: 'Whitefield Green Hills, Bengaluru (Karnataka)',
    nameMr: 'व्हाइटफिल्ड ग्रीन हिल्स, बेंगळुरू (कर्नाटक)',
    coords: [12.9698, 77.7500] as [number, number],
    desc: 'Residential villa development near metro corridor',
  },
  {
    id: 'mumbai',
    name: 'Alibaug Coastal Enclave, Raigad (Maharashtra)',
    nameMr: 'अलिबाग कोस्टल एन्क्लेव्ह, रायगड (महाराष्ट्र)',
    coords: [18.6414, 72.8722] as [number, number],
    desc: 'Holiday retreat plots near Mandwa beach access',
  },
];

export default function CADImportModal({
  isOpen,
  onClose,
  currentCenter,
  currentPlots,
  currentLandmarks,
  onApplyChanges,
  onResetDefault,
}: CADImportModalProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'location' | 'cad'>('location');
  
  // Location coordinates state
  const [latInput, setLatInput] = useState<string>(currentCenter[0].toString());
  const [lngInput, setLngInput] = useState<string>(currentCenter[1].toString());
  const [projectNameInput, setProjectNameInput] = useState<string>('Nakshatra Enclave');

  // Scanning & Landmarks State
  const [isScanningLandmarks, setIsScanningLandmarks] = useState(false);
  const [discoveredLandmarks, setDiscoveredLandmarks] = useState<Landmark[]>(currentLandmarks);
  const [scanStatusMessage, setScanStatusMessage] = useState<string | null>(null);

  // CAD GeoJSON state
  const [geoJsonText, setGeoJsonText] = useState<string>('');
  const [parseError, setParseError] = useState<string | null>(null);
  const [parsedPreviewPlots, setParsedPreviewPlots] = useState<Plot[] | null>(null);

  if (!isOpen) return null;

  const handleSelectPreset = async (preset: typeof PRESET_LOCATIONS[0]) => {
    setLatInput(preset.coords[0].toString());
    setLngInput(preset.coords[1].toString());
    setProjectNameInput(language === 'mr' ? preset.nameMr : preset.name);
    
    // Automatically trigger landmark scan for preset
    await triggerLandmarkScan(preset.coords[0], preset.coords[1], preset.name);
  };

  const triggerLandmarkScan = async (targetLat: number, targetLng: number, hintName?: string) => {
    setIsScanningLandmarks(true);
    setScanStatusMessage(
      language === 'mr' 
        ? 'OpenStreetMap द्वारे २.५ किमी परिसरातील नदी, हॉटेल्स व महत्त्वाच्या खुणा शोधत आहे...' 
        : 'Scanning 2.5km radius for live rivers, transit, hotels & landmarks via OpenStreetMap...'
    );

    try {
      const landmarks = await fetchLiveLandmarks(targetLat, targetLng);
      setDiscoveredLandmarks(landmarks);
      setScanStatusMessage(
        language === 'mr'
          ? `यशस्वी! ${landmarks.length} स्थानिक महत्त्वाच्या खुणा सापडल्या.`
          : `Success! ${landmarks.length} real-world nearby landmarks identified.`
      );
    } catch {
      const fallback = generateFallbackLandmarks(targetLat, targetLng);
      setDiscoveredLandmarks(fallback);
      setScanStatusMessage(
        language === 'mr'
          ? `${fallback.length} स्थानिक खुणा तयार केल्या.`
          : `${fallback.length} contextual landmarks synthesized.`
      );
    } finally {
      setIsScanningLandmarks(false);
    }
  };

  const handleManualScan = () => {
    const lat = parseFloat(latInput);
    const lng = parseFloat(lngInput);
    if (isNaN(lat) || isNaN(lng)) {
      setScanStatusMessage(language === 'mr' ? 'कृपया वैध अक्षांश व रेखांश टाका.' : 'Please enter valid numbers for Lat & Lng.');
      return;
    }
    triggerLandmarkScan(lat, lng);
  };

  const handleApplyCoordinates = () => {
    const lat = parseFloat(latInput);
    const lng = parseFloat(lngInput);
    if (isNaN(lat) || isNaN(lng)) return;

    const newCenter: [number, number] = [lat, lng];
    // Reposition plots to new center
    const relocatedPlots = repositionPlots(currentPlots, newCenter);

    onApplyChanges({
      center: newCenter,
      plots: relocatedPlots,
      landmarks: discoveredLandmarks,
      projectName: projectNameInput,
    });
    onClose();
  };

  // Handle GeoJSON File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setGeoJsonText(content);
      handleParseGeoJSON(content);
    };
    reader.readAsText(file);
  };

  const handleParseGeoJSON = (text: string) => {
    setParseError(null);
    try {
      const plots = parseGeoJSONToPlots(text);
      setParsedPreviewPlots(plots);
      const newCentroid = computePlotsCentroid(plots);
      setLatInput(newCentroid[0].toFixed(5));
      setLngInput(newCentroid[1].toFixed(5));
      // Auto trigger landmark search around new centroid
      triggerLandmarkScan(newCentroid[0], newCentroid[1]);
    } catch (err: any) {
      setParseError(err.message);
      setParsedPreviewPlots(null);
    }
  };

  const handleApplyCADImport = () => {
    if (!parsedPreviewPlots || parsedPreviewPlots.length === 0) return;
    const newCentroid = computePlotsCentroid(parsedPreviewPlots);

    onApplyChanges({
      center: newCentroid,
      plots: parsedPreviewPlots,
      landmarks: discoveredLandmarks,
      projectName: projectNameInput || 'Imported CAD Masterplan',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-md pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-2xl glass-panel rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-4 md:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                  <span>{language === 'mr' ? 'डायनॅमिक लोकेशन व कॅड मॅनेजर' : 'Dynamic Location & CAD Manager'}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold uppercase">
                    PRO
                  </span>
                </h2>
                <p className="text-xs text-slate-400">
                  {language === 'mr'
                    ? 'कोणतेही निर्देशांक टाका किंवा नवीन कॅड (GeoJSON) मास्टरप्लॅन जोडा'
                    : 'Relocate anywhere on Earth or import custom CAD / GeoJSON vectors'}
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

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/50 px-5 pt-3 space-x-3">
            <button
              onClick={() => setActiveTab('location')}
              className={`pb-3 text-xs md:text-sm font-semibold flex items-center space-x-2 border-b-2 transition-all ${
                activeTab === 'location'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{language === 'mr' ? '१. स्थान व निर्देशांक' : '1. Location & Coordinates'}</span>
            </button>

            <button
              onClick={() => setActiveTab('cad')}
              className={`pb-3 text-xs md:text-sm font-semibold flex items-center space-x-2 border-b-2 transition-all ${
                activeTab === 'cad'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode2 className="w-4 h-4" />
              <span>{language === 'mr' ? '२. नवीन कॅड / GeoJSON अपलोड' : '2. Import CAD / GeoJSON'}</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5">
            {activeTab === 'location' && (
              <div className="space-y-5">
                {/* City Presets */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-2 block">
                    {language === 'mr' ? 'त्वरित शहर निवडा (किंवा खालील निर्देशांक बदला):' : 'Quick City Presets (or enter custom GPS below):'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PRESET_LOCATIONS.map((preset) => {
                      const isSelected =
                        Math.abs(parseFloat(latInput) - preset.coords[0]) < 0.001 &&
                        Math.abs(parseFloat(lngInput) - preset.coords[1]) < 0.001;
                      return (
                        <button
                          key={preset.id}
                          onClick={() => handleSelectPreset(preset)}
                          className={`p-2.5 rounded-xl border text-left transition-all flex items-start space-x-2.5 ${
                            isSelected
                              ? 'bg-sky-500/20 border-sky-400 text-white'
                              : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                          }`}
                        >
                          <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-sky-400' : 'text-slate-400'}`} />
                          <div>
                            <div className="text-xs font-bold">{language === 'mr' ? preset.nameMr : preset.name}</div>
                            <div className="text-[10px] text-slate-400">{preset.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Manual Coordinate Inputs */}
                <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                        {language === 'mr' ? 'प्रकल्प नाव' : 'Project Name'}
                      </label>
                      <input
                        type="text"
                        value={projectNameInput}
                        onChange={(e) => setProjectNameInput(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="Nakshatra Enclave"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                        Latitude (अक्षांश)
                      </label>
                      <input
                        type="text"
                        value={latInput}
                        onChange={(e) => setLatInput(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500 font-mono"
                        placeholder="23.2518"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                        Longitude (रेखांश)
                      </label>
                      <input
                        type="text"
                        value={lngInput}
                        onChange={(e) => setLngInput(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500 font-mono"
                        placeholder="69.6338"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={handleManualScan}
                      disabled={isScanningLandmarks}
                      className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs font-semibold flex items-center space-x-2 transition-colors border border-sky-500/30 disabled:opacity-50"
                    >
                      {isScanningLandmarks ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      )}
                      <span>
                        {isScanningLandmarks
                          ? (language === 'mr' ? 'खुणा शोधत आहे...' : 'Scanning Landmarks...')
                          : (language === 'mr' ? 'स्थानिक खुणा स्कॅन करा (OSM)' : 'Scan Nearby Landmarks (OSM)')}
                      </span>
                    </button>
                    <span className="text-[11px] text-slate-400">
                      {discoveredLandmarks.length} {language === 'mr' ? 'खुणा सक्रिय' : 'landmarks active'}
                    </span>
                  </div>

                  {scanStatusMessage && (
                    <div className="text-[11px] p-2 rounded-lg bg-sky-950/50 border border-sky-800/60 text-sky-300 flex items-center space-x-2">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>{scanStatusMessage}</span>
                    </div>
                  )}
                </div>

                {/* Discovered Landmarks List Preview */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      {language === 'mr' ? 'परिसरातील महत्त्वाच्या खुणा (POI Badges):' : 'Nearby Orientation Landmarks (POI Badges):'}
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                    {discoveredLandmarks.map((lm) => (
                      <div
                        key={lm.id}
                        className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <span className="text-sm">
                            {lm.category === 'river' ? '🌊' : lm.category === 'resort' ? '🎉' : lm.category === 'stay' ? '🏨' : lm.category === 'transit' ? '🛣️' : '📍'}
                          </span>
                          <span className="font-semibold text-slate-200 truncate">
                            {language === 'mr' ? lm.nameMr : lm.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-sky-400 shrink-0 ml-2 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                          {lm.distanceMeters}m
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cad' && (
              <div className="space-y-4">
                {/* GeoJSON Upload */}
                <div className="border-2 border-dashed border-slate-700 hover:border-sky-500/60 rounded-2xl p-5 text-center transition-colors bg-slate-900/40">
                  <UploadCloud className="w-8 h-8 mx-auto text-sky-400 mb-2" />
                  <div className="text-xs font-bold text-white mb-1">
                    {language === 'mr' ? 'AutoCAD GeoJSON किंवा Shapefile GeoJSON अपलोड करा' : 'Upload AutoCAD GeoJSON (.geojson / .json)'}
                  </div>
                  <p className="text-[11px] text-slate-400 mb-3">
                    {language === 'mr'
                      ? 'ऑटोकॅडमधून MAPEXPORT किंवा mygeodata.cloud वापरून GeoJSON कन्व्हर्ट करा'
                      : 'Export layers from AutoCAD/Civil3D via MAPEXPORT or use mygeodata.cloud DXF converter'}
                  </p>
                  <label className="inline-flex items-center px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold cursor-pointer transition-colors shadow-lg shadow-sky-600/20">
                    <span>{language === 'mr' ? 'फाइल निवडा' : 'Select GeoJSON File'}</span>
                    <input
                      type="file"
                      accept=".geojson,.json"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Paste Area */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {language === 'mr' ? 'किंवा GeoJSON टेक्स्ट पेस्ट करा:' : 'Or paste GeoJSON text directly:'}
                  </label>
                  <textarea
                    value={geoJsonText}
                    onChange={(e) => {
                      setGeoJsonText(e.target.value);
                      if (e.target.value.trim().startsWith('{')) {
                        handleParseGeoJSON(e.target.value);
                      }
                    }}
                    rows={4}
                    placeholder='{"type": "FeatureCollection", "features": [...]}'
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-300 font-mono focus:outline-none focus:border-sky-500"
                  />
                </div>

                {parseError && (
                  <div className="p-3 rounded-xl bg-red-950/50 border border-red-800/80 text-red-300 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{parseError}</span>
                  </div>
                )}

                {parsedPreviewPlots && (
                  <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="font-bold">
                        {language === 'mr' 
                          ? `${parsedPreviewPlots.length} प्लॉट्स यशस्वीपणे ओळखले!` 
                          : `${parsedPreviewPlots.length} Plots Successfully Parsed!`}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono">
                      Center: {latInput}, {lngInput}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 md:p-5 border-t border-slate-800 flex items-center justify-between bg-slate-900/90">
            <button
              onClick={() => {
                onResetDefault();
                onClose();
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center space-x-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'mr' ? 'डीफॉल्ट कोल्हापूर मास्टरप्लॅन' : 'Reset to Kolhapur Default'}</span>
            </button>

            <div className="flex items-center space-x-2.5">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {language === 'mr' ? 'रद्द करा' : 'Cancel'}
              </button>

              {activeTab === 'location' ? (
                <button
                  onClick={handleApplyCoordinates}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-sky-500/25 flex items-center space-x-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{language === 'mr' ? 'लागू करा व उड्डाण करा' : 'Apply & Fly to Location'}</span>
                </button>
              ) : (
                <button
                  onClick={handleApplyCADImport}
                  disabled={!parsedPreviewPlots || parsedPreviewPlots.length === 0}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-500/25 flex items-center space-x-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{language === 'mr' ? 'कॅड नकाशा लोड करा' : 'Load CAD Map'}</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
