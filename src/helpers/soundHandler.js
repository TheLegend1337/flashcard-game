export default class SoundHandler {
  constructor() {
    this.sounds = {};
  }

  /*
    <script>...
    import SoundHandler from "@/helpers/soundHandler";
    import soundEffect_DrawCard from "@/assets/sounds/soundEffects/drawKnife1.ogg";
    mounted(){
    //ACHTUNG das hinzufügen von this.soundHandler mit dem this Keyword ist wichtig damit es beim Laden keine Probleme gibt.
     this.soundHandler = new SoundHandler(); //zum erstellen des SoundHandlers
     this.soundHandler.registerSound("drawCard", soundEffect_DrawCard); //zum registrieren des Soundeffects
     this.soundHandler.playSound("drawCard", 0.4); //zum Abspielen des Soundeffects(zweiter Parameter ist Lautstärke)
    }

   */
  registerSound(key, soundPath) {
    const audio = new Audio(soundPath);
    this.sounds[key] = audio;
    console.log(`Sound registered: ${key}`, this.sounds[key]);
  }

  playSound(key, volume = 1.0, loop = false) {
    if (this.sounds[key]) {
      const sound = this.sounds[key];
      sound.volume = Math.max(0, Math.min(volume, 1)); // Ensure volume is between 0 and 1
      if (sound.currentTime === 0) {
        sound.loop = loop; // Set loop only if playing from the start
      }
      sound.play().catch((err) => {
        console.error(`Error playing sound "${key}":`, err);
      });
    } else {
      console.warn(`Sound "${key}" not found. Make sure to register it first.`);
    }
  }

  pauseSound(key) {
    if (this.sounds[key]) {
      const sound = this.sounds[key];
      sound.pause();
    } else {
      console.warn(`Sound "${key}" not found.`);
    }
  }

  stopSound(key) {
    if (this.sounds[key]) {
      const sound = this.sounds[key];
      sound.pause();
      sound.currentTime = 0;
    } else {
      console.warn(`Sound "${key}" not found. Make sure to register it first.`);
    }
  }

  resumeSound(key) {
    if (this.sounds[key]) {
      const sound = this.sounds[key];
      sound.play().catch((err) => {
        console.error(`Error resuming sound "${key}":`, err);
      });
    } else {
      console.warn(`Sound "${key}" not found.`);
    }
  }
}
