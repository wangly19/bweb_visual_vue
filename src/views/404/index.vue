<template>
  <div class="error-container w-align-center">
    <div class="error">
      <i class="iconfont icon-404"></i>
      <h1>4 0 4</h1>
    </div>
    <div class="back-button">
      <Button type="primary" size="large">重新请求</Button>
      <Button type="warning" size="large">返回首页</Button>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.error-container{
  .error{
    i{
      font-size: 12rem;
      font-weight: bold;
    }
    h1{
      font-size: 7rem;
    }
  }
  .back-button{
  }
}
</style>
