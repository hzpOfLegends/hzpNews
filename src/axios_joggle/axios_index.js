import axios from 'axios'
class index_message {
  //获取焦点新闻
  focus_news(data={}){
    if (data || Object.keys(data).length) {
      return axios.get(axios.path+'api/Daily/Attration/1',{params:data})
    } else {
      console.log('参数不规范')
    }
  }
  //最近热门
  recent_hot(data={}){
    if (data || Object.keys(data).length) {
      return axios.get(axios.path+'api/Daily/AppendDaily',{params:data})
    } else {
      console.log('参数不规范')
    }
  }
  //大家都在读
  all_read(data={}){
    if (data || Object.keys(data).length) {
      return axios.get(axios.path+'api/Daily/ReadingNews',{params:data})
    } else {
      console.log('参数不规范')
    }
  }
  //热门文章
  hot_article(data={}){
    if (data || Object.keys(data).length) {
      return axios.get(axios.path+'api/Daily/Attration/2',{params:data})
    } else {
      console.log('参数不规范')
    }
  }
  //新增文章
  add_article(data={}){
    if (data || Object.keys(data).length) {
      return axios.get(axios.path+'api/Daily/AppendDailyForToday',{params:data})
    } else {
      console.log('参数不规范')
    }
  }
}
export default new index_message()
