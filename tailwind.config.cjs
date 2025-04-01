/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#121212",
          card: "#1e1e1e",
          text: {
            primary: "#f3f4f6",
            secondary: "#9ca3af",
          },
        },
        light: {
          bg: "#f9fafb",
          card: "#ffffff",
          text: {
            primary: "#111827",
            secondary: "#4b5563",
          },
        },
      },
      backgroundColor: {
        dark: "#121212",
        light: "#f9fafb",
      },
      textColor: {
        dark: {
          DEFAULT: "#f3f4f6",
          muted: "#9ca3af",
        },
        light: {
          DEFAULT: "#111827",
          muted: "#4b5563",
        },
      },
    },
  },
  plugins: [],
};
