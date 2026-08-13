/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#090D12',
          900: '#0B0F14',
          850: '#0F141B',
          800: '#131922',
          700: '#1A222C',
          600: '#232B36',
          500: '#3A4552',
        },
        mist: {
          100: '#F3F6F9',
          300: '#C4CCD6',
          400: '#8B98A9',
          600: '#5C6774',
        },
        amber: {
          400: '#F2B84B',
          500: '#E6A431',
        },
        stream: {
          400: '#4FD1C5',
          500: '#33B5AA',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, rgba(11,15,20,1)), linear-gradient(rgba(139,152,169,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,152,169,0.08) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(242,184,75,0.15), 0 8px 30px -8px rgba(242,184,75,0.15)',
        streamglow: '0 0 0 1px rgba(79,209,197,0.15), 0 8px 30px -8px rgba(79,209,197,0.2)',
      },
      keyframes: {
        flow: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
      },
      animation: {
        flow: 'flow 1.2s linear infinite',
        blink: 'blink 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
