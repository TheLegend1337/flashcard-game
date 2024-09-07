<template>
  <div class="monster">
    <Healthbar :monsterHealth="monsterStore.monsterHealth" class="healthbar" />
  </div>
</template>

<script>
import Healthbar from "../components/Healthbar.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useMonsterStore } from "@/stores/FlashcardGameStores/monsterStore";
export default {
  components: {
    Healthbar,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      monsterStore: useMonsterStore(),
    };
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
