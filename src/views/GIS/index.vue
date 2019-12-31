<template>
  <div class="gis-container w-height">
    <w-map class="w-height w-width"></w-map>
  </div>
</template>
<script>
import BMAP from './bmap'
export default {
  components: {
    'w-map': BMAP
  }
}
</script>
<style lang="scss" scoped>
  .gis-container{
  }
</style>
