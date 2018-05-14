import axios from 'axios'
class users_page {
  //用戶注冊
  register(data={}){
    if (data || Object.keys(data).length) {
      return axios.post(axios.path+'api/User/SignUp',data)
    } else {
      console.log('参数不规范')
    }
  }
}
export default new users_page()
