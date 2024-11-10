<!--Options API-->
<template>
  <button @click="handleClick">
    <p class="calcFontSize">{{ label }}</p>
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
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      //Komma statt Semicolon benutzen
      //z.b store: useWillpowerStore(),
      //Achtung Doppelpunkt' : '' statt ' = ',
    };
  },
  methods: {
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
  width: 100%;
  height: 100%;
  color: var(--type-on-bg-dark);
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("@/assets/ui-components-backgrounds/button-background-blue-icy.png");
  transition: all 0.5s ease-in-out;
}

.calcFontSize {
  font-size: 16px;
}

button:hover {
  transform: scale(1.2);
}
</style>
