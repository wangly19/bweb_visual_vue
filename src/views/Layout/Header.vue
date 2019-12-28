<template>
    <div class="header-wrapper w-align-left w-p-0 w-bg-dark w-width">
        <!-- <Icon custom="" size="30" class="mouse"></Icon> -->
        <i class="iconfont w-ft-5 mouse w-co-white check" @click="toggleMenu" :class="$store.state.app.isCollapse ? 'icon-viewgallery' : 'icon-viewlist'"></i>
        <!-- 通知消息提示 -->
        <div class="right-group flex">
            <i class="iconfont icon-code w-ft-5 w-co-white w-m-right-1 mouse"></i>
            <i class="iconfont icon-connections w-ft-5 w-co-white w-m-right-1 mouse"></i>
            <Dropdown trigger="click" class="w-m-right-1">
                <p class="mouse down-user">
                    <Avatar icon="ios-person" />
                    <span class="w-co-white w-height w-p-left-0">{{username}}</span>
                    <Icon type="md-arrow-dropdown" size="20" color="white"/>
                </p>
                <DropdownMenu slot="list">
                    <DropdownItem>修改资料</DropdownItem>
                    <DropdownItem>个人信息</DropdownItem>
                    <DropdownItem>注销登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        },
        username: {
            type: String,
            default: ''
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
<style lang="scss" scoped>
@import '@/assets/css/mixins';
.header-wrapper{
    @include flex($justify: space-between);
    .down-user{
        @include flex($justify: flex-start);
    }
}
</style>
