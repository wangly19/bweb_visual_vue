<template>
  <div class="bmap-wrapper">
    <baidu-map class="map-view" ak="8vQddtVMwTsx9MRdTAzHzlVViEa6w6Ej" :center="gravity" :scroll-wheel-zoom="true">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true" @locationSuccess="onPositionSuccess" :locationError="onPositionError"></bm-geolocation>
    </baidu-map>
  </div>
</template>
<script>
import BMAP from 'vue-baidu-map/components/map/Map'
import { BmGeolocation } from 'vue-baidu-map'
export default {
  data() {
    return {
      gravity: '广州'
    }
  },
  methods: {
    onPositionSuccess(point, AddressComponent, marker) {
      console.log(point, AddressComponent, marker)
    },
    onPositionError(code) {
      console.log(code)
    }
  },
  components: {
    'baidu-map': BMAP,
    BmGeolocation
  },
  watch: {
    gravity(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.bmap-wrapper{
  .map-view{
    height: 100%;
    width: 100%;
  }
}
</style>
