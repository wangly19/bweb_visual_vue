<template>
  <div class="screen-wrapper">
    <ul>
      <li v-for="(item, index) in screenConfig" :key="index" class="w-align-left w-m-right-0">
        <template v-if="item.isCascader">
          <Cascader :data="item.data" v-model="searchData[screenConfig[index].name]" :placeholder="item.info"/>
        </template>
        <template v-if="item.isSelect">
          <Select v-model="searchData[screenConfig[index].name]" type="text" style="width: 150px;" :placeholder="item.info">
            <Option v-for="item in item.data" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </template>
        <template v-else-if="item.Date">
          <DatePicker type="date" :placeholder="item.info" v-model="searchData[screenConfig[index].name]"></DatePicker>
        </template>
        <template v-else>
          <Input :placeholder="item.info" v-model="searchData[screenConfig[index].name]"></Input>
        </template>
      </li>
      <div class="search-btn">
        <Button type="success" class="w-m-right-0" @click="bindSearch">搜索</Button>
        <Button type="error" @click="bindEmpty">清空</Button>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    screenConfig: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      searchData: {}
    }
  },
  methods: {
    bindSearch() {
      this.$emit('onSearchData', this.searchData)
    },
    bindEmpty() {
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.screen-wrapper ul{
  @include flex($justify: flex-start);
}
</style>
