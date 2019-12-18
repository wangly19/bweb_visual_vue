<style lang="scss">
  .home {
    height: 100%;
    .h-layout {
      height: 100%;
      .h-layout-sider {
        .h-menu {
          height: 100%;
        }
      }
    }
  }
</style>
<template>
  <div class="home">
    <h-layout>
      <h-sider>
        <h-menu :datas="data" @select="select" ref="menu"></h-menu>
      </h-sider>
      <h-layout>
        <h-header>
          <w-header></w-header>
        </h-header>
        <h-content>
          <router-view></router-view>
        </h-content>
        <h-footer>Footer</h-footer>
      </h-layout>
    </h-layout>
  </div>
</template>
<script>
  import Header from './Layout/Header'
  export default {
    name: 'home',
    data() {
      return {
        activeAll: false,
        data: [{
            title: '首页',
            key: 'home',
            icon: 'h-icon-home'
          },
          {
            title: '关于',
            key: 'abouts',
            icon: 'h-icon-info'
          }
        ]
      }
    },
    methods: {
      select(data) {
        this.$router.push({
          name: data.key
        })
      }
    },
    watch: {
      $route() {
        console.log(this.$route.name)
        if (this.$route.name) {
          this.$refs.menu.select(this.$route.name)
        }
        console.log(this.$router)
      }
    },
    components: {
      'w-header': Header
    }
  }

</script>
