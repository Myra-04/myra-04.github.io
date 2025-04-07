
import type { Config } from "tailwind/types";

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
        '2xl': '1400px',
      }
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Sarawak cultural colors
        sarawak: {
          red: '#8C1D18',
          yellow: '#F4B942',
          green: '#235E3D',
          brown: '#6A4928',
          black: '#000000',
          cream: '#F5F2E9',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            a: {
              color: '#8C1D18',
              '&:hover': {
                color: '#235E3D',
              },
              textDecoration: 'underline',
            },
            h1: {
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
              lineHeight: '1.3',
              fontWeight: '700',
              fontSize: '2rem',
            },
            h2: {
              marginTop: '2.5rem',
              marginBottom: '1rem',
              lineHeight: '1.3',
              fontWeight: '600',
              fontSize: '1.75rem',
            },
            h3: {
              marginTop: '2.25rem',
              marginBottom: '0.75rem',
              lineHeight: '1.3',
              fontWeight: '600',
              fontSize: '1.5rem',
            },
            p: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              lineHeight: '1.8',
              fontSize: '1.125rem',
            },
            li: {
              marginBottom: '0.75rem',
              lineHeight: '1.7',
            },
            ul: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            ol: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#F4B942',
              backgroundColor: '#F5F2E9',
              padding: '1rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            code: {
              fontWeight: '500',
            },
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
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
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      backgroundImage: {
        'pua-pattern': "url('./src/assets/pua-pattern.png')",
      },
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
