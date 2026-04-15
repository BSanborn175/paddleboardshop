import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: '#050D1A',
        'deep-ocean': '#0A1628',
        abyss: '#0F1E36',
        surface: '#0D2040',
        teal: {
          DEFAULT: '#00C9B1',
          dim: '#00A896',
          glow: 'rgba(0,201,177,0.15)',
        },
        sky: {
          glow: '#38BDF8',
        },
        amber: {
          glow: '#FBBF24',
        },
        text: {
          primary: '#F0F8FF',
          secondary: '#C8DFF0',
          muted: '#6B8FAA',
        },
      },
      backgroundImage: {
        'gradient-page': 'linear-gradient(160deg, #050D1A 0%, #0A1F3D 45%, #062229 100%)',
        'gradient-teal': 'linear-gradient(135deg, #00C9B1, #38BDF8)',
        'gradient-card': 'linear-gradient(145deg, rgba(13,32,64,0.6), rgba(5,13,26,0.8))',
      },
      boxShadow: {
        'teal-glow': '0 0 40px rgba(0,201,177,0.12)',
        'teal-strong': '0 8px 30px rgba(0,201,177,0.4)',
        card: '0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 16px 48px rgba(0,201,177,0.15), 0 8px 32px rgba(0,0,0,0.6)',
      },
      borderRadius: {
        xl: '20px',
        '2xl': '28px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
