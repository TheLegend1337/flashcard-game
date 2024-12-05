<template>
  <div class="indicators-container">
    <ArmorIndicator
      v-if="isArmorIndicatorVisible"
      class="z-[2]"
      :armorValue="armorValue"
    />
    <Healthbar
      class="z-0"
      :healthValue="healthValue"
      :maxHealthValue="maxHealthValue"
    />
  </div>
</template>

<script>
import { usePlayerStore } from "@/stores/FlashcardGameStores/playerStore";
import { useMonsterStore } from "@/stores/FlashcardGameStores/monsterStore";
import Healthbar from "@/components/Healthbar.vue";
import ArmorIndicator from "@/components/FlashcardGame/Indicators/ArmorIndicator.vue";
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
export default {
  name: "ExampleComponent",
  components: {
    Healthbar,
    ArmorIndicator,
  },
  props: {
    role: {
      type: String,
      Required: true,
      default: "none",
    },
  },
  data() {
    return {
      playerStore: usePlayerStore(),
      monsterStore: useMonsterStore(),
      // Zustandsvariablen
    };
  },
  computed: {
    // Berechnete Eigenschaften
    healthValue() {
      if (this.role === "player") {
        return this.playerStore.playerHealth;
      } else if (this.role === "monster") {
        return this.monsterStore.monsterHealth;
      } else {
        return 0;
      }
    },
    maxHealthValue() {
      if (this.role === "player") {
        return this.playerStore.maxPlayerHealth;
      } else if (this.role === "monster") {
        return this.monsterStore.maxMonsterHealth;
      } else {
        return 0;
      }
    },
    armorValue() {
      if (this.role === "player") {
        return this.playerStore.playerArmor;
      } else if (this.role === "monster") {
        return this.monsterStore.monsterArmor;
      } else {
        return 0;
      }
    },
    isArmorIndicatorVisible() {
      if (this.role === "player") {
        if (this.playerStore.playerArmor > 0) {
          return true;
        } else {
          return false;
        }
      } else if (this.role === "monster") {
        if (this.monsterStore.monsterArmor > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
  },
  watch: {
    // Beobachter für reaktive Daten oder Props
  },
  /*
    // Lifecycle Hooks
    beforeCreate() {
      // Wird ausgeführt, bevor die Instanz erstellt wird
    },
    created() {
      // Wird ausgeführt, nachdem die Instanz erstellt wurde
    },
    beforeMount() {
      // Wird ausgeführt, bevor die Komponente in den DOM eingefügt wird
    },
    mounted() {
      // Wird ausgeführt, wenn die Komponente in den DOM eingefügt wurde
    },
    beforeUpdate() {
      // Wird ausgeführt, bevor sich reaktive Daten ändern und ein Re-Render bevorsteht
    },
    updated() {
      // Wird ausgeführt, nachdem die Daten aktualisiert wurden und die Komponente neu gerendert wurde
    },
    activated() {
      // Wird ausgeführt, wenn eine keep-alive-Komponente aktiviert wird
    },
    deactivated() {
      // Wird ausgeführt, wenn eine keep-alive-Komponente deaktiviert wird
    },
    beforeDestroy() {
      // Wird ausgeführt, bevor die Komponente zerstört wird
    },
    destroyed() {
      // Wird ausgeführt, nachdem die Komponente zerstört wurde
    },
    errorCaptured(err, vm, info) {
      // Wird ausgeführt, wenn ein Fehler in einem Kindkomponenten-Lebenszyklus oder -Rendering auftritt
      // Ermöglicht Fehlerbehandlung innerhalb der Komponente
    },*/
  methods: {
    // Methoden der Komponente
  },
};
</script>

<style scoped>
.indicators-container {
  position: relative;
  height: 25px;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  bottom: 10%;
}
</style>
