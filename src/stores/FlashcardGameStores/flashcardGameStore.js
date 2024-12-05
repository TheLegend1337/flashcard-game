import { defineStore } from "pinia";

export const useFlashcardGameStore = defineStore("flashcardGame", {
  state: () => ({
    phase: "gameOver",
    quizBox: "invisible",
    willpower: 3,
    maxWillpower: 3,
    answeredQuestionsCounter: 0,
  }),
  getters: {
    // Willpower
    getWillpower: (state) => state.willpower,
    getMaxWillpower: (state) => state.maxWillpower,
    //
    doubleCount: (state) => state.count * 2,
    // QuizBox
    quizBoxState: (state) => state.quizBox,
  },
  actions: {
    // Willpower
    incrementWillpower() {
      this.willpower++;
    },
    incrementMaxWillpower() {
      this.maxWillpower++;
    },
    decreaseWillpower(value) {
      this.willpower = this.willpower - value;
    },
    useWillpower(value) {
      if (value > this.willpower) {
        return false;
      } else {
        this.willpower = this.willpower - value;
      }
    },
    decreaseMaxWillpower(value) {
      this.maxWillpower = this.maxWillpower - value;
    },
    // Quizbox
    changeQuizBoxVisibility() {
      if (this.quizBox == "invisible") {
        this.quizBox = "visible";
      } else {
        this.quizBox = "invisible";
      }
    },
    // Game Phases
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
