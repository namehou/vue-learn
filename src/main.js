// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './http/mock.js'

import store from '@/vuex/store'   //vuex

Vue.config.productionTip = false  

// 引入配置axios
import request from './http/request.js'
Vue.prototype.$request = request;



// 用钩子函数beforeEach()对路由进行判断

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 需要权限,进一步进行判断
    if (store.state.login.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {    //如果没有权限,重定向到登录页,进行登录
      next({
        path: '/login',
        // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else { //不需要权限 直接跳转
    next();
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
