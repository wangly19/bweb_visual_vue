/**
 * 初始化路由模块
 */

import costomRoutes from '../../router/costomRoutes'
import asyncRoutes from '../../router/asyncRoutes'

let state = {
    router: [],
    routesList: []
}

const mutations = {
    _setRoutes: (state, routes) => {
        state.routesList = routes
        state.router = costomRoutes.concat(routes)
    }
}

const actions = {
    /**
     * 根据身份生成路由列表
     * @param {emit} commit => 提交函数
     * @param {array} roles 身份权限
     */
    init({ commit }, roles) {
        // 如果是超级管理员权限，默认拥有全部权限
        let sendRoutes = []
        if (roles.includes('admin')) {
            sendRoutes = asyncRoutes
        } else {
            // 循环异步路由进行权限判断，筛选符合条件的路由
            sendRoutes = filterRoutes(asyncRoutes, roles)
        }
        commit('_setRoutes', sendRoutes)
    }
}

/**
 * 判断路由是否包含权限
 * @param { array } route => 路由列表
 * @param { array } roles => 权限数组
 */
function hasRoles(route, roles) {
    // 如果路由存在meta字段，并且拥有roles
    if (route.meta && route.meta.roles) {
        // some帅选条件
        return roles.some(role => route.meta.roles.includes(role))
    }
    return true
}

/**
 * 递归鉴定权限，生成可用路由列表
 * @param {array} routes => 路由数组
 * @param {array} roles => 权限数组
 */
function filterRoutes(routes, roles) {
    console.log(routes)
    let result = []
    routes.forEach(element => {
        const temp = { ...element }
         if (hasRoles(temp, roles)) {
            if (temp.children) temp.children = filterRoutes(temp.children, roles)
        }
        result.push(temp)
    })
    return result
}

export default {
    state,
    mutations,
    actions
}
