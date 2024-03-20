<script setup>
import Card from "../components/Card.vue";
</script>
<template>
  <div class="grid-container game-overlay">
    <div v-for="i in 100" :key="i" class="item" :id="'item-' + i">
      Item {{ i }}
      <Card v-if="i === 44" />
      <Card v-if="i === 45" />
      <Card v-if="i === 46" />
      <Card v-if="i === 47" />
      <Card v-if="i === 48" />
    </div>

    <!-- <Card />
      <Card />
      <Card />
      <Card />
      <Card /> -->
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
  height: 100%;
  width: 100%;
}
.item {
  border: 5px solid beige;
  height: 50px;
  width: 50px;
}

.grid-container {
  display: grid;
  /* grid-template-columns: repeat(10, 1fr); */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: repeat(10, 1fr); */
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
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
