<script setup>
import Card from "./Card.vue";
</script>
<template>
  <div class="handOfCards">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
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
/* Add your component-specific styles here */
.handOfCards {
  display: flex;
}
</style>
