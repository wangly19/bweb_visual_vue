<template>
<div class="map-container">
  <el-amap class="amap-box" :vid="mapConfig.vid" :zoom="mapConfig.zoom" :center="mapConfig.center"
  v-if="showMapComponent" @complete="onReady" :amapManager="mapManager">
    <el-amap-marker v-for="(item, index) in markersList" :position="item.location" :visible="true"
    :vid="index" :key="index" :events="item.event" :icon="require('@/assets/icon/location.svg')"/>
    <el-amap-info-window :position="windowMarker.location" :isCustom="true" v-if="windowMarker !== null"
    :offset="[9, -50]" :visible="windowMarker.show">
      <div class="map-custom-window">
        <div class="header">
          <h3>广州白云分厂货仓中心</h3>
          <Icon type="md-close-circle" class="close-window" @click.stop="windowMarker.show = false"/>
        </div>
        <div class="container">
          <p>当前地址</p>
          <p>联系电话</p>
          <p>厂长</p>
        </div>
      </div>
    </el-amap-info-window>
  </el-amap>
  <div class="kms-tool-container">
    <ul class="side-wrapper">
      <li class="is-tab" @click="toggleTabTag(0)" :class="tabIndexDefalut === 0 && 'is-tab__active'">
        <h5>未处理</h5>
        <span>{{noStock}}个</span>
      </li>
      <li class="is-tab" @click="toggleTabTag(1)" :class="tabIndexDefalut === 1 && 'is-tab__active'">
        <h5>已处理</h5>
        <span>{{yesStock}}个</span>
      </li>
    </ul>
    <ul class="tree-wrapper" v-loading="isTreeLoading">
        <Empty :text="`暂时还没有物流信息哦！`" v-show="kmsListData.length === 0 && !isTreeLoading"></Empty>
        <li class="item" v-for="(item, index) in kmsListData" :key="index">
          <Card class="item__infobox">
            <p class="title">{{item.upName}}</p>
            <Steps :current="item.status" direction="vertical" size="small">
              <Step title="始发地" :content="item.startLand"></Step>
              <Step title="运输中" content="正在运输过程中"></Step>
              <Step title="已到达" :content="item.endLand"></Step>
            </Steps>
            <p class="text">更新时间: {{item.upDate}}</p>
          </Card>
        </li>
      </ul>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Toolbar from '@/components/Toolbar.vue'
import { getKmsList } from '@/api/KMS'
import Empty from '@/components/Empty.vue'
interface IMapconfig {
  zoom: number // 层级
  center: Array<number>
  vid: string
}

@Component({
  components: {
    Toolbar,
    Empty
  }
})
export default class MapView extends Vue {
  private mapManager: any = null
  private mapConfig: IMapconfig = {
    zoom: 12,
    center: [116.41088, 39.92069],
    vid: 'kmsMapView'
  }
  private showMapComponent: boolean = false
  // 默认tab选项
  private tabIndexDefalut: number = 0
  // 列表数据
  private kmsListData: Array<object> = []
  private isTreeLoading: boolean = false
  private yesStock: number = 0
  private noStock: number = 0
  private markersList: Array<object> = []
  private windowMarker: object | null = null

  // 添加坐标点
  private addMakers(data: Array<number>, item: object) {
    this.markersList.push({
      location: data,
      show: true,
      event: {
        click: (e: any, element: object = item) => {
          this.callbackMapClick(e, element)
        }
      }
    })
  }

  // 切换tab选项卡
  private toggleTabTag(index: number): void {
    if (this.tabIndexDefalut !== index) {
      // 切换tab
      this.tabIndexDefalut = index
      this.getTreeKmsDataList(index)
    } else {
      // 点击了重复的tab
      this.$Message.success('已经在当前的Tab页')
    }
  }

  // 地图加载回调
  private onReady(): void {
    console.log('地图加载完成')
  }

  // 地图点击事件
  private callbackMapClick(e: any, element: any): void {
    console.log(e, element)
    const winStack: any = this.windowMarker
    this.windowMarker = {
      location: element.location,
      show: winStack ? !winStack.show : true,
      data: element
    }
  }

  // 请求tree列表数据
  private async getTreeKmsDataList(flag: number) {
    try {
      this.isTreeLoading = true
      const { data } = await getKmsList({ flag })
      if (data.success) {
        this.yesStock = data.yesStock
        this.noStock = data.noStock
        this.kmsListData = data.list
        data.list.forEach((element: any) => {
          this.addMakers(element.location, element)
        })
      } else {
        this.$Message.error(data.message)
      }
      this.isTreeLoading = false
    } catch (error) {
      this.isTreeLoading = false
    }
  }

  private mounted() {
    this.$nextTick(() => {
      this.showMapComponent = true
    })
  }

  private async created() {
    this.getTreeKmsDataList(this.tabIndexDefalut)
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/global.d.scss';
  .map-container{
    width: 100%;
    height: 100%;
    position: relative;
    .map-custom-window{
      color: $dark;
      background: $white;
      width: rem(300px);
      height: rem(100px);
      position: relative;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .1);
      .header{
        @include flex($justify: space-between, $align: center);
        padding: $size1;
        h3{
          font-size: rem(20px);
          font-weight: normal;
          color: $dark
        }
        .close-window{
          font-size: rem(25px);
          cursor: pointer;
        }
      }
      &::before{
        content: '';
        @include position($position: absolute, $bottom: - rem(20px), $left: 50%);
        border-width: rem(10px) rem(10px) rem(10px) rem(10px);
        border-style: solid;
        border-color: white transparent transparent transparent;
        transform: translate(-50%);
      }
    }
    .kms-tool-container{
      @include position($position: absolute, $left: 0, $top: 0);
      height: 100%;
      @include flex($direction: column);
      padding: rem(30px) rem(50px) rem(30px) rem(50px);
      width: rem(300px);
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .1);
      .side-wrapper{
        width: rem(300px);
        background: $white;
        flex: 0 0 rem(80px);
        @include flex();
        .is-tab{
          width: 50%;
          text-align: center;
          height: 100%;
          @include flex($direction: column, $justify: center, $align: center);
          cursor: pointer;
          transition: all 2s;
          &__active{
            background: $bg;
            h5{
              font-size: $size2;
            }
          }
        }
      }
      .tree-wrapper{
        flex: 1;
        width: rem(300px);
        background: white;
        overflow: auto;
        .item{
          padding: rem(10px);
          border-bottom: 1px solid $bg;
          overflow: auto;
          &__infobox{
            .text{
              font-size: $size1;
              line-height: rem(20px);
            }
            .title{
              color: $main;
            }
          }
        }
      }
    }
  }
</style>
