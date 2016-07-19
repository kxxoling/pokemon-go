<template lang="jade">
.pokedex
  pokemon.pokemon(v-for="pokemon in pokedex", :id="pokemon.id", :name="pokemon.name")
</template>

<script>
import Pokemon from '../components/Pokemon';
import pokedex from '../data/pokedex.json';

export default {
  data() {
    return {
      pokedex,
    };
  },
  components: {
    Pokemon,
  },
};
</script>

<style lang="stylus">
@import '../styles/mixins'

.pokedex
  height 100%

  .pokemon
    margin-bottom 10px
</style>
