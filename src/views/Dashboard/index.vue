<template>
  <div class="dashboard-wrapper">
    <Row :gutter="30">
      <Col span="6" v-for="item in cardList" :key="item.id">
      <w-card-item :background="item.background" :database="item.database"></w-card-item>
      </Col>
    </Row>
    <Row :gutter="30" class="w-m-top-1 w-m-bottom-1">
      <Col span="18">
        <Card>
          <div class="w-align-center">
            <div ref="line" id="line"></div>
          </div>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <div style="text-align:center">
            <div id="consume" ref="consume"></div>
          </div>
        </Card>
      </Col>
    </Row>
    <Row :gutter="30">
      <Col span="8">
        <Card class="update-device">
          <div slot="title" class="title">
            <span>归属单位</span>
            <span>本周</span>
            <span>本月</span>
            <span>本季度</span>
            <span>本年</span>
          </div>
            <ul class="bash-body">
              <li v-for="item in 5" :key="item">
                <span>华南理工大学</span>
                <span>29</span>
                <span>35</span>
                <span>47</span>
                <span>147</span>
              </li>
            </ul>
        </Card>
      </Col>
      <Col span="8">
        <Card class="w-align-left bash-view">
          <span slot="title" class="bbd">仪表盘</span>
          <div class="bash-body">
            <div ref="bash" id="bash" class="bash-chart"></div>
            <ul>
              <li v-for="item in 5" :key="item" class="p-mini"><Badge color="blue" text="blue" /></li>
            </ul>
            <ul>
              <li v-for="item in 5" :key="item" class="p-mini"><Badge color="blue" text="blue" /></li>
            </ul>
            <ul>
              <li v-for="item in 5" :key="item" class="p-mini"><Badge color="blue" text="blue" /></li>
            </ul>
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card class="w-align-left carry-control">
          <span slot="title" class="bbd">实施进度</span>
            <ul class="bash-body">
              <li v-for="item in 5" :key="item">
                <span>赵子俊</span>
                <Progress :percent="45" status="active" />
              </li>
            </ul>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
  import CardItem from '@/components/CardItem'
  import { option, options2, options3 } from '@/config/echarts/homeOptions'
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
        this.drawLine(this.$refs.consume, options2)
        this.drawLine(this.$refs.line, option)
        this.drawLine(this.$refs.bash, options3)
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
  // 公共类
  .p-mini{
    padding-top: REM(2px);
    padding-bottom: REM(2px);
  }
  .bbd{
    padding-left: REM(10px);
    border-left: REM(5px) solid $greey-1;
  }
  // 图表line
  #line{
    width:100%;
    height: REM(300px);
    padding: 0;
  }

  #consume{
    width:100%;
    height: REM(300px);
    padding: 0;
  }

  // 实时列表
  .wraning-list{
    .wraning-item{
      @include flex($justify: space-around);
    }
  }
  // 新的设备
  .update-device{
    .title, .bash-body li{
      padding-top: REM(2px);
      padding-bottom: REM(2px);
      @include flex($justify: space-btween);
      span{
        flex: 1;
      }
    }
  }
  .bash-view{
    .bash-body{
      @include flex($justify: flex-start);
      ul{
        flex: 0 0 1;
        padding: 0 REM(15px);
      }
      .bash-chart{
        height: REM(130px);
        width: REM(130px);
      }
    }
  }
  // 实施进度
  .carry-control{
    .bash-body li{
      padding-top: REM(2px);
      padding-bottom: REM(2px);
      @include flex();
      span{
        flex: 0 0 REM(70px);
      }
    }
  }
}
</style>
