<template>
  <div
    class="handOfCards fixed bottom-[-10%] left-1/2 z-10 h-[300px] w-4/6 -translate-x-1/2"
  >
    <div tag="div" class="container flex flex-wrap items-center justify-center">
      <Card
        :class="{
          animateDiscardCard: selectedForDiscard,
        }"
        class="-m-10"
        v-for="(drawnCard, index) in handOfCards"
        :key="drawnCard.id"
        :card="drawnCard"
        :title="drawnCard.title"
        :description="drawnCard.description"
        :defense="drawnCard.defense"
        :damage="drawnCard.damage"
        :heal="drawnCard.heal"
        :willpowerCost="drawnCard.willpowerCost"
        :cardArtworkSrc="drawnCard.cardArtworkSrc"
        :id="drawnCard.id"
        :handOfCardsLength="handOfCards.length"
        :cardIndex="index"
        :isBound="drawnCard.isBound"
        @unleashed-card-clicked="unleashedCardClicked"
        @animationend="handleAnimationEnd(selectedCard)"
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
    drawnCard: {
      type: Object,
      default: null,
    },
    selectedCard: {
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
      discardingCardId: 0,
      // isDiscardAnimationPlaying: false,
    };
  },
  computed: {
    selectedForDiscard() {
      if (this.selectedCard.id === this.discardingCardId) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    selectedCard(card) {
      const existingCard = this.handOfCards.some(
        (existingCard) => existingCard.id === card.id,
      );

      if (existingCard) {
        this.discardingCardId = card.id;
        // this.isDiscardAnimationPlaying = true;
      }
    },
    drawnCard(newCard) {
      this.handOfCards.push(newCard);
    },
  },

  methods: {
    unleashedCardClicked(cardData) {
      this.$emit("unleashed-card-clicked", cardData);
    },
    handleAnimationEnd(card) {
      // Remove the card after animation ends
      // if (this.isDiscardAnimationPlaying === true) {
      if (this.selectedForDiscard === true) {
        this.handOfCards = this.handOfCards.filter(
          (existingCard) => existingCard.id !== card.id,
        );
        this.discardingCardId = 0;
        this.isDiscardAnimationPlaying = false;
      }
    },
  },
};
</script>

<style scoped>
.handOfCards {
}

@keyframes discardCard {
  0% {
    transform: translate(0%, -100%) scale(1);
  }
  50% {
    transform: translate(0%, -100%) scale(1.5);
  }

  100% {
    transform: translate(-300%, -20%) scale(0);
  }
}
.animateDiscardCard {
  animation: discardCard 0.5s ease-in-out forwards;
}
</style>
