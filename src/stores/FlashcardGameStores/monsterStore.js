import { defineStore } from "pinia";

export const useMonsterStore = defineStore("monsterStore", {
  state: () => ({
    monsterHealth: 100,
    maxMonsterHealth: 100,
    monsterArmor: 0,
  }),
  getters: {
    getMonsterhealth: (state) => state.monsterHealth,
  },
  actions: {
    damageMonster(value) {
      this.monsterHealth = this.monsterHealth - value;
    },
  },
});
