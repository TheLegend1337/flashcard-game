import { defineStore } from "pinia";

export const useMonsterStore = defineStore("monsterStore", {
  state: () => ({
    monsterHealth: 400,
    maxMonsterHealth: 400,
  }),
  getters: {
    getMonsterhealth: (state) => state.monsterHealth,
  },
  actions: {
    damageMonster(value) {
      if (value < 0) {
        throw new Error("Value must be negative!");
      } else {
        this.monsterHealth = this.monsterHealth - value;
      }
    },
  },
});
