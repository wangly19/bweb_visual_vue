 <template>
   <div class="table-container w-bg-white w-p-0 w-height">
     <div class="maching-wrapper w-bg-white">
       <Table :columns="columns1" :data="data1" ref="currentRowTable" :loading="loading" stripe :height="780" tooltip-theme="dark">
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
     <Modal v-model="machDialog" title="添加新设备">
       <div class="dialog-body">
         <Form ref="form" :model="form" :label-width="80" :rules="rules">
           <Row :gutter="30">
             <Col :span="12">
             <FormItem label="设备标识" prop="gbid">
               <Input v-model="form.gbid" placeholder="Enter your name"></Input>
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
             <FormItem label="所属范围" prop="scope">
               <Input v-model="form.scope" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
             <Col :span="12">
             <FormItem label="所属单位" prop="monad">
               <Input v-model="form.monad" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
           </Row>
           <Row :gutter="30">
             <Col :span="12">
             <FormItem label="机器型号" prop="type">
               <Input v-model="form.type" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
             <Col :span="12">
             <FormItem label="当前状态" prop="status">
               <Input v-model="form.status" placeholder="Enter your name"></Input>
             </FormItem>
             </Col>
           </Row>
           <FormItem label="信息描述">
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
           gbid: [
             { required: true, message: '请输入GBID', trigger: 'blur' }
           ],
           name: [
             { required: true, message: '请输入设备名称', trigger: 'blur' }
           ],
           scope: [
             { required: true, message: '请选择设备范围', trigger: 'blur' }
           ],
           monad: [
             { required: true, message: '请选择所在单位', trigger: 'blur' }
           ],
           type: [
             { required: true, message: '请选择设备类型', trigger: 'blur' }
           ],
           status: [
             { required: true, message: '请选择设备状态', trigger: 'blur' }
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
         this.currentPage = data
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
         this.$refs['form'].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!')
          } else {
            return false
            }
          })
       },
       // 对话框取消方法
       cancel(name) {
         this.$refs[name].resetFields()
         this.machDialog = false
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
 @import '@/assets/css/mixins.scss';
 </style>
 <style scoped>
.table-container>>>.ivu-table-header tr th {
  background: white;
}
 </style>
