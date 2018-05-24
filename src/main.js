// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.config.productionTip = false
// 路由攔截
// router.beforeEach((to,from,next)=>{
//   console.log(to.fullPath.indexOf('/my'))
//   if(to.fullPath.indexOf('/my')==0){
//     if(!sessionStorage.getItem('ShareID')){
//       next({path:"/"})
//     }else{
//       next()
//     }
//   }else{
//     next()
//   }

// })

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
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios_index from "./axios_joggle/axios_index";

//loading組件（只能使用v-loading指令）
import 'element-ui/lib/theme-chalk/loading.css'
import 'element-ui/lib/theme-chalk/pagination.css'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/message.css'
import 'element-ui/lib/theme-chalk/message-box.css'
import 'element-ui/lib/theme-chalk/Steps.css'
import 'element-ui/lib/theme-chalk/Step.css'
import {Loading,Steps,Step,Pagination,Icon,Message,MessageBox} from 'element-ui'
Vue.use(Loading.directive)
Vue.use(Pagination)
Vue.use(Icon)
Vue.component(Steps.name, Steps);
Vue.component(Step.name, Step);
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.component(Icon.name, Icon)
import moment from 'moment'
Vue.prototype.$moment = moment;
/* eslint-disable no-new */
let that = new Vue({
  el: '#app',
  router, // vue router
  store, //vuex
  components: { App },
  template: '<App/>'
})

