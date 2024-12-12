<template>
  <div
    class="handOfCards fixed bottom-[-10%] left-1/2 z-10 h-[300px] w-4/6 -translate-x-1/2"
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
        :discard="this.cardStore.isDiscardAll"
        @unleashed-card-clicked="unleashedCardClicked"
        @discard-animation-ended="handleDiscardAnimationEnd(card)"
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

    // selectedCard: {
    //   type: Object,
    //   default: null,
    // },
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
  computed: {},
  watch: {
    card(newCard) {
      const existingCard = this.handOfCards.some(
        (existingCard) => existingCard.id === newCard.id,
      );

      if (!existingCard) {
        this.handOfCards.push(newCard);
      }
    },
  },

  methods: {
    unleashedCardClicked(cardData) {
      this.$emit("unleashed-card-clicked", cardData);
    },
    handleDiscardAnimationEnd(card) {
      // Remove the card after animation ends
      // if (this.isDiscardAnimationPlaying === true) {
      const filteredHandOfCards = this.handOfCards.filter(
        (existingCard) => existingCard.id !== card.id,
      );
      this.handOfCards = filteredHandOfCards;
      console.log("Length: " + this.handOfCards.length);
    },
  },
};
</script>

<style scoped>
.handOfCards {
}
@media screen and (max-width: 1440px) {
  .handOfCards {
    bottom: -20%;
  }
}
</style>
