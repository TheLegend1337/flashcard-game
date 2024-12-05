//Damit die Pfade zur Build-Zeit korrekt aufgelöst werden und man diese in Komponenten nutzen kann, müssen sie vorher in der Datei importiert werden.
//müssen absolut sein weil ich sie sonst nicht an der anderen Stelle gebrauchen kann(sonst wäre der Pfad relativ zu der Komponente die sie verwendet)

import zombieVillagerIdle from "@/assets/animations/monsters/zombieVillager/sprites/zombieVillagerIdleSprite.png";
import zombieVillagerHurt from "@/assets/animations/monsters/zombieVillager/sprites/zombieVillagerHurtSprite.png";
import zombieVillagerRunSlashing from "@/assets/animations/monsters/zombieVillager/sprites/zombieVillagerRunSlashingSprite.png";
import zombieVillagerDying from "@/assets/animations/monsters/zombieVillager/sprites/zombieVillagerDyingSprite.png";

export default {
  idle: {
    name: "idle",
    numberOfFrames: 18,
    ticksPerFrame: 3,
    loop: true,
    spriteSrc: zombieVillagerIdle,
  },
  hurting: {
    name: "hurting",
    numberOfFrames: 12,
    ticksPerFrame: 4,
    loop: false,
    spriteSrc: zombieVillagerHurt,
  },
  attacking: {
    name: "attacking",
    numberOfFrames: 12,
    ticksPerFrame: 4,
    loop: false,
    spriteSrc: zombieVillagerRunSlashing,
  },
  dying: {
    name: "dying",
    numberOfFrames: 15,
    ticksPerFrame: 3,
    loop: false,
    spriteSrc: zombieVillagerDying,
  },
};
