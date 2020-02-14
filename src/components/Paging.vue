<template>
  <div class="pageing-container">
    <Page :total="total" show-elevator :current="currentPage" :page-size="limit" show-sizer show-total
    @on-change="handlePage" @on-page-size-change="handleLimit"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class PagingView extends Vue {
  @Prop({ required: true }) total!:number

  private limit: number = 10
  private currentPage: number = 1

  // pagea回调
  @Emit('onPage')
  private handlePage(page: number): number {
    return page
  }

  // limit回调
  @Emit('onLimit')
  private handleLimit(limit: number): number {
    return limit
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
.pageing-container{
  @include position($position: absolute, $bottom: 0);
  padding: 0 rem(10px) 0 rem(10px);
}
</style>
