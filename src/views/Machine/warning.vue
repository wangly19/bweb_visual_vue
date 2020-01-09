<template>
  <div class="warning-container  w-bg-white w-p-0 w-height">
    <Table :columns="columnsConfig" :data="tableData" ref="currentRowTable" :loading="loading" stripe :height="780" tooltip-theme="dark">
      <template slot="header">
        <w-screens :screenConfig="screenConfig" @onSearchData="backSerachData" @onOpenDialog="backOpenDialog"></w-screens>
      </template>
      <template slot-scope="{ row }" slot="status">
        <Tag :color="row.status === 0 ? 'error' : 'success'">{{row.status === 0 ? '离线' : '在线'}}</Tag>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" class="w-m-right-0" @click="show(index)">详情</Button>
        <Dropdown trigger="click">
          <Button type="success" class="" size="small" @click="remove(index)">更多</Button>
          <DropdownMenu slot="list">
            <DropdownItem>查看</DropdownItem>
            <DropdownItem>修改</DropdownItem>
            <DropdownItem>删除</DropdownItem>
            <DropdownItem>冻结</DropdownItem>
            <DropdownItem>上报</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </template>
    </Table>
    <w-pages @castCurrent="backCurrent" @castPageSize="backPageSize" :total="total" :limit="limit" :currentPage="currentPage"></w-pages>
  </div>
</template>
<script>
  import Pages from '@/components/Paging'
  import ScreenList from '@/components/ScreenList'
  import { getWarnList } from '@/api/device'
  export default {
    name: 'warning',
    data() {
      return {
        total: 0, // 当前数据总和
        limit: 10, // 当前页面默认10条数据
        currentPage: 1, // 当前默认第1页
        loading: false,
        columnsConfig: [
        {
          title: '设备标识',
          key: 'gbid'
        },
        {
          title: '异常设备',
          key: 'warnDevice'
        },
        {
          title: '地址',
          key: 'garvity'
        },
        {
          title: '反馈人',
          key: 'report'
        },
        {
          title: '反馈时间',
          key: 'createTime'
        },
        {
          title: '反馈信息',
          key: 'reportInfo',
          ellipsis: true,
          tooltip: true
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }],
        tableData: [],
        screenConfig: [{
          name: 'titleValue',
          info: '请输入设备号',
          isDate: true
        }, {
          name: 'test',
          isSelect: true,
          info: '请选择设备',
          data: [{
            value: 'news',
            label: 'lab'
          },
          {
            value: 1,
            label: 'lab2'
          }]
        },
        {
          name: 'test1',
          isCascader: false,
          info: '请输入单位'
        }]
      }
    },
    methods: {
      // 当前页面回调
      backCurrent(data) {
        this.currentPage = data
      },
      // 当前页面数量
      backPageSize(size) {
        this.limit = size
      },
      // 搜索按钮
      backOpenDialog(Bool) {},
      backSerachData(data) {},
      async request() {
        try {
          this.loading = true
          const { data } = await getWarnList({
            page: this.currentPage,
            pageSize: this.limit
          })
          console.log(data)
          this.tableData = data.list
          this.loading = false
        } catch (error) {
          this.loading = false
        }
      }
    },
    created() {
      this.request()
    },
     components: {
       'w-pages': Pages,
       'w-screens': ScreenList
     }
  }
</script>
<style lang="scss" scoped>
</style>
