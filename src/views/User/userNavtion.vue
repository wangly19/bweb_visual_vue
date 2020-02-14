<template>
<div class="inform-container">
  <div class="container">
    <div class="table-wrapper">
      <Table border :columns="columnConfig" :data="tableData" :loading="isTableList" class="table-view table-scroll">
        <template slot-scope="{ row }" slot="action">
          <Button type="success" @click="seeDetails(row.id)" size="small">重置</Button>
          <Button type="error" @click="seeDetails(row.id)" size="small">忽略</Button>
        </template>
        <template slot="footer">
          <Empty text="还没有上报的账号记录" v-if="!tableData.length"></Empty>
        </template>
        <template slot="status" slot-scope="{ row }">
          <Tag :color="row.status ? 'success' : 'error'">{{row.status ? '在线' : '离线'}}</Tag>
        </template>
        <template #loading>
          <Spin fix class="spin-wrapper">
            <Icon type="ios-loading" size=30 class="start-loading"/>
            <span>Loading</span>
          </Spin>
        </template>
      </Table>
      <Table border :columns="frostConfig" :data="FrostData" :loading="isTableList" class="log-wrapper table-scroll">
        <template slot-scope="{ row }" slot="action">
          <Button type="success" @click="seeDetails(row.id)" size="small">启用</Button>
        </template>
        <template slot="footer">
          <Empty text="还没有冻结的账号记录" v-if="!FrostData.length"></Empty>
        </template>
        <template slot="status" slot-scope="{ row }">
          <Tag :color="row.status ? 'success' : 'error'">{{row.status ? '在线' : '离线'}}</Tag>
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
import { getUserList, alterUser } from '@/api/User'
import Toolbar from '@/components/Toolbar.vue'
import Empty from '@/components/Empty.vue'
import Search from '@/components/Search.vue'
interface ITableData {
  id: number,
  user: string
  name: string
  createTime: string
}
interface IFrost {
  id: number,
  user: string
  name: string
  createTime: string,
  desc: string
}
@Component({
  components: {
    Toolbar,
    Empty,
    Search
  }
})
export default class DeviceView extends Vue {
  private columnConfig: Array<object> = [
    { title: 'ID', key: 'id', width: 60, align: 'center' },
    { title: '帐号', key: 'user' },
    { title: '姓名', key: 'name' },
    { title: '申报时间', key: 'createTime' },
    { title: '操作', key: 'action', slot: 'action', align: 'center', width: 200 }
  ]
  private frostConfig: Array<object> = [
    { title: 'ID', key: 'id', width: 60, align: 'center' },
    { title: '帐号', key: 'user' },
    { title: '姓名', key: 'name' },
    { title: '锁定时间', key: 'createTime' },
    { title: '锁定原因', key: 'createTime' },
    { title: '操作', key: 'action', slot: 'action', align: 'center', width: 200 }
  ]
  private tableData: Array<ITableData> = []
  private FrostData: Array<IFrost> = []
  private isTableList: boolean = false

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
      @include flex($direction: flex-start);
      .log-wrapper {
        flex: 1;
        margin-left: rem(20px);
        height: 100%;
      }
      .table-view{
        flex: 1;
        height: 100%;
      }
    }
  }
}
</style>
