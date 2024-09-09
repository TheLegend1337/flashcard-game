<!--Options API-->
<template>
  <div class="quiz-box">
    <div class="question">
      <p>Hier steht lorem ipsum dolor sit amet consetetur elitir text.</p>
    </div>
    <div class="answer">
      <ButtonSecondary :clickHandler="again" label="nochmal" />
      <ButtonSecondary :clickHandler="hard" label="Schwer" />
      <ButtonPrimary :clickHandler="easy" label="Einfach" />
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/FlashcardGame/Buttons/ButtonPrimary.vue";
import ButtonSecondary from "@/components/FlashcardGame/Buttons/ButtonSecondary.vue";
export default {
  components: {
    ButtonPrimary,
    ButtonSecondary,
  },
  data() {
    return {
      //Komma statt Semicolon benutzen
      //z.b store: useWillpowerStore(),
      //Achtung Doppelpunkt' : '' statt ' = ',
    };
  },
  methods: {
    drawCard() {
      this.cardStore.pushCard();
    },
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
