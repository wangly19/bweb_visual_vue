import { Component, Vue } from 'vue-property-decorator'

@Component
export class dataMixins extends Vue {
  // 表单加载
  public isTableList: boolean = false
  // 总数
  public total: number = 0
  // 当前页面
  public currentPage: number = 1
  // 当前页面数目
  public limit: number = 10
}
