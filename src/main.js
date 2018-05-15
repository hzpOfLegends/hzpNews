// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 關於bootstrap-vue 文件的引入
import BootstrapVue from 'bootstrap-vue'
// 字体样式
import 'font-awesome/css/font-awesome.css'
// 公共樣式
import '../static/css/common.css'
// jquery 的引用
import $ from 'jquery'

// axios拦截
import axios from './axios_joggle/axios'
//vueX
import store from './store/store'

Vue.use(BootstrapVue);
// 上传头像
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'
Vue.use(Croppa)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios_index from "./axios_joggle/axios_index";


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // vue router
  store, //vuex
  components: { App },
  template: '<App/>'
})
