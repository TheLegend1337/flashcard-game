<script setup>
//TODO:
//Ich muss hier alle Phasen jeweils als Funktion umsetzen
//und dann muss ich auf veränderung der Phase im Store hören können:
//https://pinia.vuejs.org/core-concepts/state.html
//dann kann der Game View auf Veränderungen der Phasen reagieren.
//andere Komponenten können dann die Phase an verschiedenen Stellen ändern.

//umschreiben in Options API bevor ich hier rumfriemel
// import Card from "../components/Card.vue";
import GameOverlay from "../components/GameOverlay.vue";
// import Matchfield from "../components/Matchfield.vue";
</script>

<template>
  <main class="flashcard-game">
    <GameOverlay />
  </main>
</template>
<script>
/*
import { useRoundsmanagerStore } from "@/stores/roundsmanager";
// import Flashcards from './db.json';
export default {
  data() {
    return {
      store : useRoundsmanagerStore(),
      flashcards: [],
      question: "What is a card?",
      response: "This is the Cards Response.",
    };
  },
  mounted() {
         this.store.changePhase('GameStart');
  },
  methods: {
    playcard(){
      this.store.decreaseWillpower(2);
    }

  }
};*/
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
</style>
