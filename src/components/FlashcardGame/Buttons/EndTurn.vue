<template>
  <div class="end-turn" @mouseenter="playMouseEnterSound">
    <div class="end-turn-button"></div>
    <Particle class="particle-effect" />
  </div>
</template>

<script>
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
import Particle from "@/components/Animation/Particle.vue";
import SoundHandler from "@/helpers/soundHandler";
import soundEffect_ButtonMouseEnter from "@/assets/sounds/soundEffects/bookFlip3.ogg";
export default {
  name: "ExampleComponent",
  components: {
    Particle,
  },
  props: {
    // Definiere Props hier
    // objectName:{
    //   type: object,
    //   default: null,
    // }
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
  mounted() {
    this.soundHandler = new SoundHandler();
    this.soundHandler.registerSound(
      "buttonHover",
      soundEffect_ButtonMouseEnter,
    );
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
    playMouseEnterSound() {
      this.soundHandler.playSound("buttonHover", 0.03);
    },
  },
};
</script>

<style scoped>
.end-turn {
  width: 90px;
  height: 90px;

  position: absolute;
  bottom: 30%;
  right: 10%;
  justify-self: end;
}
.end-turn-button {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/icons/btn_changeturn_middle.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 2;
}
.end-turn-button:hover {
  filter: drop-shadow(0 0 16px rgba(245, 222, 179, 0.465));
}
.particle-effect {
  z-index: 1;
}
</style>
