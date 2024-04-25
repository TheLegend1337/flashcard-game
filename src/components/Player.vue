<!-- <script setup>
import Healthbar from "../components/Healthbar.vue";
import { useRoundsmanagerStore } from "@/stores/roundsmanager";
const store = useRoundsmanagerStore();
</script> -->
<template>
  <div class="player">
    <Healthbar :playerHealth="store.playerHealth" class="healthbar" />
  </div>
</template>

<script>
import Healthbar from "../components/Healthbar.vue";
import { useRoundsmanagerStore } from "@/stores/roundsmanager";

export default {
  components: {
    Healthbar,
  },
  data() {
    return {
       store: useRoundsmanagerStore(),
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.player {
  width: 80px;
  height: 200px;
  border: 10px solid black;
  grid-row-start: 6;
  grid-row-end: 7;
  grid-column-start: 4;
  grid-column-end: 5;
}
.healthbar {
  position: relative;
  top: -40px;
  left: -45px;
}
</style>
