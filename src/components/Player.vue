<template>
  <!--Ziel war es in dieser Komponente die Animationsdaten zu übergeben(mit hilfe vom :animationParameters Prop)
  und dann verschiedene Animationen abzuspielen(je nachdem was in der Dropdown ausgewählt wurde)-->
  <div class="player">
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
    <SpriteAnimation
      :key="selectedAnimation"
      :animationParameters="fallenAngelAnimations[selectedAnimation]"
    />
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
  border: 10px solid black;
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
</style>
