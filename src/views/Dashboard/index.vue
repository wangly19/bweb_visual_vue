<template>
  <div>
    <Row :gutter="50">
      <Col span="6" v-for="item in cardList" :key="item.id">
      <w-card-item :background="item.background" :database="item.database"></w-card-item>
      </Col>
    </Row>
    <Row :gutter="50">
      <Col span="18">
      <Card>
        <div style="text-align:center">
          <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
      </Card>
      </Col>
      <Col span="6">
      <Card class="w-align-left">
        <p slot="title">标题</p>
        <div id="consume" ref="consume" style="height: 200px; width: 300px;">
        </div>
      </Card>
      </Col>
    </Row>
    <Row :gutter="50">
      <Col span="12">
      <Card>
        <div style="text-align:center">
          <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
      </Card>
      </Col>
      <Col span="12">
      <Card>
        <div style="text-align:center">
          <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
  import CardItem from '@/components/CardItem'
  import {
    getCardList
  } from '@/api/home/request'
  const __EchartConfigJSON = require('../../config/echarts.json')
  import _echarts from 'echarts'
  export default {
    data() {
      return {
        cardList: []
      }
    },
    methods: {
      // 绘制图形
      drawLine(__ID, options) {
        const point = _echarts.init(__ID, __EchartConfigJSON) // 初始化图标主题
        point.setOption(options)
      }
    },
    mounted() {
      // 等待dom 加载完成
      this.$nextTick(() => {
        // 开始绘制图表
        this.drawLine(this.$refs.consume, {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'horizontal',
            x: 'center',
            y: 'bottom',
            data: ['直接访问', '邮件营销']
          },
          series: [{
            value: 335,
            type: 'pie',
            avoidLabelOverlap: false,
            radius: ['50%', '70%'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '20'
                }
              }
            },
            data: [{
                value: 335,
                name: '直接访问'
              },
              {
                value: 310,
                name: '邮件营销'
              }
            ]
          }]
        })
      })
    },
    async created() {
      const {
        data
      } = await getCardList()
      this.cardList = data.list
    },
    components: {
      'w-card-item': CardItem
    }
  }

</script>
