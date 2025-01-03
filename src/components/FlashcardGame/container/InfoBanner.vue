<template>
  <div
    v-if="leftText !== '' && rightText !== ''"
    class="enter-right-exit-left-with-fade-in-animation info-banner invisible fixed left-1/2 top-1/2 z-40 h-20 w-3/6 -translate-x-1/2 transform sm:h-20 md:h-24 lg:h-28 xl:h-36 2xl:h-36"
    @animationstart="handleAnimationStart"
    @animationend="handleAnimationEnd"
  >
    <img
      class="absolute top-0"
      src="@/assets/ui-components-backgrounds/border-ornaments-top.png"
      alt=""
    />
    <img
      src="@/assets/ui-components-backgrounds/border-ornaments-bottom.png"
      class="absolute bottom-0"
    />
    <h2
      class="absolute left-[15%] top-1/2 -translate-y-1/2 text-xl text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
    >
      {{ leftText }}
    </h2>
    <img
      class="absolute left-1/2 top-1/2 h-[120%] -translate-x-1/2 -translate-y-1/2 sm:h-[130%] md:h-[140%] lg:h-[150%] xl:h-[160%] 2xl:h-[170%]"
      src="@/assets/icons/crossed-swords-icon.png"
      alt=""
    />
    <h2
      class="absolute right-[15%] top-1/2 -translate-y-1/2 text-xl text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
    >
      {{ rightText }}
    </h2>
  </div>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";

//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
// import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
export default {
  name: "InfoBanner",
  components: {
    //Component
  },
  props: {
    // Definiere Props hier
    // objectName:{
    //   type: object,
    //   default: null,
    // }
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
    };
  },
  computed: {
    leftText() {
      switch (this.flashcardGameStore.phase) {
        case "gameStart":
          return "Kampf";
        case "drawCards":
          return "Entfessel";
        case "endTurn":
          return "Gegner";
        case "gameOver":
          return "Du hast";
        default:
          return "";
      }
    },
    rightText() {
      switch (this.flashcardGameStore.phase) {
        case "gameStart":
          return "beginnt!";
        case "drawCards":
          return "Karten!";
        case "endTurn":
          return "am Zug";
        case "gameOver":
          return "dazu gelernt!";
        default:
          return "";
      }
    },
  },
  watch: {},

  methods: {
    handleAnimationStart() {
      this.$emit("info-banner-animation-started");
    },
    handleAnimationEnd() {
      if (this.flashcardGameStore.phase === "endTurn") {
        this.flashcardGameStore.phase = "enemyTurn";
      }
      this.$emit("info-banner-animation-ended");
    },
  },
};
</script>

<style scoped>
.icon {
}

.info-banner {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6951155462184874) 6%,
    rgba(0, 0, 0, 0.7987570028011204) 20%,
    rgba(0, 0, 0, 0.8995973389355743) 50%,
    rgba(0, 0, 0, 0.7987570028011204) 80%,
    rgba(0, 0, 0, 0.7035189075630253) 94%,
    rgba(0, 0, 0, 0) 100%
  );
}

@keyframes enterRightExitLeftWithFadeIn {
  0% {
    visibility: hidden;
    opacity: 0;
    transform: translate(50%, 0);
  }
  30% {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0);
  }
  70% {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0);
  }
  100% {
    visibility: hidden;
    opacity: 0;
    transform: translate(-100%, 0);
  }
}
.enter-right-exit-left-with-fade-in-animation {
  animation: enterRightExitLeftWithFadeIn 3s ease-in-out;
}
</style>
