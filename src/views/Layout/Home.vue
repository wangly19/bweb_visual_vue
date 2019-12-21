<template>
  <div class="main w-height">
    <Layout class="w-height">
      <Layout>
        <!-- 侧边栏选项卡 -->
        <Sider hide-trigger class="w-bg-white" collapsible v-model="isCollapse" :collapsed-width="78">
          <w-logo :isCollapse="isCollapse"></w-logo>
          <w-slide :router="router" :isCollapse="isCollapse"></w-slide>
        </Sider>
        <Layout>
          <w-header :username="name"></w-header>
          <div class="container w-m-0 w-height">
            <Content class="w-bg-white w-height">
              Content
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
