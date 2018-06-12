import Vue from 'vue';
import Vuex from 'vuex';
import {getters} from '@/store/getters'
Vue.use(Vuex);
const state = {
  nav_id:"", // 根據導航選擇 來選擇從後臺獲取不同類型的新聞
  footer_style1:true, // 底部（包括分类）
  footer_style2:true, // 最底部
  foot_all_style:true, // 底部全部样式
  nav_style:true, //导航栏
  loading_style:true, // loading的样式
  judge_login:false, // 判断是否登录
  nav_down:false, // 首頁導航欄點擊下拉
  nav_down_icon:"fa fa-bars",
  nav_bar_down_contack:true, // 下拉聯係我們 // 在底部 不讓他顯示
  nav_type:'', // 導航分類
  user_info:"" , // 登錄成功后 再次請求 返回的信息
  meta:{},
  is401:false, //檢測此值變動，清除登錄信息
  index_requestCount: 0 , // 首页 - 页面进度条
  inside_requestCount: 0, // 内页 - 页面进度条
  other_article_content:[], // 内页其他文章 , 由于转发 session里没有id  所以 在请求完详情 返回id 后 再去请求 同区其他文章
  submit_hint:"", // 登陸注冊提示語 ， 在axios.js 統一處理
  phone_use:false, //移動端不用骨架
  loading_progress:true, //同区其他文章 下拉无限加载
  loading_more:true, // 判断返回的数据如果少于20条 就不在加载更多
  refreshUserInfo:false, //通知全局获取userinfo
  related_article_cut:false, // related_articles 页面 不同宽度 显示不同 如用display：none 会影响广告插入
  all_read_start:0,
  oopsdaily_control:true, // oopsdaily 的时候 隐藏
}
const mutations = {
    setMeta(state,value){
        state.meta = value;
    },
    setIs401(state,value){
        state.is401 = value
    }
}
export default new Vuex.Store({
  state,
  mutations
});

