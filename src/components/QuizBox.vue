<!--Options API-->
<template>
  <div
    :class="{ hideQuizBox: !isVisible }"
    class="quiz-box flex h-full w-[100%] flex-col items-center justify-around"
  >
    <div class="question container flex flex-col items-center">
      <p class="text-center text-[0.7rem]">
        Lorem ipsum dolor sit amet, consetetur elitir?
      </p>
      <ButtonUniversal
        v-if="!isAnswerVisible"
        :buttonWidth="100"
        :buttonHeight="30"
        class=""
        @button-clicked="showAnswer"
        label="Antwort"
      />
    </div>

    <div
      v-if="isAnswerVisible"
      class="answer flex w-full flex-col items-center justify-center text-center"
    >
      <Divider />
      <p class="w-[90%] text-center text-[0.4rem]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, sanctus est Lorem ipsum dolor sit amet.
      </p>
      <div class="difficulty flex">
        <ButtonUniversal
          buttonWidth="60"
          buttonHeight="19"
          type="wrong"
          :clickHandler="again"
          label="falsch"
          class=""
        />

        <ButtonUniversal
          buttonWidth="60"
          buttonHeight="19"
          type="correct"
          :clickHandler="hard"
          label="richtig"
          class=""
        />
      </div>
    </div>
  </div>
</template>

<script>
//habe den Content gefunden
import ButtonUniversal from "@/components/FlashcardGame/Buttons/ButtonUniversal.vue";
import Divider from "@/components/FlashcardGame/Structural/Divider.vue";
import ButtonPrimary from "@/components/FlashcardGame/Buttons/ButtonPrimary.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
export default {
  components: {
    ButtonUniversal,
    ButtonPrimary,
    Divider,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      //Komma statt Semicolon benutzen
      //z.b store: useWillpowerStore(),
      //Achtung Doppelpunkt' : '' statt ' = ',
      isAnswerVisible: false,
      flashcardGameStore: useFlashcardGameStore(),
    };
  },
  computed: {
    // quizBoxVisibility() {
    //   return this.flashcardGameStore.quizBoxState;
    // },
  },
  methods: {
    showAnswer() {
      this.isAnswerVisible = true;
    },
  },
};
</script>

<style scoped>
.quiz-box p {
  color: black;
}

.hideQuizBox {
  display: none;
}
.question {
}
.answer {
}
</style>
