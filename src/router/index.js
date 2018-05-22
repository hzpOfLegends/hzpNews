import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//内容區域
import index from '@/components/content_components/index'
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
import my from '@/components/my/my'
import my_dashbord from '@/components/my/my_dashbord'
import my_info from '@/components/my/my_info'
// import my_article from '@/components/my/my_article'
import my_article_list from '@/components/my/my_article_list'
import my_article_new from '@/components/my/my_article_new'
import my_payment from '@/components/my/my_payment'
import my_share from '@/components/my/my_share'
import my_message from '@/components/my/my_message'
import my_record from '@/components/my/my_record'


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
      component: index,
      children: [
        {path: "", component: oops_content_index},
        {path: "category/:categoryId", component: oops_content_index},
        {path: "article/:RelationID", component: inside_page_content},
        // {path:"personal_center",component:personal_center_content,redirect: '/personal_center/pandect',children:[
        //     {path:"pandect",component:pandect},// 总览
        //     {path:"user_data",component:user_data},// 资料
        //     {path:"user_article",component:user_article},// 文章
        //     {path:"clickOn",component:clickOn},// 点开
        //     {path:"good_article",component:good_article},// 好文
        //     {path:"earnings",component:earnings},//收益
        //   ]},
      ]
    },
    // 登錄或註冊
    {path:"/user/login",component:login}, //登录
    {path:"/user/register",component:register}, //注册
    {path:"/user/forgetpassword",component:forget_password}, // 忘记密码
    // 个人中心
    {
      path:'/my',
      redirect:'/my/user/dashboard',
      component:my,
      children:[
        {path:'user/dashboard', component:my_dashbord}, //仪表板
        {path:'user/info', component:my_info}, //资料
        // {
        //   path:'article', 
        //   component:my_article,
        //   children:[
        //      {path:'list',component: my_article_list}
        //   ]
        // }, //文章列表
        {path:'article/list', component:my_article_list}, //文章列表
        {path:'article/new', component:my_article_new}, // 新增文章
        {path:'payment/income', component:my_payment}, //收益紀錄
        {path:'share', component:my_share}, // 好文
        {path:'message', component:my_message},
        {path:'record', component:my_record}, //点阅
      ]
    },
    // 此配置的位置不可移动
    {path:'*',redirect:'/'}
  ]
})
