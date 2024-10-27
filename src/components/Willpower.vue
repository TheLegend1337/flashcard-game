<!--Options API-->
<template>
  <div class="willpower">
    <div class="willpower-count">{{ willpowerStore.willpower }}</div>
  </div>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useWillpowerStore } from "@/stores/FlashcardGameStores/willpowerStore";
export default {
  data() {
    return {
      store: useFlashcardGameStore(),
      willpowerStore: useWillpowerStore(),
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.willpower {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  grid-row-start: 7;
  grid-row-end: 8;
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/icons/brain-icon4.png");
  background-size: 120%;
  background-position: center;
  /* filter: drop-shadow(3px 8px 15px #0c293b); */
}

.willpower-count {
  height: 65px;
  color: white;
  font-size: 2rem;
  text-shadow: rgb(2, 38, 42) 3px 0px 0px,
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
</style>
