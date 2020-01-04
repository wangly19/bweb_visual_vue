import { getMons, getInfo, putExit } from '@/api/home/request'
import { setLocalStroage, getLocalStroage, removeLocalStroage } from '../../tools/loaclStroage'

const state = {
    token: '', // token
    name: '', // 用户名
    roles: [], // 角色权限
    avatar: ''
}
const mutations = {
    _setToken: (state, token) => state.token = token,
    _setName: (state, name) => state.name = name,
    _setRoles: (state, roles) => state.roles = roles,
    _setAvatar: (state, url) => state.avatar = url
}
const actions = {
    /**
     * vuex登录数据存储
     * @param {method} {commit} => commit事件
     * @param {object} loginData => 用户表单数据
     */
    login({ commit }, loginData) {
        return new Promise((resolve, reject) => {
            // 发送登录请求
            getMons(loginData).then(res => {
                console.log(res)
                if (res.status === 200) {
                    commit('_setToken', res.data.token) //  存储token
                    setLocalStroage('token', res.data.token)
                    resolve(res)
                }
                resolve(res)
            })
        })
    },
    /**
     * 根据token获取用户信息
     * @param {method} commit => commit事件
     * @param {*} token => 登录后的token
     */
    getUserinfo({ commit }) {
        return new Promise((resolve) => {
            getInfo().then(res => {
                commit('_setToken', getLocalStroage('token'))
                commit('_setName', res.data.name)
                commit('_setRoles', res.data.roles)
                commit('_setAvatar', res.data.avatar)
                resolve(res.data)
            })
        })
    },
    exitUser({ commit }) {
        return new Promise(async resolve => {
            const { data } = await putExit()
            if (data.status) {
                commit('_setToken', '')
                removeLocalStroage('token')
                resolve(true)
            }
        })
    }
}

export default {
    state,
    mutations,
    actions
}
