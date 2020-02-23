/**
 * 工具类库
 * 存放后台数据类库
 */
 export function transformKeys(maps: Array<any>): Array<any> {
     const result  = maps.map(other=> {
         return {
             value: other.id,
             label: other.name
         }
     })
     return result
 }