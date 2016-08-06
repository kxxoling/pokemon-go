<template lang="jade">
.login-container
  h2.player-login PLAYER LOGIN
  .auth-buttons
    a(href="#").auth-button.auth-buttons--google
      img.auth-button-icon(src="../assets/google.ico")
      | Google
    a(href="#").auth-button.auth-buttons--trainer-club
      img.auth-button-icon(src="../assets/pm-ball-icon.png")
      | Trainer Club
  .privacy PRIVACY POLICY
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

bg-drift()
  background-position: center;

$auth-button-width = 200px

.login-container
  color $blue
  font-weight bold
  text-align center
  background-color white
  width 300px
  padding 40px 40px

  .player-login
    margin-bottom 30px

  .auth-buttons
    margin-bottom 30px

    .auth-button
      center()
      text-align center
      width $auth-button-width
      padding 4px
      line-height 28px
      color #777
      background-color #dfdfdf
      text-decoration none
      margin-bottom 10px
      border-radius 4px
      position relative

    .auth-button-icon
      height 24px
      position absolute
      left 8px
      top 6px
  .privacy
    font-size 12px
</style>
