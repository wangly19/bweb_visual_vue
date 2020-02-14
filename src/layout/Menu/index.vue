<template>
<Menu mode="horizontal" theme="dark" :active-name="$route.name" @on-select="onMenuClick">
  <template v-for="(item) in getCurrentRoutes">
    <MenuItem v-if="!item.meta.hidden && item.children.length < 2" :name="item.children[0].name" :to="item.children[0].path">
      <i class="fas" :class="item.children[0].meta.icon"></i>
      <span>{{item.children[0].meta.title}}</span>
    </MenuItem>
    <Submenu v-if="!item.meta.hidden && item.children && item.children.length > 1" :name="item.name">
      <template slot="title">
        <i class="fas" :class="item.meta.icon"></i>
        {{item.meta.title}}
      </template>
      <template v-for="(child) in item.children">
        <MenuItem :name="child.name" :to="child.path">
          <i class="fas" :class="child.meta.icon"></i>
          <span>{{child.meta.title}}</span>
        </MenuItem>
      </template>
    </Submenu>
  </template>
</Menu>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { RouteConfig } from 'vue-router'

@Component({
  name: 'headerView'
})
export default class HeaderNav extends Vue {
  @Getter('currentRoutes') getCurrentRoutes!: RouteConfig[]
  private onMenuClick(name: string) {
    console.log(name)
  }
  private created() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
</style>
