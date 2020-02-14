<template>
  <div class="zoom-image-container" v-if="isVisible">
    <Icon type="md-close" class="default-btn close-zoom" @click="$emit('update:isVisible', false)"/>
    <!-- <Icon type="ios-arrow-back" class="default-btn leave-last"/> -->
    <Icon v-show="isNextShow" type="ios-arrow-forward" class="default-btn leave-next" @click.stop="toNext"/>
    <div class="img-wrapper" v-loading="isSuccess">
      <div class="error-view" v-show="isError">
        <Icon type="md-bug" :size="30"/>
        <p>加载失败</p>
      </div>
      <img v-show="!isError" :src="setImagePath" alt="图片" id="zoomImage"
      @load="imgLoad('success')" @error="imgLoad('error')">
    </div>
    <ul class="tool-wrapper">
      <li v-for="(item, index) in toolIcon" :key="index" class="tool-item">
        <i class="iconfont tool-item__icon" :class="item" @click.stop="bindBlowClick(index)"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ZoomImage extends Vue {
  // 传入图片数据
  @Prop({ required: true })
  private path!: string | Array<string>
  // 传入显示
  @Prop({ default: false, required: true })
  private isVisible!: boolean
  private toolIcon: Array<string> = ['icon-rotateright', 'icon-rotateleft', 'icon-download', 'icon-suoxiao', 'icon-fangda', 'icon-emoji']
  private isSuccess: boolean = true
  private isError: boolean = false
  private currentPathIndex: number = 0

  // 设置当前显示图片属性
  get setImagePath() {
    return typeof this.path === 'string' ? this.path : this.path[this.currentPathIndex]
  }

  // 设置next按钮是否显示
  get isNextShow() {
    return typeof this.path !== 'string' && this.path.length > 1
  }

  // 绑定工具栏相应方法
  private bindBlowClick(id: number): void{
    let imgDom: any = document.getElementById('zoomImage')
    let DomArr: Array<string> = imgDom.style.transform.split(' ')
    let rotateSize: number = 0
    let scaleSize: number = 1
    if (DomArr.length >= 2) {
      scaleSize = Number(DomArr[0].replace(/[^\d|^.]/g, ''))
      rotateSize = Number(DomArr[1].replace(/[^\d|^-]/g, ''))
    }
    switch (id) {
      case 0:
        // 顺时针旋转
        imgDom.style['transform'] = `scale(${scaleSize}) rotate(${(rotateSize === 360 ? 0 : rotateSize) + 90}deg)`
        break
      case 1:
        // 逆时针旋转
        imgDom.style['transform'] = `scale(${scaleSize}) rotate(${(rotateSize === 360 ? 0 : rotateSize) - 90}deg)`
        break
      case 2:
        // 保存/下载图片
        const aDom: HTMLAnchorElement = document.createElement('a')
        const aDomEvent: MouseEvent = new MouseEvent('click')
        aDom.download = 'download'
        aDom.href = this.path[this.currentPathIndex]
        aDom.dispatchEvent(aDomEvent)
        break
      case 3:
        // 缩小
        console.log(scaleSize)
        imgDom.style['transform'] = `scale(${scaleSize - 0.1}) rotate(${rotateSize})`
        break
      case 4:
        // 放大
        imgDom.style['transform'] = `scale(${scaleSize + 0.1}) rotate(${rotateSize}deg)`
        break
      case 5:
        // 放大
        imgDom.style['transform'] = `scale(1) rotate(0deg)`
        break
    }
  }

  // 侦听图片是否加载完成
  private imgLoad(state: string): void {
    if (state === 'success') {
      // success
      this.isSuccess = false
    } else {
      this.isSuccess = false
      this.isError = true
    }
  }

  // 下一张
  private toNext(): void {
    const pathLength: number = this.path.length
    this.currentPathIndex === pathLength - 1 ? this.currentPathIndex = 0 : this.currentPathIndex++
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.d.scss';
  .zoom-image-container{
    @include position($position: fixed, $top: 0, $left: 0);
    @include zIndex($zindex: 2000);
    @include flex($justify: center, $align: center);
    // background: rgba(0, 0, 0, 0.8);
    background: black;
    height: 100vh;
    width: 100vw;
    .leave-last{
      @include position($position: absolute, $left: rem(50px), $top: 50%);
    }
    .leave-next{
      @include position($position: absolute, $right: rem(50px), $top: 50%);
    }
    .default-btn{
      @include radius(50%);
      font-size: rem(25px);
      padding: rem(15px);
      font-weight: bold;
      color: $bg;
      background: #222222;
      cursor: pointer;
      &:hover{
        color: $main;
      }
    }
    .close-zoom{
      @include position($position: absolute, $right: rem(50px), $top: rem(50px));
    }
    .img-wrapper {
      #zoomImage{
        // defalut css
        transform: rotate(0deg) scale(1);
      }
      .error-view{
        width: rem(400px);
        height: rem(400px);
        background: $bg;
        cursor: pointer;
        @include flex($justify: center, $align: center, $direction: column);
        p{
          font-size: rem(20px);
        }
      }
    }
    .tool-wrapper{
      @include position($position: absolute, $bottom: rem(20px), $left: 50%);
      transform: translate(-50%);
      @include flex();
      .tool-item{
        background: #222222;
        &__icon{
          font-size: rem(30px);
          color: $bg;
          cursor: pointer;
          padding: rem(10px);
          &:hover{
            color: $main;
          }
        }
      }
    }
  }
</style>
