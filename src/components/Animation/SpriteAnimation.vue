<template>
  <canvas ref="spriteAnimation" :class="{ flipped: flip }"></canvas>
</template>

<script>
import spriteHandler from "@/helpers/spriteHandler";
//import spriteImageSrc from "@/assets/animations/sprites/framework-combat/vue/idle.png";

const frameWidth = 600;
const frameHeight = 600;

export default {
  name: "SpriteAnimation",
  props: {
    animationParameters: {
      /*enthält alle Parameter für eine Animation*/
      type: Object,
      required: false,
      default: () => ({
        //Hier habe ich noch einen default Wert hinzufügen müssen, denn
        // Wenn dieser default Wert fehlt erhalte ich einen super komischen Bug,
        // bei dem nur die Player Komponente mit dem Sprite gerendert wird aber das umschalten und neurendern der Animation nicht mehr möglich ist
        spriteSrc: "",
        numberOfFrames: 1,
        ticksPerFrame: 10,
      }),
    },
    flip: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sprite: {}, //im Tutorial characterSprite: {},
    };
  },
  mounted() {
    console.log("mounted - animationParameters:", this.animationParameters);
    this.initializeSprite();
    /*Ich hatte vorher den ganzen code aus initializeSprite hier und hatte das Problem, das die Komponente nicht aktuelisiert wurde
    weil ich die Animation nur beim mounten durchgeführt habe, aber wenn die Animation geändert wird muss die Animation neu initialisiert werden...*1...*/
  },
  watch: {
    /*
    ...*1 deswegen musste ich noch watch hinzufügen, damit wir die Canvas komponente mit der Animation neu laden können immer wenn animationParameters sich ändert.
    */
    animationParameters() {
      console.log("watch - animationParameters updated:", newVal);
      this.initializeSprite();
    },
  },
  methods: {
    initializeSprite() {
      const canvas = this.$refs.spriteAnimation;
      const canvasContext = canvas.getContext("2d"); //ist bezogen auf den Canvas in dieser Komponente, wird immer zum Arbeiten mit 2d benötigt
      canvas.width = frameWidth;
      canvas.height = frameHeight;
      const spriteImage = new Image();
      spriteImage.src = this.animationParameters.spriteSrc;
      /*Debugging: */ console.log("Bildquelle:", spriteImage.src); // Zeigt die Quelle des Bildes an
      spriteImage.onload = () => {
        /* Debugging */
        console.log("Bild erfolgreich geladen");
        console.log("Bildquelle:", this.spriteImageSrc);
        /*HIER WERDEN DIE GANZEN DATEN FÜR DIE SPRITE ANIMATION ÜBERGEBEN*/
        this.sprite = spriteHandler({
          //heißt im tutorial " this.characterSprite = sprite({});"
          context: canvasContext, //achtung in der Handler Datei wird das Objekt zerlegt(Destrukturierung Syntax, deswegen context: ...).
          width: frameWidth,
          height: frameHeight,
          image: spriteImage,
          //Todo: numberOfFrames,ticksPerFrame,loop müssen als Props gesetzt werden.
          numberOfFrames: this.animationParameters.numberOfFrames, //Frames in Sprite gesamt
          ticksPerFrame: this.animationParameters.ticksPerFrame, //steuert Geschwindigkeit
          loop: this.animationParameters.loop, //wiederholen
          /*__________________________________*/
        });
        this.sprite.render();
        this.animate();
      };
      spriteImage.onerror = () => {
        console.error("Bild konnte nicht geladen werden:", spriteImageSrc);
      };
    },
    animate() {
      // console.log("Animate aufgerufen für:", this.$el);
      requestAnimationFrame(this.animate); //dadurch entsteht eine Schleife, wir rufen die Methode auf in der wir uns befinden
      this.sprite.update();
      this.sprite.render();
    },
  },
};
</script>
<style scoped>
canvas {
  height: 300px;
  /*canvas größe wird in Styles angepasst*/
}
.flipped {
  transform: scaleX(-1); /* Horizontales Spiegeln */
}
</style>
