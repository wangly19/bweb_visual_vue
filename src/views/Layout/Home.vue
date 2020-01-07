<template>
  <div class="main w-height">
    <Layout class="w-height">
      <Layout>
        <!-- 侧边栏选项卡 -->
        <Sider hide-trigger class="w-bg-white" collapsible v-model="isCollapse" :collapsed-width="78">
          <w-logo :isCollapse="isCollapse" ref="logo"></w-logo>
          <w-slide :router="router" :isCollapse="isCollapse"></w-slide>
        </Sider>
        <Layout class="w-height">
          <w-header :username="name"></w-header>
          <Content class="w-p-1 w-height scroll">
            <transition :name="transitionName">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  import Header from './Header'
  import SlideMenu from './Menu'
  import LOGO from './Menu/Logo'
  export default {
    data() {
      return {
        logoHieght: 53,
        transitionName: 'slide-left'
      }
    },
    components: {
      'w-header': Header,
      'w-slide': SlideMenu,
      'w-logo': LOGO
    },
    computed: {
      ...mapGetters(['router', 'isCollapse', 'name'])
    },
    mounted() {
      this.$nextTick(() => {
        this.logoHieght = this.$refs.logo.$el.offsetHeight
      })
    }
  }
</script>
<style lang="scss" scoped>
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}
</style>
