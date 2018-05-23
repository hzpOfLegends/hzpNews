import axios from 'axios'
class user_feedback {
  // 提交反饋
  get_feedback(data={}){
    if (data || Object.keys(data).length) {
      return axios.post(axios.path+'api/FeedBack/Add',data)
    } else {
      console.log('参数不规范')
    }
  }
}
export default new user_feedback()
