<template>
  <div
    v-if="this.phase"
    class="info-banner invisible fixed left-1/2 top-1/2 z-40 h-24 w-4/6 -translate-x-1/2 transform sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40"
  >
    <img
      class="absolute top-0"
      src="@/assets/ui-components-backgrounds/border-ornaments-top.png"
      alt=""
    />
    <img
      src="@/assets/ui-components-backgrounds/border-ornaments-bottom.png"
      class="absolute bottom-0"
    />
    <h2
      class="absolute left-[15%] top-1/2 -translate-y-1/2 text-2xl text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
    >
      {{ leftText }}
    </h2>
    <img
      class="absolute left-1/2 top-1/2 h-[120%] -translate-x-1/2 -translate-y-1/2 sm:h-[130%] md:h-[140%] lg:h-[150%] xl:h-[160%] 2xl:h-[170%]"
      src="@/assets/icons/crossed-swords-icon.png"
      alt=""
    />
    <h2
      class="absolute right-[15%] top-1/2 -translate-y-1/2 text-2xl text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
    >
      {{ rightText }}
    </h2>

    <p>Kampf beginnt!</p>
  </div>
</template>

<script>
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
// import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
export default {
  name: "InfoBanner",
  components: {
    //Component
  },
  props: {
    // Definiere Props hier
    // objectName:{
    //   type: object,
    //   default: null,
    // }
    phase: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      // Zustandsvariablen
      // flashcardGameStore: useFlashcardGameStore(),
    };
  },
  computed: {
    // Berechnete Eigenschaften
    leftText() {
      switch (this.phase) {
        case "gameStart": {
          return "Kampf";
        }
        case "drawCards": {
          return "Ziehe";
        }
        case "playPhase": {
          return "Entfessel";
        }
        case "endTurn": {
          return "Zug";
        }
        case "enemyTurn": {
          return "Gegner";
        }
        case "gameOver": {
          return "Du hast";
        }
        default: {
          return "Deine";
        }
      }
    },
    rightText() {
      switch (this.phase) {
        case "gameStart": {
          return "beginnt!";
        }
        case "drawCards": {
          return "Karten";
        }
        case "playPhase": {
          return "Karten!";
        }
        case "endTurn": {
          return "beendet";
        }
        case "enemyTurn": {
          return "am Zug";
        }
        case "gameOver": {
          return "versagt!";
        }
        default: {
          return "Mudda";
        }
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
.icon {
}

.info-banner {
  /* CSS-Stile */

  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6951155462184874) 6%,
    rgba(0, 0, 0, 0.7987570028011204) 20%,
    rgba(0, 0, 0, 0.8995973389355743) 50%,
    rgba(0, 0, 0, 0.7987570028011204) 80%,
    rgba(0, 0, 0, 0.7035189075630253) 94%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
