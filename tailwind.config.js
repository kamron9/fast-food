/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1.5rem",
          md: "1.5rem",
          xl: "2.5rem",
          "2xl": "5rem",
        },
      },
      borderColor: {
        primary: "#DEDEE2",
      },
      textColor: {
        white: "#ffffff",
        primary: "#2E1066",
        deepPurple: "#2F2B4A",
        purple: "#2E1066",
        gray: "#DEDEE2",
        black: "#1B1D1F",
        whiteSmoke: "#FAFAFD",
      },
      backgroundColor: {
        white: "#ffffff",
        whiteSmoke: "#FAFAFD",
        primary: "#2E1066",
        deepPurple: "#2F2B4A",
        purple: "#2E1066",
        gray: "#F4F5F7",
        black: "#1B1D1F",
        transparent: "transparent",
        green: "#EEFDD7",
        orange: "rgba(253,233,210)",
        lightPurple: "rgba(228,233,255)",
        pink: "rgba(255,235,235)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
