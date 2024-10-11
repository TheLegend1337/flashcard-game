<!--Options API-->
<template>
  <div
    class="container quiz-box"
    :class="{ hideQuizBox: quizBoxVisibility === 'invisible' }"
  >
    <div
      v-if="isQuestionVisible"
      class="container question flex justify-items-center flex-col items-center"
    >
      <p class="text-xs sm:text-xs md:text-xs lg:text-lg">
        Lorem ipsum dolor sit amet, consetetur elitir?
      </p>
      <ButtonPrimary class="" @button-clicked="showAnswer" label="Antwort" />
    </div>
    <div v-else class="container answer text-center m-6">
      <p class="text-xs sm:text-xs md:text-base lg:text-lg">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, sanctus est Lorem ipsum dolor sit amet.
      </p>
      <div class="difficulty">
        <ButtonSecondary :clickHandler="again" label="nochmal" />
        <ButtonSecondary :clickHandler="hard" label="Schwer" />
        <ButtonPrimary :clickHandler="easy" label="Einfach" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/FlashcardGame/Buttons/ButtonPrimary.vue";
import ButtonSecondary from "@/components/FlashcardGame/Buttons/ButtonSecondary.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
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
      isQuestionVisible: true,
      flashcardGameStore: useFlashcardGameStore(),
    };
  },
  computed: {
    quizBoxVisibility() {
      return this.flashcardGameStore.quizBoxState;
    },
  },
  methods: {
    drawCard() {
      this.cardStore.pushCard();
    },
    showAnswer() {
      this.isQuestionVisible = false;
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
  grid-row-start: 2;
  grid-row-end: 7;
  grid-column-start: 4;
  grid-column-end: 7;
  justify-self: start;
  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 100px 50px;
  background-image: url("@/assets/ui-components-backgrounds/background-pergament-quadratisch.png");
}

.hideQuizBox {
  display: none;
}
.question {
}
.answer {
}
</style>
