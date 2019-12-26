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
            <Content class="w-m-1 w-height">
              <router-view></router-view>
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
