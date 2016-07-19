<template lang="jade">
.meetup-events
  h2.meetup-welcome JOIN THE MOVEMENT. GOTTA CATCH 'EM ALL

  .data-container
    table.event-info
      thead
        tr
          th.date DATE
          th.city CITY
          th.type GAME TYPE
          th.details MORE INFO
      tbody
        tr(v-for="event in events")
          th {{event.date.toLocaleDateString()}}
          th {{event.city}}
          th {{event.type}}
          th
            a(href="{{event.link}}", v-if="event.link", target="_blank") DETAILS
            span(v-if="!event.link") {{TBC}}
    hr.partition
</template>

<script>
const events = [
  {
    date: new Date(),
    city: 'Tokyo, Japan',
    type: 'GROUP MODE',
    link: 'http://gh.windrunner.info/pokemon-go',
  },
  {
    date: new Date(),
    city: 'New York, US',
    type: 'TEAM PLAY',
    link: null,
  },
];

export default {
  data() {
    return {
      events,
    };
  },
  components: {
  },
};
</script>

<style lang="stylus">
@import '../styles/variables'
@import '../styles/palette'

.meetup-events
  padding 40px 80px

  .meetup-welcome
    color white
    margin-bottom 40px

  .data-container
    background-color white
    color $text-grey
    border-radius 4px
    padding 30px
    text-align left
    line-height 32px
    width 100%

    .date
      width 140px

    .type
      width 180px

    .details
      width 160px

    .event-info
      width 100%
      margin-bottom 20px

      thead
        line-height 40px
        color $green
        font-size 18px
        font-weight bold
      tbody
        a
          color $green
          text-decoration none

    .partition
      border-color $green
</style>
