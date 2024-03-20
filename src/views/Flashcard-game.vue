<script setup>
  import Card from '../components/Card.vue'
</script>

<template> 
  <main class="grid-container flashcard-game">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <!-- <Card />
      <Card />
      <Card />
      <Card />
      <Card /> -->
    
   </main>
  </template>
  
  <style>
  .item{
    border: 5px solid beige;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(3,1fr);
    gap: 10px;
  }  
  .item-1{
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 1 ;
    grid-column-end: 4;

  }
  /* .item-2{
    grid-row-start: 2;
    grid-column-end: 3;
  }
  .item-3{
    grid-row-start: 3;
    grid-column-end: 4;
  } */
  .flashcard-game{
    width: 100vw;
    height: 93vh;
    border: 1px solid beige;
    overflow: hidden;
      }
  </style>
  