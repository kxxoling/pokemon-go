<template lang="jade">
.login
  h2.player-login PLAYER LOGIN
  .login-buttons
    a(href="#").login-button.login-buttons--google
      img.login-button-icon(src="../assets/google.ico")
      | Google
    a(href="#").login-button.login-buttons--trainer-club
      img.login-button-icon(src="../assets/pm-ball-icon.png")
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
@import '../styles/mixins'
@import '../styles/palette'

bg-drift()
  background-position: center;

$login-button-width = 200px

.login-container
  color $blue
  font-weight bold
  text-align center

  .login-buttons
    margin-bottom 20px

    .login-button
      center()
      text-align center
      width $login-button-width
      padding 4px
      line-height 28px
      color #777
      background-color #dfdfdf
      text-decoration none
      margin-bottom 10px
      border-radius 4px
      position relative

    .login-button-icon
      height 24px
      position absolute
      left 8px
      top 6px
  .privacy
    font-size 12px
</style>
