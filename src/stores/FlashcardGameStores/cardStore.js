import { defineStore } from "pinia";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    isCardShining: false,
    isDiscardAll: false,
  }),
  getters: {
    //Platz für Getters
  },
  actions: {},
});
