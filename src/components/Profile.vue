<template lang="jade">
.profile
  h2.name {{name}}
  .level LEVEL {{level}}
  .xp-detail
    progress-bar.xp-bar
    .xp-data {{xp}} / {{fullXp}} XP
  .journal JOURNAL
  .start-date Start date: {{startDateStr}}
</template>

<script>
import ProgressBar from './ProgressBar';

const user = {
  name: 'Kane Blueriver',
  level: 10,
  xp: 4370,
  fullXp: 10000,
  startTime: new Date(),
};

export default {
  computed: {
    startDateStr() {
      return this.startTime.toLocaleDateString();
    },
  },
  data() {
    return user;
  },
  components: {
    ProgressBar,
  },
};
</script>

<style lang="stylus">
@import '../styles/palette'
@import '../styles/mixins'

$line-height = 32

margin-bottom()
  margin-bottom 16px


.profile
  background-color white
  height 180px
  width 200px
  padding 30px 40px 40px
  border-radius 4px
  color $text-grey
  text-align center

  .name, .level, .xp-bar, .xp-data, .journal, .start-date
    margin-bottom 16px

  .name
    color $blue

  .level
    font-size 14px

  .journal
    width 160px
    line-height $line-height px
    border-radius ($line-height / 2) px
    color white
    center()
    button-bg()
</style>
