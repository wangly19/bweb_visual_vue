/**
 * APP公共配置设置
 */

 const state = {
     isCollapse: false, // 选项卡折叠 - 默认为关闭
     isSlider: false, // 滑动器收缩 - 默认为关闭
     keepList: [] // 缓存路径地址
 }
 const mutations = {
     _setCollapse: function(state, bool) {
         state.isCollapse = bool
     },
     _isSlider: function(state, bool) {
         state.isSlider = bool
     },
     _setKeepList: function(state, array) {
         state.keepList = array
     }
 }
export default {
    state,
    mutations
}
