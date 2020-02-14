import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
  name: (state: any) => state.user.name,
  token: (state: any) => state.user.token,
  avatar: (state: any) => state.user.avatar,
  roles: (state: any) => state.user.roles,
  currentRoutes: (state: any) => state.promiss.currentRoutes,
  addRoutes: (state: any) => state.promiss.addRoutes,
  isShowToolBar: (state: any) => state.app.isShowToolBar
}

export default getters
