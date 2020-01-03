<template>
  <div class="tab-device">
    <div class="tree-list">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treeData: [
        {
          title: '青山湖区',
          loading: false,
          children: []
        },
        {
          title: '西湖区',
          loading: false,
          children: []
        },
        {
          title: '红谷滩区',
          loading: false,
          children: []
        }
      ]
    }
  },
  methods: {
    asyncData(item, callback) {
      console.log(item, callback)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
</style>
