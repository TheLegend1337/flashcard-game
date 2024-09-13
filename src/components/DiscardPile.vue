<template>
  <div class="discard-pile-wrapper">
    <div class="discard-pile">
      <div class="discard-pile-counter">
        <!-- <button @click="this.cardStore.popCard" class="card-deck-counter">
          Abwerfen
        </button> -->
        <!-- <ButtonPrimary :clickHandler="discard" label="Abwerfen" /> -->
        <ButtonPrimary @button-clicked="discard" label="Abwerfen" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/FlashcardGame/Buttons/ButtonPrimary.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useCardStore } from "@/stores/FlashcardGameStores/cardStore";
export default {
  components: {
    ButtonPrimary,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      cardStore: useCardStore(),
    };
  },
  methods: {
    discard() {
      this.cardStore.popCard();
    },
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
