import axios from 'axios'
class inside_page_message {
  //查询文章信息
  get_new_info(data={}){
    if (data || Object.keys(data).length) {
      return axios.get(axios.path+'api/Daily/GetNewInfo',{params:data})
    } else {
      console.log('参数不规范')
    }
  }
}
export default new inside_page_message()
