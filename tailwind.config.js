const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    borderRadius: {
      'xxs': '2px',
      'xs': '4px',
      'DEFAULT': '4px',
      's': '6px',
      'sm': '8px',
      'm': '12px',
      'ml': '16px',
      'lg': '24px',
      'xl': '32px',
      'full': '999px'
    },
    extend: {
      spacing: {
        'xxs': '2px',
        'xs': '4px',
        'DEFAULT': '4px',
        's': '6px',
        'sm': '8px',
        'm': '12px',
        'ml': '16px',
        'lg': '24px',
        'xl': '32px',
        'full': '999px'
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-600)',
          foreground: 'var(--primary-foreground)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          1000: 'var(--primary-1000)'
        },
        secondary: {
          DEFAULT: 'var(--secondary-600)',
          foreground: 'var(--secondary-foreground)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
          1000: 'var(--secondary-1000)'
        },
        white: 'var(--white)',
        black: 'var(--black)',
        background: 'var(--background)',
        card: 'var(--card)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        input: 'var(--input)',
        neutral: {
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
          1000: 'var(--neutral-1000)'
        },
        success: {
          DEFAULT: 'var(--success-300)',
          100: 'var(--success-100)',
          200: 'var(--success-200)',
          300: 'var(--success-300)',
        },
        warning: {
          DEFAULT: 'var(--warning-300)',
          100: 'var(--warning-100)',
          200: 'var(--warning-200)',
          300: 'var(--warning-300)',
        },
        error: {
          DEFAULT: 'var(--error-300)',
          100: 'var(--error-100)',
          200: 'var(--error-200)',
          300: 'var(--error-300)',
        },
        border: 'var(--neutral-800)',
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
