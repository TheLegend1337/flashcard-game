<!--Options API-->
<template>
  <!-- :class="{ hideQuizBox: !isVisible }" -->
  <div
    class="quiz-box flex h-full w-[100%] flex-col items-center justify-around"
    :class="{ animateAnticipationBlur: isAnimateAnticipationBlur }"
  >
    <div class="question container flex flex-col items-center p-[10px]">
      <p class="text-center text-[0.7rem]">
        {{ flashcard.question }}
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
      <div class="h-[90px] w-[90%] pb-[10px] pt-[10px]">
        <p class="text-center text-[0.7rem]">
          {{ flashcard.answer }}
        </p>
      </div>

      <div id="buttons" class="difficulty flex">
        <ButtonUniversal
          buttonWidth="60"
          buttonHeight="19"
          type="wrong"
          :clickHandler="again"
          label="falsch"
          class=""
          @button-wrong-clicked="handleButtonWrongClicked"
        />

        <ButtonUniversal
          buttonWidth="60"
          buttonHeight="19"
          type="correct"
          :clickHandler="hard"
          label="richtig"
          class=""
          @button-correct-clicked="handleButtonCorrectClicked"
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
import { useFlashCardsStore } from "@/stores/FlashcardGameStores/flashcardsStore";
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
      flashCardsStore: useFlashCardsStore(),
      flashcard: {},
      isAnimateAnticipationBlur: false,
    };
  },
  computed: {
    // quizBoxVisibility() {
    //   return this.flashcardGameStore.quizBoxState;
    // },
    flashcards() {
      return this.flashCardsStore.flashcards;
    },
  },
  mounted() {
    this.flashcard = this.flashCardsStore.shiftFirstFromStreak0();
  },
  methods: {
    showAnswer() {
      this.isAnswerVisible = true;
    },
    handleButtonWrongClicked() {
      this.$emit("button-wrong-clicked");
    },
    handleButtonCorrectClicked() {
      this.isAnimateAnticipationBlur = true;
      this.$emit("button-correct-clicked");
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

@keyframes anticipationBlur {
  0% {
    filter: blur(0px);
  }

  50% {
    filter: blur(1px);
  }

  100% {
    filter: blur(3px);
  }
}

.animateAnticipationBlur {
  animation: anticipationBlur 0.5s step-end forwards;
}
</style>
