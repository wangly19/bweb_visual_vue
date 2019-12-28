<template>
  <div class="dashboard-wrapper">
    <Row :gutter="50">
      <Col span="6" v-for="item in cardList" :key="item.id">
      <w-card-item :background="item.background" :database="item.database"></w-card-item>
      </Col>
    </Row>
    <Row :gutter="50" class="w-m-top-1 w-m-bottom-1">
      <Col span="18">
        <Card>
          <div style="text-align:center">
            <div ref="line" id="line" style="width:100%;height: 18.75rem;padding: 0;"></div>
          </div>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <div style="text-align:center">
            <div id="consume" ref="consume" style="height: 18.75rem; width: 100%;padding: 0;"></div>
          </div>
        </Card>
      </Col>
    </Row>
    <Row :gutter="50">
      <Col span="8">
        <List header="实时警报" border size="small" class="w-bg-white wraning-list">
            <!-- <Scroll dis-hover height="200" >
              <ListItem v-for="(item, index) in list1" :key="index">
                <span>查看</span>
              </ListItem>
            </Scroll> -->
            <ListItem class="wraning-item" v-for="(item, index) in 4" :key="index">
              <span>{{index}}</span>
              <span>104594</span>
              <span>流电表</span>
              <span>刘一</span>
              <span class="w-co-danger">紧急处理</span>
            </ListItem>
          <template slot="footer">
            <ButtonGroup>
              <Button type="primary">
                <Icon type="ios-arrow-back"></Icon>
                Backward
              </Button>
              <Button type="primary">
                Forward
                <Icon type="ios-arrow-forward"></Icon>
              </Button>
          </ButtonGroup>
          </template>
        </List>
      </Col>
      <Col span="16">
        <Card>
          <i-circle :percent="80">
            <span class="demo-Circle-inner" style="font-size:24px">80%</span>
          </i-circle>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
  import CardItem from '@/components/CardItem'
  import { option } from '@/config/echarts/homeOptions'
  import {
    getCardList
  } from '@/api/home/request'
  const __EchartConfigJSON = require('../../config/echarts.json')
  import _echarts from 'echarts'
  export default {
    data() {
      return {
        cardList: [],
        list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    watch: {
      tabName(val) {
        console.log(val)
      }
    },
    methods: {
      // 绘制图表方法
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
          title: {
            text: '设备占用',
            x: 'left',
            align: 'right'
          },
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
                  fontSize: '15'
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
            }]
          }]
        })
        this.drawLine(this.$refs.line, option)
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
<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.dashboard-wrapper{
  .wraning-list{
    height: REM(5000px);
    .wraning-item{
      @include flex($justify: space-around);
    }
  }
}
</style>
