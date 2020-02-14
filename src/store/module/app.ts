import { MutationTree } from 'vuex'
// Vuex参数接口
export interface IApp {
  isShowToolBar: boolean
}

// state 状态
const state: IApp = {
  isShowToolBar: true
}

// mutations方法
const mutations: MutationTree<any> = {
  setShowToolBar: (state: IApp, bool: boolean) => {
    state.isShowToolBar = bool
  }
}

export default {
  state,
  mutations
}
