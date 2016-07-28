<template lang="jade">
.sidebar
  .pmg-logo-container
    pokemon-go-logo
  site-map
</template>

<script>
import PokemonGoLogo from 'components/PokemonGoLogo';
import SiteMap from 'components/SiteMap';

export default {
  data() {
    return {
    };
  },
  components: {
    PokemonGoLogo, SiteMap,
  },
};
</script>

<style lang="stylus">
@import '~styles/variables'

.sidebar
  width $sidebar-width
  height 100%
  background-color white
  z-index 1

  .pmg-logo-container
    padding 40px 40px 40px
</style>
