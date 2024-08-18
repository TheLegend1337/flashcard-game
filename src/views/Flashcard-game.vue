<template>
  <main class="flashcard-game">
    <GameOverlay />
    <!-- <h1 v-if="gameStart">Game Start</h1>
    <h1 v-if="drawCards">Draw Cards</h1>
    <h1 v-if="playPhase">Play Phase</h1>
    <h1 v-if="endTurn">End Turn</h1>
    <h1 v-if="enemyTurn">Enemy Turn</h1>
    <h1 v-if="gameOver">Game Over</h1> -->
    <button @click="updateFoo" class="center-button">{{ foo }}</button>
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
    // const phase = "gameStart";
    // switch (phase) {
    //   case "gameStart":
    //     console.log("Das Spiel hat gestartet");
    //     console.log("Ändere Phase auf drawInitialCards");
    //     break;
    //   case "drawInitialCards":
    //     console.log("Spieler zieht beim erstn Mal 5 Karten");
    //     console.log("Ändere Phase auf playPhase");
    //     break;
    //   case "drawCards":
    //     console.log("Spieler zieht eine Karte");
    //     console.log("Ändere Phase auf playPhase");
    //     break;
    //   case "playPhase":
    //     console.log("Spieler darf Entscheidungen");
    //     console.log("Ändere Phase auf endTurn");
    //     break;
    //   case "endTurn":
    //     console.log("Spieler beendet den Zug");
    //     console.log("Ändere Phase auf enemyTurn");
    //     break;
    //   case "enemyTurn":
    //     console.log("Gegner ist am Zug");
    //     console.log("Ändere Phase auf drawCards");
    //     break;
    //   case "gameOver":
    //     console.log("You died!");
    //     break;
    //   default:
    //     console.log(`Sorry, we are out of ${expr}.`);
    // }
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

  watch: {},
  methods: {
    updateFoo() {
      this.foo = this.foo + 1;
      console.log(this.foo);
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
  cursor: pointer;
}
</style>
