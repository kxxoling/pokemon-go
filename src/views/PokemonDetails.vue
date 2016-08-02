<template lang="jade">
.pokemon-viewer-details
  .close(@click="$router.go({name: 'pokedex'})")
  pokemon-viewer.pokedex-card
</template>

<script>
import PokemonViewer from 'components/PokemonViewer';

export default {
  data() {
    return {
    };
  },
  components: {
    PokemonViewer,
  },
};
</script>

<style lang="stylus">
@import '~styles/mixins'
@import '~styles/palette'

.pokemon-viewer-details
  height 100%
  width 100%
  position fixed
  left 0
  top 0
  background-color $hover-background-color
  z-index 2

  .close
    cursor pointer
    position fixed
    right 20px
    top 20px
    display inline-block
    width 50px
    height 50px
    overflow hidden
    &:hover
      &::before, &::after
        background-color $text-blue
    &::before, &::after
      content ''
      position absolute
      height 2px
      width 100%
      top 50%
      left 0
      margin-top -1px
      background-color $text-grey
    &::before
      transform rotate(45deg)
    &::after
      transform rotate(-45deg)

  .pokedex-card
    box-shadow 0 0 10px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)
    margin-top 200px
    opacity 1
    center()
</style>
