import axios from 'axios'
import store from '@/vuex/store.js'
import router from '../router'

const api = axios.create();
api.defaults.baseURL = 'http://api.com';
api.defaults.timeout = 5000;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

/

// request拦截器
api.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
});

// respone拦截器
api.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default api
