<template>
  <div class="drawer-container">
    <Drawer title="Basic Drawer" :closable="false" v-model="value1">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
  </div>
</template>
<script>
export default {
  name: 'drawer'
}
</script>
<style lang="scss" scoped>
</style>
