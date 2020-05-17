import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'login',
      component:reslove => require(['@/components/login'],reslove),
      meta:{
        title:"登录界面"
      }
    },
    // 注册界面
    {
      path:'/register',
      name:'register',
      component:reslove =>require(['@/components/register'],reslove),
      meta:{
        title:'注册界面'
      }
    }
  ]
})
