/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "var(--vp-c-text-1)",
        "text-muted": "var(--vp-c-text-2)",
        "text-subtle": "var(--vp-c-text-3)",

        "emerald": {
          DEFAULT: "#43d646",
          50: "#daf7da",
          100: "#c9f3ca",
          200: "#a7eca9",
          300: "#86e588",
          400: "#64dd67",
          500: "#43d646",
          600: "#28b92b",
          700: "#1e8b20",
          800: "#145d16",
          900: "#0a2e0b",
          950: "#051705"
        }
      }
    },
  },
  plugins: [],
}

