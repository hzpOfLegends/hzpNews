import axios from 'axios'

class users_page {
  //用戶注冊
  register(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post(axios.path + 'api/User/SignUp', data)
    } else {
      console.log('参数不规范')
    }
  }

  // 用戶登錄
  login(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post(axios.path + 'api/Index/Login', data)
    } else {
      console.log('参数不规范')
    }
  }

  // 登錄后獲取用戶信息
  login_user_info(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post(axios.path + 'api/User/UserInfo', data)
    } else {
      console.log('参数不规范')
    }
  }

  // 忘記密碼 / 發送郵箱驗證碼
  send_email_code(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post(axios.path + 'api/User/RetrievePasswordSendMail', data)
    } else {
      console.log('参数不规范')
    }
  }

  // 忘記密碼 / 驗證郵箱驗證碼
  verify_email_code(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.get(axios.path + 'api/User/verifyEmail', {params: data})
    } else {
      console.log('参数不规范')
    }
  }
  // 重置密碼
  reset_email_code(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post(axios.path + 'api/User/RetrievePassword', data)
    } else {
      console.log('参数不规范')
    }
  }
  // 登出接口
  login_out(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post(axios.path + 'api/Index/Logout', data)
    } else {
      console.log('参数不规范')
    }
  }

}

export default new users_page()
