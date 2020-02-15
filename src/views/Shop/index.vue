<template>
<div class="part-container">
  <Modal v-model="openDialog" :title="isCreate ? '添加设备' : '修改设备'" :width="350">
    <Form :model="formDevice" :label-width="80" :rules="rules" ref="userRoles">
      <FormItem label="设备密码" prop="password">
        <Input v-model="formDevice.password" placeholtder="请输入设备密码" type="password" password></Input>
      </FormItem>
      <FormItem label="设备名称" prop="name">
        <Input v-model="formDevice.name" placeholtder="请输入设备名称"></Input>
      </FormItem>
      <FormItem label="所在公司" prop="their">
        <Input v-model="formDevice.their" placeholtder="请输入公司名称"></Input>
      </FormItem>
      <FormItem label="所在站点" prop="areaName">
        <Select v-model="formDevice.areaName" placeholtder="请选择站点">
          <Option v-for="item in [{label: '上海市', value: '上海市'}]" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
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
              添加设备
            </Button>
          </div>
        </div>
        <Search :config="searchConfig" @onSearchData="onSearchData" class="search-view"></Search>
      </Card>
      <Table border :columns="columnConfig" :data="tableData" :loading="isTableList" class="table-view table-scroll table-page">
        <template slot-scope="{ row }" slot="action">
          <Button type="primary" style="margin-right: 10px" @click.native="switchDialog('update', row)" size="small">修改</Button>
          <Button type="error" @click="deleteRow(row.id)" size="small">删除</Button>
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
import { Component, Vue, Watch, Mixins } from 'vue-property-decorator'
import { getDeviceList, alterDevice } from '@/api/Device'
import { dataMixins } from '@/tools/mixins'
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
export default class DeviceView extends Mixins(dataMixins) {
  private columnConfig: Array<object> = [
    { title: 'ID', key: 'id', width: 60, align: 'center' },
    { title: '设备名称', key: 'name' },
    { title: '设备编码', key: 'code' },
    { title: '所在公司', key: 'their' },
    { title: '设备状态', key: 'status', slot: 'status', align: 'center', width: 100 },
    { title: '所在站点', key: 'areaName' },
    { title: '操作', key: 'action', slot: 'action', align: 'center', width: 200 }
  ]
  private searchConfig: Array<object> = [
    { key: 'status', info: '请选择设备状态', label: '设备状态', isSelect: true, options: [{ label: '在线', value: '1' }, { label: '离线', value: '0' }] },
    { key: 'areaName', info: '请选择站点', label: '所在公司' },
    { key: 'their', info: '请输入公司名称', label: '所在站点' },
    { key: 'name', info: '请输入设备名称', label: '设备名称' }
  ]
  private tableData: Array<ITableData> = []
  private isSubmit: boolean = false
  private openDialog: boolean = false
  private rules: object = {
    password: [{ required: true, message: '请输入设备密码', trigger: 'blur' }],
    name: [{ required: true, message: '请输入设备名称', trigger: 'blur' }],
    their: [{ required: true, message: '请输入设备所在公司', trigger: 'blur' }],
    areaName: [{ required: true, message: '请选择所在站点', trigger: 'change' }]
  }
  private formDevice: object | any = {}
  private isCreate: boolean = true

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

  // 删除表格行数据
  private deleteRow(id: number): void {
    this.$Modal.confirm({
      title: '警告',
      content: `是否删除该条角色信息?删除后将无法恢复该条数据。`,
      onOk: async () => {
        try {
          const { data } = await alterDevice<null>(id, null, 'delete')
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
      const { data } = await getDeviceList(axiosParams, 'get')
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
          const { data } = this.isCreate ? await getDeviceList(this.formDevice, 'post') : await alterDevice<object>(this.formDevice.id as number, this.formDevice, 'put')
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
.part-container{
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
<style scoped>
  .part-container >>> .ivu-table-tip{
    display: none;
  }
</style>
