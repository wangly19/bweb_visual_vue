<template>
  <div class="task-container w-align-left">
    <ul class="flex">
      <li v-for="(item, index) in taskList" :key="index">
        <Tag type="dot" closable color="success" @on-close="close">{{item}}</Tag>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        taskList: [{
          path: ''
        }]
      }
    },
    methods: {
      close(event, name) {
        console.log(event, name)
        this.taskList.pop()
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
