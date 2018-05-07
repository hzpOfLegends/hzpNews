import axios from 'axios'
axios.path = "/apis"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
class index_message {
  //获取焦点新闻
  focus_news(data={}){
    if (data || Object.keys(data).length) {
      return axios.get(axios.path+'api/Daily/Attration/1',{params:data})
    } else {
      console.log('参数不规范')
    }
  }
}
export default new index_message()
