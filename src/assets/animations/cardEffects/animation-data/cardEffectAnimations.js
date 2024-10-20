//Damit die Pfade zur Build-Zeit korrekt aufgelöst werden und man diese in Komponenten nutzen kann, müssen sie vorher in der Datei importiert werden.
//müssen absolut sein weil ich sie sonst nicht an der anderen Stelle gebrauchen kann(sonst wäre der Pfad relativ zu der Komponente die sie verwendet)

import atomicExplosion from "@/assets/animations/cardEffects/sprites/atomicExplosionSprite.png";
// import dieSprite from "@/assets/animations/characters/hero-vue/sprites/die.png";
// import dizzySprite from "@/assets/animations/characters/hero-vue/sprites/dizzy.png";
// import idleSprite from "@/assets/animations/characters/hero-vue/sprites/idle.png";
// import jetpackSprite from "@/assets/animations/characters/hero-vue/sprites/jetpack.png";
// import jumpSprite from "@/assets/animations/characters/hero-vue/sprites/jump.png";
// import rollSprite from "@/assets/animations/characters/hero-vue/sprites/roll.png";
// import runSprite from "@/assets/animations/characters/hero-vue/sprites/run.png";
// import runWithGunSprite from "@/assets/animations/characters/hero-vue/sprites/runWithGun.png";
// import shootSprite from "@/assets/animations/characters/hero-vue/sprites/shoot.png";
// import slideSprite from "@/assets/animations/characters/hero-vue/sprites/slide.png";
// import throwingSprite from "@/assets/animations/characters/hero-vue/sprites/throwing.png";

export default {
  atomicExplosion: {
    name: "atomicExplosion",
    numberOfFrames: 8,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: atomicExplosion,
  },
  lightning: {
    name: "lightning",
    numberOfFrames: 8,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: "",
  },
  fireball: {
    name: "fireball",
    numberOfFrames: 8,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: "",
  },
  armor: {
    name: "armor",
    numberOfFrames: 8,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: "",
  },
  heal: {
    name: "heal",
    numberOfFrames: 8,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: "",
  },
  heal: {
    name: "heal",
    numberOfFrames: 8,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: "",
  },
};
