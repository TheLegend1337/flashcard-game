import { defineStore } from "pinia";

export const useFlashcardGameStore = defineStore("flashcardGame", {
  state: () => ({
    phase: "gameStart",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {},
});
