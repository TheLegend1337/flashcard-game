<template>
  <!-- Dein Template-Code kommt hier hin -->
  <div class="card-deck">
    <div class="card-deck-counter-border">
      <div class="card-deck-counter pt-[3px]">
        <p class="card-deck-counter-text">{{ sizeofCardDeck }}</p>
      </div>
    </div>
  </div>
  <!-- <button @click="this.cardStore.pushCard" class="card-deck-counter">
      Ziehen
    </button> -->
  <!-- <ButtonPrimary :clickHandler="drawCard" label="Ziehen" /> -->
</template>

<script>
import ButtonPrimary from "@/components/FlashcardGame/Buttons/ButtonPrimary.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useCardStore } from "@/stores/FlashcardGameStores/cardStore";
//importieren der URL, damit das Laden auch korrekt klappt...

export default {
  // Hier kommen alle Optionen der Options API
  components: {
    ButtonPrimary,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      cardStore: useCardStore(),
    };
  },
  computed: {
    sizeofCardDeck() {
      return this.cardStore.getCardDeckLength;
    },
  },
  watch: {},
  methods: {},
  // Methoden, Computed Properties usw. können hier hinzugefügt werden
};
</script>

<style scoped>
.card-deck {
  width: 150px;
  height: 150px;
  /* border: 3px solid black; */
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: 9;
  grid-column-end: 10;
  justify-player: start;
  background-image: url("@/assets/icons/cardDeck.png");
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.card-deck:hover {
  transform: scale(1.2);
}

.card-deck-counter-border {
  transform: rotateZ(19deg);
  padding: 5px;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  position: absolute;
  background: linear-gradient(to top right, #42392d, #d1af8b);
  height: 40px;
  width: 40px;
  right: 106px;
  bottom: 33px;
  box-shadow:
    -1px 1px 13px rgba(255, 255, 255, 0.3),
    5px -8px 7px rgba(0, 0, 0, 0.5);
}
.card-deck-counter {
  /* border: 2px solid var(--border-around-bg-accent); */
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, #562f18, #b67e3b);
  border-radius: 50%;
}
.card-deck-counter-text {
  height: 2rem;
  line-height: 1.2rem;
  font-size: 1.5rem;
  color: #fef2b6;
}

/* Add your component-specific styles here */
</style>
