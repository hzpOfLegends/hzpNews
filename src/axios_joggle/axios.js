import axios from 'axios'
import router from '@/router/index'
import {Message} from 'element-ui'
import store from '../store/store'
// axios.path = "http://192.168.30.10:3300/"
axios.path = "http://35.234.61.6/"
// axios.path = "/apis/"
// http 请求拦截器
axios.interceptors.request.use(config => {
let Ticket = localStorage.getItem("Ticket");
Object.assign(config.headers, { 'Ticket': Ticket?Ticket:"" });
return config;
}, error => {
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
  switch (data.data.ResultCode) {
    case 200 :
      break;
    case 202:
      router.push({path: "/"})
      break;
    case 401 :
      break;
    case 1003 :
      store.state.submit_hint = '登陆失败,用戶名或者密碼錯誤'
      break;
    case 1000 :
      store.state.submit_hint = '注冊失敗，用戶已存在'
      break;
    case 1100 :
      console.log('非法的数据')
      break;
    case 1200 :
      console.log('频繁的请求操作')
      break;
    case 500 :
      store.state.submit_hint = "服务器异常"
      console.log('服务器异常')
      break;
  }
  return data
}, error => {
  if (error && error.response) {
    if (error.response.status == 401) {
      Message({
        message: '此頁面需要登錄后操作！',
        type: 'warning',
        duration: 2200,
        showClose: true
      });
      store.commit('setIs401', true)  //通知有組件清除登錄信息
    } else if (error.response.status == 1200) {
      Message({
        message: '請勿頻繁操作！',
        type: 'warning',
        duration: 2000,
        showClose: true
      });
    } else if (error.response.status == 500 || error.response.status == 502) {
      Message({
        message: '服務器異常，請稍後再試！',
        type: 'warning',
        duration: 3000,
        showClose: true
      });
    }
  }
  // Message.error({

  // })
  return Promise.reject(error)
})
export default axios;
