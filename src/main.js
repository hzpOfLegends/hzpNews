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
// vue-scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
import IScrollView from 'vue-iscroll-view'
// axios拦截
import axios from './axios_joggle/axios'
//vueX
import store from './store/store'
// IScroll 滾動加載
import IScroll from 'iscroll'
// import IScroll from 'iscroll/build/iscroll-infinite.js
// import IScroll from 'iscroll/build/iscroll-probe.js
// import IScroll from 'iscroll/build/iscroll-view.js
// import IScroll from 'iscroll/build/iscroll-zoom.js
// import IScroll from 'iscroll/build/iscroll-lite.js
Vue.use(IScrollView, IScroll)
Vue.use(BootstrapVue);
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
