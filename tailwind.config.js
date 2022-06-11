module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#338afd",
          "secondary": "#F000B8",
          "accent": "#37CDBE",
          "neutral": "#251D58",
          "base-100": "#FFFFFF",
          "info": "#1F1632",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
