<template>
<div class="app-container">
  <div class="side-wrapper" :style="isShowSide && { width: '300px' }">
    <i class="fas fa-cog on-off" @click="isShowSide = !isShowSide" :style="isShowSide && { 'margin-left': 0 }"/>
    <div class="body-container">
      <SystemSetting/>
    </div>
  </div>
  <HeaderView class="header-wrapper"></HeaderView>
  <transition>
    <Toolbar class="tool-view" v-show="isShowToolBar"/>
  </transition>
  <div class="route-wrapper">
    <router-view></router-view>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import HeaderView from './Header/index.vue'
import Toolbar from '@/components/Toolbar.vue'
import SystemSetting from '@/components/SystemSetting.vue'
@Component({
  name: 'dash',
  components: {
    HeaderView,
    Toolbar,
    SystemSetting
  }
})
export default class Layout extends Vue {
  @Getter('isShowToolBar') isShowToolBar!: boolean
  private isShowSide: boolean = false
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
.app-container{
  @include flex($direction: column);
  height: 100%;
  width: 100%;
  .side-wrapper{
    @include position($position: fixed, $top: 0, $right: 0);
    @include zIndex($zindex: 100);
    height: 100%;
    width: 0;
    background: $bg;
    transition: width .7s ease;
    .on-off{
      @include position($position: absolute, $top: 50%, $left: rem(-50px));
      @include radius(5px);
      transform: translate(0 -50%);
      background: $bg;
      font-size: rem(30px);
      padding: rem(10px);
      cursor: pointer;
      margin-left: rem(10px);
      transition: margin .5s ease;
      @include zIndex($zindex: 2);
      &:hover{
        color: $main;
        margin-left: 0;
      }
    }
    .body-container{
      padding: rem(20px);
      &__title{
        line-height: rem(40px);
      }
    }
  }
  .header-wrapper{
    width: 100%;
  }
  .tool-wrapper{
    width: 100%;
  }
  .route-wrapper{
    width: 100%;
    background: $bg;
    flex: 1;
  }
  .v-enter{
    opacity: 0;
    transform: translateY(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateY(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all .7s ease;
  }
}
</style>
