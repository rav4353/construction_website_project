/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7fb',
          100: '#e0e7f3',
          200: '#c2cee7',
          300: '#94add7',
          400: '#5f82c3',
          500: '#3a5ea6',
          600: '#2e4987',
          700: '#253969',
          800: '#1b2747',
          900: '#11172a',
        },
        concrete: '#f3f4f6',
        steel: '#111827',
        accent: '#f59e0b',
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'in-out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        150: '150ms',
        300: '300ms',
        500: '500ms',
        800: '800ms',
      },
    },
  },
  plugins: [],
};
