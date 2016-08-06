<template lang="jade">
.login-button Click to Login
</template>

<script>
export default {
  data() {
    return {
    };
  },
  components: {
  },
};
</script>

<style lang="stylus">
@import '~styles/mixins'
@import '~styles/palette'

$height = 40px

.login-button
  border-radius 4px
  border $blue 1px solid
  width 180px
  height $height
  line-height $height
  text-align center
  color $blue
  cursor pointer

  &:hover
    background-color $green
    color white
</style>
