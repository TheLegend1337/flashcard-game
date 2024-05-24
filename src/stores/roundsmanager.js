import { defineStore } from "pinia";

export const useRoundsmanagerStore = defineStore("roundsmanager", {
  state: () => ({
    round: 0,
    monsterHealth: 10,
    playerHealth: 10,
    willpower: 3,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    incrementWillpower() {
      this.willpower++;
    },
    decreaseWillpower(value) {
      this.willpower = this.willpower - value ;
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
  },
});
