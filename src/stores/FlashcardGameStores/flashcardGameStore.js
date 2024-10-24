import { defineStore } from "pinia";

export const useFlashcardGameStore = defineStore("flashcardGame", {
  state: () => ({
    phase: "gameOver",
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
    setPhaseGameStart() {
      this.phase = "gameStart";
    },
    setPhaseDrawCards() {
      this.phase = "drawCards";
    },
    setPhasePlayPhase() {
      this.phase = "playPhase";
    },
    setPhaseEndTurn() {
      this.phase = "endTurn";
    },
    setPhaseEnemyTurn() {
      this.phase = "enemyTurn";
    },
    setPhaseGameOver() {
      this.phase = "gameOver";
    },
  },
});
