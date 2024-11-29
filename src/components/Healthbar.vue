<script></script>
<template>
  <div class="healthbar">
    <div class="healthValue">
      <p>{{ healthValue }}/{{ maxHealthValue }}</p>
    </div>
  </div>
</template>

<script>
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
  },
  data() {
    return {};
  },
  updated() {
    console.log("Healthbar Komponent feuert updated");
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
  border: 3px solid #5a0000;
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
