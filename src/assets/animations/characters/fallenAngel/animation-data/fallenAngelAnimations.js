//Damit die Pfade zur Build-Zeit korrekt aufgelöst werden und man diese in Komponenten nutzen kann, müssen sie vorher in der Datei importiert werden.
//müssen absolut sein weil ich sie sonst nicht an der anderen Stelle gebrauchen kann(sonst wäre der Pfad relativ zu der Komponente die sie verwendet)

import fallenAngelIdle from "@/assets/animations/characters/fallenAngel/sprites/fallenAngelIdleSprite.png";
import fallenAngelHurt from "@/assets/animations/characters/fallenAngel/sprites/fallenAngelHurtSprite.png";
import fallenAngelThrowing from "@/assets/animations/characters/fallenAngel/sprites/FallenAngelThrowingSprite.png";
import fallenAngelDying from "@/assets/animations/characters/fallenAngel/sprites/fallenAngelDyingSprite.png";

export default {
  idle: {
    name: "idle",
    numberOfFrames: 17,
    ticksPerFrame: 3,
    loop: true,
    spriteSrc: fallenAngelIdle,
  },
  hurting: {
    name: "hurting",
    numberOfFrames: 12,
    ticksPerFrame: 4,
    loop: false,
    spriteSrc: fallenAngelHurt,
  },
  attacking: {
    name: "attacking",
    numberOfFrames: 12,
    ticksPerFrame: 4,
    loop: false,
    spriteSrc: fallenAngelThrowing,
  },
  dying: {
    name: "dying",
    numberOfFrames: 15,
    ticksPerFrame: 3,
    loop: false,
    spriteSrc: fallenAngelDying,
  },
};
