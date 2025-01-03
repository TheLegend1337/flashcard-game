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
        // Pulse Animations
        pulseScale: {
          "0%": { scale: "1.0" },
          "50%": { scale: "1.05" },
          "100%": { scale: "1.00" },
        },
        breathing: {
          "0%": { scale: "1.0" },
          "50%": { scale: "1.02" },
          "100%": { scale: "1.00" },
        },
        attacking: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(-100%, 0)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        attackingFromLeftToRight: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(100%, 0)",
          },
          "100%": {
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
        enterRightExitLeftWithFadeIn: {
          "0%": {
            visibility: "hidden",
            opacity: 0,
            transform: "translate(100%, 0)",
          },
          "40%": {
            visibility: "visible",
            opacity: 1,
            transform: "translate(-50%, 0)",
          },
          "60%": {
            visibility: "visible",
            opacity: 1,
            transform: "translate(-50%, 0)",
          },
          "100%": {
            visibility: "hidden",
            opacity: 0,
            transform: "translate(-100%, 0)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s linear",
        // Pulse Animations
        "pulse-scale": "pulseScale 2s infinite",
        breathing: "breathing 1s infinite",
        // evtl attacking vom Monster mit den Keyframes ins Monster verlagern und dann mit event triggern
        attacking: "attacking 1s ease-in-out ",
        //gleiches gilt für den Player.
        "attacking-from-left-to-right":
          "attackingFromLeftToRight 1s ease-in-out infinite",
        //Icon Effects

        //Directional animations
        //cubic-bezier(0.69, 0.16, 0.41, 1.44) sorgt für einen sauberen Rubberband Effekt
        //Cubic Bezier Generator: https://cubic-bezier.com/#.69,.16,.41,1.44

        "fade-in-from-bottom-right-to-top-left":
          "fadeInFromBottomRightToTopLeft 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)",
        "fade-in-from-left-to-right":
          "fadeInFromLeftToRight 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)",
        "fade-in-from-right-to-left":
          "fadeInFromRightToLeft 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)",
        "fade-in-from-bottom-to-top":
          "fadeInFromBottomToTop 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)",
        //
        "enter-right-exit-left-with-fade-in":
          "enterRightExitLeftWithFadeIn 4s ease-in-out",
      },
    },
  },
  plugins: [],
};
