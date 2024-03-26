<script setup>
// import Card from "../components/Card.vue";
import GameOverlay from "../components/GameOverlay.vue";
// import Matchfield from "../components/Matchfield.vue";
</script>

<template>
  <main class="flashcard-game">    
    <!-- <Matchfield /> -->
    <GameOverlay />


  </main>
</template>

<style>
.flashcard-game {
   background-image: url("../assets/environments/tempel_mit_baeumen_korrigiert.png");
   background-size: auto;
   background-repeat: no-repeat;
   background-position-y: -230px;
  width: 100vw;
  height: 93vh;
  border: 1px solid beige;
  overflow: hidden;
}
</style>
