import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//内容區域
import oops_content from '@/components/common/oops_content'
import oops_content_index from '@/components/content_components/oops_content_index'
// 内頁 詳情頁面
import inside_page_content from "@/components/inside_content_components/inside_page_content"
//個人中心 頁面
import personal_center_content from '@/components/personal_center/personal_center_content'
  // 个人中心 子组件
    // 总览
import pandect from '@/components/personal_center/real_content/pandect/pandect'
    // 资料
import user_data from '@/components/personal_center/real_content/user_data/user_data'
    // 文章
import user_article from '@/components/personal_center/real_content/user_article/user_article'
    // 点开
import clickOn from '@/components/personal_center/real_content/clickOn/clickOn'
    // 好文
import good_article from '@/components/personal_center/real_content/good_article/good_article'
    //收益
import earnings from '@/components/personal_center/real_content/earnings/earnings'

// 个人中心
import account from '@/components/account/account'
import account_home from '@/components/account/account_home'
import account_data from '@/components/account/account_data'
import account_doc from '@/components/account/account_doc'
import account_doc_editor from '@/components/account/account_doc_editor'
import account_gains from '@/components/account/account_gains'
import account_gooddoc from '@/components/account/account_gooddoc'
import account_message from '@/components/account/account_message'
import account_open from '@/components/account/account_open'


// 注册
import register from '@/components/login_register/register'
// 登录
import login from '@/components/login_register/login'
// 忘记密码
import forget_password from '@/components/login_register/forget_password'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/',
      component: oops_content,
      children: [
        {path: "index", component: oops_content_index},
        {path: "particulars", component: inside_page_content},
        {path:"personal_center",component:personal_center_content,redirect: '/personal_center/pandect',children:[
            {path:"pandect",component:pandect},// 总览
            {path:"user_data",component:user_data},// 资料
            {path:"user_article",component:user_article},// 文章
            {path:"clickOn",component:clickOn},// 点开
            {path:"good_article",component:good_article},// 好文
            {path:"earnings",component:earnings},//收益
          ]},
        {path:"login",component:login}, //登录
        {path:"register",component:register}, //注册
        {path:"forget_password",component:forget_password} // 忘记密码
      ]
    },
    // 个人中心
    {
      path:'/account',
      redirect:'/account/home',
      component:account,
      children:[
        {path:'data', component:account_data},
        {path:'doc', component:account_doc},
        {path:'doc/editor', component:account_doc_editor},
        {path:'gains', component:account_gains},
        {path:'gooddoc', component:account_gooddoc},
        {path:'home', component:account_home},
        {path:'message', component:account_message},
        {path:'open', component:account_open},
      ]
    },
    // 此配置的位置不可移动
    {path:'*',redirect:'/index'} 
  ]
})
