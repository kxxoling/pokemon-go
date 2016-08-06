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

  .pokedex-card
    box-shadow 0 0 10px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)
    margin-top 200px
    opacity 1
    center()
</style>
