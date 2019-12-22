<template>
  <div class="main w-height">
    <Layout class="w-height">
      <Layout>
        <!-- 侧边栏选项卡 -->
        <Sider hide-trigger class="w-bg-white" collapsible v-model="isCollapse" :collapsed-width="78">
          <w-logo :isCollapse="isCollapse"></w-logo>
          <w-slide :router="router" :isCollapse="isCollapse"></w-slide>
        </Sider>
        <Layout style="overflow: hidden;">
          <w-header :username="name" :style="{position: 'fixed'}"></w-header>
          <div class="container w-height w-m-top-6">
            <Content class="w-bg-white w-height w-m-0">
              <router-view></router-view>
            </Content>
          </div>
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
    components: {
      'w-header': Header,
      'w-slide': SlideMenu,
      'w-logo': LOGO
    },
    computed: {
      ...mapGetters(['router', 'isCollapse', 'name'])
    }
  }

</script>
