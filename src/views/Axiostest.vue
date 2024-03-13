//https://www.telerik.com/blogs/how-to-use-axios-vue
//https://opentdb.com/api_config.php Trivia Fragen API

<template>
    <div>{{ answer }}</div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "App",
    data() {
      return {
        answer: {},
      };
    },
    methods: {
      async getAnswer() {
        const { data } = await axios.get("https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple");
        this.answer = data;
      },
    },
    beforeMount() {
      this.getAnswer();
    },
  };
  </script>