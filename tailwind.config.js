/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx,html}",
    "./components/**/*.{ts,tsx,js,jsx,html}",
    "./*.{ts,tsx,js,jsx,html}",
  ],
  theme: {
    extend: {
      // extend colors if you rely on custom names like "electric"
      colors: {
        // example fallback if you used "electric" in classes
        electric: {
          500: "#00D4AA",
          600: "#00B48F",
        },
        navy: {
          950: "#050712",
        },
      },
    },
  },
  plugins: [],
};
