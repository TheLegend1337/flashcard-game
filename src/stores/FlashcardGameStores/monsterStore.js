import { defineStore } from "pinia";

export const useMonsterStore = defineStore("monsterStore", {
  state: () => ({
    monsterHealth: 400,
    maxMonsterHealth: 400,
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
