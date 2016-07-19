<template lang="jade">
.pokemon
  .pkm(v-bind:class="className")
  .pkm-name {{name}}
</template>

<script>
const pad = (num, width = 3) => {
  const numInStr = num.toString();
  const len = numInStr.length;
  if (len >= width) {
    return numInStr;
  }
  return `${'0'.repeat(width - len)}${numInStr}`;
};

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    className() {
      return `pkm${pad(this.id)}`;
    },
  },
};
</script>

<style lang="stylus">
@import '../styles/mixins'
@import '../styles/palette'
@import '../styles/pokemons.css'

.pokemon
  width 160px
  background-color white
  border-radius 4px
  padding-bottom 20px
  color $green
  text-weight bold

  .pkm
    center()
    width 128px
    height 128px

  .pkm-name
    text-align center
</style>
