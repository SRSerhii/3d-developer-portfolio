/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "purple-500": "#a855f7",
        "green-400": "#2ECC71",
        "green-900": "#2ef1710d",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      animation: {
        'pulse-glow': 'pulseGlow 5s ease-in-out infinite',

        'aurora-band1': 'auroraShift 15s ease-in-out infinite',
        'aurora-band2': 'auroraShift 18s ease-in-out infinite reverse',

      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
