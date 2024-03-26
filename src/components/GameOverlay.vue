<script setup>
 import HandOfCards from "../components/HandOfCards.vue";
</script>
<template>
  <div class="grid-container game-overlay">
    <div class="handOfCards" >
     <HandOfCards  />
    </div>

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
  display:absolute;
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
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
  gap: 10px;
}

.handOfCards{
  width: 100%;
  grid-row-start: 8;
  grid-row-end: 10;
  grid-column-start: 3;
  grid-column-end: 8;
}


/* .item-2{
  grid-row-start: 2;
  grid-column-end: 3;
  }
  .item-3{
    grid-row-start: 3;
    grid-column-end: 4;
  } */
</style>
