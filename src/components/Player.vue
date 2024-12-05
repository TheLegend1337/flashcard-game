<template>
  <!--Ziel war es in dieser Komponente die Animationsdaten zu übergeben(mit hilfe vom :animationParameters Prop)
  und dann verschiedene Animationen abzuspielen(je nachdem was in der Dropdown ausgewählt wurde)-->
  <div class="player">
    <!-- 
    TODO
    -
    -
    isDefenseIconAnimationPlaying, isDamageIconAnimationPlaying,isHealingIconAnimationPlaying  muss noch implementiert werden und durch Events auf true/false gesetzt werden. -->
    <div
      v-if="whatIconAnimationIsPlaying === 'defense-icon-animation'"
      class="defense-icon-animation"
      @animationend="handleIconAnimationEnd"
    ></div>
    <div
      v-if="whatIconAnimationIsPlaying === 'damage-icon-animation'"
      class="damage-icon-animation"
      @animationend="handleIconAnimationEnd"
    ></div>
    <div
      v-if="whatIconAnimationIsPlaying === 'heal-icon-animation'"
      class="heal-icon-animation"
      @animationend="handleIconAnimationEnd"
    ></div>
    <!--  -->
    <!-- <select v-model="selectedSpriteAnimation" @change="updateAnimation"> -->
    <!--Ich habe ein Dropdown zum debuggen hinzugefügt 
      und mit v-model an eine einfach Variable in data(selectedSpriteAnimation) in der Komponente gebunden sodass die Auswahl direkt auf die Variable wirkt.
      Außerdem habe ich einen Eventlistener @change hinzugefügt, der darauf reagiert, wenn eine bestimmte Änderung eintritt
      
      Rendern der Liste:
      die Optionen werden mit v-for gerendert als Liste an Optionen für die Dropdownauswahl.
      v-for läuft dabei über fallenAngelAnimations(das ist meine Javascript Datei mit den Meta Daten zu jeder Animation.)
      -->
    <!-- <option
        v-for="(animation, key) in fallenAngelAnimations"
        :key="key"
        :value="key"
      >
        {{ animation.name }}
      </option> -->
    <!-- </select>  -->
    <!--Bracket Notation hinzugefügt damit wir dynamisch die jeweilige Animation tauschen können-->
    <SpeechBubble
      :toggleSpeechBubble="toggleSpeechBubble"
      @resetToggleSpeechBubble="handleResetToggleSpeechBubble"
    />
    <div
      id="single-effect-animation-wrapper"
      :class="{
        'fade-in-from-left-to-right':
          playerAnimationState === 'fade-in-from-left-to-right',
        'attacking-from-left-to-right': selectedSpriteAnimation === 'attacking',
      }"
    >
      <!-- @animationend="handleAnimationEnd" -->
      <SpriteAnimation
        :key="selectedSpriteAnimation"
        :animationParameters="fallenAngelAnimations[selectedSpriteAnimation]"
        @sprite-animation-completed="handleSpriteAnimationEnd"
      />
    </div>
    <IndicatorsContainer role="player" />
    <!-- Außerdem habe ich den Komponenten Parameter dynamisch gemacht sodass die ausgewählte Animation hier eingetragen wird.-->
  </div>
</template>

<script>
import SoundHandler from "@/helpers/soundHandler";
import defenseIconAnimationSound from "@/assets/sounds/soundEffects/grinding-metal-higher.mp3";
import attackingAnimationSound from "@/assets/sounds/soundEffects/punch1.wav";
import SpriteAnimation from "@/components/Animation/SpriteAnimation.vue";
import IndicatorsContainer from "@/components/FlashcardGame/container/IndicatorsContainer.vue";
import fallenAngelAnimations from "@/assets/animations/characters/fallenAngel/animation-data/fallenAngelAnimations.js"; //TODO: Ziel ist es irgendwann im Pfad hero-vue mit dem ausgewählten Character zu ersetzen
import SpeechBubble from "@/components/FlashcardGame/Indicators/SpeechBubble.vue";

export default {
  components: {
    SpriteAnimation,
    IndicatorsContainer,
    SpeechBubble,
  },
  props: {
    playerAction: {
      type: String,
      required: true,
      default: "none",
    },
    toggleSpeechBubble: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // idleSpriteAnimation,
      fallenAngelAnimations,
      selectedSpriteAnimation: "idle", // Standardanimation, Steuert welche Animation gerade übergeben werden soll.
      whatIconAnimationIsPlaying: "none",
      isAttacking: false, //TODO animation muss auf playerAnimationState bezogen werden
    };
  },
  mounted() {
    //ACHTUNG das hinzufügen von this.soundHandler mit dem this Keyword ist wichtig damit es beim Laden keine Probleme gibt.
    this.soundHandler = new SoundHandler(); //zum erstellen des SoundHandlers
    this.soundHandler.registerSound(
      "defenseIconAnimationSound",
      defenseIconAnimationSound,
    ); //zum registrieren des Soundeffects
    attackingAnimationSound;
    this.soundHandler.registerSound(
      "attackingAnimationSound",
      attackingAnimationSound,
    );
    //zum Abspielen des Soundeffects(zweiter Parameter ist Lautstärke)
  },
  methods: {
    updateAnimation() {
      console.log("Selected Animation:", this.selectedSpriteAnimation);
    },
    handleIconAnimationEnd() {
      this.whatIconAnimationIsPlaying = "none";
    },
    handleResetToggleSpeechBubble() {
      this.$emit("resetToggleSpeechBubble");
    },
    handleSpriteAnimationEnd() {
      console.log("Handle Sprite Animation end");
      // switch (this.playerAnimationState) {
      //   case "attacking":
      //     this.selectedSpriteAnimation = "idle";
      //     break;
      //   case "buffing":
      //     this.selectedSpriteAnimation = "idle";
      //     break;
      //   case "dying":
      //     this.selectedSpriteAnimation = "idle";
      //     break;
      //   default:
      //     this.selectedSpriteAnimation = "idle";
      // }
      this.selectedSpriteAnimation = "idle";
      this.$emit(
        "player-sprite-animation-completed",
        this.selectedSpriteAnimation,
      );
    },
  },
  computed: {},
  watch: {
    playerAction() {
      switch (this.playerAction) {
        case "attacking":
          this.selectedSpriteAnimation = "attacking";
          this.soundHandler.playSound("attackingAnimationSound", 0.1);
          break;
        case "buffing":
          this.whatIconAnimationIsPlaying = "defense-icon-animation";
          this.soundHandler.playSound("defenseIconAnimationSound", 0.2);
          break;
        case "hurting":
          this.selectedSpriteAnimation = "hurting";
          break;
        case "dying":
          this.selectedSpriteAnimation = "dying";
          break;
        case "healing":
          this.whatIconAnimationIsPlaying = "heal-icon-animation";

          break;
        default:
          this.selectedSpriteAnimation = "idle";
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles hier */

.player {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 37%;
  left: 25%;
  /*border: 10px solid black;*/
  /*grid-row-start: 6;
  grid-row-end: 7;
  grid-column-start: 4;
  grid-column-end: 5;*/
}

.defense-icon-animation {
  width: 150px;
  height: 150px;
  position: absolute;
  background-image: url("@/assets/icons/shield-icon.png");
  background-size: cover;
  background-position: center;
  transform: translate(50%, 50%);
  z-index: 10;
  animation: defenseIconAnimation 1.5s ease-in-out;
}

@keyframes defenseIconAnimation {
  0% {
    background-image: url("@/assets/icons/shield-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 0%;
    transform: translate(50%, 100%) scale(1);
  }
  30% {
    background-image: url("@/assets/icons/shield-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 70%) scale(1.2);
    opacity: 100%;
  }
  100% {
    background-image: url("@/assets/icons/shield-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 0%) scale(1.4);
    opacity: 0%;
  }
}

.damage-icon-animation {
  width: 150px;
  height: 150px;
  position: absolute;
  background-image: url("@/assets/icons/attack-icon.png");
  background-size: cover;
  background-position: center;
  transform: translate(50%, 50%);
  z-index: 10;
  animation: damageIconAnimation 0.5s steps(2, end);
}

@keyframes damageIconAnimation {
  0% {
    background-image: url("@/assets/icons/attack-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 0%;
    transform: translate(50%, 50%) scale(1) rotateZ(30deg);
  }
  50% {
    background-image: url("@/assets/icons/attack-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(1.2) rotateZ(-30deg);
    opacity: 100%;
  }

  100% {
    background-image: url("@/assets/icons/attack-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(1) rotateZ(60deg);
    opacity: 0%;
  }
}

.heal-icon-animation {
  width: 150px;
  height: 150px;
  position: absolute;
  background-image: url("@/assets/icons/heal-effect-icon-plus-signs.png");
  background-size: cover;
  background-position: center;
  transform: translate(50%, 50%);
  z-index: 10;
  animation: healIconAnimation 1.5s ease-in-out;
}
@keyframes healIconAnimation {
  0% {
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 0%;
    transform: translate(50%, 50%) scale(1);
  }
  30% {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(2);
    opacity: 100%;
  }
  100% {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(4);
    opacity: 0%;
  }
}

@keyframes fadeInFromLeftToRight {
  0% {
    opacity: 0;
    transform: translate(-100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.fade-in-from-left-to-right {
  animation: fadeInFromLeftToRight 1s cubic-bezier(0.69, 0.16, 0.41, 1.44);
}

@keyframes attackingFromLeftToRight {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.attacking-from-left-to-right {
  animation: attackingFromLeftToRight 1s cubic-bezier(0.69, 0.16, 0.41, 1.44);
}
</style>
