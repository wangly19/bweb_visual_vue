<template>
  <div class="login-container">
    <Modal v-model="openDialog" title="申报丢失密码" :width="350">
      <Form :model="formApply" :label-width="80" :rules="rules" ref="userRoles">
      <FormItem label="申报账号" prop="user">
        <Input v-model="formApply.password" placeholtder="请输入设备密码" type="password" password></Input>
      </FormItem>
      <FormItem label="申报人" prop="name">
        <Input v-model="formApply.name" placeholtder="请输入设备名称"></Input>
      </FormItem>
    </Form>
      <template slot="footer">
        <Button type="text" @click="cancel('userRoles')">取消</Button>
        <Button type="primary" @click="submit('userRoles')" :disabled="isSubmit" :loading="isSubmit">提交</Button>
      </template>
    </Modal>
    <div class="mick-wrapper">
      <img :src="require('@/assets/img/login_background.jpg')" alt="">
    </div>
    <div class="form-wrapper">
      <div class="logo">
        <i class="fas fa-spa logo__icon"/>
        大数据可视化系统
      </div>
      <Form ref="formInline" :model="formLogin" :rules="loginRules">
        <FormItem prop="user">
            <Input type="text" v-model="formLogin.user" placeholder="请输入账号" size="large">
              <i class="fas fa-user inuput-icon" slot="prepend"/>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input :type="isPassword ? 'password' : 'text'" v-model="formLogin.password" placeholder="请输入密码" size="large">
              <i class="inuput-icon fas" :class="isPassword ? 'fa-question-circle' : 'fa-smile'" @click="isPassword = !isPassword" slot="prepend"/>
            </Input>
        </FormItem>
        <FormItem class="item">
          <Checkbox v-model="isRemember">记住账号</Checkbox>
          <Button type="text" class="item__upword" @click="openDialog = true">申报密码?</Button>
        </FormItem>
        <FormItem>
            <Button type="success" size="large" long @click="submitLoginForm('formInline')" :loading="isLogin" :disabled="isLogin" @keyup.enter.native="submitLoginForm('formInline')">登录系统</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { Action } from 'vuex-class'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { setStorage, getStorage } from '../../tools/storage'
const loginBg = require('@/assets/img/login_background.jpg')
@Component
export default class Login extends Vue {
  @Action('LOGIN') LOGIN: any
  private isLogin: boolean = false
  private formLogin: object = {}
  private isRemember: boolean = false
  private isPassword: boolean = true
  private openDialog: boolean = false
  private formApply: object = {}
  private rules: object = {
    user: [{ required: true, message: '申报用户不能为空', trigger: 'blur' }],
    name: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
  }
  private loginRules: object = {
    user: [{ required: true, message: '账号(用户名)不能为空', trigger: 'blur' }],
    password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
  }
  // 用户登录函数
  submitLoginForm(formName: string) {
    let formData: any
    formData = this.$refs[formName] // 获取对象
    formData.validate(async (valid: boolean) => {
      if (valid) {
        this.isLogin = true
        this.isRemember && setStorage('userinfo', this.formLogin)
        // 开始登录
        const { success, message } = await this.LOGIN(this.formLogin)
        if (success) {
          this.$Message.success(message)
          this.isLogin = false
          this.$router.replace({ path: '/' })
        } else {
          this.$Message.error(message)
          this.isLogin = false
        }
      }
    })
  }

  // 关闭对话框
  private cancel(formName: string): void{
    let formRef: any = this.$refs[formName]
    this.openDialog = false
    this.formApply = {}
    formRef.resetFields()
  }
  // 提交对话框数据
  private submit(formName: string): void{
    let formRef: any = this.$refs[formName]
    formRef.validate(async (valid: boolean) => {
      if (valid) {
        // 上报
      }
    })
  }

  private mounted() {
    this.$nextTick(() => {
      this.$Notice.info({
        title: '您好，访问者',
        desc: '该项目为Demo项目，账户admin, 密码123456',
        duration: 0,
        name: 'loginTip'
      })
    })
  }

  private destroyed() {
    this.$Notice.close('loginTip')
  }

  // 钩子函数
  private created() {
    // 获取用户名
    const { user } = getStorage('userinfo')
    this.$set(this.formLogin, 'user', user)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
.login-container{
  @include flex();
  height: 100%;
  .mick-wrapper{
    width: 7rem;
    height: 100%;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .form-wrapper{
    flex: 1;
    height: 100%;
    background: white;
    padding: rem(20px);
    @include flex($align: center, $justify: center, $direction: column);
    .logo{
      padding-bottom: rem(30px);
      font-size: rem(30px);
      &__icon{
        font-size: rem(30px);
      }
    }
    .inuput-icon{
      padding: rem(3px);
    }
    .item{
      &__upword{
        float: right;
      }
    }
  }
}
</style>
