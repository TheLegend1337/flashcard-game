import { defineStore } from "pinia";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    cards: [
      { id: 1, title: "Karte 1" },
      { id: 2, title: "Karte 2" },
      { id: 3, title: "Karte 3" },
      { id: 4, title: "Karte 4" },
      { id: 5, title: "Karte 5" },
    ],
  }),
  getters: {
    //Platz für Getters
  },
  actions: {
    pushCard() {
      this.cards.push({ id: 6, title: "Default" });
    },
    popCard() {
      this.cards.pop();
    },
  },
});
