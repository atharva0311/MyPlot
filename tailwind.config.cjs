/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          900: '#064e3b',
        },
        spacer: {
          bg: '#090d16',
          card: 'rgba(15, 23, 42, 0.75)',
          panel: '#0f172a',
          accent: '#38bdf8',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        plot: {
          available: '#10b981',
          availableFill: 'rgba(16, 185, 129, 0.25)',
          booked: '#f59e0b',
          bookedFill: 'rgba(245, 158, 11, 0.25)',
          sold: '#ef4444',
          soldFill: 'rgba(239, 68, 68, 0.20)',
          selected: '#38bdf8',
          selectedFill: 'rgba(56, 189, 248, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.5)',
        'glow-sky': '0 0 25px -5px rgba(56, 189, 248, 0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
};
