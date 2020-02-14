import { MutationTree, ActionTree } from 'vuex'
import { upLogin, Person } from '@/api/Login/inex'
import { setStorage, removeStorage } from '@/tools/storage'

interface IState {
  name: string,
  token: string,
  avatar: string,
  roles: Array<string>
}
const state: IState = {
  name: '',
  token: '',
  avatar: '',
  roles: []
}

const mutations: MutationTree<any> = {
  _setName: (state: IState, name: string): void => {
    state.name = name
  },
  _setToken: (state: IState, token: string): void => {
    state.token = token
  },
  _setAvatar: (state: IState, avatar: string): void => {
    state.avatar = avatar
  },
  _setRoles: (state: IState, roles: Array<string>): void => {
    state.roles = roles
  }
}

const actions: ActionTree<IState, any> = {
  LOGIN({ commit }, formData: object) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await upLogin(formData)
        if (data.success) {
          setStorage('token', data.token)
          commit('_setToken', data.token)
        }
        return resolve(data)
      } catch (error) {
        return reject({
          success: false,
          message: '请求失败'
        })
      }
    })
  },
  // 请求个人信息接口
  async USERINFO({ commit }): Promise<any> {
    try {
      const { data } = await Person()
      // 设置个人信息
      commit('_setName', data.name)
      commit('_setAvatar', data.avatar)
      commit('_setRoles', data.roles)
      return Promise.resolve(true)
    } catch (e) {
      console.error(e, '个人信息接口异常')
    }
  },
  logout(): Promise<boolean> {
    // 清除token
    removeStorage('token')
    return Promise.resolve(true)
  }
}

export default {
  state,
  mutations,
  actions
}
