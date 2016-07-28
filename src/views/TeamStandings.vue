<template lang="jade">
.team-standing
  h2.standing-summary 27,333,444 TRAINERS

  .team-container(v-for="team in teams")
    team-card.team-card(
        :name="team.name",
        :gym-count="team.gymCount",
        :trainer-count="team.trainerCount",
        :image="team.image")
    .team-country-info
      table
        thead
          tr
            th.country BY COUNTRY
            th.percent 3
        tbody
          tr
            td.country Canada
            td.percent 41%
    .view-on-map-container
      a.view-on-map(v-link="{ name: 'map' }", v-bind:class="team.name") VIEW ON MAP
</template>

<script>
import TeamCard from 'components/TeamCard';

const teams = [
  {
    name: 'mystic',
    gymCount: 8000,
    trainerCount: 100000,
    image: 'static/team-mystic.svg',
  },
  {
    name: 'instinct',
    gymCount: 8000,
    trainerCount: 100000,
    image: 'static/team-instinct.svg',
  },
  {
    name: 'valor',
    gymCount: 8000,
    trainerCount: 100000,
    image: 'static/team-valor.svg',
  },
];
export default {
  data() {
    return {
      teams,
    };
  },
  components: {
    TeamCard,
  },
};
</script>

<style lang="stylus">
@import '~styles/variables'
@import '~styles/palette'
@import '~styles/mixins'

$team-card-width = 240px

.team-standing
  display block

  .standing-summary
    color white
    padding 30px 0
    font-size 20px

.team-container
  margin-right 80px
  display inline-block

  .team-card
    width $team-card-width
    margin-bottom 30px

  .team-country-info
    width $team-card-width
    background-color white
    border-radius 4px
    margin-bottom 30px

    table
      width 100%
      padding 10px

      .country
        text-align left

      .percent
        text-align right
        width 40px

      thead
        th
          font-size 16px
          color $text-green
          line-height 40px
          font-size 18px
          font-weight bold

      tbody
        td
          font-size 14px
          color $text-grey
  .view-on-map-container
    width $team-card-width

    .view-on-map
      display block
      center()
      width 200px
      height 40px
      line-height 40px
      color white
      text-align center
      border 2px white solid
      border-radius 20px

      &.instinct
        background-color $color-instinct

      &.mystic
        background-color $color-mystic

      &.valor
        background-color $color-valor
</style>
