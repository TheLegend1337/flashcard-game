<script setup>
import { useFlashcardGameStore } from "@/stores/flashcardGameStore";
const store = useFlashcardGameStore();
</script>
<template>
  <div class="willpower">
    <div class="willpower-count">{{ store.willpower }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.willpower {
  background-color: rgb(104, 153, 208);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid blue;
  grid-row-start: 7;
  grid-row-end: 8;
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  align-items: center;
  justify-content: center;
}
.willpower-count {
  height: 40px;
  font-size: larger;
}
</style>
