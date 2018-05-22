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
  nav_bar_down_contack:true, // 下拉聯係我們 // 在底部 不讓他顯示
  nav_type:[], // 導航分類
}
export default new Vuex.Store({
  state,
  getters
});

