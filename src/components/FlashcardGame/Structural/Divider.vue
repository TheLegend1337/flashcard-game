<template>
  <div class="divider flex w-[90%] items-center justify-around">
    <div class="line"></div>
    <div class="gem"></div>
    <div class="line"></div>
  </div>
</template>

<script>
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
export default {
  name: "ExampleComponent",
  components: {
    //Component
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
.line {
  width: 40%;
  border-radius: 15%;
  /* CSS-Stile */
  height: 2px;
  background: rgb(99, 65, 43);
  background: linear-gradient(
    90deg,
    rgba(99, 65, 43, 1) 0%,
    rgba(154, 132, 120, 1) 50%,
    rgba(99, 65, 43, 1) 100%
  );
}

.gem {
  width: 10px;
  height: 10px;
  background: radial-gradient(circle at 30% 30%, #4da6ff, #31568d 70%);
  clip-path: polygon(50% 0%, 90% 25%, 100% 75%, 50% 100%, 0% 75%, 10% 25%);
  /* border: 3px solid #4d0000; */
  box-shadow:
    inset 0 -2px 4px rgba(255, 255, 255, 0.3),
    /* Subtle highlight */ 0 4px 8px rgba(0, 0, 0, 0.7); /* Outer shadow for depth */
}
</style>
