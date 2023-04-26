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
        "secondary": "#c74e95",
        "accent": "#00A4EF",
        "neutral": "#373737",
        "base-100": "#101010",
        "info": "#38bdf8",
        "success": "#2ccf4a",
        "warning": "#E28D03",
        "error": "#FB565E",
      },
    }, "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
};
