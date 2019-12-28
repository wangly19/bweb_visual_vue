<template>
  <div class="card-list w-bg-white w-align-left">
    <div class="title">
      <i class="iconfont icon-weixiu w-ft-6 w-p-left-1 w-p-right-0 w-co-blue-2"></i>
      <div>
        <span class="w-co-dark w-ft-2 w-co-dark">提示</span>
        <h5 class="w-ft-3">故障排查率</h5>
      </div>
    </div>
    <div class="body">
      <slot name="card-body"></slot>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.card-list{
   .title{
     @include flex($justify: flex-start);
   }
}
</style>
