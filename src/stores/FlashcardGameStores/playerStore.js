import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerHealth: 60,
    maxPlayerHealth: 65,
    playerArmor: 0,
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
        const endHealth = this.playerHealth + value;
        if (endHealth > this.maxPlayerHealth) {
          this.playerHealth = this.maxPlayerHealth;
        } else {
          this.playerHealth = this.playerHealth + value;
        }
      } else {
        throw new Error("Value must be positive!");
      }
    },
    increaseArmor(value) {
      if (value > 0) {
        this.playerArmor = this.playerArmor + value;
      } else {
        throw new Error("Value must be positive!");
      }
    },
  },
});
