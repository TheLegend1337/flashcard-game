<template>
  <div class="monster">
    <select v-model="selectedAnimation" @change="updateAnimation">
      <!-- Dropdown zur Auswahl der Animation -->
      <option
        v-for="(animation, key) in zombieVillagerAnimations"
        :key="key"
        :value="key"
      >
        {{ animation.name }}
      </option>
    </select>
    <Healthbar
      v-if="!healthbarOff"
      :monsterHealth="monsterStore.monsterHealth"
      class="healthbar"
    />
    <SpriteAnimation
      :key="selectedAnimation"
      :animationParameters="zombieVillagerAnimations[selectedAnimation]"
      flip
    />
  </div>
</template>

<script>
import Healthbar from "../components/Healthbar.vue";
// import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useMonsterStore } from "@/stores/FlashcardGameStores/monsterStore";
import SpriteAnimation from "@/components/Animation/SpriteAnimation.vue";
import zombieVillagerAnimations from "@/assets/animations/monsters/zombieVillager/animation-data/zombieVillagerAnimations.js"; // TODO: Ziel ist es irgendwann im Pfad monster-vue mit dem ausgewählten Monster zu ersetzen
export default {
  components: {
    Healthbar,
    SpriteAnimation,
  },
  props: {
    healthbarOff: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // flashcardGameStore: useFlashcardGameStore(),
      monsterStore: useMonsterStore(),
      zombieVillagerAnimations,
      selectedAnimation: "zombieVillagerIdle",
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.monster {
  width: 300px;
  height: 300px;
  /* border: 10px solid rgb(255, 0, 0);*/
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
