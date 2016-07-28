<template lang="jade">
.profile
  h2.name {{name}}
  .level LEVEL {{level}}
  .xp-details
    progress-bar.xp-bar(:percent="34")
    .xp-data {{xp}} / {{fullXp}} XP
  .journal JOURNAL
  .start-date START DATE: {{startDateStr}}
</template>

<script>
import ProgressBar from 'components/ProgressBar';

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
@import '~styles/palette'
@import '~styles/mixins'

$line-height = 32

margin-bottom()
  margin-bottom 16px

.profile
  background-color white
  width 200px
  padding 30px 40px 40px
  border-radius 4px
  color $text-grey
  text-align center

  .level, .xp-bar, .start-date
    margin-bottom 16px

  .name
    color $blue
    margin-bottom 40px
    font-size 32px

  .level
    font-size 14px

  .xp-details
    margin-bottom 32px

  .journal
    width 160px
    margin-bottom 20px
    line-height $line-height px
    border-radius ($line-height / 2) px
    color white
    center()
    button-bg()
</style>
