<!--Options API-->
<template>
  <div class="quiz-box">
    <div class="question">
      <p>Hier steht lorem ipsum dolor sit amet consetetur elitir text.</p>
    </div>
    <div class="answer">
      <button>Nochmal</button>
      <button>Schwer</button>
      <button>Einfach</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //Komma statt Semicolon benutzen
      //z.b store: useWillpowerStore(),
      //Achtung Doppelpunkt' : '' statt ' = ',
    };
  },
};
</script>

<style scoped>
.quiz-box p {
  color: black;
}

.quiz-box {
  width: 100%;
  height: 100%;
  border: 3px solid black;
  background-color: white;
  grid-row-start: 4;
  grid-row-end: 7;
  grid-column-start: 3;
  grid-column-end: 8;
  justify-self: start;
  z-index: 100;
}
</style>
