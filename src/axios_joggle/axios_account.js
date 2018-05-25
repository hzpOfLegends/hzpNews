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
      return axios.get(axios.path + 'api/Daily/ProfitStatistics',{params:data})
  }
  //點閱/點閱詳情
  record(data){
      return axios.post(axios.path + 'api/Daily/ArticleView',data)
  }
  //修改個人信息
  modifyUserInfo(data){
      return axios.post(axios.path + 'api/User/ModifyUserInfo',data)
  }
  //修改用戶密碼
  modifyUserPassword(data){
      return axios.post(axios.path + 'api/User/ModifyPassword',data)
  }
  //熱門好文
  hotArticle(data){
      return axios.post(axios.path + 'api/Daily/HotArticle',data)
  }
  //删除文章
  deleteArticle(data){
      return axios.post(axios.path + 'api/Daily/RemoveDaily',data)
  }
  //獲取文章詳情
  getNewInfo(data){
      return axios.get(axios.path + 'api/Daily/GetNewInfo',{params:data})
  }
  //編輯個人文章
  editArticle(data){
      return axios.post(axios.path + 'api/Daily/ModifyDaily',data)
  }
  //獲取分類列表
  getCategories(data){
      return axios.get(axios.path + 'api/Daily/GetCategories',{params:data})
  }
  // 獲取meta
  getMeta(data){
      return axios.get(axios.path + 'api/Meta/GetMeta',{params:data})
  }
  // 发送邮箱验证码
  sendEmailCode(data){
      return axios.post(axios.path + 'api/User/SendMail',data)
  }
  // 郵箱驗證
  verifyEmail(data){
      return axios.get(axios.path + 'api/User/verifyEmail',{params:data})
  }
  // 修改用戶郵箱
  modifyEmail(data){
      return axios.post(axios.path + 'api/User/ModifyUserEmail',data)
  }
  // 发送手機验证码
  sendPhoneCode(data){
      return axios.post(axios.path + 'api/User/SendSMS',data)
  }
  // 校驗手機驗證碼
  verifyPhone(data){
      return axios.post(axios.path + 'api/User/VerifySMS',data)
  }
  // 修改手機
  modifyPhone(data){
      return axios.post(axios.path + 'api/User/ModifyUserPhone',data)
  }
  // 上传头像像接口, 最大支持80k 文件格式为jpg\png\jpeg
  uploadAvatar(data){
      return axios.post(axios.path + 'api/Upload/UploadAvatar',data)
  }

  
  

}
export default new account(axios.path)
