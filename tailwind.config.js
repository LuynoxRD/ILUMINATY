/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: "#D7263D", // Rojo carmesí corporativo
        },
      },
      backgroundColor: {
        page: "#ffffff",
        light: "#f9fafb", // gray-50
      },
      textColor: {
        primary: "#1a202c", // gray-900
      },
      borderRadius: {
        md: "0.5rem",
        lg: "1rem",
      },
    },
  },
  plugins: [],
}
