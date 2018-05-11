import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  nav_id:"" // 根據導航選擇 來選擇從後臺獲取不同類型的新聞
}
export default new Vuex.Store({
  state,
});

