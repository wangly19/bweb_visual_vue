<style lang="scss">
</style>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'login',
    data() {
        return {
            loginForm: {},
            isLoading: false,
            validationRules: {
                required: ['name', 'password']
             }
        }
    },
    methods: {
        async submit() {
            this.isLoading = true;
            let validResult = this.$refs.form.valid()
            if (validResult.result) {
                // 调用登录actions，存储token 和 roles
                const isSuccess = await this.$store.dispatch('login', this.loginForm)
                this.$Message[isSuccess ? 'success' : 'error'](isSuccess ? '登录成功' : '登陆失败')
                this.isLoading = false
            } else {
                this.isLoading = false
            }
        },
        reset() {
            this.loginForm = {}
        }
    },
    computed: {
        ...mapActions(['login'])
    }
}
</script>
<template>
    <div class="login">
        <h-form ref="form" :medol="loginForm" :rules="validationRules">
            <h-formitem>
                <input type="text" v-model="loginForm.name" porp="name">
            </h-formitem>
            <h-formitem>
                <input type="password" v-model="loginForm.password" prop="password">
            </h-formitem>
            <h-formitem>
                <h-button color="primary" :loading="isLoading" @click="submit">提交</h-button>&nbsp;&nbsp;&nbsp;
                <h-button @click="reset">重置</h-button>
            </h-formitem>
        </h-form>
    </div>
</template>
