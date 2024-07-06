import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'light-border': '#2C2D43',
    },
    colors: {
        // New colors
        blue: {
          primary: '#B3E5FC',
          'primary-8': '#27BEFF14',
          'primary-20': '#27BEFF33',
          'primary-25': '#27BEFF40',
          light: '#27BEFF',
          dark: '#235BC8',
          'dark-blue-1': '#1D2539',
          'dark-blue-2': '#1D2D42',
      },
      green: {
          primary: '#26C35C',
          'primary-8': '#26C35C14',
          'primary-20': '#26C35C33',
          'primary-25': '#26C35C40',
          100: '#3CC96C',
          200: '#51CF7D',
          300: '#67D58D',
          400: '#7DDB9D',
          500: '#93E1AE',
          600: '#A8E7BE',
          dark: '#14823A',
      },
      red: {
          primary: '#E13E3E',
          'primary-8': '#E13E3E14',
          'primary-20': '#E13E3E33',
          'primary-25': '#E13E3E40',
          100: '#E45151',
          200: '#E76565',
          300: '#EA7878',
          400: '#ED8B8B',
          500: '#F09F9F',
          600: '#F3B2B2',
          dark: '#751515',
      },
      rarity: {
          legendary: '#F97316',
          epic: '#A855F7',
          rare: '#3B82F6',
          uncommon: '#22C55E',
      },
      light: {
          1: '#A9A9CA',
          2: '#5F6078',
          3: '#2C2D43',
          4: '#28283E',
          5: '#23243C',
          6: '#23243C',
      },
      misc: {
          'alert-yellow': '#FFC700',
          yellow: '#FFD850',
          purple: '#B250FF',
          pink: '#DE59D1',
          green: '#00DEB6',
          orange: '#FF7347',
          'green-yellow': '#C7FF50',
      },
      dark: {
          1: '#1E2030',
          2: '#1C1D2E',
          3: '#171828',
          4: '#161725',
          5: '#10111C',
      },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: 'var(--font-roboto)'
      }
    },
  },
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ]
};
export default config;
