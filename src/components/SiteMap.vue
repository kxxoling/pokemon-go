<template lang="jade">
.site-map
  ul
    li.url-container(v-for="item in menu",
        v-bind:class="{ 'active': item.name === $route.name }")
      a.url(v-link="{ name: item.name }",
          v-bind:class="{ 'active': item.name === $route.name }")
        | {{item.text}}
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'profile',
          text: 'Trainer Profile',
        },
        {
          name: 'friends',
          text: 'Friends',
        },
        {
          name: 'pokedex',
          text: 'Pokedex',
        },
        {
          name: 'map',
          text: 'Global Map',
        },
        {
          name: 'teams',
          text: 'Team Standings',
        },
        {
          name: 'missions',
          text: 'Missions',
        },
        {
          name: 'meetups',
          text: 'Meetup Events',
        },
        {
          name: 'tv',
          text: 'Pokemon TV',
        },
      ],
    };
  },
  components: {
  },
};
</script>

<style lang="stylus">
@import '../styles/palette'
$border = 1px solid #eee
.site-map
  ul
    width 100%
  a
    text-decoration none
    font-weight bold
    color $text-blue
    &:visited
      color $text-blue

  .url-container
    display block
    width 100%
    border-top $border

    &:last-child
      border-bottom $border

    .url
      display block
      background-color white
      color: $text-blue
      line-height 40px
      text-align center

    &.active
      .url
        color: white
        background-color $text-blue
        width 105%

</style>
