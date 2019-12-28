<template>
  <Menu theme="light" width="auto" class="menu-item" :class="isCollapse && 'collapsed-menu'" :accordion="true" style="height: calc(100% - 53px);">
    <div v-for="(item,index) in router" :key="index">
      <div class="is-collap" v-if="!isCollapse">
        <Submenu v-if="item.children && item.children.length > 1" :name="item.path" :to="item.path">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{item.name}}
          </template>
          <div v-for="(child, childIndex) in item.children" :key="childIndex">
            <Submenu v-if="child.children" :name="child.path" :to="child.path">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                {{child.name}}
              </template>
            </Submenu>
            <div v-else>
              <MenuItem :name="childIndex" :to="child.path">
              <Icon type="md-document" />
              {{child.name}}
              </MenuItem>
            </div>
          </div>
        </Submenu>
        <MenuItem v-else :name="item.path" v-show="!item.hidden" :to="item.path">
        <Icon type="md-document" />
        {{item.name}}
        </MenuItem>
      </div>
      <div v-else>
        <Dropdown v-if="item.children && item.children.length > 1" placement="right-start">
          <MenuItem :name="index">
          <Icon custom="iconfont icon-integral" />
          </MenuItem>
          <DropdownMenu slot="list">
            <DropdownItem v-for="(child, childIndex) in item.children" :key="childIndex">
              <MenuItem :name="child.path" :to="child.path">
              <Icon type="md-document" />
              {{child.name}}
              </MenuItem>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <MenuItem v-else :name="item.path" v-show="!item.hidden" :to="item">
        <Icon type="md-document" />
        </MenuItem>
      </div>
    </div>
  </Menu>
</template>
<script>
  export default {
    props: {
      router: {
        type: Array,
        default: null
      },
      isCollapse: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss">
  .menu-item {
    border: none;
    span {
      display: inline-block;
      overflow: hidden;
      width: 4.3125rem /* 69/16 */;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
    }

    &.span:hover {
      color: red;
    }

    i {
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 1rem;
    }
  }

  .collapsed-menu {
    span {
      width: 0px;
      transition: width .2s ease;
    }

    i {
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 1.375rem /* 22/16 */;
    }
  }
</style>
