<template lang="jade">
.sidebar
  .pmg-logo-container
    pokemon-go-logo
  site-map

  .sidebar-footer
    login-button.login-button(@Click="showLogin = true")
  login-view(v-if="showLogin", :show.sync="showLogin")
</template>

<script>
import PokemonGoLogo from 'components/PokemonGoLogo';
import SiteMap from 'components/SiteMap';
import LoginButton from 'components/LoginButton';
import LoginView from 'components/LoginView';

export default {
  data() {
    return {
      showLogin: false,
    };
  },
  components: {
    PokemonGoLogo, SiteMap, LoginButton, LoginView,
  },
};
</script>

<style lang="stylus">
@import '~styles/variables'
@import '~styles/mixins'

.sidebar
  width $sidebar-width
  height 100%
  background-color white
  z-index 1

  .pmg-logo-container
    padding 40px 40px 40px

  .sidebar-footer
    position absolute
    bottom 0
    margin-bottom 10px
    width 100%

    .login-button
      center()
</style>
