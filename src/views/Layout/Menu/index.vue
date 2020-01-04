<template>
  <Menu theme="light" width="auto" class="menu-item w-height" :class="isCollapse ? 'collapsed-menu w-align-center' : 'w-align-left'" :accordion="true" :active-name="$route.name" :open-names="[$route.meta.parent]">
    <div v-for="(item, index) in router" :key="index">
      <!-- 单个模块 -->
      <MenuItem v-if="item.children && item.children.length <= 1 && !item.hidden && !isCollapse" :name="item.name" :to="item.path"
      :class="$route.name === item.children[0].name && 'ivu-menu-item-active ivu-menu-item-selected'">
        <i class="iconfont ivh-icon w-ft-4" :class="item.children[0].meta.icon"></i>
        <span v-show="!isCollapse">{{item.children[0].meta.title}}</span>
      </MenuItem>
      <!-- 子模块 -->
      <Submenu v-else-if="!item.hidden && !isCollapse" :name="item.name">
        <template slot="title">
          <span>
            <i class="iconfont ivh-icon w-ft-4" :class="item.meta.icon"></i>
            {{item.meta.title}}
          </span>
        </template>
        <MenuItem v-for="child in item.children" :key="child.name" :name="child.name" :to="`${item.path}/${child.path}`">{{child.meta.title}}</MenuItem>
      </Submenu>
      <Dropdown trigger="click" v-if="isCollapse && !item.hidden" placement="right">
          <MenuItem :name="item.name" :to="item.path"
          :class="$route.name === item.children[0].name && 'ivu-menu-item-active ivu-menu-item-selected'">
            <i class="iconfont ivh-icon" :class="item.children[0].meta.icon"></i>
          </MenuItem>
        <DropdownMenu slot="list" v-if="item.children && item.children.length > 1">
          <DropdownItem>
            <MenuItem v-for="child in item.children" :key="child.name" :name="child.name" :to="`${item.path}/${child.path}`">{{child.meta.title}}</MenuItem>
          </DropdownItem>
        </DropdownMenu>
    </Dropdown>
    </div>
  </Menu>
</template>
<script>
  export default {
    props: {
      router: {
        type: Array,
        Default: []
      },
      isCollapse: {
        type: Boolean
      }
    }
  }
</script>
<style lang="scss">
@import '@/assets/css/mixins.scss';
  .collapsed-menu {
    i {
      font-size: REM(25px);
    }
  }
</style>
