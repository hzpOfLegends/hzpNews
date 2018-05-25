import axios from 'axios'
import router from '@/router/index'
import {Message} from 'element-ui'
import store from '../store/store'
// axios.path = "http://35.194.241.228/"
axios.path = "/apis/"
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
  switch (data.data.ResultCode)
  {
    case 200 :
      break;
    case 201 :
      // router.push({path:"/"}) 
      break;
    case 401 :
      // router.push({path:"/"})
      break;
    case 1003 :
      console.log('登陆失败')
      break;
    case 1000 :
      console.log('参数错误')
      break;
    case 1100 :
      console.log('非法的数据')
      break;
    case 1200 :
      console.log('频繁的请求操作')
      break;
    case 500 :
      console.log('服务器异常')
      break;
  }
  return data
}, error => {
  if(error && error.response){
    if(error.response.status == 401){
        Message({
            message: '此頁面需要登錄后操作！',
            type: 'warning',
            duration:30000,
            showClose:true
        });
        store.commit('setIs401',true)  //通知所有組件，清除登錄信息
    }else if(error.response.status == 1200){
        Message({
            message: '請勿頻繁操作！',
            type: 'warning',
            duration:30000,
            showClose:true
        });
    }else if(error.response.status == 500){
        Message({
            message: '服務器異常，請稍後再試！',
            type: 'warning',
            duration:30000,
            showClose:true
        });
    }
  }
  // Message.error({

  // })
  return Promise.reject(error)
})
export default axios;
