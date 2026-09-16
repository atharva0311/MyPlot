import { PlotStatus } from '@/types/plot';
import { Language } from './translations';

export type LinearUnit = 'ft' | 'm' | 'yd';
export type AreaUnit = 'sqFt' | 'sqYds' | 'sqMeters' | 'guntas' | 'acres';

export function formatCurrency(amount: number, lang: Language = 'en'): string {
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return lang === 'mr' ? `₹${cr} कोटी` : `₹${cr} Cr`;
  }
  if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2);
    return lang === 'mr' ? `₹${lakh} लाख` : `₹${lakh} Lakhs`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function convertLength(feet: number, unit: LinearUnit, lang: Language = 'en'): { value: string; unitLabel: string; full: string } {
  if (unit === 'm') {
    const meters = (feet * 0.3048).toFixed(1);
    const label = lang === 'mr' ? 'मी.' : 'm';
    return { value: meters, unitLabel: label, full: `${meters} ${label}` };
  }
  if (unit === 'yd') {
    const yards = (feet / 3).toFixed(1);
    const label = lang === 'mr' ? 'गज' : 'yd';
    return { value: yards, unitLabel: label, full: `${yards} ${label}` };
  }
  const label = lang === 'mr' ? 'फूट' : 'ft';
  return { value: `${feet}`, unitLabel: label, full: `${feet} ${label}` };
}

export function convertArea(sqFt: number, unit: AreaUnit, lang: Language = 'en'): { value: string; unitLabel: string; full: string } {
  switch (unit) {
    case 'sqYds': {
      const val = (sqFt / 9).toFixed(1);
      const label = lang === 'mr' ? 'चौ. वार / गज' : 'sq.yds';
      return { value: val, unitLabel: label, full: `${val} ${label}` };
    }
    case 'sqMeters': {
      const val = (sqFt / 10.764).toFixed(1);
      const label = lang === 'mr' ? 'चौ. मीटर' : 'sq.m';
      return { value: val, unitLabel: label, full: `${val} ${label}` };
    }
    case 'guntas': {
      const val = (sqFt / 1089).toFixed(2);
      const label = lang === 'mr' ? 'गुंठे' : 'guntas';
      return { value: val, unitLabel: label, full: `${val} ${label}` };
    }
    case 'acres': {
      const val = (sqFt / 43560).toFixed(3);
      const label = lang === 'mr' ? 'एकर' : 'acres';
      return { value: val, unitLabel: label, full: `${val} ${label}` };
    }
    case 'sqFt':
    default: {
      const val = sqFt.toLocaleString('en-IN');
      const label = lang === 'mr' ? 'चौ. फूट' : 'sq.ft';
      return { value: val, unitLabel: label, full: `${val} ${label}` };
    }
  }
}

export function formatArea(sqFt: number, lang: Language = 'en'): {
  sqFt: string;
  sqYds: string;
  sqMeters: string;
  guntas: string;
  acres: string;
} {
  const sqYds = (sqFt / 9).toFixed(1);
  const sqMeters = (sqFt / 10.764).toFixed(1);
  const guntas = (sqFt / 1089).toFixed(2);
  const acres = (sqFt / 43560).toFixed(3);

  return {
    sqFt: `${sqFt.toLocaleString('en-IN')} ${lang === 'mr' ? 'चौ. फूट' : 'sq.ft'}`,
    sqYds: `${sqYds} ${lang === 'mr' ? 'चौ. वार / गज' : 'sq.yds'}`,
    sqMeters: `${sqMeters} ${lang === 'mr' ? 'चौ. मी.' : 'sq.m'}`,
    guntas: `${guntas} ${lang === 'mr' ? 'गुंठे' : 'guntas'}`,
    acres: `${acres} ${lang === 'mr' ? 'एकर' : 'acres'}`,
  };
}

export function getStatusBadgeStyle(status: PlotStatus, lang: Language = 'en'): {
  bg: string;
  text: string;
  border: string;
  glow: string;
  label: string;
} {
  switch (status) {
    case 'available':
      return {
        bg: 'bg-emerald-500/15',
        text: 'text-emerald-400',
        border: 'border-emerald-500/40',
        glow: 'shadow-[0_0_12px_rgba(16,185,129,0.3)]',
        label: lang === 'mr' ? 'उपलब्ध' : 'Available',
      };
    case 'booked':
      return {
        bg: 'bg-amber-500/15',
        text: 'text-amber-400',
        border: 'border-amber-500/40',
        glow: 'shadow-[0_0_12px_rgba(245,158,11,0.3)]',
        label: lang === 'mr' ? 'बुक केलेले' : 'Booked',
      };
    case 'sold':
      return {
        bg: 'bg-rose-500/15',
        text: 'text-rose-400',
        border: 'border-rose-500/40',
        glow: 'shadow-[0_0_12px_rgba(239,68,68,0.3)]',
        label: lang === 'mr' ? 'विक्री झालेले' : 'Sold',
      };
  }
}

