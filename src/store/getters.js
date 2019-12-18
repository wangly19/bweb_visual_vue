export default {
    // user模块数据导入
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles,
    // 全局配置数据导入
    isCollapse: state => state.app.isCollapse,
    isSlider: state => state.app.isSlider,
    // routesPermiss模块数据导入
    router: state => state.auth.router,
    routesList: state => state.auth.routesList
}
