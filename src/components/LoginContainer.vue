<template lang="jade">
.login-container
  pokemon-go-logo.pmg-logo
  login.login-group
</template>

<script>
import PokemonGoLogo from 'components/PokemonGoLogo';
import Login from 'components/Login';

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
@import '~styles/mixins'
.login-container
  width 400px
  center()

  .pmg-logo
    width 240px
    padding-top 100px
    margin-bottom 100px
    center()

  .login-group
    width 100%
    background-color white
    padding-top 20px
    padding-bottom 20px
</style>
