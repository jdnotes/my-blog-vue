
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
import routers from './routers'
import http from './request/http.js'
import ports from './request/ports'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.http = http
Vue.prototype.ports = ports

Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(mavonEditor)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
