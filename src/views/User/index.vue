<template>
<div class="user-container">
  <Drawer :closable="false" width="300" v-model="openUserDetails">
    <CellGroup>
      <div class="avatar-wrapper">
        <img src="http://img3.imgtn.bdimg.com/it/u=1208538952,1443328523&fm=26&gp=0.jpg" alt="avatar" class="image-avatar">
      </div>
      <Cell title="姓名" extra="赵飞鸿" />
      <Cell title="生日" extra="1992.08.20" />
      <Cell title="身份" extra="厂长" />
      <Cell title="所属站点" extra="深圳站点" />
      <Cell title="最后活跃时间" extra="2020年2月14日" />
      <Cell title="账号当前状态">
        <Tag slot="extra" color="success">正常</Tag>
      </Cell>
      <Cell title="邮箱" label="1418202350@qq.com" />
      <Cell title="联系电话" label="18607940000" />
      <Cell title="当前住址" label="深圳市龙华区xxxxxxxxxxxxxxxxxxx" />
    </CellGroup>
  </Drawer>
  <Modal v-model="openDialog" :title="isCreate ? '添加设备' : '修改设备'" :width="350">
    <Form :model="formDevice" :label-width="80" :rules="rules" ref="userRoles">
      <FormItem label="账号" prop="user">
        <Input v-model="formDevice.user" placeholtder="请输入账号" :disabled="!isCreate"></Input>
      </FormItem>
      <FormItem label="姓名" prop="name">
        <Input v-model="formDevice.name" placeholtder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="formDevice.password" placeholtder="请输入设备密码" type="password" password></Input>
      </FormItem>
      <FormItem label="身份" prop="identity">
        <Input v-model="formDevice.their" placeholtder="请输入公司名称"></Input>
      </FormItem>
    </Form>
    <template slot="footer">
      <Button type="text" @click="cancel('userRoles')">取消</Button>
      <Button type="primary" @click="submit('userRoles')" :disabled="isSubmit" :loading="isSubmit">提交</Button>
    </template>
  </Modal>
  <div class="container">
    <div class="table-wrapper">
      <Card class="search-wrapper" ref="search">
        <div class="tool-view">
          <p>工具栏</p>
          <div class="list-btn">
            <Button type="success" style="margin-right: 10px;" @click="switchDialog('create')">
              <i class="fas fa-plus-circle"/>
              添加账号
            </Button>
          </div>
        </div>
        <Search :config="searchConfig" @onSearchData="onSearchData" class="search-view"></Search>
      </Card>
      <Table border :columns="columnConfig" :data="tableData" :loading="isTableList" class="table-view table-scroll table-page">
        <template slot-scope="{ row }" slot="action">
          <Button type="primary" @click.native="switchDialog('update', row)" size="small">修改</Button>
          <Button type="error" @click="deleteRow(row.id)" size="small" :disabled="!row.status"  style="margin: 0 10px 0 10px;">锁定</Button>
          <Button type="info" @click="seeDetails(row.id)" size="small">查看</Button>
        </template>
        <template slot="footer">
          <Empty text="还未添加或者导入设备信息" v-if="!tableData.length"></Empty>
          <Paging v-else :total="total" @onPage="bindPage" @onLimit="bindLimit"></Paging>
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
import Paging from '@/components/Paging.vue'
import FillTable from '@/components/FullTable.js'
interface ITableData {
  id: number,
  name: string,
  user: string,
  identity: string
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
    { title: '帐号', key: 'user' },
    { title: '姓名', key: 'name' },
    { title: '身份', key: 'identity' },
    { title: '设备状态', key: 'status', slot: 'status', align: 'center', width: 100 },
    { title: '注册时间', key: 'createTime' },
    { title: '操作', key: 'action', slot: 'action', align: 'center', width: 200 }
  ]
  private searchConfig: Array<object> = [
    { key: 'user', info: '请输入账号', label: '账号' },
    { key: 'name', info: '请输入姓名', label: '姓名' }
  ]
  private tableData: Array<ITableData> = []
  private isTableList: boolean = false
  private isSubmit: boolean = false
  private openDialog: boolean = false
  private openUserDetails: boolean = false
  private rules: object = {
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    user: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    identity: [{ required: true, message: '请选择身份', trigger: 'change' }]
  }
  private formDevice: object | any = {}
  private userInfo: object = {}
  private isCreate: boolean = true
  private offsetHeight: number = 544
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

  // 切换对话框
  private switchDialog(flag: string, row: object = {}) {
    switch (flag) {
      case 'create':
        this.isCreate = true
        this.formDevice = {}
        break

      case 'update':
        this.isCreate = false
        this.formDevice = { ...row }
        break

      default:
        throw new Error('没有找到工厂项')
    }
    this.openDialog = true
  }

  // 查看详情
  private seeDetails(id: number): void {
    this.openUserDetails = true
  }

  // 删除表格行数据
  private deleteRow(id: number): void {
    this.$Modal.confirm({
      title: '警告',
      content: `是否删除该条角色信息?删除后将无法恢复该条数据。`,
      onOk: async () => {
        try {
          const { data } = await alterUser<null>(id, null, 'delete')
          this.$Message[data.success ? 'success' : 'error'](data.message)
          this.getTableList()
        } catch (error) {
          console.error(error)
          this.$Message.error(error)
        }
      }
    })
  }
  // 获取传递数据
  private onSearchData(data: object): void {
    console.log(data)
    this.getTableList({ ...data })
  }
  // 获取表格数据
  private async getTableList(params: object = {}): Promise<any> {
    const axiosParams = Object.assign(params, { limit: this.limit })
    try {
      this.isTableList = true
      const { data } = await getUserList(axiosParams, 'get')
      this.tableData = data.list
      this.total = data.total
      this.isTableList = false
      console.log(data)
    } catch (e) {
      console.error(e)
      this.isTableList = false
    }
  }
  // 关闭对话框
  private cancel(formName: string): void{
    let formRef: any = this.$refs[formName]
    this.openDialog = false
    this.formDevice = {}
    formRef.resetFields()
  }
  // 提交对话框数据
  private submit(formName: string): void{
    let formRef: any = this.$refs[formName]
    formRef.validate(async (valid: boolean) => {
      if (valid) {
        this.isSubmit = true
        try {
          const { data } = this.isCreate ? await getUserList(this.formDevice, 'post') : await alterUser<object>(this.formDevice.id as number, this.formDevice, 'put')
          this.$Message[data.success ? 'success' : 'error'](data.message)
          this.isSubmit = false
          this.openDialog = false
        } catch (error) {
          console.error(error)
          this.isSubmit = false
          this.$Message.error(error)
        }
      }
    })
  }

  private async created() {
    this.getTableList()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
  .avatar-wrapper{
    width: 100%;
    text-align: center;
    height: rem(150px);
    img{
      height: 100%;
      width: rem(150px);
      @include radius(50%);
      cursor: pointer;
      border: 5px solid $bg;
    }
  }
.user-container{
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
      @include flex($direction: row-reverse);
      .search-wrapper {
        flex: 0 0 rem(300px);
        margin-left: rem(20px);
        height: 100%;
        .tool-view{
          .list-btn{
            @include flex($justify: space-between);
            padding: rem(10px) 0 rem(10px) 0;
          }
        }
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
