<template lang="jade">
#app
  login-container
</template>

<script>
import LoginContainer from './components/LoginContainer';

export default {
  data() {
    return {
    };
  },
  components: {
    LoginContainer,
  },
};
</script>

<style lang="stylus">
@import "~normalize.css/normalize.css"
@import './styles/palette'
@import './styles/base'
html
  height 100%
  width 100%
body
  height 100%
  width 100%
  background: linear-gradient(to bottom right, $blue, $green);

.login-container
  margin-left auto
  margin-right auto
</style>
