<template>
<div class="empty-container">
  <Icon type="ios-leaf" class="empty-icon"/>
  <span class="empty-text">{{text}}</span>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Empty extends Vue {
  @Prop({
    type: String,
    required: false,
    default: '还未拥有数据，尝试添加一下吧'
  }) text!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
.empty-container{
  @include flex($direction: column, $align: center);
  padding:rem(200px) 0 rem(200px) 0;
  .empty-icon{
    font-size: rem(60px);
  }
  .empty-text{
    font-size: $size2;
  }
}
</style>
