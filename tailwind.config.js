/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //https://tailwindcss.com/docs/animation#using-custom-values
      //erklärt wie man Animationen zur tailwind.config.js hinzufügt
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInFromBottomLeftToTopRight: {
          "0%": {
            opacity: 0,
            transform: "translate(-100%, 100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        fadeInFromBottomRightToTopLeft: {
          "0%": {
            opacity: 0,
            transform: "translate(100%, 100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        fadeInFromLeftToRight: {
          "0%": {
            opacity: 0,
            transform: "translate(-100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        fadeInFromRightToLeft: {
          "0%": {
            opacity: 0,
            transform: "translate(100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        fadeInFromBottomToTop: {
          "0%": {
            opacity: 0,
            transform: "translate(0, 100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s linear",

        //Bewegungsanimationen
        //cubic-bezier(0.69, 0.16, 0.41, 1.44) sorgt für einen sauberen Rubberband Effekt
        //Cubic Bezier Generator: https://cubic-bezier.com/#.69,.16,.41,1.44
        "fade-in-from-bottom-left-to-top-right":
          "fadeInFromBottomLeftToTopRight 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)",
        "fade-in-from-bottom-right-to-top-left":
          "fadeInFromBottomRightToTopLeft 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)",
        "fade-in-from-left-to-right":
          "fadeInFromLeftToRight 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)",
        "fade-in-from-right-to-left":
          "fadeInFromRightToLeft 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)",
        "fade-in-from-bottom-to-top":
          "fadeInFromBottomToTop 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)",
      },
    },
  },
  plugins: [],
};
