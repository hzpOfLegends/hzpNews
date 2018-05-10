import axios from 'axios'
class header_message {
  // 获取导航头的分类
  nav_type(data={}){
    if (data || Object.keys(data).length) {
      return axios.get(axios.path+'api/Daily/GetCategories',{params:data})
    } else {
      console.log('参数不规范')
    }
  }
}
export default new header_message()
