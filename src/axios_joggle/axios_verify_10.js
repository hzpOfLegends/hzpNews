import axios from 'axios'
class verify_time {
  //閲讀 10秒向後臺發送 請求
  timed_10(data={}){
    if (data || Object.keys(data).length) {
      return axios.post(axios.path+'api/Daily/Click',data)
    } else {
      console.log('参数不规范')
    }
  }
}
export default new verify_time()
