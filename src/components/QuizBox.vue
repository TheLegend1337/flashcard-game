<!--Options API-->
<template>
  <div
    class="quiz-box flex h-full w-[100%] flex-col items-center justify-around"
    :class="{ animateAnticipationBlur: isAnimateAnticipationBlur }"
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
</template>

<script>
//habe den Content gefunden
import SoundHandler from "@/helpers/soundHandler";
import soundEffect_fail from "@/assets/sounds/soundEffects/fail-wobble.mp3";
import soundEffect_CardRevealBuildup from "@/assets/sounds/soundEffects/building-swoosh-short.mp3";

import UserDataHandler from "@/helpers/userDataHandler";

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
      delayBeforeShowButtonIsOver: false,
    };
  },
  computed: {},
  mounted() {
    this.flashcard = this.flashCardsStore.popSingleFlashcard();
    //this.flashCardsStore.logAllFlashcards();
    // console.log("On Mounted Flashcard is: ", this.flashcard);
    //ACHTUNG das hinzufügen von this.soundHandler mit dem this Keyword ist wichtig damit es beim Laden keine Probleme gibt.
    this.soundHandler = new SoundHandler(); //zum erstellen des SoundHandlers
    this.soundHandler.registerSound("fail", soundEffect_fail); //zum registrieren des Soundeffects
    this.soundHandler.registerSound(
      "revealCardBuildup",
      soundEffect_CardRevealBuildup,
    );
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
      this.soundHandler.playSound("fail", 0.05); //zum Abspielen des Soundeffects(zweiter Parameter ist Lautstärke)
      this.flashcard = this.flashCardsStore.resetStreak(this.flashcard);
      this.flashCardsStore.putSingleFlashcardBackToAllFlashcards(
        this.flashcard,
      );
      UserDataHandler.saveSingleUserInteraction("flashcards", this.flashcard);
    },
    handleButtonCorrectClicked() {
      this.isAnimateAnticipationBlur = true;
      this.$emit("button-correct-clicked");
      this.soundHandler.playSound("revealCardBuildup", 0.02);
      this.flashcard = this.flashCardsStore.incrementStreak(this.flashcard);
      this.flashCardsStore.putSingleFlashcardBackToAllFlashcards(
        this.flashcard,
      );
      UserDataHandler.saveSingleUserInteraction("flashcards", this.flashcard);
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
</style>
