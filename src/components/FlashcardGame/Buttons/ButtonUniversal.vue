<!--Options API-->
<template>
  <button
    :style="`width:${buttonWidth}px; height: ${buttonHeight}px`"
    ref="button"
    class="h-full w-full"
    :class="{
      secondary: type === 'secondary',
      primary: type === 'primary',
      correct: type === 'correct',
      wrong: type === 'wrong',
    }"
    @click="handleClick"
    @mouseenter="playHoverSound"
  >
    <p class="calcTextSize">{{ label }}</p>
  </button>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import SoundHandler from "@/helpers/soundHandler";
import soundEffect_ButtonMouseEnter from "@/assets/sounds/soundEffects/bookFlip3.ogg";
export default {
  props: {
    clickHandler: {
      type: Function,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: "primary",
      //accepts primary, secondary
    },
    buttonWidth: {
      type: Number,
      default: 150,
      //accepts primary, secondary
    },
    buttonHeight: {
      type: Number,
      default: 50,
      //accepts primary, secondary
    },
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      buttonTextSize: 0,
    };
  },
  mounted() {
    this.soundHandler = new SoundHandler();
    this.soundHandler.registerSound(
      "buttonHover",
      soundEffect_ButtonMouseEnter,
    );

    // console.log(
    //   "Button Width is:" +
    //     this.buttonWidth +
    //     "And Button Height is:" +
    //     this.buttonHeight,
    // );
    this.buttonTextSize = this.calcTextSize();
    this.$el.style.setProperty(
      "--caculated-font-size",
      `${this.buttonTextSize}px`,
    );
  },
  methods: {
    calcTextSize() {
      let percentage = 0.3;
      let whole = this.buttonHeight;
      let part = whole * percentage;

      return part;
    },
    handleClick() {
      if (this.type === "wrong") {
        this.$emit("button-wrong-clicked");
        this.flashcardGameStore.answeredQuestionsCounter =
          this.flashcardGameStore.answeredQuestionsCounter + 1;
        console.log(
          "Answered Questions: " +
            this.flashcardGameStore.answeredQuestionsCounter,
        );
      } else if (this.type === "correct") {
        this.$emit("button-correct-clicked");
        this.flashcardGameStore.answeredQuestionsCounter =
          this.flashcardGameStore.answeredQuestionsCounter + 1;
        console.log(
          "Answered Questions: " +
            this.flashcardGameStore.answeredQuestionsCounter,
        );
      } else if (this.type === "primary") {
        //Differentiate between primary and secondary
        this.$emit("button-primary-clicked");
      } else if (this.type === "secondary") {
        //Differentiate between primary and secondary
        this.$emit("button-secondary-clicked");
      }
      if (this.clickHandler) {
        this.clickHandler();
      } else {
        //I can always listen to this event in Parents
        this.$emit("button-clicked");
      }
      if (this.route) {
        this.$router.push(this.route);
      }
    },
    playHoverSound() {
      this.soundHandler.playSound("buttonHover", 0.03); //TODO Audiofatique bebheben, 3 versch. gepitchte Soundeffekte nutzen: https://youtube.com/shorts/GNzUFyuZtWM?si=f_YQ1qch0W-4VWJd
    },
  },
};
</script>

<style scoped>
button {
  letter-spacing: 1px;
  color: var(--type-on-bg-dark);
  background-repeat: no-repeat;
  background-size: cover;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 1px 3px 2px -1px #fcb365;
  background-image: url("@/assets/ui-components-backgrounds/button-background-blue-icy-rectangle.png");
  transition: transform 0.5s ease-in-out;
}
.calcTextSize {
  font-size: var(--caculated-font-size);
}
button:hover {
  transform: scale(1.1);
}
.primary {
  color: var(--type-on-bg-dark);
}

.correct {
  color: var(--type-on-bg-light);

  background-image: url("@/assets/ui-components-backgrounds/button-background-green.png");
}
.wrong {
  color: var(--type-on-bg-light);
  background-image: url("@/assets/ui-components-backgrounds/button-background-red.png");
}
.secondary {
  /* position: relative; */
  color: var(--type-on-bg-light);
  background-image: url("@/assets/ui-components-backgrounds/button-background-sand-rectangle.png");
}

/* .secondary::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  mix-blend-mode: overlay;
  background-color: red;
} */
</style>
