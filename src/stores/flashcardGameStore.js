import { defineStore } from "pinia";

export const useFlashcardGameStore = defineStore("flashcardGame", {
  state: () => ({
    round: 0,
    monsterHealth: 10,
    playerHealth: 10,
    willpower: 3,
    phase: "gameStart",
    cards: [
      { id: 1, title: "Karte 1" },
      { id: 2, title: "Karte 2" },
      { id: 3, title: "Karte 3" },
      { id: 4, title: "Karte 4" },
      { id: 5, title: "Karte 5" },
    ],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    incrementWillpower() {
      this.willpower++;
    },
    decreaseWillpower(value) {
      this.willpower = this.willpower - value;
    },
    damageHero(value) {
      if (value < 0) {
        throw new Error("Value must be negative!");
      } else {
        this.playerHealth = this.playerHealth - value;
      }
    },
    healHero(value) {
      if (value > 0) {
        this.playerHealth = this.playerHealth + value;
      } else {
        throw new Error("Value must be positive!");
      }
    },
    damageMonster(value) {
      if (value < 0) {
        throw new Error("Value must be negative!");
      } else {
        this.monsterHealth = this.monsterHealth - value;
      }
    },
    pushCard() {
      this.cards.push({ id: 6, title: "Default" });
    },
  },
});
