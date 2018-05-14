import axios from 'axios'
// axios.path = "http://35.194.241.228/"
axios.path = "/apis"
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading

  switch (data.data.ResultCode)
  {
    case 200 :
      console.log('成功')
      break;
    case 1003 :
      alert('登陆失败')
      break;
    case 1000 :
      alert('参数错误')
      break;
    case 1100 :
      alert('非法的数据')
      break;
    case 1200 :
      alert('频繁的请求操作')
      break;
    case 500 :
      alert('服务器异常')
      break;
  }
  return data
}, error => {

  Message.error({

  })
  return Promise.reject(error)
})
export default axios;
