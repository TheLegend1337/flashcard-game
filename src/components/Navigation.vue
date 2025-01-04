<template>
  <div class="navigation">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/flashcards-only">Flashcards Only</RouterLink>
      <RouterLink to="/flashcard-game">Karteikartenspiel</RouterLink>
      <RouterLink to="/user-tests-dashboard">User Tests Dashboard</RouterLink>
    </nav>
  </div>
</template>

<script>
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
export default {
  name: "Navigation",
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
.navigation {
  border: 2px solid green;
  width: 100%;
}

nav {
  width: 100%;
  height: 7vh;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
  border-radius: 50px;
}

nav a.router-link-exact-active {
  color: var(--type-on-bg-light);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  color: var(--linktext-on-nav);
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
