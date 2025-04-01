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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.blue.600"),
              "&:hover": {
                color: theme("colors.blue.800"),
              },
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.300"),
              },
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            h4: {
              color: theme("colors.gray.100"),
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.100"),
            },
            figcaption: {
              color: theme("colors.gray.400"),
            },
            blockquote: {
              color: theme("colors.gray.300"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
