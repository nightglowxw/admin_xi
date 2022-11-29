import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

import axios from 'axios'
axios.defaults.baseURL = 'api/api/admin/'

const instance = axios.create({
  timeout: 10000,
  baseURL: axios.defaults.baseURL
})

const token = window.sessionStorage.getItem('token')
instance.interceptors.request.use(
  function (config) {
    config.headers['X-Api-Key'] = token
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

Vue.prototype.$http = instance

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
