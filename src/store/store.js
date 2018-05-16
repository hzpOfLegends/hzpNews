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
  judge_login:false // 判断是否登录
}
export default new Vuex.Store({
  state,
  getters
});

