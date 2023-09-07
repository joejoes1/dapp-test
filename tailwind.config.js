/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accentPrimary: '#08D899',
        accentLight: '#B2F1DE',
        successfull: '#3AC922',
        lightGray: '#CDD2DD',
        bgLight: '#F0F5F5',
        textSecondary: '#676767',
        textTertiary: '#959596',
        assentState: '#00B780',
      },
      boxShadow: {
        button: '0 8px 16px #08D89933',
        hoverButton: '0 0 10px 15% #84848426',
        focusButton: '0 0 0 2px #9873FF',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Gilroy', 'sans-serif'],
      },
      maxWidth: {
        appFull: '75rem',
      },
      spacing: {
        1: '.25rem',
        3: '.375rem',
        5: '.5rem',
        7: '.625rem',
        10: '.75rem',
        15: '1rem',
        20: '1.25rem',
        25: '1.5rem',
        // 28: '1.625rem',
        30: '1.75rem',
        32: '1.875rem',
        35: '2rem',
        45: '2.5rem',
        55: '3rem',
        59: '3.125rem',
        65: '3.5rem',
        70: '3.75rem',
        160: '7.5rem',
      },
    },
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
  },
  plugins: [],
};
