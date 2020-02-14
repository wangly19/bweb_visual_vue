<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img
          class="pic-404__parent"
          src="@/assets/img/404.png"
          alt="404"
        >
        <img
          class="pic-404__child left"
          src="@/assets/img/404-cloud.png"
          alt="404"
        >
        <img
          class="pic-404__child mid"
          src="@/assets/img/404-cloud.png"
          alt="404"
        >
        <img
          class="pic-404__child right"
          src="@/assets/img/404-cloud.png"
          alt="404"
        >
      </div>
      <div class="text-404">
        <div class="text-404__title">
          提示!
        </div>
        <div class="text-404__headline">
          {{ message }}
        </div>
        <div class="text-404__info">
          请检查您输入的网址是否正确，或者点击下面的按钮返回首页。
        </div>
        <Button type="error" size="large" :to="`/`">返回首页</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Page404'
})
export default class extends Vue {
  private message = '404 Page Not Found'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.d.scss';
.wscn-http404-container {
  height: 100%;
  @include flex($justify: center, $align: center);
}

.wscn-http404 {
  @include flex();
  .pic-404 {
    @include flex($align: center);
    position: relative;
    width: rem(600px);
    overflow: hidden;

    &__parent {
      width: 100%;
    }

    &__child {
      position: absolute;

      &.left {
        width: rem(80px);
        top: rem(17px);
        left: rem(220px);
        opacity: 0;
        animation-name: cloudLeft;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
        animation-iteration-count: infinite;
      }

      &.mid {
        width: rem(46px);
        top: rem(10px);
        left: rem(420px);
        opacity: 0;
        animation-name: cloudMid;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
        animation-iteration-count: infinite;
      }

      &.right {
        width: rem(62px);
        top: rem(100px);
        left: rem(500px);
        opacity: 0;
        animation-name: cloudRight;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
        animation-iteration-count: infinite;
      }

      @keyframes cloudLeft {
        0% {
          top: rem(17px);
          left: rem(220px);
          opacity: 0;
        }

        20% {
          top: rem(33px);
          left: rem(188px);
          opacity: 1;
        }

        80% {
          top: rem(80px);
          left: rem(90px);
          opacity: 1;
        }

        100% {
          top: rem(97px);
          left: rem(60px);
          opacity: 0;
        }
      }

      @keyframes cloudMid {
        0% {
          top: rem(10px);
          left: rem(420px);
          opacity: 0;
        }

        20% {
          top: rem(40px);
          left: rem(360px);
          opacity: 1;
        }

        70% {
          top: rem(130px);
          left: rem(180px);
          opacity: 1;
        }

        100% {
          top: rem(160px);
          left: rem(120px);
          opacity: 0;
        }
      }

      @keyframes cloudRight {
        0% {
          top: rem(100px);
          left: rem(500px);
          opacity: 0;
        }

        20% {
          top: rem(120px);;
          left: rem(460px);;
          opacity: 1;
        }

        80% {
          top: rem(180px);
          left: rem(340px);
          opacity: 1;
        }

        100% {
          top: rem(200px);
          left: rem(300px);
          opacity: 0;
        }
      }
    }
  }

  .text-404 {
    position: relative;
    width: rem(300px);
    padding: rem(30px) 0 ;
    overflow: hidden;

    &__title {
      font-size: rem(30px);
      font-weight: bold;
      line-height: rem(40px);
      color: $main;
      opacity: 0;
      margin-bottom: rem(20px);
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }

    &__headline {
      font-size: $size2;
      line-height: $size3;
      color: $text;
      font-weight: bold;
      opacity: 0;
      margin-bottom: $size1;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }

    &__info {
      font-size: $size1;
      line-height: $size2;
      color: $other;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }

    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
