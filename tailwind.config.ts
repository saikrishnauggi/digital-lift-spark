import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // Brand colors from design system
        brand: {
          primary: 'hsl(var(--brand-primary))',
          secondary: 'hsl(var(--brand-secondary))',
          accent: 'hsl(var(--brand-accent))',
        },
        // Background colors
        bg: {
          primary: 'hsl(var(--bg-primary))',
          secondary: 'hsl(var(--bg-secondary))',
          accent: 'hsl(var(--bg-accent))',
        },
        // Text colors
        text: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          light: 'hsl(var(--text-light))',
          accent: 'hsl(var(--text-accent))',
        },
        // UI colors
        border: {
          light: 'hsl(var(--border-light))',
          medium: 'hsl(var(--border-medium))',
        }
      },
      backgroundImage: {
        'gradient-brand': 'var(--gradient-brand)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'elegant': 'var(--shadow-elegant)',
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
        'hover': 'var(--shadow-hover)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)', 
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slideInRight': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'scaleIn': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'countUp': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(var(--brand-secondary) / 0.5)' },
          '50%': { boxShadow: '0 0 40px hsl(var(--brand-secondary) / 0.8)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideInRight': 'slideInRight 0.5s ease-out',
        'scaleIn': 'scaleIn 0.4s ease-out',
        'countUp': 'countUp 0.8s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
