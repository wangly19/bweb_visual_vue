import Vue from 'vue'
import AMAP from 'vue-amap'

// 地图配置
setTimeout(() => {
  Vue.use(AMAP)
}, 0)
AMAP.initAMapApiLoader({
  key: 'dc5c65431e487cb4114b8d3aec6ce22b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
