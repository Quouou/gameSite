/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "rober-medium": ["rober-medium", "sans-serif"],
        "rober-regular": ["rober-regular", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #001f4d, #003366, #004080, #00509e)",
      },
      colors: {
        blue: {
          50: "#dfdff0",
          75: "#dfdff2",
          100: "#f0f2fa",
          200: "#010101",
          300: "#4fb7dd",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
        "custom-blue-1": "#001f4d",
        "custom-blue-2": "#003366",
        "custom-blue-3": "#004080",
        "custom-blue-4": "#00509e",
      },
    },
  },
  plugins: [],
};
