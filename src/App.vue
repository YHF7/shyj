<template>
  <div id="app">
    <router-view/>

    <div class="nav">
      <!-- 第一个按钮 -->
      <router-link to="/home">
        <div class="img">
          <img src="./assets/home.png" alt="">
          <img src="./assets/home2.png" alt="">
        </div>
        <p>主页</p>
      </router-link>
      <!-- 第二个按钮 -->
      <router-link to="/gift">
        <div class="img">
          <img src="./assets/gift.png" alt="">
          <img src="./assets/gift2.png" alt="">
        </div>
        <p>会员杂锦</p>
      </router-link>
      <!-- 第三个按钮 -->
      <router-link to="/class">
        <div class="img">
          <img src="./assets/class.png" alt="">
          <img src="./assets/class2.png" alt="">
        </div>
        <p>分类</p>
      </router-link>
      <!-- 第四个按钮 -->
      <router-link to="/shopcar">
        <div class="img">
          <img src="./assets/shopcar.png" alt="">
          <img src="./assets/shopcar2.png" alt="">
        </div>
        <p>购物车</p>
      </router-link>
      <!-- 第五个按钮 -->
      <router-link to="/my">
        <div class="img">
          <img src="./assets/my.png" alt="">
          <img src="./assets/my2.png" alt="">
        </div>
        <p>我的</p>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body{
  font-size: 12px;
}
.nav{position: fixed;bottom: 0;width: 100%;padding-bottom: .05rem;}
.nav>a{width: 20%;display: block;float: left;text-align: center;color: #808080;text-decoration: none;font-size: .14rem;}
.nav .img img{width: 30px;}
.nav>.router-link-active{color: yellow;}
.nav .img img:nth-child(2){display: none}
.nav>.router-link-active .img img:nth-child(1){display: none}
.nav>.router-link-active .img img:nth-child(2){display: inline}
#app {

}
</style>
