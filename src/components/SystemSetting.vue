<template>
  <div class="systemconfig-container">
    <h3>系统设置</h3>
    <ul class="setting-wrapper">
      <li class="color-item">
        <p>主题色</p>
        <ul class="colors">
          <li v-for="item in 5" :key="item">
            <Tooltip content="红色" placement="top">
              <p></p>
            </Tooltip>
          </li>
        </ul>
        <Divider />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SystemSetting extends Vue {
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
.systemconfig-container{
  .setting-wrapper{
    .color-item{
      margin-top: rem(10px);
      .colors{
        @include flex($justify: flex-start);
        padding: rem(10px) 0;
        li{
          margin-right: rem(15px);
          padding: rem(5px);
          p{
            @include radius(2px);
            background: red;
            width: rem(30px);
            height: rem(30px);
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
