<template>
  <div class="handOfCards">
    <Card v-for="card in cardStore.cards" :key="card.id" :title="card.title" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useCardStore } from "@/stores/FlashcardGameStores/cardStore";
export default {
  components: {
    Card,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      cardStore: useCardStore(),
    };
  },
};
</script>

<style scoped>
.handOfCards {
  display: flex;
}
</style>
