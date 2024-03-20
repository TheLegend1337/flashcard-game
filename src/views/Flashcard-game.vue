<script setup>
// import Card from "../components/Card.vue";
import GameOverlay from "../components/GameOverlay.vue";
</script>

<template>
  <main class="flashcard-game">
    <GameOverlay />
    <!-- <Card />
      <Card />
      <Card />
      <Card />
      <Card /> -->
  </main>
</template>

<style>
.flashcard-game {
  width: 100vw;
  height: 93vh;
  border: 1px solid beige;
  overflow: hidden;
}
</style>
