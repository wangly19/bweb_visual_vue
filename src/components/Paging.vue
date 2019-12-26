<template>
  <div class="page-wrap">
    <div class="total-bar">
      <p class="w-p-1">当前共有 {{total}} 条数据 第{{ currentPage * limit - limit + 1 }} ~ {{ pageNumber(currentPage * limit, total) }}条</p>
    </div>
    <Page :total="total" show-elevator show-sizer @on-change="onCurrentPage" @on-page-size-change="onPageSize" :page-size="limit" :current.sync="currentPage" class="w-m-2"/>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    // 计算分页组件数据信息
    pageNumber: () => {
      return (pagesNum, total) => {
        return pagesNum > total ? pagesNum - (pagesNum - total) : pagesNum
      }
    }
  },
  methods: {
    // 抛出选中的当前页面
    onCurrentPage(data) {
      console.log(data, this.limit)
      this.$emit('castCurrent', data)
    },
    // 抛出选中的页面数据数量
    onPageSize(data) {
      this.$emit('castPageSize', data)
    }
  },
  watch: {
    currentPage(val) {
      if (typeof val === 'number') {
          this.currentPage = val
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.page-wrap{
  @include flex();
}
</style>
