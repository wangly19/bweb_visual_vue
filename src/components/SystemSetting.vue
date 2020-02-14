<template>
  <div class="systemconfig-container">
    <h3>系统设置</h3>
    <ul class="setting-wrapper">
      <li class="color-item">
        <p>主题色</p>
        <ul class="colors">
          <li v-for="(item, key) in colors" :key="key" @click="setTheme(item[1])">
            <Tooltip :content="item[0]" placement="top">
              <p :style="`background: ${item[1]}`">
                <span v-show="item[1] === color"></span>
              </p>
            </Tooltip>
          </li>
        </ul>
      </li>
    </ul>
    <CellGroup>
      <Cell title="当前版本" extra="1.0.5" />
      <Cell title="开发者" extra="wangly" />
      <Cell title="最后更新时间" extra="2020年2月14日" />
      <Cell title="查看更新内容" to="http://www.github.com/wangly" />
      <Cell title="开启搜索框">
        <i-switch v-model="switchValue1" slot="extra" />
      </Cell>
      <Cell title="开启工具栏">
        <i-switch v-model="switchValue2" slot="extra" />
      </Cell>
      <Cell title="隐藏LOGO">
        <i-switch v-model="switchValue3" slot="extra" />
      </Cell>
    </CellGroup>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Mutation, Getter } from 'vuex-class'

@Component
export default class SystemSetting extends Vue {
  @Mutation('setColorTheme') setColorTheme!: any
  @Getter('colorTheme') color!: string

  private switchValue1: boolean = false
  private switchValue2: boolean = false
  private switchValue3: boolean = false
  private colors: Map<string, string> = new Map([
    ['优雅灰', '#515a6e'],
    ['水鸭青', '#00796B'],
    ['葡萄蓝', '#303F9F'],
    ['基佬紫', '#512DA8'],
    ['杨柳绿', '#388E3C'],
    ['少女粉', '#fb7299']
  ])

  private setTheme(color: string): void{
    this.setColorTheme(color)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
.systemconfig-container{
  h3{
    padding-left: rem(16px);
  }
  .setting-wrapper{
    .color-item{
      padding: rem(16px);
      .colors{
        @include flex($justify: flex-start);
        padding: rem(10px) 0;
        border-bottom: 1.5px solid $other;
        li{
          margin-right: rem(15px);
          padding: rem(5px);
          p{
            @include radius(2px);
            background: #515a6e;
            width: rem(30px);
            height: rem(30px);
            cursor: pointer;
            position: relative;
            @include flex($justify: center, $align: center);
            span{
              background: $bg;
              padding: rem(3px);
            @include radius(1px);
            }
          }
        }
      }
    }
  }
}
</style>
