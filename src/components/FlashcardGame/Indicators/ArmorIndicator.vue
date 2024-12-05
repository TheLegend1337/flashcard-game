<template>
  <div class="fade-in-armor-indicator-from-left-to-right armor-indicator">
    <div class="armor-value">
      <p>{{ armorValue }}</p>
    </div>
  </div>
</template>

<script>
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
export default {
  name: "ArmorIndicator",
  components: {
    //Component
  },
  props: {
    armorValue: {
      type: Number,
    },
  },
  data() {
    return {
      // Zustandsvariablen
    };
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
.armor-indicator {
  height: 45px;
  width: 75px;
  background-image: url("@/assets/icons/shield-icon.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(17%, -45%);
}
.armor-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}
.armor-value p {
  font-size: 1.8rem;
  color: white;
  text-shadow:
    #0b3237 3px 0px 0px,
    #0b3237 2px 1px 0px,
    #0b3237 1px 2px 0px,
    #0b3237 0px 3px 0px,
    #0b3237 -1px 2px 0px,
    #0b3237 -2px 1px 0px,
    #0b3237 -3px 0px 0px,
    #0b3237 -2px -1px 0px,
    #0b3237 -1px -2px 0px,
    #0b3237 0px -3px 0px;
}

@keyframes fadeInArmorIndicatorFromLeftToRight {
  0% {
    opacity: 0;
    transform: translate(-50%, -45%);
  }
  100% {
    opacity: 1;
    transform: translate(17%, -45%);
  }
}

.fade-in-armor-indicator-from-left-to-right {
  animation: fadeInArmorIndicatorFromLeftToRight 0.3s linear;
}
</style>
