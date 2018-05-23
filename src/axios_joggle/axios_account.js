import axios from './axios'
class account {
  constructor(path){
    this.path = path
  }
  //获取用户信息
  userInfo(data){
      return axios.post(axios.path + 'api/User/UserInfo',data)
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
  //最近收益
  profitStatistics(data){
      return axios.get(axios.path + 'api/Daily/ProfitStatistics',data)
  }
  //點閱
  record(data){
      return axios.post(axios.path + 'api/Daily/ArticleView',data)
  }
  //修改個人信息
  modifyUserInfo(data){
      return axios.post(axios.path + 'api/User/ModifyUserInfo',data)
  }
  //熱門好文
  hotArticle(data){
      return axios.post(axios.path + 'api/Daily/HotArticle',data)
  }
  
  

}
export default new account(axios.path)
