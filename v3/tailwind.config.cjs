/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#4ade80",
        "secondary": "#fc4ef0",
        "accent": "#67e8f9",
        "neutral": "#1E1D2B",
        "base-100": "#07091a",
        "info": "#38bdf8",
        "success": "#38bdf8",
        "warning": "#E28D03",
        "error": "#FB565E",
      },
    }, "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
};
