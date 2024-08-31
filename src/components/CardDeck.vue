<template>
  <!-- Dein Template-Code kommt hier hin -->
  <div class="card-deck">
    <button class="card-deck-counter">24</button>
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
.card-deck {
  width: 50px;
  height: 50px;
  border: 3px solid black;
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: 9;
  grid-column-end: 10;
  justify-self: start;
}
/* Add your component-specific styles here */
</style>
