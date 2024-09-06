<template>
  <div class="handOfCards">
    <Card v-for="card in store.cards" :key="card.id" :title="card.title" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { useFlashcardGameStore } from "@/stores/flashcardGameStore";

export default {
  components: {
    Card,
  },
  data() {
    return {
      store: useFlashcardGameStore(),
    };
  },
};
</script>

<style scoped>
.handOfCards {
  display: flex;
}
</style>
