import { defineStore } from "pinia";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    isCardShining: false,
  }),
  getters: {
    //Platz für Getters
  },
  actions: {},
});
