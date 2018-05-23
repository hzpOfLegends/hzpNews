import axios from './axios'
class account {
  constructor(path){
    this.path = path
  }
  //文章发布api/Daily/Publish
  publish(data){
      return axios.post(axios.path + 'api/Daily/Publish',data)
  }
  login(data){
      return axios.post(axios.path + 'api/Index/Login',data)
  }
  //獲取本人文章
  getMyNews(data){
      return axios.post(axios.path + 'api/Daily/GetMyNews',data)
  }

  

}
export default new account(axios.path)
