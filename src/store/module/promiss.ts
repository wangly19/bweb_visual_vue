import { MutationTree, ActionTree } from 'vuex'
import { RouteConfig } from 'vue-router'
import defaultRoutes from '@/router/defaultRoutes'
import rolesRoutes from '@/router/rolesRoutes'
// 路由参数接口
interface IPromiss {
  currentRoutes: RouteConfig[],
  addRoutes: RouteConfig[]
}

// state 状态
const state: IPromiss = {
  currentRoutes: [],
  addRoutes: []
}

// mutations方法
const mutations: MutationTree<any> = {
  _setRoutesList: (state: IPromiss, list: RouteConfig[]) => {
    state.addRoutes = list
    state.currentRoutes = defaultRoutes.concat(list)
  }
}

// 异步
const actions: ActionTree<string, any> = {
  /**
   * 生成路由列表
   * @param state.commit 提交对象
   * @param roles 用户权限
   */
  GenerateRoutes({ commit }, roles: Array<string>): Promise<RouteConfig[]> {
    return new Promise((resolve: any) => {
      let sendRoutes: RouteConfig[]
      if (roles.includes('root')) {
        // 当前为root权限，自动加载所有路由
        sendRoutes = rolesRoutes
      } else {
        sendRoutes = filterRoutes(rolesRoutes, roles)
      }
      commit('_setRoutesList', sendRoutes)
      resolve(sendRoutes)
    })
  }
}

/**
 * 判断路由权限是否存在
 * @param route 路由
 * @param roles 用户权限列表
 */
function hasRoles(route: RouteConfig, roles: Array<string>): boolean {
  if (route.meta && route.meta.roles) {
    // 如果meta中存在路由权限列表
    return roles.some((role: string) => route.meta.roles.includes(role))
  }
  return true
}

/**
 * 过滤权限方法
 * @param routes 异步路由表
 * @param roles 用户权限列表
 */
function filterRoutes(routes: RouteConfig[], roles: Array<string>): RouteConfig[] {
  let result: RouteConfig[] = []
  routes.forEach((item: RouteConfig) => {
    let temp = { ...item }
    if (hasRoles(temp, roles)) {
      if (temp.children) filterRoutes(temp.children, roles)
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
