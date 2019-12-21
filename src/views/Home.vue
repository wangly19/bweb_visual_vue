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
        <h-menu :datas="router" @select="select" ref="menu" :option="{titleName: 'name', keyName: 'name'}"></h-menu>
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
  import {
    mapGetters
  } from 'vuex'
  import Header from './Layout/Header'
  export default {
    name: 'home',
    data() {
      return {
        activeAll: false
      }
    },
    methods: {
      select(data) {
        console.log(this.$routes)
        this.$router.push({
          path: data.path
        })
      }
    },
    components: {
      'w-header': Header
    },
    watch: {
      $route() {
        console.log(this.$route)
      }
    },
    computed: {
      ...mapGetters(['router'])
    }
  }

</script>
