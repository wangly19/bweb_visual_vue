/**
 * APP公共配置设置
 */

 const state = {
     isCollapse: false, // 选项卡折叠 - 默认为关闭
     isSlider: false // 滑动器收缩 - 默认为关闭
 }
 const mutations = {
     _setCollapse: function(state, bool) {
         state.isCollapse = bool
     },
     _isSlider: function(state, bool) {
         state.isSlider = bool
     }
 }
//  const actions = {}
export default {
    state,
    mutations
}
