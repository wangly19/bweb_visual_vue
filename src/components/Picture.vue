<template>
<div class="picture-container">
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

export default class PictureView extends Vue {
  @Prop({ required: true }) src!: Array<string> | string // src，必须是字符串或者是数组
  @Emit('onClose') onClose(): boolean {
    return false
  }
}
</script>
<style lang="scss">
</style>
