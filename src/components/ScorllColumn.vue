<template>
<div class="scroll-container">
  <slot>
  </slot>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

export default class ScorllColumnView extends Vue {
}
</script>
<style lang="scss">
.scroll-container {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
