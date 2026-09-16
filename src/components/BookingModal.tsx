'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap, Calendar, User, Phone, Mail, ArrowRight } from 'lucide-react';
import { Plot } from '@/types/plot';
import { formatCurrency } from '@/utils/formatters';
import { useLanguage } from '@/context/LanguageContext';

interface BookingModalProps {
  plot: Plot | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmBooking: (plotId: string) => void;
}

export default function BookingModal({
  plot,
  isOpen,
  onClose,
  onConfirmBooking,
}: BookingModalProps) {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    visitDate: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen || !plot) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refCode = `NAK-BOOK-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(refCode);
      setIsSubmitting(false);
      setBookingConfirmed(true);
      onConfirmBooking(plot.id);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setBookingConfirmed(false);
    setBookingRef('');
    setFormData({ fullName: '', phone: '', email: '', visitDate: '', notes: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-lg glass-panel rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-slate-950 font-black shadow-lg">
                <Zap className="w-5 h-5 fill-slate-950" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">{t('bookTitle')} {plot.plotNumber}</h2>
                <p className="text-xs text-slate-400">{plot.zone} • {formatCurrency(plot.totalPrice, language)}</p>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!bookingConfirmed ? (
            <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4 flex-1 text-xs">
              
              {/* Summary Card */}
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-slate-300">
                  <span>{language === 'mr' ? 'निवडलेला प्लॉट:' : 'Selected Plot:'}</span>
                  <strong className="text-white">{t('plotNumber')} {plot.plotNumber} ({plot.areaSqFt} sq.ft)</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{language === 'mr' ? 'एकूण किंमत:' : 'Total Plot Value:'}</span>
                  <strong className="text-emerald-400">{formatCurrency(plot.totalPrice, language)}</strong>
                </div>
                <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800">
                  <span>{language === 'mr' ? 'परतावायोग्य आरक्षण टोकन:' : 'Refundable Reservation Token:'}</span>
                  <strong className="text-amber-300">₹1,00,000</strong>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">{t('fullName')} *</label>
                  <div className="relative flex items-center">
                    <User className="absolute left-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={language === 'mr' ? 'तुमचे संपूर्ण नाव टाका' : 'Enter your full name'}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">{t('phoneNumber')} *</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">{t('emailAddress')} *</label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">{t('preferredVisitDate')}</label>
                  <div className="relative flex items-center">
                    <Calendar className="absolute left-3 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">{t('specialRequests')}</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={language === 'mr' ? 'गृहकर्ज मार्गदर्शन, सानुकूल आवश्यकता...' : 'Specify bank loan assistance, customization requests...'}
                    className="w-full p-3 rounded-xl glass-input text-xs"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>{language === 'mr' ? 'नोंदणी प्रक्रिया सुरू आहे...' : 'PROCESSING RESERVATION...'}</span>
                    </div>
                  ) : (
                    <>
                      <span>{t('confirmBooking')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Confirmation Receipt View */
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{t('bookingSuccess')}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'mr'
                    ? `प्लॉट क्र. ${plot.plotNumber} पुढील ४८ तासांसाठी तुमच्या नावे तात्पुरता आरक्षित करण्यात आला आहे.`
                    : `Plot #${plot.plotNumber} has been temporarily blocked for 48 hours under your reservation request.`}
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-slate-700/80 text-xs space-y-2 text-left">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">{language === 'mr' ? 'संदर्भ क्रमांक:' : 'Booking Reference:'}</span>
                  <span className="font-extrabold text-sky-400">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{language === 'mr' ? 'अर्जदाराचे नाव:' : 'Applicant:'}</span>
                  <span className="font-semibold text-white">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{language === 'mr' ? 'मोबाईल नंबर:' : 'Phone:'}</span>
                  <span className="font-semibold text-white">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{language === 'mr' ? 'प्लॉट स्थिती:' : 'Plot Status Updated:'}</span>
                  <span className="font-bold text-amber-400 uppercase">{language === 'mr' ? 'आरक्षित (Booked)' : 'Booked (Blocked)'}</span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all"
              >
                {t('close')}
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

