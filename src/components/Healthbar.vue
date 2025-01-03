<script></script>
<template>
  <div class="healthbar" :style="{ '--healthbar-width': healthBarWidth }">
    <div
      class=""
      :class="{
        'healtbar-variable-width-background-armored': isArmored,
        'healtbar-variable-width-background': !isArmored,
        'healthbar-default-border': !isArmored,
        'healthbar-armored-border': isArmored,
      }"
    >
      <div class="healthValue">
        <p>{{ healthValue }}/{{ maxHealthValue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { usePlayerStore } from "@/stores/FlashcardGameStores/playerStore";

export default {
  props: {
    healthValue: {
      type: Number,
      required: true,
    },
    maxHealthValue: {
      type: Number,
      required: true,
    },
    isArmored: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return { playerStore: usePlayerStore() };
  },
  updated() {
    //console.log("Healthbar Komponent feuert updated");
  },
  computed: {
    healthBarWidth() {
      if (!this.maxHealthValue) {
        throw new Error("maxHealthValue must be a positive number");
      }

      const ratio = this.healthValue / this.maxHealthValue;
      return ratio * 100 + "%";
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */

.healthbar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 18px;

  background: -moz-linear-gradient(180deg, #4c1313 0%, #300000 100%);
  background: -webkit-linear-gradient(180deg, #4c1313 0%, #300000 100%);
  background: linear-gradient(180deg, #4c1313 0%, #300000 100%);
  border-radius: 50px;
}

.healthbar-default-border {
  border: 3px solid #5a0000;
}
.healthbar-armored-border {
  border: 3px solid #182c3c;
}

.healtbar-variable-width-background {
  width: var(--healthbar-width);
  height: 100%;
  border-radius: 50px;
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 77, 77, 1) 0%,
    rgba(195, 43, 43, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 77, 77, 1) 0%,
    rgba(195, 43, 43, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 77, 77, 1) 0%,
    rgba(195, 43, 43, 1) 100%
  );
}
.healtbar-variable-width-background-armored {
  width: var(--healthbar-width);
  height: 100%;
  border-radius: 50px;
  background: -moz-linear-gradient(180deg, #72b8d7 0%, #284c6b 100%);
  background: -webkit-linear-gradient(180deg, #72b8d7 0%, #284c6b 100%);
  background: linear-gradient(180deg, #72b8d7 0%, #284c6b 100%);
}
.healthValue {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
}
.healthbar p {
  font-size: 1.8rem;
  color: white;
  text-shadow:
    #5a0000 3px 0px 0px,
    #5a0000 2px 1px 0px,
    #5a0000 1px 2px 0px,
    #5a0000 0px 3px 0px,
    #5a0000 -1px 2px 0px,
    #5a0000 -2px 1px 0px,
    #5a0000 -3px 0px 0px,
    #5a0000 -2px -1px 0px,
    #5a0000 -1px -2px 0px,
    #5a0000 0px -3px 0px;
}
</style>
