import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'],resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const User = resolve => require(['@/views/User.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },{
      path: '/category',
      name: '分类页',
      redirect: '/category/all',
      component: Category,
      children: [{
        path: '/category/:tab',
        component:CategoryMain
      }]
    }, {
      path: '/detail',
      name: '详情页',
      component: Detail
    }, {
      path: '/car',
      name: '购物车页',
      component: Car
     }, {
      path: '/car/pay',
      name: '支付页',
      component: Pay
    },{
      path: '/login',
      name: '登录页',
      component: Login
    },
    {
      path: '/user',
      name: '用户页',
      component: User,
      meta: {
           requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       },
    }


  ]
})
