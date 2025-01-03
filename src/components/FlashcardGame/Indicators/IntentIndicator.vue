<template>
  <!-- :class="{
      invisible: !isLoadingAnimationReady,
      animateLoadIntent: isLoadingAnimationReady,
    }" -->
  <div
    class="intent-indicator"
    :class="{
      animateLoadIntent: this.animationState === 'animateLoadIntent',
      intentPulseAnimation: this.animationState === 'flashingPulseWithFadeOut',
    }"
    @animationend="handleIntentIndicatorAnimationEnd"
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

    playIntentAnimation: {
      type: Boolean,
      default: false,
      Required: true,
    },
  },
  data() {
    return {
      // Zustandsvariablen
      //isLoadingAnimationReady: false,
    };
  },
  beforeMount() {
    this.animationState = "animateLoadIntent";
  },
  mounted() {
    // setTimeout(() => {
    //   this.isLoadingAnimationReady = true;
    // }, 5000);
  },
  computed: {
    // Berechnete Eigenschaften
  },
  watch: {
    // Beobachter für reaktive Daten oder Props

    playIntentAnimation() {
      this.animationState = "flashingPulseWithFadeOut";
    },
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
    handleIntentIndicatorAnimationEnd() {
      this.$emit("animation-ended", this.animationState);
    },
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

@keyframes animateLoadIntent {
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

.animateLoadIntent {
  animation: animateLoadIntent ease-in-out 2s;
}

@keyframes flashingPulseWithFadeOut {
  0% {
    transform: translate(-50%, 0) scale(1);
    filter: brightness(150%);
  }
  10% {
    transform: translate(-50%, 0) scale(1);
    opacity: 1;
    filter: brightness(100%);
  }
  20% {
    transform: translate(-50%, 0) scale(1.3);
    opacity: 0.7;
    filter: brightness(150%);
  }
  30% {
    transform: translate(-50%, 0) scale(1);
    filter: brightness(100%);
    opacity: 0.7;
  }
  40% {
    transform: translate(-50%, 0) scale(1.3);
    filter: brightness(150%);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, 0) scale(1);
    filter: brightness(100%);
    opacity: 0.7;
  }
  60% {
    transform: translate(-50%, 0) scale(1.3);
    filter: brightness(150%);
    opacity: 0.7;
  }
  70% {
    transform: translate(-50%, 0) scale(1);
    filter: brightness(100%);
    opacity: 0.7;
  }
  100% {
    transform: translate(-50%, 0) scale(3);
    opacity: 0;
  }
}
.intentPulseAnimation {
  animation: flashingPulseWithFadeOut 1s cubic-bezier(0.69, 0.16, 0.41, 1.44)
    forwards;
}
</style>
