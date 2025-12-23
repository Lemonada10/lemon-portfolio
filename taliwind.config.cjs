/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b1020",
          900: "#0f172a",
          800: "#111c33"
        },
        paper: {
          50: "#fbfbfe",
          100: "#f6f7fb"
        },
        lemon: {
          500: "#facc15",
          600: "#eab308"
        },
        haze: {
          500: "#6366f1"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15,23,42,0.10)",
        softDark: "0 24px 80px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};
