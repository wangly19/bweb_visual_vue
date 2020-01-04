<template>
  <div class="gis-container">
    <w-map class="w-height w-width"></w-map>
    <Button icon="ios-radio-button-on" class="open-tabs" v-if="!isTabs" @click="isTabs = true"></Button>
    <transition name="fade">
      <div class="gravity-body w-align-left" v-if="isTabs">
      <Tabs class="w-m-0">
        <TabPane label="驻地设备">
          <Tree :data="treeData" :load-data="asyncData" @on-select-change="onClickback"></Tree>
        </TabPane>
          <TabPane label="实时消息">
            <ul class="device-gravity-list">
              <li><i class="iconfont icon-kongtiao w-ft-6 mouse"></i></li>
              <li><i class="iconfont icon-kongtiao w-ft-6 mouse"></i></li>
              <li><i class="iconfont icon-kongtiao w-ft-6 mouse"></i></li>
              <li><i class="iconfont icon-kongtiao w-ft-6 mouse"></i></li>
              <li><i class="iconfont icon-kongtiao w-ft-6 mouse"></i></li>
              <li><i class="iconfont icon-kongtiao w-ft-6 mouse"></i></li>
            </ul>
            <div class="device-message-list">
            </div>
          </TabPane>
        </Tabs>
        <Button class="close-tab" icon="ios-arrow-up" @click="isTabs = false"></Button>
      </div>
    </transition>
  </div>
</template>
<script>
import BMAP from './bmap'
export default {
  data() {
    return {
      isTabs: false,
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
      ]
    }
  },
  methods: {
     asyncData(item, callback) {
       setTimeout(() => {
         callback([{
           title: '子节点',
           loading: false,
           children: []
         }])
       }, 1000)
     },
     onClickback(e) {
       console.log('click ...', e)
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
      .device-gravity-list{
        @include flex($justify: center);
        flex-wrap: wrap;
        li{
          padding: REM(5px) REM(10px);
        }
      }
      .device-message-list{
        background: red;
      }
    }
  }
</style>
<style scoped>
  .open-tabs >>> .ivu-icon{
    color: red;
    font-size: 1.25rem /* 20/16 */;
  }
</style>
