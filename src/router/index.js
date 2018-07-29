import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home'//添加home页面
import gift from '@/pages/gift'
import Class from '@/pages/class'
import shopcar from '@/pages/shopcar' 
import my from '@/pages/my'

Vue.use(Router)

export default new Router({
  // linkActiveClass:"active",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/gift',
      name: 'gift',
      component: gift
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
