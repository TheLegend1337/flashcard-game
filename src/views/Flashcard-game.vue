<script setup>
// import Card from "../components/Card.vue";
import GameOverlay from "../components/GameOverlay.vue";
// import Matchfield from "../components/Matchfield.vue";
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
