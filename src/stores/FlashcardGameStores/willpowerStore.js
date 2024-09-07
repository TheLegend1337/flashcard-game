import { defineStore } from "pinia";

export const useWillpowerStore = defineStore("willpowerStore", {
  state: () => ({
    willpower: 3,
  }),
  getters: {
    getWillpower: (state) => state.willpower,
  },
  actions: {
    incrementWillpower() {
      this.willpower++;
    },
    decreaseWillpower(value) {
      this.willpower = this.willpower - value;
    },
  },
});
