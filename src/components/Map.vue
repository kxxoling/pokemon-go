<template lang="jade">
.map-binder
</template>

<script>
import L from 'leaflet';

const attribution = `Map data &copy;
<a href="http://openstreetmap.org">OpenStreetMap</a> contributors,
<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>`;
const tileSrc = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png';

export default {
  computed: {
    center: {
      cache: false,
      get() {
        return this.map.getCenter();
      },
    },
  },
  data() {
    return {
      map: undefined,
    };
  },
  ready() {
    const map = L.map(this.$el).setView([51.505, -0.09], 10);
    L.tileLayer(tileSrc, {
      attribution,
      maxZoom: 18,
    }).addTo(map);
    this.map = map;
  },
};
</script>

<style lang="stylus">
@import '~leaflet/dist/leaflet.css'
@import '~styles/variables'

.map-binder
  height 100%
  margin-left $sidebar-width
</style>
