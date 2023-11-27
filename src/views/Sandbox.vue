<!-- HelloWorld.vue -->

<template>
    <div>
      <h1>{{ greeting }}</h1>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        greeting: 'Hello, Vue!',
        description: 'This is a simple Vue component.'
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
  