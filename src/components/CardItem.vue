<template>
  <Card class="card-body" :style="background" :bordered="false">
    <div class="w-flex w-m-left-1 w-m-right-1">
      <div style="margin: auto">
        <Icon :type="database.icon" size="40" class="icon-bg w-co-white" />
      </div>
      <div class="box w-width w-m-left-1 w-aign-left w-align-left w-co-dark">
        <p class="w-co-white">{{database.number}}<span>人</span></p>
        <Progress :percent="database.PID || 100" hide-info :stroke-color="['#108ee9', '#87d068']"/>
        <p class="w-ft-2 w-co-white">{{database.info}}</p>
      </div>
    </div>
  </Card>
</template>
<script>
  export default {
      props: {
          // 背景颜色
          background: {
              type: Object
          },
          // 数据
          database: {
              type: Object
          }
      },
      computed: {
      },
      mounted() {
      },
      created() {
      }
  }

</script>
<style lang="scss" scoped>
.card-body{
    .icon-bg{
        border-radius: 50%;
        background: rgba(0, 0, 0, .3);
    }
}
</style>
