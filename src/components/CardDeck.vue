<template>
  <!-- Dein Template-Code kommt hier hin -->
  <div class="card-deck">
    <button @click="this.cardStore.pushCard" class="card-deck-counter">
      Ziehen
    </button>
  </div>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useCardStore } from "@/stores/FlashcardGameStores/cardStore";
export default {
  // Hier kommen alle Optionen der Options API
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      cardStore: useCardStore(),
    };
  },
  // Methoden, Computed Properties usw. können hier hinzugefügt werden
};
</script>

<style scoped>
.card-deck {
  width: 50px;
  height: 50px;
  border: 3px solid black;
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: 9;
  grid-column-end: 10;
  justify-self: start;
}
/* Add your component-specific styles here */
</style>
