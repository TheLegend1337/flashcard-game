import { defineStore } from "pinia";

export const useSoundStore = defineStore("soundStore", {
  state: () => ({
    isMusicPlaying: false,
  }),
  getters: {
    //Platz für Getters
  },
  actions: {},
});
