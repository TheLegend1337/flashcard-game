<template>
  <div class="navigation">
    <div
      class="settings-icon"
      :class="{
        'menu-is-open': isMenuOpen,
        'menu-is-not-open': !isMenuOpen,
      }"
      @click="toggleMenu"
    ></div>
    <div v-if="isMenuOpen" class="menu-overlay" @click.self="toggleMenu">
      <!-- Click Self ist mega geilo weil wenn ich den Overlay anclicke dadurch auch das Menü getoggelt wird. -->
      <div class="menu-popup">
        <nav>
          <RouterLink @mouseenter="handleMouseEnter" to="/">Home</RouterLink>
          <RouterLink @mouseenter="handleMouseEnter" to="/flashcards-only"
            >Flashcards Only</RouterLink
          >
          <RouterLink @mouseenter="handleMouseEnter" to="/flashcard-game"
            >Karteikartenspiel</RouterLink
          >
          <RouterLink @mouseenter="handleMouseEnter" to="/user-tests-dashboard"
            >User Tests Dashboard</RouterLink
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import SoundHandler from "@/helpers/soundHandler";
import soundEffect_ButtonMouseEnter1 from "@/assets/sounds/soundEffects/shortScratchAKey.mp3";
import soundEffect_ButtonMouseEnter2 from "@/assets/sounds/soundEffects/shortScratchEKey.mp3";
import soundEffect_ButtonMouseEnter3 from "@/assets/sounds/soundEffects/shortScratchGKey.mp3";

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
      isMenuOpen: false,
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
      "shortScratchAKey",
      soundEffect_ButtonMouseEnter1,
    );
    this.soundHandler.registerSound(
      "shortScratchEKey",
      soundEffect_ButtonMouseEnter2,
    );
    this.soundHandler.registerSound(
      "shortScratchGKey",
      soundEffect_ButtonMouseEnter3,
    );
  },
  created() {
    this.$router.afterEach(() => {
      this.closeMenu(); // Close the menu when the route changes
    });
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleMouseEnter() {
      const soundEffects = [
        "shortScratchAKey",
        "shortScratchEKey",
        "shortScratchGKey",
      ];
      const randomIndex = Math.floor(Math.random() * soundEffects.length); // Random index between 0 and 2
      const randomSoundKey = soundEffects[randomIndex];

      // Ensure sound is loaded and ready
      if (this.soundHandler.sounds[randomSoundKey]) {
        const sound = this.soundHandler.sounds[randomSoundKey];
        sound.currentTime = 0; // Reset the playback position
        this.soundHandler.playSound(randomSoundKey, 0.03); // Play the sound
      } else {
        console.warn(`Sound "${randomSoundKey}" could not be played.`);
      }
    },
  },
};
</script>

<style scoped>
.navigation {
  width: 100%;
}
.settings-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.settings-icon:hover {
  transform: scale(1.2);
  filter: brightness(1.5);
}
.stop-music-button {
}

.menu-is-open {
  background-image: url("@/assets/icons/menu-icons/setting-gear.png");
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.5s cubic-bezier(0.69, 0.16, 0.41, 1.44);
}
.menu-is-not-open {
  background-image: url("@/assets/icons/menu-icons/setting-gear.png");
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.5s cubic-bezier(0.69, 0.16, 0.41, 1.44);
  transform: rotate(40deg);
}
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.menu-popup {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
  background: url("@/assets/ui-components-backgrounds/menu//whimsical-menu-background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* width: 516px;
  height: 800px; */
  filter: var(--drop-shadow-bright);
  /* filter: drop-shadow(0 0 6px rgba(245, 222, 179, 0.265))
    drop-shadow(0 0 12px rgba(245, 222, 179, 0.139))
    drop-shadow(0 0 18px rgba(245, 222, 179, 0.131)); */
  width: 450px;
  height: 700px;
  text-align: center;
}
nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  font-size: 1.3rem;
  text-align: center;

  border-radius: 50px;
}

nav a.router-link-exact-active {
  color: var(--type-on-bg-light);
}

nav a:hover {
  color: var(--type-on-bg-light);
  filter: drop-shadow(0px 0px 20px var(--drop-shadow-dark));
}

nav a {
  color: var(--linktext-on-nav);
  display: block;
  text-align: center;
  padding: 0.5rem 1rem;
  border: none;
}

nav a:first-of-type {
  border: 0;
}
</style>
