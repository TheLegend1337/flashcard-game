<template>
  <!-- Dein Template-Code kommt hier hin -->
  <div class="card-deck">
    <div class="card-deck-counter-border">
      <div class="card-deck-counter">
        <p class="card-deck-counter-text">3</p>
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
        //10 Angriffskarten
        //Eine Schaden über Zeit karte "Do you smell Popcorn?" verursacht 1 Giftschaden pro Runde über 5 Runden
        //Sodbrannt
        //Zerstörerische brennende Sod
        //Constipation "Das Gegnerische Monster hat die Kontrolle über ihr Leben verloren und eine ganze Pizza alleine gegessen"
        //Email nach 17 Uhr "Das Monster ist gestresst und verliert 1 HP"
        //Passive Agressivität "Verursache 1 Schaden wenn du angegriffen wirst"
        //Burnout: Ein Monster erhält 3 Schaden

        //5 Heilkarten
        //Verband: Erhalte +5 Hp
        //Drauf pusten: Erhalte +1 HP
        //Pflaster: Erhalte +3 HP
        //Schmerzmittel: Erhalte +1HP

        //5 Rüstungskarten
        //
        //Tilt Proof: erhalte +3 Rüstung

        //Willenskraft Karten
        //Multitasking "Erhalte jede Runde +1 Willenskraft"
        //Gehaltserhöhung "Erhalte jede Runde +2 Willenskraft"
        //Gelber Schein "Erhalte 1 Willenskraft zurück"
        //Fresspaket: erhalte +X Willenskraft
        //Erhalte Sodbrennen "Erleide am Ende des Zuges 1 Schaden"
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
  width: 150px;
  height: 150px;
  /* border: 3px solid black; */
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: 9;
  grid-column-end: 10;
  justify-self: start;
  background-image: url("@/assets/icons/cardDeck.png");
  background-size: cover;
  background-position: center;
  position: relative;
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
