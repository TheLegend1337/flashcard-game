<template>
  <div class="discard-pile-wrapper">
    <div class="discard-pile">
      <div class="discard-pile-counter">
        <button @click="this.store.popCard" class="card-deck-counter">
          Abwerfen
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/flashcardGameStore";
export default {
  data() {
    return {
      store: useFlashcardGameStore(),
    };
  },
};
</script>

<style scoped>
.discard-pile-wrapper {
  width: 50px;
  height: 50px;
  border: 3px solid white;
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: end;
}
.discard-pile {
}
</style>
