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
export default {
  name: 'warning',
  data() {
    return {
      total: 0, // 当前数据总和
      limit: 10, // 当前页面默认10条数据
      currentPage: 1, // 当前默认第1页
      columnsConfig: [
         {
           title: '设备标识',
           key: 'gbid'
         },
         {
           title: '设备名称',
           key: 'name'
         },
         {
           title: '地址',
           key: 'scope'
         },
         {
           title: '机器/型号',
           key: 'type'
         },
         {
           title: '反馈信息',
           key: 'address',
           ellipsis: true,
           tooltip: true
         },
         {
           title: '操作',
           slot: 'action',
           width: 150,
           align: 'center'
         }],
      tableData: []
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
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
