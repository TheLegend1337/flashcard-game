<!-- HelloWorld.vue -->

<template>
    <div>
      <h1>{{ question }}</h1>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        question: 'What is a card?',
        description: 'This is the Cards Description.'
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  h1 {
    color: #42b983;
  }
  </style>
  