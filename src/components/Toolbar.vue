<template>
<div class="tool-container">
  <div class="title-box">
    <i class="fas title-box__icon" :class="currentRoutesList.meta.icon"></i>
    <div class=title-box__info>
      <h3>{{currentRoutesList.meta.title}}</h3>
      <h6>当前访问用户: {{$store.getters.name}}</h6>
    </div>
  </div>
  <div class="tag-list">
    <p>2019/10一日</p>
  </div>
  <ul class="route-list">
    <router-link tag="li" :to="item.path" :class="item.name === $route.name && 'is-active'" v-for="(item, index) in currentRoutesList.children" :key="index">
      <i class="fas" :class="item.meta.icon"></i>
      {{item.meta.title}}
    </router-link>
  </ul>
</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import MenuView from '@/layout/Menu/index.vue'
import { Getter } from 'vuex-class'
import { RouteConfig } from 'vue-router'

@Component
export default class Toolbar extends Vue {
  private currentRoutesList!: RouteConfig
  @Getter('currentRoutes') currentRoutes!: RouteConfig[]
  private getRouteList(): RouteConfig {
    // 获取路由的列表
    const route: RouteConfig = this.$route
    let result: RouteConfig = route
    this.currentRoutes.forEach((item: RouteConfig, index: number) => {
      if (item.name === route.name) {
        result = item
      } else {
        const children: any = item.children ? item.children : []
        children.forEach((child: any) => {
          if (child.name === route.name) {
            result = item
          }
        })
      }
    })
    return result
  }
  private created() {
    this.currentRoutesList = this.getRouteList()
  }
  @Watch('$route', { deep: true })
  onRoute(val: any, oldVal: any): void {
    if (val.name !== oldVal.name) this.currentRoutesList = this.getRouteList()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
  .tool-container{
    @include flex($align: center, $justify: space-between);
    width: 100%;
    padding-left: rem(50px);
    padding-right: rem(50px);
    height: rem(110px);
    flex: 0 0 rem(110px);
    z-index: 1;
    background: $white;
    position: relative;
    .title-box{
      @include flex($align: center);
      &__icon{
        @include radius(5px);
        font-size: rem(30px);
        background: $tool;
        color: $white;
        padding: rem(10px);
        box-shadow: 0 10px 50px rgba(45,140,240,.4);
        margin-right: $size1;
      }
      &__info{
        h6{
          color: $other;
        }
      }
    }
    .tag-list{
      @include position($position: absolute, $right: rem(50px), $top: 0);
      @include flex();
    }
    .route-list{
      align-self: flex-end;
      @include flex($justify: flex-end);
      li{
        height: rem(50px);
        padding-left: rem(20px);
        padding-right: rem(20px);
        line-height: rem(50px);
        text-align: center;
        cursor: pointer;
      }
      .is-active{
        background: $bg;
        border-top: $tool 2px solid;
      }
    }
  }
</style>
