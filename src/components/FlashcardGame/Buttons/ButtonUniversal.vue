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
  >
    <p class="calcTextSize">{{ label }}</p>
  </button>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";

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
      required: true,
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
    console.log(
      "Button Width is:" +
        this.buttonWidth +
        "And Button Height is:" +
        this.buttonHeight,
    );
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
      if (this.clickHandler) {
        this.clickHandler();
      } else {
        this.$emit("button-clicked");
      }

      if (this.route) {
        this.$router.push(this.route);
      }
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
  margin: 3px;
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
