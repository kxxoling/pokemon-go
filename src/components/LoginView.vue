<template lang="jade">
.login-view(v-show="show")
  pokemon-go-logo.pokemon-go-logo
  login.login
  terms
  .close(@click="show = false")
</template>

<script>
import PokemonGoLogo from 'components/PokemonGoLogo';
import Login from 'components/Login';
import Terms from 'components/Terms';

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  components: {
    Login, PokemonGoLogo, Terms,
  },
};
</script>

<style lang="stylus">
@import '~styles/mixins'
@import '~styles/palette'

.login-view
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  background-color $hover-background-color
  button-bg()

  .pokemon-go-logo
    width 200px
    center()
    margin-bottom 30px
    padding-top 80px

  .login
    center()

  .close
    &:before, &:after
      background-color $text-grey
</style>
