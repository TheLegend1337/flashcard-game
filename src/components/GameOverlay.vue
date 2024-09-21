<script setup>
import HandOfCards from "../components/HandOfCards.vue";
import Player from "../components/Player.vue";
import Monster from "../components/Monster.vue";
import Willpower from "../components/Willpower.vue";
import DiscardPile from "../components/DiscardPile.vue";
import CardDeck from "../components/CardDeck.vue";
import QuizBox from "../components/QuizBox.vue";
</script>

<template>
  <div class="grid-container game-overlay">
    <HandOfCards />
    <!--emitted dass Karte abgeworfen wird und übergibt Kartenobjekt an Parent -->
    <Player />
    <Monster />
    <Willpower />
    <DiscardPile /><!--Parent nimmt das Objekt und übergibt es als Prop an Abwurfstapel -->
    <CardDeck />
    <QuizBox />
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
</style>
