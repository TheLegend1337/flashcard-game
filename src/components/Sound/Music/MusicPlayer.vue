<template>
  <div class="music-player"></div>
</template>

<script>
import SoundHandler from "@/helpers/soundHandler";
import music_MainBackgroundMusic from "@/assets/sounds/music/Fantasy-Vol6-Concerning-Times-Intensity-1.mp3";
export default {
  name: "MusicPlayer",
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
  mounted() {
    //ACHTUNG das hinzufügen von this.soundHandler mit dem this Keyword ist wichtig damit es beim Laden keine Probleme gibt.
    this.soundHandler = new SoundHandler(); //zum erstellen des SoundHandlers
    this.soundHandler.registerSound(
      "mainBackgroundMusic",
      music_MainBackgroundMusic,
    ); //zum registrieren des Soundeffects
    let loop = true;
    this.soundHandler.playSound("mainBackgroundMusic", 0.03, loop); //zum Abspielen des Soundeffects(zweiter Parameter ist Lautstärke)
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
.music-player {
  /* CSS-Stile */
}
</style>
