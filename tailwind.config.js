/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //https://tailwindcss.com/docs/animation#using-custom-values
      //erklärt wie man Animationen zur tailwind.config.js hinzufügt
      keyframes: {
        rubberband: {
          "0%": {
            transform: "scaleX(0.9) scaleY(1)",
          },
          "40%": {
            transform: "scaleX(1.30) scaleY(0.65)",
          },
          "55%": {
            transform: "scaleX(0.85) scaleY(1)",
          },
          "65%": {
            transform: "scaleX(1.09) scaleY(0.55)",
          },
          "75%": {
            transform: "scaleX(0.80)  scaleY(0.85)",
          },
          "85%": {
            transform: "scaleX(1.01)  scaleY(0.40)",
          },
          "90%": {
            transform: "scaleX(0.75)  scaleY(0.80)",
          },
          "95%": {
            transform: "scaleX(1.05)  scaleY(0.95)",
          },
          "100%": {
            transform: "scaleX(1) scaleY(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "rubber-band": "rubberband 1s linear 2 ",
        "fade-in": "fadeIn 2s linear",
      },
    },
  },
  plugins: [],
};
