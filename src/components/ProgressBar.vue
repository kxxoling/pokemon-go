<template lang="jade">
.progress-bar
  .full
  .progress

</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      required: true,
      validator(val) {
        return val >= 0 && val <= 100;
      },
    },
  },
};
</script>

<style lang="stylus">
@import '../styles/palette'
$grey = #aaa
$height = 8

.progress-bar
  position relative
  height $height px

  .progress
    position absolute
    top 0
    left 0
    background-color $blue
    height $height px
    width 50%

  .full
    position absolute
    top ($height / 4) px
    left 0
    background-color $grey
    height ($height / 2) px
    width 100%
</style>
