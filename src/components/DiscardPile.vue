<template>
  <!-- Dein Template-Code kommt hier hin -->
  <div class="discard-pile-wrapper">
    <div class="discard-pile">
      <div class="discard-pile-counter">2</div>
    </div>
  </div>
</template>

<script>
export default {
  // Hier kommen alle Optionen der Options API
  data() {
    return {
      // Definiere deine reaktiven Daten hier
    };
  },
  // Methoden, Computed Properties usw. können hier hinzugefügt werden
};
</script>

<style scoped>
/* Add your component-specific styles here */
.discard-pile-wrapper {
  width: 50px;
  height: 50px;
  border: 3px solid white;
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: end;
}
.discard-pile {
}
</style>
