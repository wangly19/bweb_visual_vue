 <template>
   <div class="table-container w-bg-white w-p-0">
     <div class="maching-wrapper">
       <Table :columns="columns1" :data="data1" ref="currentRowTable" :loading="loading" stripe class="w-height" tooltip-theme="dark">
         <template slot="header">
           <w-screens :screenConfig="screenConfig" @onSearchData="backSerachData" @onOpenDialog="backOpenDialog"></w-screens>
         </template>
         <template slot-scope="{ row }" slot="status">
           <span>{{row.status === 0 ? '离线' : '在线'}}</span>
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
       </Table>
       <w-pages @castCurrent="backCurrent" @castPageSize="backPageSize" :total="total" :limit="limit" :currentPage="currentPage"></w-pages>
     </div>
     <Modal v-model="machDialog" title="添加新设备" @on-ok="submit('form')" @on-cancel="cancel('form')" :loading="dialogld">
       <div class="dialog-body">
         <Form ref="form" v-model="form" :label-width="80" :rules="rules">
           <Row :gutter="30">
             <Col :span="12">
             <FormItem label="设备标识" prop="name">
               <Input v-model="form.name" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
             <Col :span="12">
             <FormItem label="设备名称" prop="name">
               <Input v-model="form.name" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
           </Row>
           <Row :gutter="30">
             <Col :span="12">
             <FormItem label="所属范围" prop="name">
               <Input v-model="form.name" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
             <Col :span="12">
             <FormItem label="所属单位" prop="name">
               <Input v-model="form.name" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
           </Row>
           <Row :gutter="30">
             <Col :span="12">
             <FormItem label="机器型号" prop="name">
               <Input v-model="form.name" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
             <Col :span="12">
             <FormItem label="当前状态" prop="name">
               <Input v-model="form.name" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
           </Row>
           <FormItem label="信息反馈">
             <Input v-model="form.textarea" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="Enter something..."></Input>
           </FormItem>
         </Form>
       </div>
       <template slot="footer">
         <Button type="text" @click="cancel('form')">取消</Button>
         <Button type="primary" @click="submit('form')">提交</Button>
       </template>
     </Modal>
   </div>
 </template>
 <script>
   import Pages from '@/components/Paging'
   import ScreenList from '@/components/ScreenList'
   import { getDeviceList } from '@/api/device'
   export default {
     name: 'machine',
     data() {
       return {
         total: 0,
         limit: 10,
         currentPage: 1,
         loading: false,
         machDialog: false,
         dialogld: true,
         form: {},
         rules: {
           name: [
             { required: true, message: '请输入', trigger: 'blur' }
           ]
         },
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
           key: 'gbid'
         },
         {
           title: '设备名称',
           key: 'name'
         },
         {
           title: '所属范围',
           key: 'scope'
         },
         {
           title: '所属单位',
           key: 'monad'
         },
         {
           title: '机器/型号',
           key: 'type'
         },
         {
           title: '状态',
           key: 'status',
           slot: 'status'
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
         data1: []
       }
     },
     methods: {
       handleClearCurrentRow() {
         this.$refs.currentRowTable.clearCurrentRow()
       },
       // 回调当前页
       backCurrent(data) {
         console.log(data)
         this.Pages = data
         this.request()
       },
       // 回调分页组件数量
       backPageSize(data) {
         this.limit = data
         this.request()
       },
       // 回调查询条件数据
       backSerachData(data) {
         console.log(data)
         this.request()
       },
       // 打开对话框方法
       backOpenDialog(Bool) {
         this.machDialog = Bool
       },
       // 对话框提交方法
       submit(name) {
         this.dialogld = true
         this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!')
          } else {
            this.dialogld = false
            }
          })
       },
       // 对话框取消方法
       cancel(name) {
         this.$refs[name].resetFields()
       },
       async request() {
         this.loading = true
         const { data } = await getDeviceList({
           page: this.currentPage,
           pageSize: this.limit
         })
         this.data1 = data.list
         this.total = data.total
         this.loading = false
       }
     },
     components: {
       'w-pages': Pages,
       'w-screens': ScreenList
     },
     created() {
       this.request()
     }
   }
 </script>
 <style lang="scss" scoped>
   .table-container {
     .ivu-table-wrapper {}
   }
 </style>
 <style scoped>
   .table-container>>>.ivu-table-header tr th {
     background: white;
   }
 </style>
