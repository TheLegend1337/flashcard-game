<template>
  <main class="flashcard-game">
    <GameOverlay />
    <div id="phase-banner">
      <h1 v-if="phase === 'gameStart'" class="phase-title">Game Start</h1>
      <h1 v-if="phase === 'drawCards'" class="phase-title">Draw Cards</h1>
      <h1 v-if="phase === 'playPhase'" class="phase-title">Play Phase</h1>
      <h1 v-if="phase === 'endTurn'" class="phase-title">End Turn</h1>
      <h1 v-if="phase === 'enemyTurn'" class="phase-title">Enemy Turn</h1>
      <h1 v-if="phase === 'gameOver'" class="phase-title">Game Over</h1>
    </div>
    <button @click="changePhase" class="center-button">Phase ändern</button>
  </main>
</template>
<script>
//TODO:
//Ich muss hier alle Phasen jeweils als Funktion umsetzen
//und dann muss ich auf veränderung der Phase im Store hören können:
//https://pinia.vuejs.org/core-concepts/state.html
//dann kann der Game View auf Veränderungen der Phasen reagieren.
//andere Komponenten können dann die Phase an verschiedenen Stellen ändern.
import GameOverlay from "../components/GameOverlay.vue";

// import { useFlashcardGameStore } from "@/stores/flashcardGameStore";

export default {
  components: {
    GameOverlay,
  },
  data() {
    return {
      foo: 0,
      phase: "gameStart",
      // store : useFlashcardGameStore(),
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
    //  this.store.changePhase('GameStart');
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
      switch (this.phase) {
        case "gameStart":
          console.log("Das Spiel hat gestartet");
          this.phase = "drawCards";
          break;
        case "drawCards":
          console.log("Spieler zieht Karten");
          this.phase = "playPhase";

          break;
        case "playPhase":
          console.log("Spieler darf Entscheidungen treffen");
          this.phase = "endTurn";
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
phase-title {
  color: var(--type-on-bg-light);
  background-color: var(--bg-light-05);
}

#phase-banner {
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
