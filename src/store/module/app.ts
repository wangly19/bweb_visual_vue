import { MutationTree } from 'vuex'
// Vuex参数接口
export interface IApp {
  isShowToolBar: boolean
  colorTheme: string
}

// state 状态
const state: IApp = {
  isShowToolBar: true,
  colorTheme: '#515a6e'
}

// mutations方法
const mutations: MutationTree<any> = {
  setShowToolBar: (state: IApp, bool: boolean) => {
    state.isShowToolBar = bool
  },

  setColorTheme: (state: IApp, color: string) => {
    state.colorTheme = color
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
