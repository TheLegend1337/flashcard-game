<script setup>
//umschreiben in Options API bevor ich hier rumfriemel
// import Card from "../components/Card.vue";
import GameOverlay from "../components/GameOverlay.vue";
// import Matchfield from "../components/Matchfield.vue";
//TODO:
//Switch Case einbauen zum verwalten der Runden, übergeben von
//Daten aus HomeView für Start Bedingung in Console loggen zum testen
</script>

<template>
  <main class="flashcard-game">
    <GameOverlay />
  </main>
</template>
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
