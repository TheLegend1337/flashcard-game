<template>
  <div class="example-component">
    <!-- Template-Inhalt -->

    <!-- <MyComponent
          :propName="60"
          stringProp="secondary"
         
        /> -->
    <!-- Doppelpunkt ist shorthand für v-bind und wird für Variablen verwendet
          objects sowie Arrays brauchen den Doppelpunkt.
          Numbers, booleans, Strings ohne Doppelpunkt. -->
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
    //   type: Object,
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
.example-component {
  /* CSS-Stile */
}
</style>
