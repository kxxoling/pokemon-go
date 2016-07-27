<template lang="jade">
.pokemon
  .pkm(v-bind:class="className")
  .pkm-name {{name}}
  .pkm-type-container
    .pkm-type(v-for="type in types", v-bind:class="typeClass(type)") {{type}}
</template>

<script>
import { pad } from '../utils';

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
    types: {
      type: Array,
      required: true,
    },
  },
  computed: {
    className() {
      return `pkm${pad(this.id)}`;
    },
  },
  methods: {
    typeClass(type) {
      return `background-color-${type.toLowerCase()}`;
    },
  },
};
</script>

<style lang="stylus">
@import '../styles/mixins'
@import '../styles/palette'
@import '../styles/pokemons.css'

.pokemon
  cursor pointer
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
    margin-bottom 10px

  .pkm-type-container
    text-align center

    .pkm-type
      display inline-block
      height 20px
      width 64px
      text-align center
      border-radius 2px
      margin 0 6px
</style>
