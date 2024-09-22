<template>
  <div class="handOfCards">
    <!-- <Card v-for="card in cardStore.cards" :key="card.id" :title="card.title" /> -->
    <Card v-for="card in handOfCards" :key="card.id" :title="card.title" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useCardStore } from "@/stores/FlashcardGameStores/cardStore";
export default {
  props: {
    card: {
      type: Object,
      default: null,
    },
  },
  components: {
    Card,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      cardStore: useCardStore(),
      handOfCards: [
        { id: 1, title: "Karte 1" },
        { id: 2, title: "Karte 2" },
        { id: 3, title: "Karte 3" },
      ],
    };
  },
  watch: {
    card(card) {
      this.handOfCards.push(card);
    },
  },
  methods: {},
};
</script>

<style scoped>
.handOfCards {
  display: flex;
  width: 100%;
  grid-row-start: 8;
  grid-row-end: 10;
  grid-column-start: 3;
  grid-column-end: 8;
}
</style>
