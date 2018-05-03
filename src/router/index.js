import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//内容區域
import oops_content from '@/components/common/oops_content'
import oops_content_index from '@/components/content_components/oops_content_index'
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/',
      component:oops_content,
      children:[
        {path:"index",component:oops_content_index}
      ]
    }
  ]
})
