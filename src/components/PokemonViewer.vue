<template lang="jade">
.pokedex-container
  .pokemon-viewer.clearfix
    .pokemon-avatar.pull-left
      img(v-bind:src="avatar")
      .oval-container
    .pokemon-card.pull-right
      .pokemon-card-header
        .pokemon-order
          .pokemon-ball-icon
          .pokemon-order-number {{paddedId}}
        .pokemon-name {{pokemon.name}}
        .pokemon-types
          .pokemon-type(v-for="type in pokemon.types")
            .pokemon-type-icon
            .pokemon-type-name {{type}}
      .pokemon-card-properties
        .pokemon-height {{pokemon.height.toFixed(2)}} m
        .pokemon-weight {{pokemon.weight.toFixed(2)}} kg
        .pokemon-weak-against NO DATA NOW
      .pokemon-card-details
        .pkm-types-container
          .pkm-type(v-for="type in pokemon.types", v-bind:class="typeClass(type)") {{type}}

        .pokemon-details
          | If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.

</template>

<script>
import pokedex from 'data/pokedex.json';
import { pad } from 'src/utils';

export default {
  computed: {
    pokemonId() {
      return this.$route.params.pokemonId;
    },
    paddedId() {
      return pad(this.pokemonId);
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
  methods: {
    typeClass(type) {
      return `background-color-${type.toLowerCase()}`;
    },
  },
};
</script>

<style lang="stylus">
@import '~styles/mixins'
@import '~styles/palette'

$sky-blue = #3c78bb
$border-spliter = 1px $light-grey solid

$color-red = #df4a34
$color-light-red = #ee7168

.pokedex-container
  width 720px
  height 420px
  background-color white
  center()

  .pkm
    display block
    center()

  .pokemon-avatar
    width 320px
    margin-top 80px

    img
      display block
      center()
      width 86%
      height auto
      margin-bottom -60px

    .oval-container
      center()
      width 200px
      height 80px
      border-radius 50%
      background-color rgba(255, 255, 255, 0.7)

  .pokemon-viewer
    height 100%

  .pokemon-card
    width 380px
    height 100%
    overflow hidden
    center()
    box-shadow -10px 0 10px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,.2)

    .pokemon-card-header
      color white
      background linear-gradient(to bottom, $color-red, $color-light-red)
      padding 25px 40px

      .pokemon-order
        .pokemon-ball-icon, .pokemon-order-number
          font-size 16px
          display inline-block
          line-height 40px

      .pokemon-name
        font-size 36px
        font-weight bold
        line-height 40px
        text-transform uppercase

      .pokemon-type
        display inline-block
        line-height 40px
        margin-right 10px

    .pokemon-card-properties
      color $text-grey
      padding 16px 0
      background-color #f8f8f8

      .pokemon-weight, .pokemon-height, .pokemon-weak-against
        display inline-block
        line-height 40px
        width 33%
        text-align center

      .pokemon-weight
        border-right 1px solid $light-grey
        border-left 1px solid $light-grey
    .pokemon-card-details
      color $text-grey

      .pkm-types-container
        margin 20px 40px

        .pkm-type
          display inline-block
          margin-right 20px
          line-height 24px
          width 80px
          border-radius 12px
          text-align center

      .pokemon-details
        margin 0 40px
        line-height 26px
</style>
