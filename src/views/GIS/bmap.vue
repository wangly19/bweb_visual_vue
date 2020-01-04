<template>
  <div class="bmap-wrapper">
    <baidu-map class="map-view" ak="8vQddtVMwTsx9MRdTAzHzlVViEa6w6Ej" :center="gravity" :scroll-wheel-zoom="true">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true" :autoLocation="true" @locationSuccess="onPositionSuccess" :locationError="onPositionError"></bm-geolocation>
      <bm-marker :position="{lng: 116.404, lat: 39.915}"
      :dragging="true" animation="BMAP_ANIMATION_BOUNCE"
      @click="makerClick"/>
    </baidu-map>
  </div>
</template>
<script>
import BMAP from 'vue-baidu-map/components/map/Map'
import { BmGeolocation, BmMarker } from 'vue-baidu-map'
export default {
  data() {
    return {
      gravity: '北京'
    }
  },
  methods: {
    onPositionSuccess(point, AddressComponent, marker) {
      console.log(point, AddressComponent, marker)
    },
    onPositionError(code) {
      console.log(code)
    },
    makerClick(type, target) {
      console.log('click ..', type, target)
    }
  },
  components: {
    'baidu-map': BMAP,
    BmGeolocation,
    BmMarker
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
