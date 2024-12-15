<template>
  <div
    class="intent-indicator"
    :class="{
      invisible: !isLoadingAnimationReady,
      animateIntent: isLoadingAnimationReady,
    }"
  >
    <div class="intentValue">
      <p class="intent-indicator-text">{{ this.intent.value }}</p>
    </div>
  </div>
</template>

<script>
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
export default {
  name: "IntentIndicator",
  components: {
    //Component
  },
  props: {
    // Definiere Props hier
    intent: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      // Zustandsvariablen
      isLoadingAnimationReady: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoadingAnimationReady = true;
    }, 5000);
  },
  computed: {
    // Berechnete Eigenschaften
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
.intent-indicator {
  /* CSS-Stile */
  width: 90px;
  height: 90px;

  position: absolute;
  left: 50%;
  top: -10%;
  transform: translate(-50%, 0);
  background-image: url("@/assets/icons/intent-weak-attack-icon.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.intentValue {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.intent-indicator-text {
  font-size: 2.4rem;
  color: white;
  text-shadow:
    #5a0000 3px 0px 0px,
    #5a0000 2px 1px 0px,
    #5a0000 1px 2px 0px,
    #5a0000 0px 3px 0px,
    #5a0000 -1px 2px 0px,
    #5a0000 -2px 1px 0px,
    #5a0000 -3px 0px 0px,
    #5a0000 -2px -1px 0px,
    #5a0000 -1px -2px 0px,
    #5a0000 0px -3px 0px;
}

@keyframes animateIntent {
  0% {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, 0%);
    opacity: 0.3;
  }
  100% {
    transform: translate(-50%, 0%);
    opacity: 1;
  }
}

.animateIntent {
  animation: animateIntent ease-in-out 2s;
}

.invisible {
  opacity: 0;
}
</style>
