import { RouteConfig } from 'vue-router'
const routerFiles: __WebpackModuleApi.RequireContext = require.context('./module', true, /\.ts$/)
const routerList: RouteConfig[] = []

routerFiles.keys().forEach((fileName:string) => {
  if (routerFiles(fileName).default instanceof Array) {
    routerList.concat(routerFiles(fileName).default)
  } else {
    routerList.push(routerFiles(fileName).default)
  }
})
console.log(routerList)
