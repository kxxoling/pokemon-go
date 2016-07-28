<template lang="jade">
.global-map
  map
</template>

<script>
import Map from 'components/Map';

export default {
  components: {
    Map,
  },
};
</script>

<style lang="stylus">
.global-map
  position fixed !important
  width 100%
  height 100%
  margin 0 !important
  padding 0 !important
</style>
