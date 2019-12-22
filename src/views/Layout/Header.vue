<template>
    <div class="header-wrapper w-align-left w-p-0 w-bg-dark w-width">
        <!-- <Icon custom="" size="30" class="mouse"></Icon> -->
        <i class="iconfont icon-viewlist w-ft-5 mouse w-co-white" @click="toggleMenu" ></i>
        <!-- 通知消息提示 -->
        <div class="right-group flex">
            <Dropdown trigger="click" class="w-m-left-1 w-m-right-1">
            <p class="mouse down-user">
                <i class="iconfont icon-bussiness-man w-ft-5 w-co-white"/>
                <span class="w-co-white w-height w-m-bottm-2">{{username}}</span>
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
    @include flex($justify: flex-start);
    .down-user{
        @include flex($justify: flex-start);
    }
}
</style>
