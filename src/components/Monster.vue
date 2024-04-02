<script setup>
import Healthbar from "../components/Healthbar.vue";
</script>
<template>
  <div class="monster">
    <Healthbar class="healthbar" />
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
.monster {
  width: 80px;
  height: 200px;
  border: 10px solid rgb(255, 0, 0);
  grid-row-start: 6;
  grid-row-end: 7;
  grid-column-start: 6;
  grid-column-end: 7;
  justify-self: end;
}
.healthbar {
  position: relative;
  top: -40px;
  left: -45px;
}
</style>
