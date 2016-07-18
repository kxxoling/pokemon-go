<template lang="jade">
.terms
  .term-details
  .logo-container
</template>

<script>
import PokemonGoLogo from './PokemonGoLogo';
import Login from './Login';

export default {
  data() {
    return {
    };
  },
  components: {
    Login, PokemonGoLogo,
  },
};
</script>

<style lang="stylus">
.terms
  .term-details
    font-size 10px
  .logo-container
    width 200px
    height 40px

</style>
