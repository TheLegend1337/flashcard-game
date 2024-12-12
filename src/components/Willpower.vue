<!--Options API-->
<template>
  <div
    class="willpower"
    :class="{
      animateWillpowerEmptyShake: animationFlag,
      'animate-fade-in-from-left-to-right': loadingAnimationFlag,
    }"
    @animationend="resetAnimationFlag"
  >
    <div class="willpower-count relative">
      <span class="absolute left-[23%] top-[-5%] block h-[5px] w-[5px]">{{
        flashcardGamestore.willpower
      }}</span>
      <span class="absolute left-[30%] top-[30%] block h-[5px] w-[5px]">/</span>
      <span class="absolute left-[55%] top-[30%] block h-[5px] w-[5px]">
        {{ flashcardGamestore.maxWillpower }}</span
      >
    </div>
  </div>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useWillpowerStore } from "@/stores/FlashcardGameStores/willpowerStore";
export default {
  props: {
    animationToggle: {
      type: Boolean,
      default: false,
      Required: true,
    },
  },
  data() {
    return {
      flashcardGamestore: useFlashcardGameStore(),
      willpowerStore: useWillpowerStore(),
      animationFlag: false,
      loadingAnimationFlag: true,
    };
  },
  mounted() {},
  computed: {},
  watch: {
    "flashcardGamestore.willpower"() {
      if (this.flashcardGamestore.willpower === 0) {
        this.animationFlag = true;
        this.$emit("willpower-dropped-zero");
      }
    },
    animationToggle() {
      this.animationFlag = true;
    },
  },
  methods: {
    resetAnimationFlag() {
      this.animationFlag = false;
      this.loadingAnimationFlag = false;
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.willpower {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  bottom: 30%;
  left: 10%;
  background-image: url("@/assets/icons/brain-icon4.png");
  background-size: 120%;
  background-position: center;
  /* filter: drop-shadow(3px 8px 15px #0c293b); */
}

.willpower-count {
  height: 65px;
  /* color: white; */
  color: rgb(216, 239, 255);
  font-size: 2rem;
  text-shadow:
    rgb(2, 38, 42) 3px 0px 0px,
    rgb(2, 38, 42) 2.83487px 0.981584px 0px,
    rgb(2, 38, 42) 2.35766px 1.85511px 0px,
    rgb(2, 38, 42) 1.62091px 2.52441px 0px,
    rgb(2, 38, 42) 0.705713px 2.91581px 0px,
    rgb(2, 38, 42) -0.287171px 2.98622px 0px,
    rgb(2, 38, 42) -1.24844px 2.72789px 0px,
    rgb(2, 38, 42) -2.07227px 2.16926px 0px,
    rgb(2, 38, 42) -2.66798px 1.37182px 0px,
    rgb(2, 38, 42) -2.96998px 0.42336px 0px,
    rgb(2, 38, 42) -2.94502px -0.571704px 0px,
    rgb(2, 38, 42) -2.59586px -1.50383px 0px,
    rgb(2, 38, 42) -1.96093px -2.27041px 0px,
    rgb(2, 38, 42) -1.11013px -2.78704px 0px,
    rgb(2, 38, 42) -0.137119px -2.99686px 0px,
    rgb(2, 38, 42) 0.850987px -2.87677px 0px,
    rgb(2, 38, 42) 1.74541px -2.43999px 0px,
    rgb(2, 38, 42) 2.44769px -1.73459px 0px,
    rgb(2, 38, 42) 2.88051px -0.838247px 0px;
}

@keyframes willpowerEmptyShake {
  0% {
    transform: translateX(0);
    filter: drop-shadow(0px 0px 20px rgb(79, 217, 255));
  }
  10% {
    transform: translateX(-4px) rotateZ(-2deg);
    filter: brightness(1.4);
  }
  20% {
    transform: translateX(-8px) rotateZ(2deg);
  }
  30% {
    transform: translateX(-6px) rotateZ(-1.5deg);
    filter: brightness(1);
  }
  40% {
    transform: translateX(6px) rotateZ(1.5deg);
  }
  50% {
    transform: translateX(-4px) rotateZ(-1deg);
  }
  60% {
    transform: translateX(4px) rotateZ(1deg);
  }
  70% {
    transform: translateX(-2px) rotateZ(-0.5deg);
  }
  80% {
    transform: translateX(2px) rotateZ(0.5deg);
  }
  90% {
    transform: translateX(-1px) rotateZ(0deg);
  }
  100% {
    transform: translateX(0) rotateZ(0deg);
    filter: drop-shadow(0px 0px 20px var(--drop-shadow-blue));
  }
}

.animateWillpowerEmptyShake {
  animation: willpowerEmptyShake 0.6s step-end;
}
</style>
