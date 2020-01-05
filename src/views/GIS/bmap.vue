<template>
  <div class="bmap-wrapper">
    <baidu-map class="map-view" ak="8vQddtVMwTsx9MRdTAzHzlVViEa6w6Ej" :center="gravity" :scroll-wheel-zoom="true" @ready="readyMap">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true" :autoLocation="true" @locationSuccess="onPositionSuccess" :locationError="onPositionError" v-if="isMapLoadingSuccess"></bm-geolocation>
        <bm-marker :position="warnLocal"
        v-if="isMapLoadingSuccess"
        :dragging="true"
        @click="makerClick"/>
        <bm-marker
        v-for="(item, index) in gravityList" :key="index"
        :position="item"
          :dragging="true"
          @click="makerClick"/>
    </baidu-map>
  </div>
</template>
<script>
import BMAP from 'vue-baidu-map/components/map/Map'
import { BmGeolocation, BmMarker } from 'vue-baidu-map'
export default {
  props: {
    warnLocal: {
      type: Object,
      default() { return { lng: 0, lat: 0 } }
    },
    gravityList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      gravity: '北京',
      BMap: null,
      map: null,
      isMapLoadingSuccess: false
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
    },
    readyMap({ BMap, map }) {
      console.log(BMap, map)
      this.BMap = BMap
      this.map = map
      this.isMapLoadingSuccess = true
    }
  },
  components: {
    'baidu-map': BMAP,
    BmGeolocation,
    BmMarker
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
