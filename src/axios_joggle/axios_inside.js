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
  //关联文章
  relevance_article(data={}){
    if (data || Object.keys(data).length) {
      return axios.get(axios.path+'api/Daily/Relation',{params:data})
    } else {
      console.log('参数不规范')
    }
  }
  //同区的其他文章
  other_article(data={}){
    if (data || Object.keys(data).length) {
      return axios.post(axios.path+'api/Daily/Index',data)
    } else {
      console.log('参数不规范')
    }
  }
}
export default new inside_page_message()
