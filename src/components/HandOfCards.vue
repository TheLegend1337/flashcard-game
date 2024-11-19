<template>
  <div
    class="handOfCards fixed bottom-[-5%] left-1/2 z-10 h-[300px] w-4/6 -translate-x-1/2"
  >
    <div tag="div" class="container flex flex-wrap items-center justify-center">
      <Card
        class="-m-10"
        v-for="(card, index) in handOfCards"
        :key="card.id"
        :card="card"
        :title="card.title"
        :description="card.description"
        :defense="card.defense"
        :damage="card.damage"
        :heal="card.heal"
        :willpowerCost="card.willpowerCost"
        :cardArtworkSrc="card.cardArtworkSrc"
        :id="card.id"
        :handOfCardsLength="handOfCards.length"
        :cardIndex="index"
        :isBound="card.isBound"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import CardTest from "./CardTest.vue";
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
    CardTest,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      cardStore: useCardStore(),
      handOfCards: [],
    };
  },
  watch: {
    card(card) {
      console.log("New card willpowerCost:", card.willpowerCost);
      this.handOfCards.push(card);
    },
  },

  methods: {},
};
</script>

<style scoped>
.handOfCards {
  /* width: 100%; */
  /* grid-row-start: 8;
  grid-row-end: 10;
  grid-column-start: 3;
  grid-column-end: 8; */
}

/* Transition classes for entering and leaving */
/* .card-transition-enter-active,
.card-transition-leave-active {
}

.card-transition-enter-from,
.card-transition-leave-to {
} */
</style>
