/**
 * 导出echarts需要用的js
 */

const option = {
  title: {
    text: '设备调控比例',
    subtext: '2019年12月28日审查',
    x: 'left',
    align: 'right'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },

  legend: {
    data: ['设备投入', '设备更新', '视频广告', '直接访问', '搜索引擎']
  },
  grid: {
    left: '1%',
    right: '1%',
    bottom: '1%',
    containLabel: true
  },
  series: [
  {
    name: '邮件营销',
    type: 'line',
    stack: '总量',
    data: [120, 132, 101, 134, 90, 230, 210],
    smooth: true
  },
  {
    name: '联盟广告',
    type: 'line',
    smooth: true,
    stack: '总量',
    data: [220, 182, 191, 234, 290, 330, 310]
  },
  {
    name: '视频广告',
    type: 'line',
    stack: '总量',
    data: [150, 232, 201, 154, 190, 330, 410],
    smooth: true
  },
  {
    name: '直接访问',
    type: 'line',
    stack: '总量',
    data: [320, 332, 301, 334, 390, 330, 320],
    smooth: true
  },
  {
    name: '搜索引擎',
    type: 'line',
    stack: '总量',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    smooth: true
  }]
}
const options2 = {
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
}
const options3 = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [{
    value: 335,
    type: 'pie',
    avoidLabelOverlap: false,
    radius: ['40%', '80%'],
    label: {
      normal: {
        show: false,
        position: 'center'
      }
    },
    data: [{
      value: 335,
      name: '直接访问'
    },
    {
      value: 310,
      name: '邮件营销'
    },
    {
      value: 310,
      name: '邮件营销1'
    },
    {
      value: 310,
      name: '邮件营销2'
    },
    {
      value: 310,
      name: '邮件营销3'
    }]
  }]
}
export {
  option,
  options2,
  options3
}
