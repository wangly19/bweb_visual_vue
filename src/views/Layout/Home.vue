<template>
  <div class="main w-height">
    <Drawer title="应用设置面板" :closable="false" :value="true">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
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
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
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
        logoHieght: 53
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
