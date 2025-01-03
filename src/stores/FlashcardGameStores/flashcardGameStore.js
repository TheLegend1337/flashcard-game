import { defineStore } from "pinia";

export const useFlashcardGameStore = defineStore("flashcardGame", {
  state: () => ({
    phase: "gameOver",
    // quizBox: "visible",
    willpower: 0,
    maxWillpower: 3,
    answeredQuestionsCounter: 0,
    roundCounter: 1,
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
    increaseWillpower(value) {
      if (typeof value !== "number" || isNaN(value)) {
        throw new Error("Value must be a valid number");
      }

      if (value > 0) {
        this.willpower = this.willpower + value;
      } else {
        throw new Error("Willpower Value has to be positive and not Zero");
      }
    },
    setWillpower(value) {
      if (typeof value !== "number" || isNaN(value)) {
        throw new Error("Value must be a valid number");
      }
      this.willpower = value;
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
    // changeQuizBoxVisibility() {
    //   if (this.quizBox == "invisible") {
    //     this.quizBox = "visible";
    //   } else {
    //     this.quizBox = "invisible";
    //   }
    // },
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
    setPhaseEnemyTurn() {
      this.phase = "enemyTurn";
    },
    setPhaseGameOver() {
      this.phase = "gameOver";
    },
  },
});
