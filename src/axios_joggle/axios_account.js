import axios from 'axios'
class account {
  //文章发布api/Daily/Publish
  publish(data){
      return axios.post(axios.path + '/api/Daily/Publish',data)
  }
  login(data){
      return axios.post(axios.path + '/api/Index/Login',data)
  }

}
export default new account()
