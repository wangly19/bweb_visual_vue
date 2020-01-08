<template>
  <div class="gis-container">
    <w-map class="w-height w-width" :warnLocal="warnLocal" :gravityList="gravityList"></w-map>
    <Button icon="ios-radio-button-on" class="open-tabs" v-if="!isTabs" @click="isTabs = true"></Button>
    <transition name="fade">
      <div class="gravity-body w-align-left" v-if="isTabs">
        <Tabs class="w-m-0" :value="tabName" @on-click="onTabsClick">
          <TabPane label="驻地设备" name="1">
            <ul class="device-gravity-list">
              <li v-for="(item, index) in 8" :key="index" @click="onGarityLsit(index)">
                <Tooltip content="空调">
                  <i class="iconfont icon-kongtiao w-ft-6 mouse" :class="isDevice === index && 'w-co-blue-2'"></i>
                </Tooltip>
              </li>
            </ul>
            <Tree :data="treeData" :load-data="asyncData" @on-select-change="onClickback" class="tree"></Tree>
          </TabPane>
          <TabPane :label="label" name="2">
            <List class="device-message-list" item-layout="vertical">
              <ListItem v-for="(item, index) in data" :key="index" class="item">
                <ListItemMeta :avatar="item.avatar" :title="item.title" />
                <span class="w-ft-2 mouse" @click="bindDispose(item, index)">{{ item.content }}</span>
                  <Icon type="md-close" @click="closeDeviceMessage(index)" class="remove-message mouse"  />
                  <template slot="action">
                    <li>
                      <span class="w-ft-2">
                        <Icon type="ios-time" />{{ item.time}}</span>
                    </li>
                    <li>
                      <span class="w-ft-2" @click="setCoordinate(item)">查看位置</span>
                    </li>
                  </template>
                  <template slot="extra">
                  </template>
              </ListItem>
            </List>
          </TabPane>
        </Tabs>
        <Button class="close-tab" icon="ios-arrow-up" @click="isTabs = false"></Button>
      </div>
    </transition>
    <Modal v-model="isOpenDialog" title="异常处理">
      <div class="dialog-body">
        <Row>
          <Col :span="24">
          <Alert type="error" show-icon>
            当前设备产生异常
            <span slot="desc">
              请您速度派遣工程师前往修复
            </span>
          </Alert>
          </Col>
        </Row>
        <Row>
          <Col :span="12" offset="1">
            <Steps :current="2" direction="vertical" status="error">
                <Step title="已完成" content="上报异常信息完成"></Step>
                <Step title="已完成" content="上报信息成功"></Step>
                <Step title="未完成" content="待审核，请指定外派人员"></Step>
                <Step title="未完成" content="下发信息成功"></Step>
            </Steps>
          </Col>
          <Col :span="11">
            <Collapse :accordion="true" simple>
                <Panel name="0">
                    异常地点
                    <p slot="content">
                      <Tag color="green">{{exceptionDetails.gravity}}</Tag>
                    </p>
                </Panel>
                <Panel name="2">
                    上报时间
                    <p slot="content">
                      <Tag color="success">{{exceptionDetails.time}}</Tag>
                    </p>
                </Panel>
                <Panel name="3">
                    异常描述
                    <p slot="content">{{exceptionDetails.content}}</p>
                </Panel>
            </Collapse>
          </Col>
        </Row>
        <Form ref="form" :model="form" :label-width="80" :rules="rules">
          <Row>
            <Col :span="12">
            <FormItem label="工程师" prop="engineer">
              <Input v-model="form.engineer" placeholder="请选择工程师"></Input>
            </FormItem>
            </Col>
            <Col :span="12">
            <FormItem label="等级" prop="rank">
              <Input v-model="form.rank" placeholder="请选择等级"></Input>
            </FormItem>
            </Col>
          </Row>
          <FormItem label="下发" prop="desc">
            <Input v-model="form.desc" type="textarea" :autosize="{minRows: 3,maxRows: 3}" placeholder="请输入下发消息"></Input>
          </FormItem>
        </Form>
      </div>
      <template slot="footer">
        <Button type="text" @click="cancel('form')">取消</Button>
        <Button type="primary" @click="submit('form')" :loading="btnLoading">处理</Button>
      </template>
    </Modal>
  </div>
</template>
<script>
  import BMAP from './bmap'
  export default {
    data() {
      return {
        form: {}, // 表单数据
        isTabs: false, // 是否打开tab
        isDevice: null, // 是否是设备
        warnLocal: {}, // 警告位置
        tabName: '1', // tab定位
        gravityList: [], // 位置列表
        isOpenDialog: false, // 打开对话框
        btnLoading: false, // 按钮加载
        exceptionDetails: {}, // 异常详情
        data: [ // 消息
          {
            title: '电表异常',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: '当前一台设备出现问题',
            time: '2019年12月31日',
            gravity: '青山湖大道',
            local: { lng: 116.404, lat: 39.915 }
          },
          {
            title: '排气管',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: '当前一台设备出现问题',
            time: '2019年12月31日',
            gravity: '青山湖大道',
            local: { lng: 116.504, lat: 39.815 }
          }
        ],
        treeData: [ // 数结构数据
          {
            title: '青山湖区',
            loading: false,
            children: []
          },
          {
            title: '西湖区',
            loading: false,
            children: []
          },
          {
            title: '红谷滩区',
            loading: false,
            children: []
          }
        ],
        label: (h) => { // rand表达 title label
          return h('div', [
            h('span', '实时预告'),
            h('Badge', {
              props: {
                count: this.data.length
              }
            })
          ])
        },
        rules: {
          engineer: [
            { required: true, message: '请选择工程师', trigger: 'blur' }
          ],
          rank: [
            { required: true, message: '请选择下发等级', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请输入反馈信息', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      // 查看错误地址坐标
      setCoordinate({ local }) {
        this.warnLocal = local
      },
      // tree数懒加载
      asyncData(item, callback) {
        setTimeout(() => {
          callback([{
            title: '子节点',
            loading: false,
            children: []
          }])
        }, 1000)
      },
      // 坐标列表
      onGarityLsit(index) {
        if (this.isDevice === index) {
          console.log('执行')
          this.isDevice = null
          this.gravityList = []
        } else {
          this.isDevice = index
          // 显示当前设备群
          const data = [
            { lng: 116.442788, lat: 39.935297 },
            { lng: 116.349077, lat: 39.950344 },
            { lng: 116.439914, lat: 39.886595 }
          ]
          this.gravityList = data
        }
      },
      // 地图物体回调
      onClickback(e) {
        console.log('click ...', e)
      },
      // tab点击方案
      onTabsClick(name) {
        this.tabName = name
      },
      // 清除消息
      closeDeviceMessage(index) {
        this.data.splice(index, 1)
      },
      // 详情处理方法
      bindDispose(item, index) {
        console.log(item)
        this.exceptionDetails = item
        this.exceptionDetails.id = index
        this.isOpenDialog = true
      },
      // 设备处理提交
      submit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.btnLoading = true
            console.log(this.exceptionDetails)
            this.data.splice(this.exceptionDetails.id, 1)
            console.log(this.form)
            setTimeout(() => {
              this.btnLoading = false
              this.isOpenDialog = false
            }, 2000)
          } else {
            return false
          }
        })
      },
      // 取消对话框
      cancel(name) {
        this.$refs[name].resetFields()
        this.isOpenDialog = false
      }
    },
    components: {
      // 地图组件
      'w-map': BMAP
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/css/mixins.scss';

  .gis-container {
    width: 100%;
    height: 100%;
    @include position($position: relative);

    .bmap-wrapper {
      @include position($left: 0, $top: 0);
    }

    .open-tabs {
      @include position($zIndex: 1, $right: 0);
      width: REM(50px);
      height: REM(50px);
    }

    .gravity-body {
      @include position($zIndex: 1, $right: 0);
      height: 100%;
      color: $white;
      width: REM(300px);
      background: rgba(255, 255, 255, .9);

      .close-tab {
        width: 100%;
        border: none;
        height: REM(30px);
        border-radius: 0;
        background: $dark;
        color: $white;
        @include position($position: absolute, $bottom: 0, $left: 50%);
        transform: translate(-50%);
      }

      .tree {
        padding: REM(10px);
        height: REM(420px);
        overflow: auto;
      }

      .device-gravity-list {
        @include flex($justify: center);
        flex-wrap: wrap;

        li {
          padding: 0 REM(10px);
        }
      }

      .device-message-list {
        height: 100%;
        overflow: auto;

        .item {
          padding: REM(15px);
          position: relative;

          .remove-message {
            @include position($position: absolute, $right: 10px, $top: 10px);
            font-size: REM(20px);
          }

          .remove-message:hover {
            color: $danger;
          }
        }

        .item:hover {
          background: #DDD;
          border-radius: REM(5px);
        }
      }
    }
  }
</style>
<style scoped>
  .gis-container .open-tabs>>>.ivu-icon {
    color: red;
    font-size: 25px;
      /* 20/16 */
    ;
  }

  .gis-container>>>.ivu-tabs-nav {
    float: right;
  }
</style>
