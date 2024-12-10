<template>
  <div class="end-turn">
    <Particle />
  </div>
</template>

<script>
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
import Particle from "@/components/Animation/Particle.vue";
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
.end-turn {
  width: 80px;
  height: 80px;
  border: 2px solid red;
  position: absolute;
  bottom: 30%;
  right: 10%;
  justify-self: end;
}
</style>
