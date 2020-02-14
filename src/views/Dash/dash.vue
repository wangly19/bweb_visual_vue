<template>
  <div class="dash-container">
    <div class="container">
      <Card class="charts-all">
        <div class="title-tool">
          <h3>污水处理量</h3>
          <RadioGroup type="button">
            <Radio label="北京"></Radio>
            <Radio label="上海"></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
          </RadioGroup>
        </div>
        <div id="charts-body">
          <v-chart :forceFit="true" :height="oneConfig.height" :data="oneConfig.data" :scale="oneConfig.scale" :padding="oneConfig.padding">
            <v-tooltip />
            <v-axis />
            <v-legend />
            <v-smooth-line position="month*temperature" color="city" shape="smooth" />
            <v-point position="month*temperature" color="city" shape="circle" />
          </v-chart>
        </div>
      </Card>
      <Card class="charts-all">
        <div class="title-tool">
          <h3>温度阈值预测</h3>
          <RadioGroup type="button" @on-change="oCRadioChang">
            <Radio label="一周"></Radio>
            <Radio label="本月"></Radio>
            <Radio label="本季"></Radio>
            <Radio label="本年"></Radio>
          </RadioGroup>
        </div>
        <div id="charts-body">
          <v-chart :forceFit="true" :height="twoConfig.height" :data="twoConfig.data" :padding="twoConfig.padding">
            <v-tooltip />
            <v-axis />
            <v-legend />
            <v-bar position="月份*月均降雨量" color="name" :adjust="twoConfig.adjust" />
          </v-chart>
        </div>
      </Card>
      <Card class="charts-all">
        <div class="title-tool">
          <h3>设备报警及其调控</h3>
          <RadioGroup type="button">
            <Radio label="一周"></Radio>
            <Radio label="本月"></Radio>
            <Radio label="本季"></Radio>
            <Radio label="本年"></Radio>
          </RadioGroup>
        </div>
        <div id="charts-body" style="width: 100%; display: flex;">
          <div style="flex: 1;">
            <v-chart :height="threePieonfig.height" :forceFit="true" :data="threePieonfig.data" :scale="threePieonfig.scale" :padding="threePieonfig.padding" class="pie-charts">
              <v-tooltip :showTitle="false" dataKey="item*percent" />
              <v-axis />
              <v-pie position="percent" color="item" :v-style="threePieonfig.pieStyle" :label="threePieonfig.labelConfig" />
              <v-coord type="theta" />
            </v-chart>
          </div>
          <div style="flex: 1;">
            <v-chart :height="threePieonfig.height" :forceFit="true" :data="threePieonfig.data" :scale="threePieonfig.scale" :padding="threePieonfig.padding" class="pie-charts">
              <v-tooltip :showTitle="false" dataKey="item*percent" />
              <v-axis />
              <v-pie position="percent" color="item" :v-style="threePieonfig.pieStyle" :label="threePieonfig.labelConfig" />
              <v-coord type="theta" />
            </v-chart>
          </div>
        </div>
      </Card>
      <Card class="charts-all">
        <div class="title-tool">
          <h3>净水及其排水量</h3>
          <RadioGroup type="button">
            <Radio label="北京"></Radio>
            <Radio label="上海"></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
          </RadioGroup>
        </div>
        <div id="charts-body">
          <v-chart :forceFit="true" :height="oneConfig.height" :data="oneConfig.data" :scale="oneConfig.scale" :padding="oneConfig.padding">
            <v-tooltip />
            <v-axis />
            <v-legend />
            <v-smooth-line position="month*temperature" color="city" shape="smooth" />
            <v-point position="month*temperature" color="city" shape="circle" />
          </v-chart>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const DataSet = require('@antv/data-set')

interface IBodrd{
  height: number,
  data: Array<object>,
  padding: object,
  scale: Array<object>
}
interface IPie{
  height: number,
  data: Array<object>,
  scale: Array<object>
}
@Component
export default class DashHome extends Vue {
  private char: any = null
  private line: any = null
  private pie: any = null
  private isShowSide: boolean = false
  private lineData: Array<object> = [
    { month: 'Jan', 长通一号: 7.0, 金华三号: 3.9, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Feb', 长通一号: 6.9, 金华三号: 4.2, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Mar', 长通一号: 9.5, 金华三号: 5.7, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Apr', 长通一号: 14.5, 金华三号: 8.5, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'May', 长通一号: 18.4, 金华三号: 11.9, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Jun', 长通一号: 21.5, 金华三号: 15.2, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Jul', 长通一号: 25.2, 金华三号: 17.0, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Aug', 长通一号: 26.5, 金华三号: 16.6, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Sep', 长通一号: 23.3, 金华三号: 14.2, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Oct', 长通一号: 18.3, 金华三号: 10.3, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Nov', 长通一号: 13.9, 金华三号: 6.6, 上海窗口: 4.3, 深圳蓝图: 19 },
    { month: 'Dec', 长通一号: 9.6, 金华三号: 4.8, 上海窗口: 4.3, 深圳蓝图: 19 }
  ]
  private oneConfig: IBodrd = {
    height: 200,
    data: [],
    padding: { top: 20, right: 0, bottom: 60, left: 30 },
    scale: [{ dataKey: 'month', min: 0, max: 1 }]
  }

  private twoConfig: any = {
    height: 200,
    data: [],
    padding: { top: 20, right: 0, bottom: 60, left: 30 },
    scale: [{ dataKey: 'month', min: 0, max: 1 }],
    adjust: [{
      type: 'dodge',
      marginRatio: 1 / 32
    }]
  }

  private threePieonfig: any = {
    height: 210,
    width: 400,
    scale: [{
      dataKey: 'percent',
      min: 0,
      formatter: '.0%'
    }],
    pieStyle: {
      lineWidth: 1
    },
    padding: { top: 50, right: 20, bottom: 20, left: 10 },
    labelConfig: ['percent', {
      formatter: (val: any, item: any) => {
        return item.point.item + ': ' + val
      }
    }]
  }

  private oCRadioChang() {
    console.log(arguments, '点击了')
    const data = [
      { name: '实际', 'Jan.': 18.1, 'Feb.': 28.5, 'Mar.': 39.1, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
      { name: '预测', 'Jan.': 12.2, 'Feb.': 23.44, 'Mar.': 34.4, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 }
    ]
    this.pointTwoBodrd<string>(data, ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'])
  }

  private pointOneBodrd<T>(data: Array<object>, rowKeys: Array<T>): void {
    const BodyDom: HTMLElement | null = document.getElementById('charts-body')
    this.oneConfig.height = BodyDom ? BodyDom.offsetHeight - 16 : 0
    this.char = new DataSet.View().source(data)
    this.char.transform({
      type: 'fold',
      fields: rowKeys,
      key: 'city',
      value: 'temperature'
    })
    this.oneConfig.data = this.char.rows
  }

  // 绘制柱状图
  private pointTwoBodrd<T>(data: Array<object>, rowKeys: Array<T>): void {
    const BodyDom: HTMLElement | null = document.getElementById('charts-body')
    this.twoConfig.height = BodyDom ? BodyDom.offsetHeight - 16 : 0
    const sourceData = [
      { name: '实际', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
      { name: '预测', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 }
    ]
    this.line = new DataSet.View().source(sourceData)
    this.line.transform({
      type: 'fold',
      fields: rowKeys,
      key: '月份',
      value: '月均降雨量'
    })
    this.twoConfig.data = this.line.rows
  }

  // 绘制压力斌图
  pointThreeBodrdPie() {
    const BodyDom: HTMLElement | null = document.getElementById('charts-body')
    this.threePieonfig.height = BodyDom ? BodyDom.offsetHeight - 16 : 0
    const sourceData = [
      { item: '事例一', count: 40 },
      { item: '事例二', count: 21 },
      { item: '事例三', count: 17 },
      { item: '事例四', count: 13 },
      { item: '事例五', count: 9 }
    ]
    this.pie = new DataSet.View().source(sourceData)
    this.pie.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    })
    this.threePieonfig.data = this.pie.rows
  }

  mounted() {
    this.$nextTick(() => {
      this.pointOneBodrd<string>(this.lineData, ['长通一号', '金华三号', '上海窗口', '深圳蓝图'])
      this.pointTwoBodrd<string>([], ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'])
      this.pointThreeBodrdPie()
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.d.scss';
.dash-container{
  height: 100%;
  .container{
    width: 100%;
    height: 100%;
    padding: rem(20px) rem(50px) rem(20px) rem(50px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: rem(10px);
    grid-row-gap: rem(10px);
    position: relative;
    .charts-all{
      width: 100%;
      .ivu-card-body{
        width: 100%;
        height: 100%;
        @include flex($direction: column);
      }
      .title-tool{
        flex: 0 0 rem(40px);
        width: 100%;
        @include flex($justify: space-between, $align: center);
      }
      #charts-body{
        width: 100%;
        flex: 1;
      }
    }
  }
}
</style>
