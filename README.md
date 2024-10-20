# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Implement new Sprite Animation

1. Create a Parent Component as a Game Object(eg. Player, Monster etc.)
2. Put a SpriteAnimation.vue Component inside(has the Canvas and plays the Animation)
3. Create Game Object Folder under src/assets/animations/{category}/{gameObject}, category could be something like characters, monsters, or cardEffects. GameObject would be the actual character like fallenAngel.
4. Create two subfolders inside src/assets/animations/{category}/{gameObject}/animation-data and src/assets/animations/{category}/{gameObject}/sprites.
5. put the sprites with the naming convention nameOfGameObjectSprite.png inside the sprites folder.
6. create a .js file with the naming convention nameOfGameObjectAnimations.js inside the animation-data folder.
7. import fallenAngelAnimations from "@/assets/animations/characters/fallenAngel/animation-data/fallenAngelAnimations.js"; in Parent Component
8. set default selected animation: selectedAnimation: "fallenAngelIdle",

## Example:

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

</style>
