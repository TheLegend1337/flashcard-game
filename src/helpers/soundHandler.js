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
  }
  /**
   * Plays a registered sound.
   * @param {string} key - The key of the sound to play.
   * @param {number} volume - The volume of the sound (between 0 and 1).
   * @param {boolean} loop - Whether the sound should loop. Defaults to false.
   */
  playSound(key, volume = 1.0, loop = false) {
    if (this.sounds[key]) {
      const sound = this.sounds[key];
      sound.volume = Math.max(0, Math.min(volume, 1)); // Ensure volume is between 0 and 1
      sound.currentTime = 0; // Reset playback to the start
      sound.loop = loop; // Set the loop property
      sound.play().catch((err) => {
        console.error(`Error playing sound "${key}":`, err);
      });
    } else {
      console.warn(`Sound "${key}" not found. Make sure to register it first.`);
    }
  }
}
