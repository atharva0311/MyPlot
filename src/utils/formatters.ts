import { PlotStatus } from '@/types/plot';

export function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹${cr} Cr`;
  }
  if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2);
    return `₹${lakh} Lakhs`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatArea(sqFt: number): {
  sqFt: string;
  sqYds: string;
  sqMeters: string;
  guntas: string;
} {
  const sqYds = (sqFt / 9).toFixed(1);
  const sqMeters = (sqFt / 10.764).toFixed(1);
  const guntas = (sqFt / 1089).toFixed(2);

  return {
    sqFt: `${sqFt.toLocaleString('en-IN')} sq.ft`,
    sqYds: `${sqYds} sq.yds`,
    sqMeters: `${sqMeters} sq.m`,
    guntas: `${guntas} guntas`,
  };
}

export function getStatusBadgeStyle(status: PlotStatus): {
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
        label: 'Available',
      };
    case 'booked':
      return {
        bg: 'bg-amber-500/15',
        text: 'text-amber-400',
        border: 'border-amber-500/40',
        glow: 'shadow-[0_0_12px_rgba(245,158,11,0.3)]',
        label: 'Booked',
      };
    case 'sold':
      return {
        bg: 'bg-rose-500/15',
        text: 'text-rose-400',
        border: 'border-rose-500/40',
        glow: 'shadow-[0_0_12px_rgba(239,68,68,0.3)]',
        label: 'Sold',
      };
  }
}
