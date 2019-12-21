<template>
    <div class="header-wrapper w-align-left w-p-1 w-bg-white">
        <Icon @click.native="toggleMenu" custom="iconfont icon-viewlist" size="30" class="mouse"></Icon>
    </div>
</template>
<script>
export default {
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleMenu() {
            // 切换Menu状态
            this.$store.commit('_setCollapse', !this.$store.state.app.isCollapse)
        }
    }
}
</script>
