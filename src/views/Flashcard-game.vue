<template>
  <main class="flashcard-game">
    <GameOverlay />
    <div id="phaseBanner">
      <h1
        v-if="this.flashcardGameStore.phase === 'gameStart'"
        class="phaseTitle text-3xl font-bold underline"
      >
        Game Start
      </h1>
      <h1
        v-if="this.flashcardGameStore.phase === 'drawCards'"
        class="phaseTitle"
      >
        Draw Cards
      </h1>
      <h1
        v-if="this.flashcardGameStore.phase === 'playPhase'"
        class="phaseTitle"
      >
        Play Phase
      </h1>
      <h1 v-if="this.flashcardGameStore.phase === 'endTurn'" class="phaseTitle">
        End Turn
      </h1>
      <h1
        v-if="this.flashcardGameStore.phase === 'enemyTurn'"
        class="phaseTitle"
      >
        Enemy Turn
      </h1>
      <h1
        v-if="this.flashcardGameStore.phase === 'gameOver'"
        class="phaseTitle"
      >
        Game Over
      </h1>
    </div>
    <button @click="changePhase" class="center-button">Phase ändern</button>
  </main>
</template>
<script>
import GameOverlay from "../components/GameOverlay.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
export default {
  components: {
    GameOverlay,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      foo: 0,
      /*phase: "gameStart",*/
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
    },
  },
  methods: {
    changePhase() {
      switch (this.flashcardGameStore.phase) {
        case "gameStart":
          console.log("Das Spiel hat gestartet");
          this.flashcardGameStore.phase = "drawCards";
          break;
        case "drawCards":
          console.log("Spieler zieht Karten");
          this.flashcardGameStore.phase = "playPhase";

          break;
        case "playPhase":
          console.log("Spieler darf Entscheidungen treffen");
          this.flashcardGameStore.phase = "endTurn";
          break;
        case "endTurn":
          console.log("Spieler beendet den Zug");
          this.flashcardGameStore.phase = "enemyTurn";
          break;
        case "enemyTurn":
          console.log("Gegner ist am Zug");
          this.flashcardGameStore.phase = "gameOver";
          break;
        case "gameOver":
          console.log("You died!");
          this.flashcardGameStore.phase = "gameStart";
          break;
        default:
          console.log(`Default behavior.`);
      }
    },
  },
};
</script>

<style>
.flashcard-game {
  background-image: url("../assets/environments/tempel_mit_baeumen_korrigiert.png");
  background-size: 150%;
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
  font-size: 16px;
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
  font-size: 0.7em;
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

  transition: background-color 0.5s, transform 0.5s;
}
</style>
