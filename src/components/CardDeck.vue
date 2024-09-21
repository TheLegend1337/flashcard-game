<template>
  <!-- Dein Template-Code kommt hier hin -->
  <div class="card-deck">
    <!-- <button @click="this.cardStore.pushCard" class="card-deck-counter">
      Ziehen
    </button> -->
    <!-- <ButtonPrimary :clickHandler="drawCard" label="Ziehen" /> -->
  </div>
</template>

<script>
import ButtonPrimary from "@/components/FlashcardGame/Buttons/ButtonPrimary.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useCardStore } from "@/stores/FlashcardGameStores/cardStore";
export default {
  // Hier kommen alle Optionen der Options API
  components: {
    ButtonPrimary,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      cardStore: useCardStore(),
      cardDeck: [
        { id: 1, title: "Karte 1" },
        { id: 2, title: "Karte 2" },
        { id: 3, title: "Karte 3" },
        { id: 4, title: "Karte 4" },
        { id: 5, title: "Karte 5" },
      ],
    };
  },
  methods: {
    drawCard() {
      //this.cardStore.pushCard();
      return this.cardDeck.pop();
    },
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
