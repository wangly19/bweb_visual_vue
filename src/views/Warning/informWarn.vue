<template>
<div class="inform-container">
  <Modal v-model="openDetail" :draggable="true" title="告警详情">
    <template slot="footer">
      <Button type="primary">关闭</Button>
    </template>
  </Modal>
  <div class="container">
    <div class="table-wrapper">
      <Card class="search-wrapper" id="search" ref="search">
        <Search :config="searchConfig" @onSearchData="onSearchData" class="search-view"></Search>
      </Card>
      <Table border :columns="columnConfig" :data="tableData" :loading="isTableList" class="table-view table-scroll table-page">
        <template slot="footer">
          <Empty text="还未添加或者导入员工信息" v-if="!tableData.length"></Empty>
          <Paging v-else :total="total" @onPage="bindPage" @onLimit="bindLimit"></Paging>
        </template>
        <template slot="action" slot-scope="{ row }">
          <Button :type="row.status ? 'success' : 'warning'"
          style="margin-right: 10px" size="small" :disabled="row.status">{{row.status ? '已确认' : '确认'}}</Button>
          <Button type="info" size="small">详情</Button>
        </template>
        <template slot="status" slot-scope="{ row }">
          <Tag :color="row.status ? 'success' : 'warning'">{{row.status ? '已确认' : '警告中'}}</Tag>
        </template>
        <template #loading>
          <Spin fix class="spin-wrapper">
            <Icon type="ios-loading" size=30 class="start-loading"/>
            <span>Loading</span>
          </Spin>
        </template>
      </Table>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { getWarnList } from '@/api/WarningDevice'
import Toolbar from '@/components/Toolbar.vue'
import Empty from '@/components/Empty.vue'
import Search from '@/components/Search.vue'
import Paging from '@/components/Paging.vue'
import FillTable from '@/components/FullTable.js'
interface ITableData {
  id: number,
  name: string,
  code: string,
  their: string,
  status: boolean,
  areaName: string
}
@Component({
  components: {
    Toolbar,
    Empty,
    Search,
    Paging,
    FullTable: FillTable as any
  }
})
export default class DeviceView extends Vue {
  private columnConfig: Array<object> = [
    { title: 'ID', key: 'id', width: 60, align: 'center' },
    { title: '报警设备', key: 'name' },
    { title: '设备编码', key: 'code' },
    { title: '所在公司', key: 'their' },
    { title: '状态', key: 'status', slot: 'status', align: 'center', width: 100 },
    { title: '发生时间', key: 'time' },
    { title: '操作', key: 'action', slot: 'action', align: 'center', width: 200 }
  ]
  private searchConfig: Array<object> = [
    { key: 'status', info: '请选择设备状态', label: '设备状态', isSelect: true, options: [{ label: '确认', value: '1' }, { label: '未确认', value: '0' }] },
    { key: 'name', info: '请选择报警设备', label: '报警设备' },
    { key: 'their', info: '请输入公司名称', label: '所在站点' },
    { key: 'name', info: '请输入设备名称', label: '设备名称' }
  ]
  private openDetail: boolean = true
  private tableData: Array<ITableData> = []
  private isTableList: boolean = false
  private total: number = 0
  private currentPage: number = 1
  private limit: number = 10

  // 绑定页面
  private bindPage(page: number): void {
    console.log(page)
    this.currentPage = page
    this.getTableList()
  }

  // 绑定limit
  private bindLimit(limit: number): void {
    console.log(limit)
    this.limit = limit
    this.getTableList()
  }

  // 获取传递数据
  private onSearchData(data: object): void {
    console.log(data)
    this.getTableList({ ...data })
  }

  // 获取表格数据
  private async getTableList(params: object = {}): Promise<any> {
    const axiosParams = Object.assign(params, { limit: this.limit, paege: this.currentPage })
    try {
      this.isTableList = true
      const { data } = await getWarnList(axiosParams, 'get')
      this.tableData = data.list
      this.total = data.total
      this.isTableList = false
      console.log(data)
    } catch (e) {
      console.error(e)
      this.isTableList = false
    }
  }

  private async created() {
    this.getTableList()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
.inform-container{
  height: 100%;
  @include flex($direction: column);
  overflow: auto;
  padding: rem(20px) rem(50px) rem(20px) rem(50px);
  .container{
    width: 100%;
    flex: 1;
    @include flex($direction: column);
    .table-wrapper{
      width: 100%;
      flex: 1;
      padding: $size2;
      @include flex($direction: row-reverse);
      .shop-info{
        @include flex($align: center);
        img{
          width: rem(60px);
          height: rem(70px);
          padding: rem(5px);
        }
        .text{
          @include flex($direction: column, $justify: space-between);
          height: rem(50px);
          span{
            font-size: rem(14px);
            color: $other;
          }
        }
      }
      .search-wrapper {
        flex: 0 0 rem(300px);
        margin-left: rem(20px);
        height: 100%;
      }
      .table-view{
        height: 100%;
        flex: 1;
        .header-solt{
          @include flex($justify: flex-start);
          padding: rem(10px);
          .ivu-btn{
            margin-left: rem(10px);
          }
        }
      }
    }
  }
}
</style>
<style scoped>
</style>
