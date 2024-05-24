<script></script>
<template>

  <div v-if ="playerHealth" class="healthbar">{{ playerHealth }}</div>
  <div v-else-if ="monsterHealth" class="healthbar">{{ monsterHealth }}</div>
</template>

<script>
export default {
  props: {
    playerHealth: {
      type: Number,
    
    },
    monsterHealth: {
      type: Number,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.healthbar {
  width: 150px;
  height: 18px;
  border: 5px solid black;
  border-radius: 50px;
  background: rgb(255, 77, 77);
}
</style>
