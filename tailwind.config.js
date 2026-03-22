/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parasanth: {
          white: '#ffffff',
          grey: {
            light: '#f5f5f7',
            gallery: '#f8f8f8',
            mid: '#d2d2d7',
            dark: '#86868b',
          },
          red: '#e82127',
          charcoal: '#1a1a1a',
        },
        // ... (existing legacy aliases)
        charcoal: {
          DEFAULT: '#1a1a1a',
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5a5a5a',
          700: '#4a4a4a',
          800: '#3d3d3d',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        silver: {
          DEFAULT: '#c0c0c0',
          light: '#e8e8e8',
          dark: '#8a8a8a',
        },
        tesla: {
          red: '#e82127',
          white: '#ffffff',
        },
      },
      borderRadius: {
        '4xl': '2.5rem', // 40px
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.1)',
        'soft-2xl': '0 25px 65px -15px rgba(0, 0, 0, 0.12)',
        'red-glow': '0 10px 40px -10px rgba(232, 33, 39, 0.15)',
        'gallery-card': '0 40px 80px -15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
