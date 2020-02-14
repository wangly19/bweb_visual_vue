<template>
  <div class="dash-container">
    <ZoomImage :path="defaultImagePath" :isVisible.sync="visible"></ZoomImage>
    <div class="container">
      <Row style="width: 100%; height: 100%;">
        <Col :span="12" class="left-wrapper">
          <Card class="card-wrapper">
            <h2 class="title">同比数据</h2>
            <ul class="card-list">
              <li class="card-item" v-for="item in 9" :key="item">
                <p class="card-item-title">今日销售量</p>
                <h2>40729</h2>
                <div class="bar">
                  <p>
                    同比: <Icon custom="iconfont icon-tubiaoshangshengqushi normal"/> 10.62%
                  </p>
                  <p>
                    同比: <Icon custom="iconfont icon-tubiaoxiajiangqushi error"/> 10.62%
                  </p>
                </div>
              </li>
            </ul>
          </Card>
          <Card class="rapid-wrapper">
            <h2 class="title">快捷方式</h2>
            <ul class="rapid-list">
              <li class="rapid-list-item" v-for="item in 7" :key="item">
                <Icon custom="iconfont icon-browse" :size="40"/>
                <p>人员管理</p>
              </li>
            </ul>
          </Card>
        </Col>
        <Col :span="12" class="right-wrapper">
          <List border class="rank-wrapper">
            <h2 slot="header" class="title" style="padding: 0;">头部插槽</h2>
            <ListItem class="header-item rank-wrapper__item">
              <h4>排名</h4>
              <h4>名称</h4>
              <h4>数量</h4>
              <h4>成交金额</h4>
            </ListItem>
            <div class="item-scroll">
              <ListItem class="rank-wrapper__item" v-for="item in 10" :key="item">
                <h4>{{item}}</h4>
                <h4>测试数据</h4>
                <h4>测试数据</h4>
                <h4>20000，10</h4>
              </ListItem>
            </div>
        </List>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ZoomImage from '@/components/ZoomImage.vue'
import { getDashRank } from '@/api/Dash/index'

@Component({
  components: {
    ZoomImage
  }
})
export default class DashHome extends Vue {
  private visible: boolean = false
  private defaultImagePath: string = 'http://img5.imgtn.bdimg.com/it/u=4214941395,707510718&fm=26&gp=0.jpg'
  private lineData: Array<object> = [
    { year: '1991', value: 3, type: 'name' },
    { year: '1992', value: 4, type: 'name1' },
    { year: '1993', value: 3.5, type: 'name' },
    { year: '1994', value: 5, type: 'name' },
    { year: '1995', value: 4.9, type: 'name2' },
    { year: '1996', value: 6, type: 'name' },
    { year: '1997', value: 7, type: 'name1' },
    { year: '1998', value: 9, type: 'name' },
    { year: '1999', value: 13, type: 'name1' }
  ]
  private LineInstance: any = null
  private mounted() {
  }
  private async created() {
    const { data } = await getDashRank()
    this.lineData = data.list
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.d.scss';
.dash-container{
  height: 100%;
  @include flex($direction: column);
  // padding: rem(50px);
  .container{
    flex: 1;
    width: 100%;
    padding: rem(20px) rem(50px) rem(20px) rem(50px);
    @include flex();
    .title{
      font-size: rem(20px);
      padding-bottom: rem(10px);
    }
    .left-wrapper{
      @include flex($direction: column);
      height: 100%;
      .rapid-wrapper{
        flex: 0 0 rem(250px);
        width: 100%;
        .rapid-list{
          @include flex($justify: space-around);
          flex-wrap: wrap;
          &-item{
            @include flex($direction: column, $align: flex-start);
          }
        }
      }
      .card-wrapper{
        flex: 1;
        width: 100%;
        margin-bottom: $size2;
        .card-list{
          display: grid;
          grid-template-columns: auto auto auto;
          &-title{
            color: $explain;
            line-height: rem(28px);
          }
          .card-item{
            border: 2px solid $bg;
            padding: rem(15px);
            margin: 0 0 -2px -2px;
            .title{
              color: $other;
            }
            h2{
              font-size: rem(30px);
              line-height: rem(40px);
            }
            .bar{
              font-size: $size1;
              @include flex($justify: space-between);
              .normal{
                color: $normal;
              }
              .error{
                color: $error;
              }
            }
          }
        }
      }
      .line-wrapper{
        flex: 1;
        margin-top: rem(20px);
        width: 100%;
      }
    }
    .right-wrapper{
      height: 100%;
      padding-left: rem(20px);
      @include flex($direction: column);
      .rank-wrapper{
        flex: 1;
        width: 100%;
        background: $white;
        .header-item{
          h4{
            font-weight: bold;
          }
        }
        &__item{
          @include flex();
          h4:nth-child(1){
            color: red;
            flex:  0 0 rem(100px);
          }
          h4:nth-child(2){
            flex: 1;
          }
          h4:nth-child(3){
            flex: 1;
          }
          h4:nth-child(4){
            flex:  0 0 rem(150px);
          }
        }
      }
    }
  }
}
</style>
