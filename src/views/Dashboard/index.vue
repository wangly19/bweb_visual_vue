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
      <Card>
        <div style="text-align:center">
          <h3>A high quality UI Toolkit based on Vue.js</h3>
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
import { getCardList } from '@/api/home/request';
export default {
    data() {
        return {
            cardList: []
        }
    },
    async created() {
        const { data } = await getCardList()
        console.log(data.list)
        this.cardList = data.list
    },
    components: {
        'w-card-item': CardItem
    }
}
</script>
