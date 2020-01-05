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
              <ListItem v-for="item in data" :key="item.title" class="item">
                <ListItemMeta :avatar="item.avatar" :title="item.title"/>
                <span class="w-ft-2">{{ item.content }}</span>
                <template slot="action">
                    <li>
                      <span class="w-ft-2"><Icon type="ios-time" />{{ item.time}}</span>
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
    <Modal v-model="isOpenDialog" title="设备列表">
       <div class="dialog-body">
       </div>
       <template slot="footer">
         <Button type="text" @click="cancel('form')">取消</Button>
         <Button type="primary" @click="submit('form')">提交</Button>
       </template>
     </Modal>
  </div>
</template>
<script>
import BMAP from './bmap'
export default {
  data() {
    return {
      isTabs: false,
      isDevice: null,
      warnLocal: {},
      tabName: '1',
      gravityList: [],
      isOpenDialog: false,
      data: [
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
      treeData: [
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
      label: (h) => {
        return h('div', [
          h('span', '实时预告'),
          h('Badge', {
            props: {
              count: this.data.length
            }
          })
        ])
      }
    }
  },
  methods: {
    setCoordinate({ local }) {
      this.warnLocal = local
    },
    asyncData(item, callback) {
       setTimeout(() => {
         callback([{
           title: '子节点',
           loading: false,
           children: []
         }])
       }, 1000)
     },
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
     onClickback(e) {
       console.log('click ...', e)
     },
     onTabsClick(name) {
       this.tabName = name
     }
  },
  components: {
    'w-map': BMAP
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
  .gis-container{
    width: 100%;
    height: 100%;
    @include position($position: relative);
    .bmap-wrapper{
      @include position($left: 0, $top: 0);
    }
    .open-tabs{
      @include position($zIndex: 1, $right: 0);
      width: REM(50px);
      height: REM(50px);
    }
    .gravity-body{
      @include position($zIndex: 1, $right: 0);
      height: 100%;
      color: $white;
      width: REM(250px);
      background: rgba(255, 255, 255, .9);
      .close-tab{
        width: 100%;
        border: none;
        height: REM(30px);
        border-radius: 0;
        background: $dark;
        color: $white;
        @include position($position: absolute, $bottom: 0, $left: 50%);
        transform: translate(-50%);
      }
      .tree{
        padding: REM(10px);
        height: REM(420px);
        overflow: auto;
      }
      .device-gravity-list{
        @include flex($justify: center);
        flex-wrap: wrap;
        li{
          padding: 0 REM(10px);
        }
      }
      .device-message-list{
        .item {
          padding: REM(15px);
        }
        .item:hover{
          background: #ccc;
          border-radius: REM(5px);
        }
      }
    }
  }
</style>
<style scoped>
  .gis-container .open-tabs >>> .ivu-icon{
    color: red;
    font-size: 1.25rem /* 20/16 */;
  }
  .gis-container >>> .ivu-tabs-nav{
      float: right;
    }
</style>
