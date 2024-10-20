//Damit die Pfade zur Build-Zeit korrekt aufgelöst werden und man diese in Komponenten nutzen kann, müssen sie vorher in der Datei importiert werden.
//müssen absolut sein weil ich sie sonst nicht an der anderen Stelle gebrauchen kann(sonst wäre der Pfad relativ zu der Komponente die sie verwendet)
import attackSprite from "@/assets/animations/monsters/monster-react/sprites/attack.png";
import dieSprite from "@/assets/animations/monsters/monster-react/sprites/die.png";
import dizzySprite from "@/assets/animations/monsters/monster-react/sprites/dizzy.png";
import idleSprite from "@/assets/animations/monsters/monster-react/sprites/idle.png";
import jetpackSprite from "@/assets/animations/monsters/monster-react/sprites/jetpack.png";
import jumpSprite from "@/assets/animations/monsters/monster-react/sprites/jump.png";
import rollSprite from "@/assets/animations/monsters/monster-react/sprites/roll.png";
import runSprite from "@/assets/animations/monsters/monster-react/sprites/run.png";
import runWithGunSprite from "@/assets/animations/monsters/monster-react/sprites/runWithGun.png";
import shootSprite from "@/assets/animations/monsters/monster-react/sprites/shoot.png";
import slideSprite from "@/assets/animations/monsters/monster-react/sprites/slide.png";
import throwingSprite from "@/assets/animations/monsters/monster-react/sprites/throwing.png";

export default {
  attack: {
    name: "attack",
    numberOfFrames: 6,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: attackSprite,
  },
  die: {
    name: "die",
    numberOfFrames: 12,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: dieSprite,
  },
  dizzy: {
    name: "dizzy",
    numberOfFrames: 4,
    ticksPerFrame: 7,
    loop: true,
    spriteSrc: dizzySprite,
  },
  idle: {
    name: "idle",
    numberOfFrames: 12,
    ticksPerFrame: 7,
    loop: true,
    spriteSrc: idleSprite,
  },
  jetpack: {
    name: "jetpack",
    numberOfFrames: 8,
    ticksPerFrame: 7,
    loop: true,
    spriteSrc: jetpackSprite,
  },
  jump: {
    name: "jump",
    numberOfFrames: 6,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: jumpSprite,
  },
  roll: {
    name: "roll",
    numberOfFrames: 7,
    ticksPerFrame: 7,
    loop: true,
    spriteSrc: rollSprite,
  },
  run: {
    name: "run",
    numberOfFrames: 10,
    ticksPerFrame: 7,
    loop: true,
    spriteSrc: runSprite,
  },
  runWithGun: {
    name: "runWithGun",
    numberOfFrames: 10,
    ticksPerFrame: 7,
    loop: true,
    spriteSrc: runWithGunSprite,
  },
  shoot: {
    name: "shoot",
    numberOfFrames: 5,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: shootSprite,
  },
  sliding: {
    name: "sliding",
    numberOfFrames: 6,
    ticksPerFrame: 7,
    loop: true,
    spriteSrc: slideSprite,
  },
  throwing: {
    name: "throwing",
    numberOfFrames: 6,
    ticksPerFrame: 7,
    loop: false,
    spriteSrc: throwingSprite,
  },
};
