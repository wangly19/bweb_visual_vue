<template>
  <Header class="app-header" :style="`background: ${color};`">
    <Modal v-model="isShowUpdateUserInfo" fullscreen title="Fullscreen Modal">
        <div>This is a fullscreen modal</div>
    </Modal>
    <div class="logo">
    </div>
    <MenuView></MenuView>
    <ul class="naviction">
      <li class="naviction__item"
      @click.stop="onIconListClick(0)">
        <i class="fas naviction-icon fa-layer-group" :style="isShowToolBar ? { color: 'white' } : {}"></i>
      </li>
      <li class="naviction__item"
      @click.stop="onIconListClick(1)">
        <i class="fas naviction-icon fa-atom"></i>
      </li>
      <li class="naviction__item"
      @click.stop="onIconListClick(2)">
        <a href="https://www.github.com/wangly19">
          <i class="fab naviction-icon fa-github"></i>
        </a>
      </li>
      <li class="naviction__item">
        <Dropdown trigger="click" class="naviction__tabs">
          <Badge dot style="height: auto; line-height: 0;">
            <i class="fas naviction-icon fa-bell" ></i>
          </Badge>
            <template slot="list">
              <div>
                <Tabs value="name1">
                    <TabPane label="通知(0)" name="name1">标签一的内容</TabPane>
                    <TabPane label="系统(0)" name="name2">标签二的内容</TabPane>
                </Tabs>
              </div>
            </template>
        </Dropdown>
      </li>
      <li class="naviction__item">
        <Dropdown trigger="click" @on-click="dropClickEvents">
          <Avatar :src="avatar" class="is-mouse"/>
          <DropdownMenu slot="list">
              <DropdownItem :name="0">个人资料</DropdownItem>
              <DropdownItem :name="1">退出登录</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
    </ul>
  </Header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuView from '@/layout/Menu/index.vue'
import { Getter, Action, Mutation } from 'vuex-class'
import { cssExpand } from '@/tools/utils'

@Component({
  name: 'headerView',
  components: {
    MenuView
  }
})
export default class HeaderNav extends Vue {
  @Getter('avatar') avatar!: string
  @Action('logout') logout: any
  @Getter('isShowToolBar') isShowToolBar!: boolean
  @Mutation('setShowToolBar') setShowToolBar!: any
  @Getter('colorTheme') color!: string

  private isShowUpdateUserInfo: boolean = false
  private iconList: Array<string> = ['fa-angle-double-down', 'fa-atom', 'fa-github', 'fa-bell']

  // 下拉item点击事件
  private async dropClickEvents(name: number) {
    switch (name) {
      case 0:
        this.isShowUpdateUserInfo = true
        break
      case 1:
        const bool = await this.logout()
        bool ? this.$Message.success('退出成功') : this.$Message.success('退出失败，检查网络')
        this.$router.replace({ path: '.login' })
        break
    }
  }

  // icon标签点击事件
  private onIconListClick(index: number): void {
    switch (index) {
      case 0:
        this.setShowToolBar(!this.isShowToolBar)
        break
      case 1:
        this.$Message.error('React版本正在奔跑中...')
        break
      default:
        this.$Message.error('正在完善中....')
    }
  }

  private created() {
    console.log(this.avatar)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
  .app-header{
    @include flex($align: center, $justify: space-between);
    flex: 0 0 rem(64px);
    @include zIndex($zindex: 2);
    .logo{
      @include radius(3px);
      width: rem(200px);
      height: rem(30px);
      background: rgba(0, 0, 0, 0.2);
      @include flex($justify: flex-start, $align: flex-start);
    }
    .naviction {
      @include flex($align: center);
      &__item{
        padding: 0 rem(10px) 0 rem(10px);
        font-size: rem(20px);
      }
      .naviction__tabs {
      }
      .naviction-icon {
        color: $other;
        font-size: rem(20px);
        cursor: pointer;
        &:hover{
          color: $white;
        }
      }
    }
  }
</style>
