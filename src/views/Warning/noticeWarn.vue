<template>
<div class="inform-container">
  <div class="container">
    <div class="scroll-wrapper">
      <Row :gutter="16" class-name="notice-row">
        <Col :span="6"  v-for="(item, index) in noticeList" :key="index" class-name="notice-column">
          <Card class="notice-view">
          <div class="notice-rote">
            <i-circle :percent="item.rote.percen" :size="100" class="rote">
              <div>
                <h5>预警率</h5>
                <span>{{item.rote.percen}}%</span>
              </div>
            </i-circle>
            <div class="dot-status">
              <Tag :color="item.rote.status ? 'success' : 'error'">设备当前：{{item.rote.status ? '正常' : '警报'}}</Tag>
              <p>更新时间:</p>
              <span>{{item.rote.date}}</span>
            </div>
          </div>
          <ul class="info-list">
            <li class="info-item" v-for="(key, value) in item.notice" :key="value">
              <span>{{noticeInfoKey[value]}}</span>
              <span>{{key}}</span>
            </li>
          </ul>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { getNoticeList } from '@/api/WarningDevice/noticeDevice'
import Empty from '@/components/Empty.vue'
interface INotice{
  rote: object,
  notice: Array<string>
}

@Component({
  components: {
    Empty
  }
})
export default class DeviceView extends Vue {
  private noticeInfoKey: Array<string> = ['编号', '报警设备', '信息', '阈值', '所在公司', '预计发生时间']
  private noticeList: Array<INotice> = []

  // 获取预警设备列表
  private async getCardListView(params: object = {}) {
    try {
      const { data } = await getNoticeList(params)
      this.noticeList = data.list
    } catch (error) {
      console.error(error, '获取预警设备')
      this.$Message.error(`发生错误：${error}`)
    }
  }
  private created() {
    this.getCardListView()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
.inform-container{
  height: 100%;
  width: 100%;
  padding: rem(20px) rem(50px) rem(20px) rem(50px);
  overflow: auto;
  .container{
    height: 100%;
    .scroll-wrapper{
      position: relative;
      height: 100%;
      width: 100%;
      .notice-row{
          @include position($position: absolute, $left: 0, $top: 0);
          .notice-column{
          margin-top: rem(16px);
          .notice-view{
          .notice-rote{
              padding-bottom: rem(10px);
              @include flex($justify: space-between, $align: flex-start);
              .dot-status{
                p{
                  padding: rem(5px);
                  color: $text;
                }
                span{
                  padding: rem(5px);
                  color: $explain;
                }
              }
            }
            .info-list{
              .info-item{
                @include flex($justify: space-between);
                padding-top: rem(10px);
              }
            }
          }
        }
      }
      .warning-card-wrapper{
        @include position($position: absolute, $left: 0, $top: 0);
      }
    }
  }
}
</style>
