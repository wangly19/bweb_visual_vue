<style lang="scss">
  .menu-item {
    span {
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
    }
    i {
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
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
      font-size: 22px;
    }
  }
</style>
<template>
  <div class="main w-height">
    <Layout class="w-height">
      <Layout>
        <Sider hide-trigger class="w-bg-white" collapsible v-model="isCollapse" :collapsed-width="78">
          <Menu theme="light" width="auto" :class="`w-height menu-item ${isCollapse ? 'collapsed-menu':''}`" :accordion="true">
            <div v-for="(item,index) in router" :key="index">
              <div class="is-collap" v-if="!isCollapse">
                <Submenu v-if="item.children && item.children.length > 1" :name="item.path">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {{item.name}}
                  </template>
                  <div v-for="(child, childIndex) in item.children" :key="childIndex">
                    <Submenu v-if="child.children" :name="child.path">
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
        </Sider>
        <Layout>
          <w-header></w-header>
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
  export default {
    components: {
      'w-header': Header
    },
    computed: {
      ...mapGetters(['router', 'isCollapse'])
    }
  }

</script>
