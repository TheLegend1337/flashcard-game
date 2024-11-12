<template>
  <main class="flashcard-game">
    <div class="grid-container game-overlay">
      <InfoBanner
        :key="this.phase"
        :phase="this.phase"
        class="animate-enter-right-exit-left-with-fade-in"
      />
      <HandOfCards
        ref="HandOfCards"
        :card="drawnCard"
        class="animate-fade-in-from-bottom-to-top"
      />
      <!--emitted dass Karte abgeworfen wird und übergibt Kartenobjekt an Parent -->
      <Player class="animate-fade-in-from-left-to-right" />
      <Monster class="animate-fade-in-from-right-to-left" />
      <Willpower class="animate-fade-in-from-left-to-right" />
      <!-- class="animate-fade-in-from-bottom-left-to-top-right" -->
      <DiscardPile /><!--Parent nimmt das Objekt und übergibt es als Prop an Abwurfstapel -->
      <CardDeck
        ref="CardDeck"
        class="animate-fade-in-from-bottom-right-to-top-left"
      />
      <!-- <QuizBox /> -->
    </div>
    <div id="phaseBanner" class="animate-fade-in">
      <button @click="drawCard(1)" class="m-2">Ziehen</button>
      <button @click="discard" class="m-2">Ablegen</button>
      <button @click="changePhase" class="m-2">Phase ändern</button>

      <h1 v-if="this.phase === 'gameStart'" class="phaseTitle">Game Start</h1>
      <h1 v-if="this.phase === 'drawCards'" class="phaseTitle">Draw Cards</h1>
      <h1 v-if="this.phase === 'playPhase'" class="phaseTitle">Play Phase</h1>
      <h1 v-if="this.phase === 'endTurn'" class="phaseTitle">End Turn</h1>
      <h1 v-if="this.phase === 'enemyTurn'" class="phaseTitle">Enemy Turn</h1>
      <h1 v-if="this.phase === 'gameOver'" class="phaseTitle">Game Over</h1>
    </div>
  </main>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import HandOfCards from "../components/HandOfCards.vue";
import Player from "../components/Player.vue";
import Monster from "../components/Monster.vue";
import Willpower from "../components/Willpower.vue";
import DiscardPile from "../components/DiscardPile.vue";
import CardDeck from "../components/CardDeck.vue";
// import QuizBox from "../components/QuizBox.vue";
import InfoBanner from "@/components/FlashcardGame/container/InfoBanner.vue";
export default {
  components: {
    HandOfCards,
    Player,
    Monster,
    Willpower,
    DiscardPile,
    CardDeck,
    // QuizBox,
    InfoBanner,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      drawnCard: null,
      foo: 0,
      phase: "",
      // nextPhase: "",
      // flashcards: [],
      // question: "What is a card?",
      // response: "This is the Cards Response.",
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    this.phase = this.flashcardGameStore.phase; //Brauche ich das im Mounted?
    console.log("mounted");
    console.log("Phase ist: " + this.flashcardGameStore.phase);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },

  watch: {
    phase(value) {
      console.log(value);
      this.changePhase();
    },
  },
  computed: {
    newPhase: {
      get() {
        return this.phase;
      },
      set(value) {
        this.flashcardGameStore.phase = value;
      },
    },
  },
  methods: {
    async changePhase() {
      switch (this.phase) {
        case "gameStart":
          console.log("Das Spiel hat gestartet");
          setTimeout(() => {
            this.phase = "drawCards";
          }, 3000);
          break;
        case "drawCards":
          console.log("Spieler zieht Karten");
          await this.drawCard(5);
          this.phase = "playPhase";

          break;
        case "playPhase":
          console.log("Spieler darf Entscheidungen treffen");
          // this.phase = "endTurn";
          break;
        case "endTurn":
          console.log("Spieler beendet den Zug");
          this.phase = "enemyTurn";
          break;
        case "enemyTurn":
          console.log("Gegner ist am Zug");
          this.phase = "gameOver";
          break;
        case "gameOver":
          console.log("You died!");
          this.phase = "gameStart";
          break;
        default:
          console.log(`Default behavior.`);
      }
    },
    async drawCard(amount) {
      for (let i = 0; i < amount; i++) {
        await this.drawSinglecard();
      }
    },
    drawSinglecard() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const card = this.$refs.CardDeck.drawCard();
          console.log(card);
          this.drawnCard = card;
          resolve(card);
        }, 200);
      });
    },
  },
};
</script>

<style>
.flashcard-game {
  /* background-image: url("../assets/environments/card-game-kit-background-field-2.png"); */
  /* background-image: url("../assets/environments/combat-area-background-inside-office-room-2.png"); */
  /* background-image: url("../assets/environments/combat-area-background-inside-school-room-blue.png"); */

  background-image: url("../assets/environments/battle-area-background-home-office-1.png");

  background-size: cover;
  background-repeat: no-repeat;
  /* background-position-y: -230px; */
  background-position: 50% 100%;
  width: 100vw;
  height: 93vh;
  border: 1px solid beige;
  overflow: hidden;
}
.center-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
}
.phaseTitle {
  color: var(--type-on-bg-light);
}

#phaseBanner {
  clip-path: polygon(9% 0, 91% 0, 100% 49%, 91% 100%, 9% 100%, 0% 50%);
  width: 500px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;

  background: linear-gradient(
    135deg,
    var(--bg-accent-gradient-start),
    var(--bg-accent-gradient-end)
  ); /* Farbverlauf für den Hintergrund */
  padding: 10px;
  border: 1px solid white;
  color: white;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Leichter Schatten für 3D-Effekt */

  transition:
    background-color 0.5s,
    transform 0.5s;
}

.game-overlay {
  display: absolute;
  height: 100%;
  width: 100%;
  z-index: 1000;
}

.grid-container {
  display: grid;
  /* grid-template-columns: repeat(10, 1fr); */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: repeat(10, 1fr); */
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
}
</style>
