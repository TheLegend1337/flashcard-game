<template>
  <div class="home-view vh-93 grid grid-cols-5">
    <main
      class="col-span-5 flex flex-col items-center justify-center space-y-10"
    >
      <img
        class="h-[300px]"
        src="@/assets/brandIdentity/Logo-1024x455.png"
        alt="Producterra Logo"
      />
      <div class="button-dimension flex animate-pulse-scale gap-2">
        <ButtonPrimary
          label="Starten"
          route="/flashcard-game"
          :clickHandler="startGame"
        />
        <ButtonPrimary
          label="Pauken"
          route="/flashcards-only"
          :clickHandler="startTrackingFlashcardsOnlyTime"
        />
      </div>
    </main>
    <!-- <aside class="col-span-2 flex flex-col justify-center items-center">
      <img
        class="h-32"
        src="@/assets/brandIdentity/Logo-1024x455.png"
        alt="Producterra Logo"
      />
      <ButtonPrimary label="Starten" />
    </aside> -->
  </div>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useSoundStore } from "@/stores/FlashcardGameStores/soundStore";
import { useCardStore } from "@/stores/FlashcardGameStores/cardStore";

import UserDataHandler from "@/helpers/userDataHandler";

import ButtonPrimary from "@/components/FlashcardGame/Buttons/ButtonPrimary.vue";
// Achte darauf, keine Dateiendung wie '.js' beim Import zu verwenden, da dies in Vite zu einem Fehler führt.
// '@' steht für den 'src'-Ordner.
export default {
  name: "ExampleComponent",
  components: {
    ButtonPrimary, // Entferne unnötige Kommentare und behalte nur gültige Komponenten.
  },
  props: {
    // Definiere Props hier, falls nötig.
    // Beispiel:
    // objectName: {
    //   type: Object,
    //   default: null,
    // },
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      soundStore: useSoundStore(),
      cardStore: useCardStore(),
      // Zustandsvariablen, falls nötig.
    };
  },
  methods: {
    startGame() {
      UserDataHandler.startTrackingTime("playTime");
      this.cardStore.initiateCardDeck();
      this.soundStore.isMusicPlaying = true;
      console.log("isMusicPlaying: " + this.soundStore.isMusicPlaying);
      // this.flashcardGameStore.setPhaseGameStart;
      this.flashcardGameStore.phase = "gameStart";
      // tracker.createNewUserFile();
    },
    startTrackingFlashcardsOnlyTime() {
      UserDataHandler.startTrackingTime("flashcardsOnlyTime");
    },
  },
};
</script>

<style scoped>
.vh-93 {
  height: 93vh;
}

.home-view {
  background-image: url("@/assets/environments/rest-room.png");
  /* background-image: url("@/assets/brandIdentity/Thumbnail-Producterra-LogoAndCards-Kickstarter.png"); */
  background-size: cover;
  background-repeat: no-repeat;
}
.button-dimension {
  width: 350px;
  height: 50px;
}
</style>
