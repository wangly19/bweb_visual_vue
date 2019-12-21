<style lang="scss" scope>
@import '@/assets/css/mixins.scss';
.slider-wrapper{
  @include flex($direction: column, $justify: space-around, $align: center);
  .statement{
    font-weight: bold;
  }
}
</style>
<script>
  import {
    mapActions
  } from 'vuex'
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {},
        isLoading: false,
        isRemember: [],
        validationRules: {
          required: ['name', 'password']
        },
        rules: {
          name: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          { type: 'string', min: 4, message: '用户名最小为2个字符', trigger: 'change' }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            { type: 'string', min: 6, message: '用户名最小为六位数', trigger: 'change' }
          ]
        },
        start: 0
      }
    },
    methods: {
      submit(name) {
        const that = this
        this.$refs[name].validate(async(valid) => {
          if (valid) {
            that.isLoading = true
            // 验证成功了，开始做登录事件
            const { data } = await this.$store.dispatch('login', this.loginForm)
            this.$Message[data.status ? 'success' : 'error']({
              background: true,
              content: `tip: ${data.statusText}`
            })
            data.status ? this.$router.replace({ path: '/' }) : ''
            this.isLoading = false
          } else return false
        })
      }
    },
    computed: {
      ...mapActions(['login'])
    }
  }

</script>
<template>
  <div class="login w-height">
    <Row class="w-height">
        <Col span="16" class="w-height">
          <Carousel v-model="start" class="w-height w-bg-try-1" ref="carouse">
              <CarouselItem>
                <div class="demo w-co-white">111</div>
              </CarouselItem>
          </Carousel>
        </Col>
        <i-col span="8" class="w-height">
        <div class="slider-wrapper w-height">
          <!-- 顶部Logo -->
          <div class="logo w-width w-align-left w-p-left-6">
            <p><i class="iconfont icon-LOGO w-ft-6 w-co-greey-1"/><span class="w-ft-5">水电气大数据可视化系统</span></p>
          </div>
          <!-- 登录表单 -->
          <Form :model="loginForm" :rules="rules" ref="loginCheck" class="w-width w-p-6 w-align-center">
            <FormItem prop="name">
              <Input type="text" v-model="loginForm.name" size="large" clearable placeholder="请输入用户账号">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="loginForm.password" size="large" password clearable placeholder="请输入用户密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
            </FormItem>
            <FormItem class="w-align-left">
            <FormItem>
              <CheckboxGroup v-model="isRemember">
                  <Checkbox label="是否记住该账号"></Checkbox>
              </CheckboxGroup>
            </FormItem>
            </FormItem>
            <FormItem>
              <Button type="success" class="w-width" size="large" :loading="isLoading" @click="submit('loginCheck')">
                <span v-if="!isLoading">登录账号</span>
                <span v-else>登录账号中...</span>
              </Button>
            </FormItem>
            <FormItem>
              <a href="#" class="w-co-black">忘记密码</a>
              <Divider type="vertical" />
              <a href="#">注册账号</a>
            </FormItem>
          </Form>
          <!-- 底部声明 -->
          <div class="statement">
            <span>&copy;2019年-2020年 本项目由wangly@达摩院独立开发</span>
          </div>
        </div>
        </i-col>
    </Row>
  </div>
</template>
