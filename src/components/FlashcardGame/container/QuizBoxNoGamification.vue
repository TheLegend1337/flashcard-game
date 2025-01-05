<!--Options API-->
<template>
  <div class="quizbox-background flex justify-center">
    <div
      class="quiz-box flex h-full w-[100%] flex-col items-center justify-around"
    >
      <div class="question container flex flex-col items-center p-[10px]">
        <p class="text-center text-[0.7rem]">
          {{ flashcard.question }}
        </p>
        <ButtonUniversal
          v-if="!isAnswerVisible && delayBeforeShowButtonIsOver"
          :buttonWidth="100"
          :buttonHeight="30"
          class=""
          @button-clicked="showAnswer"
          label="ansehen"
        />
      </div>

      <div
        v-if="isAnswerVisible"
        class="answer flex w-full flex-col items-center justify-center text-center"
      >
        <Divider />
        <div
          class="align-center flex h-[90px] w-[90%] items-center justify-center pb-[10px] pt-[10px]"
        >
          <p class="text-center text-[0.7rem]">
            {{ flashcard.answer }}
          </p>
        </div>

        <div id="buttons" class="difficulty flex">
          <ButtonUniversal
            :buttonWidth="60"
            :buttonHeight="19"
            type="wrong"
            label="falsch"
            @button-wrong-clicked="handleButtonWrongClicked"
          />

          <ButtonUniversal
            :buttonWidth="60"
            :buttonHeight="19"
            type="correct"
            label="richtig"
            @button-correct-clicked="handleButtonCorrectClicked"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//habe den Content gefunden

import ButtonUniversal from "@/components/FlashcardGame/Buttons/ButtonUniversal.vue";
import Divider from "@/components/FlashcardGame/Structural/Divider.vue";
import ButtonPrimary from "@/components/FlashcardGame/Buttons/ButtonPrimary.vue";
import UserDataHandler from "@/helpers/userDataHandler";
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
      delayBeforeShowButtonIsOver: false,
    };
  },
  computed: {},
  mounted() {
    this.flashcard = this.flashCardsStore.popSingleFlashcard();

    setTimeout(() => {
      this.delayBeforeShowButtonIsOver = true;
    }, 1200);
  },
  methods: {
    showAnswer() {
      this.isAnswerVisible = true;
    },
    handleButtonWrongClicked() {
      this.$emit("button-wrong-clicked");

      this.flashcard = this.flashCardsStore.resetStreak(this.flashcard);
      this.flashCardsStore.putSingleFlashcardBackToAllFlashcards(
        this.flashcard,
      );
      UserDataHandler.saveSingleUserInteraction(
        "flashcardsNoGamification",
        this.flashcard,
      );
      // Reihenfolge wichtig, speichern bevor wir vvvvv neue holen.
      this.flashcard = this.flashCardsStore.popSingleFlashcard();
      this.isAnswerVisible = false;
    },
    handleButtonCorrectClicked() {
      this.$emit("button-correct-clicked");

      this.flashcard = this.flashCardsStore.incrementStreak(this.flashcard);
      this.flashCardsStore.putSingleFlashcardBackToAllFlashcards(
        this.flashcard,
      );
      UserDataHandler.saveSingleUserInteraction(
        "flashcardsNoGamification",
        this.flashcard,
      );
      // Reihenfolge wichtig, speichern bevor wir vvvvv neue holen.
      this.flashcard = this.flashCardsStore.popSingleFlashcard();
      this.isAnswerVisible = false;
    },
  },
};
</script>

<style scoped>
.quiz-box p {
  color: black;
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
.quizbox-background {
  background-image: url("@/assets/ui-components-backgrounds/card/quiz-background.png");
  background-size: 100%;
  background-position: 50% 12%;
  background-repeat: no-repeat;
}
</style>
