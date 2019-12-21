<template>
    <div class="logo-bar w-align-center w-p-0 w-bg-dark">
        <span><i class="iconfont icon-LOGO w-ft-5 w-co-greey-1"/> <span class="w-ft-4 w-co-white" v-show="!isCollapse"> 可视化系统</span></span>
    </div>
</template>

<script>
export default {
    name: 'logg-bar',
    props: {
        isCollapse: {
            type: Boolean,
            default: true
        }
    }
}
</script>
