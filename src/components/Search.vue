<template>
  <Form :value="searchData" :label-colon="true">
    <FormItem v-for="(item, index) in config" :key="index" :label="item.label">
      <Select v-model="searchData[item.key]" v-if="item.isSelect" :placeholder="item.info">
        <Option v-for="prop in item.options" :value="prop.value" :key="prop.value">{{ prop.label }}</Option>
      </Select>
      <DatePicker v-else-if="item.isDateTime" v-model="searchData[item.key]" type="datetime" :placeholder="item.info"></DatePicker>
      <Cascader :data="item.options" v-model="searchData[item.key]" v-else-if="item.isUnite" :placeholder="item.info"></Cascader>
      <Input v-model="searchData[item.key]" v-else :placeholder="item.info"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click.stop="handleSearch(searchData)" :loading="isSearch" :disabled="isSearch">立即搜索</Button>
      <Button style="margin-left: 10px" @click.stop="handleReset">重置</Button>
    </FormItem>
  </Form>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class Search extends Vue {
  @Prop({ required: true }) config:any
  private searchData: object = {}
  private isSearch:boolean = false
  // Emit搜索列表
  @Emit('onSearchData')
  handleSearch(data: object):object {
    this.isSearch = true
    setTimeout(() => {
      this.isSearch = false
    }, 1000)
    return this.searchData
  }
  handleReset(): void{
    this.searchData = {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
</style>
