/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D32F2F',
        secondary: '#2C2C2C',
        accent: '#D32F2F',
        destructive: '#B71C1C',
        border: '#333333',
        input: '#333333',
        ring: '#333333',
        background: '#000000',
        foreground: '#ffffff',
        muted: '#333333',
        card: '#1A1A1A',
        'border-border': '#333333',
        'primary-foreground': '#ffffff',
        'secondary-foreground': '#ffffff',
        'accent-foreground': '#ffffff',
        'destructive-foreground': '#ffffff',
      },
    },
  },
  plugins: [],
}
