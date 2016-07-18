<template lang="jade">
.team-standing
  h2.standing-summary 27,333,444 TRAINERS

  team-card.team-card(v-for="team in teams",
      :name="team.name",
      :gym-count="team.gymCount",
      :trainer-count="team.trainerCount",
      :image="team.image")
</template>

<script>
import TeamCard from '../components/TeamCard';

const teams = [
  {
    name: 'mystic',
    gymCount: 8000,
    trainerCount: 100000,
    image: './static/team-mystic.png',
  },
  {
    name: 'instinct',
    gymCount: 8000,
    trainerCount: 100000,
    image: './static/team-instinct.png',
  },
  {
    name: 'valor',
    gymCount: 8000,
    trainerCount: 100000,
    image: './static/team-valor.png',
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
@import '../styles/variables'

.team-standing
  display block

  .standing-summary
    color white
    padding 30px 0
    font-size 20px

  .team-card
    margin-bottom 30px
    display inline-block

</style>
