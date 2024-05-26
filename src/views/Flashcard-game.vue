<script setup>

//TODO:
//Ich muss hier alle Phasen jeweils als Funktion umsetzen 
//und dann muss ich auf veränderung der Phase im Store hören können: 
//https://pinia.vuejs.org/core-concepts/state.html
//dann kann der Game View auf Veränderungen der Phasen reagieren.
//andere Komponenten können dann die Phase an verschiedenen Stellen ändern.

// import Card from "../components/Card.vue";
import GameOverlay from "../components/GameOverlay.vue";
// import Matchfield from "../components/Matchfield.vue";

//importiere roundsmanager Store 
//import { useRoundsmanagerStore } from "@/stores/roundsmanager";
const phase = 'GameStart'; //setze phase im roundsmanager auf GameStart
switch (phase) {
  case 'GameStart':
    console.log('Setze Karten in Hand auf 0');
    console.log('Setze Lebenspunkte von Held auf 100%');
    console.log('Setze Willenskraft von Held auf 100%');
    console.log('Lade Überschrift Spiel hat gestartet ');
    console.log('Lade zufälliges Monster');
    break;
  case 'DrawCards':
    console.log('Wenn Runde 0 dann Ziehe 5 Karten');
    console.log('Wenn mehr als 0 Karten auf Hand ziehe nur eine Karte');
    console.log('Wenn WK nicht voll, Erhöhe Willenskraft um 1');
  case 'PlayCards':
    console.log('Spieler spielt Karte aus');
    break;
  case 'EndTurn':
    console.log('Spieler beendet seinen Zug');
    break;
  case 'EnemyPhase':
    console.log('Monster greift an');
    console.log('ändere Phase in DrawCards');
    break;
  default:
    console.log(`Sorry, we are out of ${phase}.`);
}

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
