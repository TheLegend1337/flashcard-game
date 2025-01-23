<template>
  <div v-if="toggleSpeechBubble" class="speech-bubble">
    <div class="speech-bubble-text-wrapper">
      <p>{{ speech }}</p>
    </div>
  </div>
</template>

<script>
//beim import import spriteHandler from "@/helpers/spriteHandler"; darauf achten keine Dateiendung anzugeben, da es bei Vite zum Fehler führt.
//@ steht für den src Ordner
export default {
  name: "SpeechBubble",
  components: {
    //Component
  },
  props: {
    toggleSpeechBubble: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // Zustandsvariablen
      speechBubbleText: 0,
      texts: [
        "Ich habe nicht genug Willenskraft!",
        "Du musst deinen Zug beenden!",
        "Lass lieber auf die Couch und Doomscrollen!",
        "Das ist Tomorrows Problem!",
        "Die Deadline ist eh erst nächste Woche!",
        "Ich habe keine Lust!",
        "Ich fühle mich heute nicht danach :(",
        "Das ist schon der 8. Text!",
        "Hör Bitte auf!",
        "Denkst du das ist witzig?!",
        "Ich fühle mich belästigt!",
        "//put player insult here",
        "Das reicht jetzt endlich...",
        "Das reicht jetzt endlich...",
        "Haha du dachtest das sei zu Ende!",
        "Aber es geht halt einfach weiter!",
        "Aber jetzt reicht es wirklich!",
        "Klicke wenn du süsse Hunde nicht magst...",
      ],
      speech: "",
      test: "Ich habe nicht genug Willenskraft!",
      textCounter: 0,
    };
  },
  computed: {
    // Berechnete Eigenschaften
  },
  watch: {
    toggleSpeechBubble(value) {
      if (value) {
        this.typingEffect();
      }
    },
  },

  mounted() {},

  methods: {
    typingEffect() {
      let characterIndex = 0;

      const fullText = this.texts[this.textCounter];
      this.speech = "";
      const typeCharacter = () => {
        if (characterIndex < fullText.length) {
          this.speech = this.speech + fullText[characterIndex];
          characterIndex++;
          const randomSpeed = Math.floor(Math.random() * (50 - 25) + 25);
          setTimeout(typeCharacter, randomSpeed);
        } else {
          setTimeout(() => {
            this.$emit("resetToggleSpeechBubble");
          }, 500);
          if (this.textCounter < this.texts.length - 1) {
            this.textCounter++;
          } else {
            this.textCounter = 0;
          }
        }
      };
      typeCharacter();
    },
  },
};
</script>

<style scoped>
.speech-bubble {
  position: absolute;
  top: -15%;
  left: 40%;
  height: 100px;
  width: 280px;
  filter: drop-shadow(10px 10px 15px #423425);
  background-size: contain;
  background-repeat: no-repeat;

  background-image: url("@/assets/ui-components-backgrounds/speech-bubble-background.png");
}
.speech-bubble-text-wrapper {
  padding-top: 7px;
  padding-left: 15px;

  font-size: 1rem;
}
.speech-bubble-text-wrapper p {
  font-size: 1.3rem;
}
</style>
