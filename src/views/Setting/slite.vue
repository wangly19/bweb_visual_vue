<template>
<div class="slite-container">
  <Modal v-model="openDialog" :title="isCreate ? '添加站点' : '修改站点'" :width="400">
    <Form :model="formUserRoles" :label-width="80" :rules="rules" ref="userRoles">
      <FormItem label="站点名称" prop="name">
        <Input v-model="formUserRoles.name" placeholtder="请输入站点名称" type="text"></Input>
      </FormItem>
      <FormItem label="站点位置" prop="position">
        <Cascader :data="rolesComponentData" v-model="formUserRoles.pid" placeholtder="请选择父级权限"></Cascader>
      </FormItem>
      <FormItem label="描述" prop="desc">
        <Input v-model="formUserRoles.desc" placeholtder="请输入添加权限" type="textarea" :autosize="{minRows: 3}"></Input>
      </FormItem>
    </Form>
    <template slot="footer">
      <Button type="text" @click="cancel('userRoles')">取消</Button>
      <Button type="primary" @click="submit('userRoles')">提交</Button>
    </template>
  </Modal>
  <div class="container">
    <div class="table-wrapper">
      <Table border :columns="columnConfig" :data="tableData" :loading="isTableList" class="table-view table-scroll" row-key="id">
        <template slot-scope="{ row }" slot="action">
          <Button type="primary" style="margin-right: 10px" @click.native="switchDialog('update', row)" size="small">修改</Button>
          <Button type="error" @click="deleteRow(row.id)" size="small">删除</Button>
        </template>
        <template slot="footer" v-if="tableData.length === 0">
          <Empty text="还未添加或者导入权限树"></Empty>
        </template>
        <template #loading>
          <Spin fix class="spin-wrapper">
            <Icon type="ios-loading" size=30 class="start-loading"/>
            <span>Loading</span>
          </Spin>
        </template>
      </Table>
      <Card class="search-wrapper" ref="search">
        <div class="tool-view">
          <p>工具栏</p>
          <div class="list-btn">
            <Button type="success" style="margin-right: 10px;" @click="switchDialog('create')">
              <i class="fas fa-plus-circle"/>
              添加站点
            </Button>
          </div>
        </div>
        <Search :config="searchConfig" @onSearchData="onSearchData" class="search-view"></Search>
      </Card>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { getSiteList } from '@/api/Setting'
import Toolbar from '@/components/Toolbar.vue'
import Empty from '@/components/Empty.vue'
import Search from '@/components/Search.vue'
import FillTable from '@/components/FullTable.js'
interface ITableData {
  position: object
  name: string
  desc: string
}
@Component({
  components: {
    Toolbar,
    Empty,
    Search,
    FullTable: FillTable as any
  }
})
export default class UserPartView extends Vue {
  private columnConfig: Array<object> = [
    { title: 'ID', key: 'id', tree: true, width: 100 },
    { title: '站点名称', key: 'name' },
    { title: '站点地址', key: 'site' },
    { title: '描述', key: 'desc' },
    { title: '操作', key: 'action', slot: 'action', align: 'center', width: 200 }
  ]
  private searchConfig: Array<object> = [
    { key: 'name', info: '请输入权限名称', label: '权限名称' }
  ]
  private tableData: any = []
  private isTableList: boolean = false
  private openDialog: boolean = false
  private rules: object = {
    position: [{ required: true, message: '请选择站点地址', trigger: 'change' }],
    name: [{ required: true, message: '请输入站点名称', trigger: 'blur' }],
    desc: [{ required: true, message: '请输入站点详细地址描述等信息', trigger: 'blur' }]
  }
  private rolesComponentData: Array<object> = []
  private formUserRoles: object = {}
  private isCreate: boolean = false
  private offsetHeight: number = 0

  // 修改表格数据
  revampRow(row: object) {
    this.openDialog = true
    this.formUserRoles = { ...row }
  }

  // 切换对话框
  private switchDialog(flag: string, row: object = {}) {
    switch (flag) {
      case 'create':
        this.isCreate = true
        this.formUserRoles = {}
        break

      case 'update':
        this.isCreate = false
        this.formUserRoles = { ...row }
        break

      default:
        throw new Error('没有找到工厂项')
    }
    this.openDialog = true
  }

  // 删除表格行数据
  private deleteRow(id: number | string): void {
    this.$Modal.confirm({
      title: '警告',
      content: `是否删除该条角色信息?删除后将无法恢复该条数据。`,
      onOk: () => {
        this.$Message.success('删除成功')
      },
      onCancel: () => {
        this.$Message.error('删除失败')
      }
    })
  }
  // 获取传递数据
  private onSearchData(data: object): void {
    console.log(data)
  }
  // 获取表格数据
  private async getTableList(): Promise<any> {
    try {
      this.isTableList = true
      const [data, data1] = await getSiteList()
      console.log(data, data1)
      this.tableData = data.data.list
      this.rolesComponentData = data1.data.test
      this.isTableList = false
    } catch (e) {
      console.error(e)
      this.isTableList = false
    }
  }
  // 关闭对话框
  private cancel(formName: string): void{
    let formRef: any = this.$refs[formName]
    this.openDialog = false
    this.formUserRoles = {}
    formRef.resetFields()
  }
  // 提交对话框数据
  private submit(formName: string): void{
    let formRef: any = this.$refs[formName]
    formRef.validate(async (valid: boolean) => {
      if (valid) {
        console.log(this.formUserRoles)
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
.slite-slot-mg{
  width: rem(150px);
  padding-right: rem(15px);
  }
.slite-container{
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
      @include flex();
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
      }
    }
  }
}
</style>
<style scoped>
</style>
