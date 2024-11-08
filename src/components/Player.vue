<template>
  <!--Ziel war es in dieser Komponente die Animationsdaten zu übergeben(mit hilfe vom :animationParameters Prop)
  und dann verschiedene Animationen abzuspielen(je nachdem was in der Dropdown ausgewählt wurde)-->
  <div class="player">
    <!-- 
    TODO
    -
    -
    isDefenseBuff, isDamaged,isHealed  muss noch implementiert werden und durch Events auf true/false gesetzt werden. -->
    <div v-if="isDefenseBuff" class="defense-icon-animation"></div>
    <div v-if="isDamaged" class="damage-icon-animation"></div>
    <div v-if="isHealed" class="heal-icon-animation"></div>
    <!--  -->
    <select v-model="selectedAnimation" @change="updateAnimation">
      <!--Ich habe ein Dropdown zum debuggen hinzugefügt 
      und mit v-model an eine einfach Variable in data(selectedAnimation) in der Komponente gebunden sodass die Auswahl direkt auf die Variable wirkt.
      Außerdem habe ich einen Eventlistener @change hinzugefügt, der darauf reagiert, wenn eine bestimmte Änderung eintritt
      
      Rendern der Liste:
      die Optionen werden mit v-for gerendert als Liste an Optionen für die Dropdownauswahl.
      v-for läuft dabei über fallenAngelAnimations(das ist meine Javascript Datei mit den Meta Daten zu jeder Animation.)
      -->
      <option
        v-for="(animation, key) in fallenAngelAnimations"
        :key="key"
        :value="key"
      >
        {{ animation.name }}
      </option>
    </select>
    <Healthbar
      v-if="!healthbarOff"
      :playerHealth="playerStore.playerHealth"
      class="healthbar"
    />
    <!--Bracket Notation hinzugefügt damit wir dynamisch die jeweilige Animation tauschen können-->
    <div
      id="single-effect-animation-wrapper"
      :class="{ 'animate-attacking-from-left-to-right': isAttacking }"
    >
      <SpriteAnimation
        class="animate-pulse-scale"
        :key="selectedAnimation"
        :animationParameters="fallenAngelAnimations[selectedAnimation]"
      />
    </div>
    <!-- Außerdem habe ich den Komponenten Parameter dynamisch gemacht sodass die ausgewählte Animation hier eingetragen wird.-->
  </div>
</template>

<script>
import Healthbar from "../components/Healthbar.vue";
import { usePlayerStore } from "@/stores/FlashcardGameStores/playerStore";
import SpriteAnimation from "@/components/Animation/SpriteAnimation.vue";
import fallenAngelAnimations from "@/assets/animations/characters/fallenAngel/animation-data/fallenAngelAnimations.js"; //TODO: Ziel ist es irgendwann im Pfad hero-vue mit dem ausgewählten Character zu ersetzen
//import idleSpriteAnimation from "@/assets/animations/characters/hero-vue/sprites/idle.png";

export default {
  components: {
    Healthbar,
    SpriteAnimation,
  },
  props: {
    healthbarOff: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      playerStore: usePlayerStore(),
      // idleSpriteAnimation,
      fallenAngelAnimations,
      selectedAnimation: "fallenAngelIdle", // Standardanimation, Steuert welche Animation gerade übergeben werden soll.
      isDefenseBuff: false,
      isDamaged: false,
      isHealed: false,
      isAttacking: false,
    };
  },
  methods: {
    updateAnimation() {
      console.log("Selected Animation:", this.selectedAnimation);
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles hier */

.player {
  width: 300px;
  height: 300px;

  /*border: 10px solid black;*/
  grid-row-start: 6;
  grid-row-end: 7;
  grid-column-start: 4;
  grid-column-end: 5;
}
.healthbar {
  position: relative;
  top: -40px;
  left: -45px;
}

.defense-icon-animation {
  width: 150px;
  height: 150px;
  position: absolute;
  background-image: url("@/assets/icons/shield-icon.png");
  background-size: cover;
  background-position: center;
  transform: translate(50%, 50%);

  animation: defenseIconAnimation 1.5s ease-in-out infinite;
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

  animation: damageIconAnimation 0.5s steps(2, end) infinite;
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
  background-image: url("@/assets/icons/heal-effect-icon.png");
  background-size: cover;
  background-position: center;
  transform: translate(50%, 50%);

  animation: healIconAnimation 1s steps(3, end) infinite;
}
@keyframes healIconAnimation {
  0% {
    background-image: url("@/assets/icons/heal-effect-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 20%;
    transform: translate(50%, 20%) scale(2);
  }
  33% {
    background-image: url("@/assets/icons/heal-effect-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 80%;
    transform: translate(80%, 60%) scale(3);
  }
  66% {
    background-image: url("@/assets/icons/heal-effect-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 10%;
    transform: translate(10%, 20%) scale(2);
  }
  100% {
    background-image: url("@/assets/icons/heal-effect-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 70%;
    transform: translate(10%, 80%) scale(4);
  }
}
</style>
