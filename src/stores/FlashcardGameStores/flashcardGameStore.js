import { defineStore } from "pinia";

export const useFlashcardGameStore = defineStore("flashcardGame", {
  state: () => ({
    phase: "gameStart",
    quizBox: "invisible",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    quizBoxState: (state) => state.quizBox,
  },
  actions: {
    changeQuizBoxVisibility() {
      if (this.quizBox == "invisible") {
        this.quizBox = "visible";
      } else {
        this.quizBox = "invisible";
      }
    },
  },
});
