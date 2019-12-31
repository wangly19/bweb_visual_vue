 <template>
   <div class="table-container w-bg-white w-height w-p-0">
     <div class="maching-wrapper  w-height">
       <Table :columns="columns1" :data="data1" ref="currentRowTable" :loading="loading" stripe class="w-height" tooltip-theme="dark">
         <template slot="header">
           <w-screens :screenConfig="screenConfig" @onSearchData="backSerachData" @onOpenDialog="backOpenDialog"></w-screens>
         </template>
         <template slot-scope="{ row, index }" slot="action">
           <Button type="primary" size="small" style="margin-right: 0.3125rem;" @click="show(index)">详情</Button>
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
         <template slot="footer">
            <w-pages @castCurrent="backCurrent" @castPageSize="backPageSize" :total="total" :limit="limit" :currentPage="currentPage"></w-pages>
         </template>
       </Table>
     </div>
     <Modal
        v-model="machDialog"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
   </div>
 </template>
 <script>
   import Pages from '@/components/Paging'
   import ScreenList from '@/components/ScreenList'
   export default {
     name: 'machine',
     data() {
       return {
         total: 52,
         limit: 10,
         currentPage: 1,
         loading: false,
         machDialog: false,
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
         }, {
           name: 'test1',
           isCascader: false,
           info: '请输入单位'
         }],
         columns1: [
         {
           title: '设备标识',
           key: 'address'
         },
          {
           title: '设备名称',
           key: 'name'
         },
         {
           title: '所属范围',
           key: 'age'
         },
         {
           title: '所属单位',
           key: 'address'
         },
         {
           title: '机器/型号',
           key: 'address'
         },
         {
           title: '状态',
           key: 'age'
         },
         {
           title: '反馈信息',
           key: 'address'
         },
         {
           title: '操作',
           slot: 'action',
           width: 150,
           align: 'center'
         }],
         data1: [{
           name: 'John Brown',
           age: 18,
           address: 'New York No. 1 Lake Park',
           date: '2016-10-03'
         },
         {
           name: 'Jim Green',
           age: 24,
           address: 'London No. 1 Lake Park',
           date: '2016-10-01'
         },
         {
           name: 'Joe Black',
           age: 30,
           address: 'Sydney No. 1 Lake Park',
           date: '2016-10-02'
         },
         {
           name: 'Jon Snow',
           age: 26,
           address: 'Ottawa No. 2 Lake Park',
           date: '2016-10-04'
         },
         {
           name: 'Jon Snow',
           age: 26,
           address: 'Ottawa No. 2 Lake Park',
           date: '2016-10-04'
         },
         {
           name: 'Jon Snow',
           age: 26,
           address: 'Ottawa No. 2 Lake Park',
           date: '2016-10-04'
         },
         {
           name: 'Jon Snow',
           age: 26,
           address: 'Ottawa No. 2 Lake Park',
           date: '2016-10-04'
         },
         {
           name: 'Jon Snow',
           age: 26,
           address: 'Ottawa No. 2 Lake Park',
           date: '2016-10-04'
         },
         {
           name: 'Jon Snow',
           age: 26,
           address: 'Ottawa No. 2 Lake Park',
           date: '2016-10-04'
         },
         {
           name: 'Jon Snow',
           age: 26,
           address: 'Ottawa No. 2 Lake Park',
           date: '2016-10-04'
         }]
       }
     },
     methods: {
       handleClearCurrentRow() {
         this.$refs.currentRowTable.clearCurrentRow()
       },
       backCurrent(data) {
         console.log(data)
         this.Pages = data
         this.loading = true
         setTimeout(() => {
           this.loading = false
         }, 3000)
       },
       backPageSize(data) {
         this.limit = data
         console.log(data)
         this.loading = true
         setTimeout(() => {
           this.loading = false
         }, 3000)
       },
       backSerachData(data) {
         console.log(data)
       },
       backOpenDialog(Bool) {
         this.machDialog = Boolean
       }
     },
     components: {
       'w-pages': Pages,
       'w-screens': ScreenList
     }
   }
 </script>
 <style lang="scss" scoped>
   .table-container {
     .ivu-table-wrapper {}
   }
 </style>
 <style scoped>
   .table-container >>> .ivu-table-header tr th{
     background: white;
   }
 </style>
