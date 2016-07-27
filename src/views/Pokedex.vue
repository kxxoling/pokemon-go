<template lang="jade">
.pokedex
  router-view
  h2.pokedex-title POKEDEX
    .filter
      label.choose-type Choose type:
      select.type(v-model="filter.type")
        option(v-bind:value="i", v-for="i in types") {{i}}
      label.candy-range Candy range:
      input.gte(v-model="filter.candyGte")
      span.patition -
      input.lte(v-model="filter.candyLte")
  pokemon.pokemon(
    v-for="pokemon in pokedex",
    :id="pokemon.id",
    :name="pokemon.name",
    :types="pokemon.types",
    v-show="shouldShow(pokemon, filter)",
    @click="pokemonDetails(pokemon.id)",
  )
</template>

<script>
import Pokemon from '../components/Pokemon';
import pokedex from '../data/pokedex.json';

const types = [
  'Grass',
  'Poison',
  'Fire',
  'Flying',
  'Water',
  'Bug',
  'Normal',
  'Electric',
  'Ground',
  'Fairy',
  'Fighting',
  'Psychic',
  'Rock',
  'Steel',
  'Ice',
  'Ghost',
  'Dragon',
];

export default {
  data() {
    return {
      pokedex,
      types,
      filter: {
        type: null,
        candyGte: 0,
        candyLte: 1000,
      },
    };
  },
  components: {
    Pokemon,
  },
  methods: {
    shouldShow(pokemon, filter) {
      if (pokemon.candy > filter.candyLte || pokemon.candy < filter.candyGte) {
        return false;
      }
      if (filter.type && pokemon.types.indexOf(filter.type) === -1) {
        return false;
      }
      return true;
    },
    pokemonDetails(pokemonId) {
      this.$router.go({ name: 'pokemonDetails', params: { pokemonId } });
    },
  },
};
</script>

<style lang="stylus">
@import '../styles/mixins'
@import '../styles/palette'

.pokedex
  height 100%
  padding 0 40px

  .filter
    font-size 16px

    .choose-type, .candy-range
      display inline-block
      margin-right 10px
    .type
      display inline-block
      width 80px
      margin-right 10px
    .gte, .lte,
      display inline-block
      width 60px
      text-indent 8px
      color $text-grey
    .patition
      padding 0 4px

  .pokedex-title
    color white
    padding 30px 0
    font-size 20px
    width 100%

  .pokemon
    display inline-block
    margin-bottom 20px
    margin-right 20px

</style>
