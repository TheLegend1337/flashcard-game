import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerHealth: 10,
  }),
  getters: {
    getPlayerHealth: (state) => state.playerHealth,
  },
  actions: {
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
  },
});
