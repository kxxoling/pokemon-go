<template lang="jade">
#app
  sidebar.left-sidebar
  router-view.router-view(transition='fade', transition-mode='out-in')
</template>

<script>
import Sidebar from 'components/Sidebar';

export default {
  replace: false,
  data() {
    return {
    };
  },
  components: {
    Sidebar,
  },
};
</script>

<style lang="stylus">
@import "~normalize.css/normalize.css"
@import '~styles/palette'
@import '~styles/base'
@import '~styles/variables'

html, body
  height 100%
  width 100%
body
  background linear-gradient(to bottom right, $blue, $green)

#app
  height 100%

.left-sidebar
  position fixed
  left 0
  top 0

.router-view
  margin-left $sidebar-width
  padding-left 40px
  overflow auto

.fade-transition
  transition opacity .2s ease
.fate-enter, .fade-leave
  opacity 0
</style>
