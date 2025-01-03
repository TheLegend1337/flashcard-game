import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerHealth: 65,
    maxPlayerHealth: 65,
    playerArmor: 0,
  }),
  getters: {
    getPlayerHealth: (state) => state.playerHealth,
  },
  actions: {
    damageHero(value) {
      if (value < 0) {
        throw new Error("Value must be positive!");
      }

      // If there's armor:
      if (this.playerArmor > 0) {
        // If incoming damage exceeds current armor,
        // reduce the armor to zero and apply leftover damage to health.
        if (value > this.playerArmor) {
          const leftoverDamage = value - this.playerArmor;
          this.playerArmor = 0;
          this.playerHealth -= leftoverDamage;
        } else {
          // Otherwise, just reduce the armor and leave health untouched.
          this.playerArmor -= value;
        }
      } else {
        // If there's no armor, apply all damage directly to health.
        this.playerHealth -= value;
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
