<script setup>
  import Card from '../components/Card.vue'
</script>

<template>
    <div class="flashcard-game">
      <h1>Hier befindet sich das Karteikartenspiel</h1> 
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .flashcard-game {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  