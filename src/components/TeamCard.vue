<template lang="jade">
.team-card(v-bind:class="name")
  h2.team-name TEAM {{upperName}}
  .team-image-container
    img.team-image(:src="image")
  .team-gyms
    .controlling CONTROLLING
    .gyms {{ gymCount }} / 300,000 GYMS
  .team-trainers
    .trainer-count(v-bind:class="name") {{trainerCount}}
    .trainers {{upperName}} TRAINERS
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    gymCount: {
      type: Number,
      required: true,
    },
    trainerCount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    upperName() {
      return this.name.toUpperCase();
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus">
@import '../styles/variables'
@import '../styles/palette'
@import '../styles/mixins'

margin-bottom()
  line-height 100%
  margin-bottom 20px

.team-card
  width 240px
  background-color white
  border-radius 4px
  text-align center
  color $text-grey

  .team-image-container
    background-repeat
    background-position center

  .team-name
    padding-top 20px

  .team-image
    width auto
    height 100px

  .team-name, .team-image-container, .team-gyms, .team-trainers
    margin-bottom()

  .team-trainers
    padding-bottom 20px

  &.instinct
    .team-name, .trainer-count
      color $color-instinct
  &.mystic
    .team-name, .trainer-count
      color $color-mystic
  &.valor
    .team-name, .trainer-count
      color $color-valor
</style>
