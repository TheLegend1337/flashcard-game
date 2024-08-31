<script setup>
import HandOfCards from "../components/HandOfCards.vue";
import Player from "../components/Player.vue";
import Monster from "../components/Monster.vue";
import Willpower from "../components/Willpower.vue";
import DiscardPile from "../components/DiscardPile.vue";
import CardDeck from "../components/CardDeck.vue";
</script>

<template>
  <div class="grid-container game-overlay">
    <div class="handOfCards">
      <HandOfCards />
    </div>
    <Player />
    <Monster />
    <Willpower />
    <DiscardPile />
    <CardDeck />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.game-overlay {
  display: absolute;
  height: 100%;
  width: 100%;
  z-index: 1000;
}
.item {
  border: 5px solid beige;
  height: 50px;
  width: 50px;
}

.grid-container {
  display: grid;
  /* grid-template-columns: repeat(10, 1fr); */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: repeat(10, 1fr); */
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
}

.handOfCards {
  width: 100%;
  grid-row-start: 8;
  grid-row-end: 10;
  grid-column-start: 3;
  grid-column-end: 8;
}
</style>
