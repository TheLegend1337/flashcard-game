<template>
  <div class="music-player">
    <div
      class="stop-music-button"
      @click="toggleMusic()"
      :class="{
        'music-is-playing': this.soundStore.isMusicPlaying,
        'music-is-not-playing': !this.soundStore.isMusicPlaying,
      }"
    ></div>
  </div>
</template>

<script>
import SoundHandler from "@/helpers/soundHandler";
import music_MainBackgroundMusic from "@/assets/sounds/music/Fantasy-Vol6-Concerning-Times-Intensity-1.mp3";
import { useSoundStore } from "@/stores/FlashcardGameStores/soundStore";

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
      soundStore: useSoundStore(),
    };
  },
  computed: {},
  watch: {
    "soundStore.isMusicPlaying"() {
      if (!this.soundStore.isMusicPlaying) {
        this.soundHandler.pauseSound("mainBackgroundMusic");
        console.log("isMusicPlaying: " + this.soundStore.isMusicPlaying);
        // console.log("Paused music");
      } else {
        console.log("isMusicPlaying: " + this.soundStore.isMusicPlaying);
        let loop = true;
        this.soundHandler.playSound("mainBackgroundMusic", 0.03, loop);
        //  console.log("Resumed music");
      }
    },
  },
  mounted() {
    //ACHTUNG das hinzufügen von this.soundHandler mit dem this Keyword ist wichtig damit es beim Laden keine Probleme gibt.

    this.soundHandler = new SoundHandler(); //zum erstellen des SoundHandlers
    this.soundHandler.registerSound(
      "mainBackgroundMusic",
      music_MainBackgroundMusic,
    ); //zum registrieren des Soundeffects

    //this.soundHandler.playSound("mainBackgroundMusic", 0.03, loop); //zum Abspielen des Soundeffects(zweiter Parameter ist Lautstärke)
    //   this.soundStore.isMusicPlaying = true;
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
    errorCaptured(err, vm, info) {
      // Wird ausgeführt, wenn ein Fehler in einem Kindkomponenten-Lebenszyklus oder -Rendering auftritt
      // Ermöglicht Fehlerbehandlung innerhalb der Komponente
      destroyed() {
        // Wird ausgeführt, nachdem die Komponente zerstört wurde
        },
      },*/
  beforeUnmount() {},
  methods: {
    toggleMusic() {
      //console.log(`Toggling music. Current state: ${this.soundStore.isMusicPlaying}`);
      if (this.soundStore.isMusicPlaying) {
        this.soundHandler.pauseSound("mainBackgroundMusic");
        // console.log("Paused music");
      } else {
        this.soundHandler.playSound("mainBackgroundMusic", 0.03);
        //  console.log("Resumed music");
      }
      this.soundStore.isMusicPlaying = !this.soundStore.isMusicPlaying;
      //console.log(`New state: ${this.soundStore.isMusicPlaying}`);
    },
  },
};
</script>

<style scoped>
.music-player {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.69, 0.16, 0.41, 1.44);
}
.music-player:hover {
  transform: scale(1.2);
  filter: brightness(1.5);
}

.music-is-playing {
  width: 36px;
  height: 36px;
  background-image: url("@/assets/icons/menu-icons/music-is-playing-icon.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.music-is-not-playing {
  width: 36px;
  height: 36px;
  background-image: url("@/assets/icons/menu-icons/music-is-not-playing-icon.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
