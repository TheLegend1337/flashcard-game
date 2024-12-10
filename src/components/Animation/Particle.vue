<template>
  <div class="particle">
    <canvas></canvas>
  </div>
</template>

<script>
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
import SparkParticle from "@/helpers/particleHandler";
export default {
  name: "ExampleComponent",
  components: {
    //Component
  },
  props: {
    // Definiere Props hier
    // objectName:{
    //   type: object,
    //   default: null,
    // }
  },

  data() {
    return {
      // Zustandsvariablen
      canvas: null,
      canvasContext: null,
      canvasWidth: 150,
      canvasHeight: 150,
      FLAME_COLORS: [
        { r: 255, g: 255, b: 255 },
        { r: 230, g: 230, b: 250 },
        { r: 255, g: 255, b: 0 },
        { r: 255, g: 215, b: 0 },
        { r: 255, g: 105, b: 180 },
        { r: 255, g: 99, b: 71 },
        { r: 72, g: 61, b: 139 },
        { r: 34, g: 34, b: 34 },
        { r: 26, g: 26, b: 26 },
        { r: 17, g: 17, b: 17 },
      ],
    };
  },
  computed: {
    // Berechnete Eigenschaften
  },
  watch: {
    // Beobachter für reaktive Daten oder Props
  },

  // Lifecycle Hooks
  mounted() {
    this.canvas = this.$el.querySelector("canvas");
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.canvasContext = this.canvas.getContext("2d");
    this.animateParticles();
  },
  methods: {
    // Methoden der Komponente
    animateParticles() {
      SparkParticle.emitParticles(
        this.canvasContext,
        this.canvasWidth,
        this.canvasHeight,
        75, //originX
        75, //originY
        20, //originShiftX
        20, //originShiftY
        3, //maxSize
        1, //minsize
      );
    },
  },
};
</script>

<style scoped>
.particle {
}
canvas {
  width: 150px;
  height: 150px;
  border: 2px solid green;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
