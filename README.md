vweb_visual是一个简单的后台管理项目，疫情在家为了不无聊抽时间写的，一来呢自己的github有点空荡荡的，想想自己已经步入社会，不能像学生时代一样觉得时间充足。所以下定决心做一个长期维护的全栈项目，不仅仅是为了自己的成长。

## 技术选型

- UI框架： iview
- 前端框架： Vue.js + Typescript.js
- 请求库：Axios
- 样式编译： sass
- 模拟库： easymock
- 图表：AntVG2
- 图标： iconfont图标
- 布局选型：flex + rem布局

## 项目安装

1.将项目克隆到本地

```shell
git clone https://github.com/wangly19/bweb_visual_vue.git
```

2.安装依赖

```shell
npm install
yarn install
```

3.跑动项目

```shell
npm run serve
```

## 前言

当我使用typescript作为和vue.js搭档的时候。我对于ts在vue的使用是一无所知的，随着项目的进行，也慢慢的对于ts得心应手，但是我突然发现了在vue2中使用ts，本身是一件非常坑的事情，类型验证的优势反而没有起到预想中的作用，甚至ts本身的功能都没有发挥出来，不过优点也是有的，代码折叠非常的优雅。所以既然都进坑了，那么爬出来是有必要的。

## axios 碰上 restful

现在的数据都是mock去模拟出来用来展示的，为了页面不显得突兀。所以数据是不规范的，难以阅读的。接口也是使用了分离式，没有和view层放在一起。统一放在了api文件中。
遵守restfulAPI（我只在设备管理中做了一个大概）后续会在nest.js中继续完善。

放出一个请求实例

```typescript
import service from '@/api/axios.config'

// get & post 请求 => 资源统一用parmas
export function tradDevice<T>(params: T, type: string): Promise<any> {
  return service({
    url: `/device`,
    method: type,
    params
  })
}

// put & delete 需要带上数据的id
export function alterDevice<T>(id: number, params: T, type: string): Promise<any> {
  return service({
    url: `/device/${id}`,
    method: type,
    params
  })
}
```

看过很多大佬的项目，基本都是将请求层独立出来，其实我是比较喜欢的，当api请求出错时，我只需要去定位请求层然后更改请求的代码就OK了。而不需要在万军丛中去更改this.$axios(xxxx)等一系列的代码，保证在view层中利用async/await做出处理。架构清晰，保证可读性。

## 样式重置

在项目中是引入了normalize.css v8.0.1，这是一个非常好用的css，配合上自己常用的一些样式重置，能够满足大部分的项目所需。是一个非常好的项目。

## rem适配

这里贴上个人的一个rem适配方案。方案不代表最优，只是自己用的舒服罢了。如果您觉得有用，不妨在项目中继续完善它。

resetPageSize.ts

```typescript
/**
 * @author: wangly
 * 页面fontsize重置
 */
(function (window: Window): void {
  window.addEventListener('resize', function () {
    document.documentElement.style.fontSize = `${getWindowSize() / 10}px` // 按照设计图
  })
  document.documentElement.style.fontSize = `${getWindowSize() / 10}px` // 按照设计图
  console.warn('当前的设计图rem: ', getWindowSize())
})(window)

/**
 * 获取字体大小
 * @return 获取当前页面的宽度
 */
function getWindowSize (): number {
  const __width: number = document.documentElement.clientWidth
  return __width > 1920 ? 1920 : __width
}
```

main.ts

```typescript
// 引入rem根字体大小
import '@/tools/resetPageSize'
```

scss转换方法

```sass
@function rem($px){
  $remSize: $px / 192px;
  @return $remSize * 1rem;
}
```

使用方式

```sass
html{
  height: rem(192px); // => 1rem
}
```

## flex & postion 等mixins

当你需要反复的去写一个flex布局，position布局，不妨尝试一下sass mixins，它会很好的去帮助你生成需要的样式，且精简。

```sass
// flex布局
@mixin flex($justify: flex-start, $align: flex-start, $direction: row) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
  flex-direction: $direction;
}

// position定位
@mixin position($position: relative, $top: initial, $right: initial, $bottom: initial, $left: initial) {
  position: $position;
  left: $left;
  right: $right;
  bottom: $bottom;
  top: $top,
}
```

当然，对于圆角和zinde我也会做留一手

```sass
// 设置层级
@mixin zIndex($zindex: 0) {
  z-index: $zindex;
}

// 圆角
@mixin radius($px: 0) {
  border-radius: $px;
}
```

## ts方法库

这个后续会抽成一个单章，提前拉出来溜溜。因为能说的太多了。每个人都有自己的骚东西。
不是吗QAQ。

```typescript
export function cssExpand<T>(css: T, id: string) {
  let style: HTMLStyleElement = document.createElement('style')
  style.type = "text/css"
  style.innerHTML = `@charset "UTF-8"; ${css}`
  if (id) {
    let $style: HTMLElement | null = document.getElementById(id)
    if ($style != null) $style.outerHTML = ''
    style.id = id
  }
  // 应用新样式
  document.head.appendChild(style)
}
```

## 布局设计

布局采用传统的葫芦式布局，顺序分别如下:
头部 >>> 导航 >>> 内容 + 抽屉设计。
比较符合审美，easymock的官网也是相同的设计。这点我确实是抄袭他的，在自己的想法上进行更改。无异于是非常适合iview的。如果大家觉得不错，可以给个星星给我哦。当前缺点也很明显啦，toolbar的空间没有充分利用好，显得有点华而不实的感觉。且一个动画都还没做好，这是一个长期的过程。
## 页面展示
### 登录
相对于注册账号来讲，admin账号都是由管理自己构建，当忘记密码时，可以申请账号重置。逻辑来讲应该是通的吧，后台账号是:admin 密码是: 123456 数据是Mock出来的
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420d805020d7?w=1919&h=986&f=png&s=353064)

### 仪表盘
这里的仪表盘我是使用了基于AntV G2 的 [Viser](https://viserjs.github.io/)，为什么不使用echarts，因为相当于echarts来说，antV的设计更符合iviw，且配色都是我喜欢的样子。不得不说大厂的设计是真的好。而且当G6被TS重构性能后，说明antV全家桶支持TS是指日可待的事情。

![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420d8112448c?w=1920&h=935&f=png&s=192132)

### 设备管理
后面设计到表单页面的布局都与其类似，作为一个风格统一和布局约束。左边表单，右边是搜索栏。表单可以是滚动，也可以是分页。
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420d8ad39f26?w=1920&h=943&f=png&s=206479)

### 警告管理 
#### 实时预警
同上布局，一个典型的CURD界面，后面的都其实差不多。后台界面设计了大量的数据数据展示，展示就表明操作。无奈，curd多是正常的。
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420d841c7756?w=1920&h=948&f=png&s=223610)
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420d8f539b78?w=1919&h=943&f=png&s=211896)
#### 历史预警
同上，页面99%相似
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420d8aff468e?w=1920&h=944&f=png&s=220982)
#### 设备预警
预测该设备按照当前的动态，去判断什么时候达到阈值。这里被Row + col坑了。早知道自己写一个Grid。
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420dc994923e?w=1920&h=939&f=png&s=168420)

### 地图
主要是做设备定点啥的。现在还没想好原型。只是先画出一个demo。后续有想到的内容可以完善一下。地图使用的是高德系，百度系看backup分支旧版本。
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420dd19d5c04?w=1920&h=937&f=png&s=881137)

### 人员管理
#### 账户管理
详情是我比较喜欢的抽屉展示。也不能经常用对话框吧。哈哈。
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420dd34dfb3f?w=1920&h=940&f=png&s=240900)
#### 申报管理
不知道如何设计，主要是用来解锁和重置密码的。可以看到被锁定列表和申报列表。方便查看账号被锁定原因。账号输错10次就会被锁定。
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420dd77733e1?w=1920&h=940&f=png&s=91474)

### 系统设置
全是相同的表单，最后在想怎么做吧。权限式按照站点级别分的。哎。头发都快没了
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420e17d1340c?w=1920&h=946&f=png&s=141983)

### 后台管理设置
抽屉确实是一个好东西。大部分功能都么的实现。啊哈哈哈。后续会继续更新的。都准备做一个react版本呢。
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420e4443f136?w=1920&h=942&f=png&s=193998)
## 主题设置
咱家暂时只想到这几套常用的主题风格啦，且都有统一命名
#### 优雅灰
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420e46af49f8?w=1917&h=197&f=png&s=35592)
#### 水鸭青
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420e4baa6262?w=1913&h=197&f=png&s=35216)
#### 葡萄蓝
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420e619cd5b7?w=1920&h=191&f=png&s=34263)
#### Gay佬紫
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420e70569596?w=1918&h=196&f=png&s=35261)
#### 杨柳绿DOG
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420e763a469a?w=1920&h=191&f=png&s=34156)
#### 个人最喜欢，萌萌哒的少女粉啦
![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420e7891324d?w=1920&h=189&f=png&s=33603)
主题的实现方案正在构思中。现在只是用Vuex配置了Header的设置。全局的一些元素都需要编译的。在想好的，更优雅的方案。
## 结语
如果您看的爽了，觉得不错，可以给文章点一个赞，或者是给该项目点个星星。其实这个项目推送了40次的。只是含泪重构，疫情在家，github一直都打开不了。所以每天都没有提交。后续更新会更加勤快的。都不知道什么时候上班。也许就我一个实习生在家苦苦等待着村里的水泥被挪开吧。
```!
内推可丢...
```

## 预览地址
刚好领取了阿里云的服务器，特此挂上了nginx，各位大哥们，请勿非法操作，害怕.jpg.....

线上版本: [不知名后台管理系统](http://112.74.92.207:9000/)

Github: [项目源码+日常更新中](https://github.com/wangly19/bweb_visual_vue.git)

语雀地址: [清风的语雀](https://www.yuque.com/wanglyweb/qb32kq/eft6vb)

![image.png](https://user-gold-cdn.xitu.io/2020/2/14/1704420e79685bf2?w=512&h=512&f=png&s=259945)
