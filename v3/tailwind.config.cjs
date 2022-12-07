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
        "primary": "#a2e271",
        "secondary": "#e879f9",
        "accent": "#5eead4",
        "neutral": "#1C222B",
        "base-100": "#111827",
        "info": "#19A2EB",
        "success": "#5BE693",
        "warning": "#F8BD35",
        "error": "#F3587C",
      },
    }, "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
};
