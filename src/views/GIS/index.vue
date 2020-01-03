<template>
  <div class="gis-container">
    <w-map class="w-height w-width"></w-map>
    <div class="gravity-body w-align-left">
      <Tabs class="w-m-0">
        <TabPane label="驻地设备">
          <Tree :data="treeData" :load-data="asyncData" @on-select-change="onClickback"></Tree>
        </TabPane>
        <TabPane label="实时消息">实时消息</TabPane>
      </Tabs>
      <Button class="close-tab" icon="ios-arrow-up"></Button>
    </div>
  </div>
</template>
<script>
import BMAP from './bmap'
export default {
  data() {
    return {
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
    .gravity-body{
      @include position($zIndex: 1, $right: 0);
      height: 100%;
      color: $white;
      background: rgba(255, 255, 255, .9);
      .close-tab{
        width: 100%;
        border: none;
        border-radius: 0;
        background: $dark;
        color: $white;
        @include position($position: absolute, $bottom: 0, $left: 50%);
        transform: translate(-50%);
      }
    }
  }
</style>
