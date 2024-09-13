<!--Options API-->
<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    clickHandler: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      //Komma statt Semicolon benutzen
      //z.b store: useWillpowerStore(),
      //Achtung Doppelpunkt' : '' statt ' = ',
    };
  },
  methods: {
    handleClick() {
      if (this.clickHandler) {
        this.clickHandler();
      } else {
        this.$emit("button-clicked");
      }
    },
  },
};
</script>

<style scoped>
button {
  width: 151px;
  height: 43px;
  color: var(--type-on-bg-dark);
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("@/assets/ui-components-backgrounds/button-background-blue-icy.png");
}
</style>
