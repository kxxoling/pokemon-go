<template lang="jade">
.trainer-profile.clearfix
  .trainer-avatar.pull-left
    img(src="/static/trainer-male.png", v-if="gender==='male'")
    img(src="/static/trainer-female.png", v-if="gender==='female'")
  profile.profile.pull-left
</template>

<script>
import Profile from '../components/Profile';

export default {
  data() {
    return {
      gender: 'male',
    };
  },
  components: {
    Profile,
  },
};
</script>

<style lang="stylus">
$padding-top = 40px

.trainer-profile
  height 100%

  .trainer-avatar
    height 100%
    width auto
    max-width 320px
    margin-right 40px

    img
      padding-top $padding-top
      max-width 100%
      max-height 100%

  .profile
    margin-top $padding-top
    width 320px
</style>
