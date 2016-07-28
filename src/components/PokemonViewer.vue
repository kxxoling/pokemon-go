<template lang="jade">
.pokemon-viewer
  .pokemon-avatar
    img(v-bind:src="avatar")
  .pokemon-details
    .pokemon-name {{pokemon.name}}
    hr.split-bar
    .hp HP {{25}} / {{25}}
    .properties
      .property.types Water
      .property.weight {{pokemon.weight.toFixed(2)}}kg
      .property.height {{pokemon.height.toFixed(2)}}m
    .growth
      .stardust
      .candy
    .power-up.progress
      | POWER UP
      .stardust 600
      .candy 1
    .evolve.progress
      .candy 400
</template>

<script>
import pokedex from 'data/pokedex.json';
import { pad } from 'src/utils';

export default {
  computed: {
    pokemonId() {
      return this.$route.params.pokemonId;
    },
    pokemon() {
      if (!this.pokemonId) {
        return null;
      }
      return pokedex[this.pokemonId - 1];
    },
    avatar() {
      return `./static/pokemons/${pad(this.pokemonId)}.png`;
    },
  },
  data() {
    return {
      pokemonId: undefined,
    };
  },
};
</script>

<style lang="stylus">
@import '~styles/mixins'
@import '~styles/palette'

$sky-blue = #3c78bb
$border-spliter = 1px $light-grey solid

.pokemon-viewer
  width 320px
  height 400px
  background-color $sky-blue

  .pkm
    display block
    center()

  .pokemon-avatar
    height 200px

    img
      display block
      center()
      height 100%
      width auto

  .pokemon-details
    width 240px
    color $text-dark-green
    background-color white
    padding 40px 10px 20px
    center()

    .pokemon-name
      text-align center

    .hp
      text-align center
    .split-bar
      background-color $green
      border none
      border-radius 1px
      height 3px
      width 60%
    .properties
      width 100%
      border-bottom $border-spliter

    .property
      display inline-block
      width 33%
      text-align center

      &.weight
        border-left $border-spliter
        border-right $border-spliter

    .progress
      .stardust
        display inline-block
      .candy
        display inline-block
</style>
