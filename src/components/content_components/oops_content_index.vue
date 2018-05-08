<template>
  <div class="oops_content_index">
      <div class="container clearfix">
        <div class="float-left left_content">
          <!--焦点新闻-->
          <vue-lazy-component>
            <focus_news/>
            <focus_news_skeleton slot="skeleton"/>
          </vue-lazy-component>
          <!--最近热门-->
          <vue-lazy-component style="margin-top: 20px">
            <recent_hot/>
            <recent_hot_skeleton slot="skeleton"/>
          </vue-lazy-component>
          <!--广告-->
          <vue-lazy-component style="margin-top: 20px">
            <advertising_aside2/>
            <advertising_aside2_skeleton slot="skeleton"/>
          </vue-lazy-component>
          <!--大家都在读-->
          <vue-lazy-component style="margin-top: 20px">
            <all_read/>
            <all_read_skeleton slot="skeleton"/>
          </vue-lazy-component>
        </div>
        <div class="float-right right_content">
          <!--广告-->
          <vue-lazy-component>
            <advertising_aside1/>
            <advertising_aside1_skeleton slot="skeleton"/>
          </vue-lazy-component>
          <!--热门文章-->
          <vue-lazy-component style="margin-top: 20px">
            <aside_hot_article/>
            <aside_hot_article_skeleton slot="skeleton"/>
          </vue-lazy-component>
          <!--新增文章-->
          <vue-lazy-component style="margin-top: 20px">
            <aside_add_article/>
            <aside_add_article_skeleton slot="skeleton"/>
          </vue-lazy-component>
        </div>
      </div>
  </div>
</template>

<script>
  import MugenScroll from 'vue-mugen-scroll'
  //引入组件  用于加载时 先显示骨架 后显示加载回来的内容----优化性能
  import {component as VueLazyComponent} from '@xunlei/vue-lazy-component'
  //焦点新闻骨架
  import focus_news_skeleton from '@/components/content_components/skeleton/focus_news_skeleton'
  //最新热门骨架
  import recent_hot_skeleton from '@/components/content_components/skeleton/recent_hot_skeleton'
  //大家都在读骨架
  import all_read_skeleton from '@/components/content_components/skeleton/all_read_skeleton'
  //侧边栏热门文章骨架
  import aside_hot_article_skeleton from '@/components/content_components/skeleton/aside_hot_article_skeleton'
  //侧边栏新增文章骨架
  import advertising_aside2_skeleton from '@/components/content_components/skeleton/advertising_aside2_skeleton'
  // 位于文章中心广告骨架
  import aside_add_article_skeleton from '@/components/content_components/skeleton/aside_add_article_skeleton'
  // 侧边栏广告骨架
  import advertising_aside1_skeleton from '@/components/content_components/skeleton/advertising_aside1_skeleton'
  //焦点新闻实际内容
  import focus_news from '@/components/content_components/real_content/focus_news'
  //最新热门实际内容
  import recent_hot from '@/components/content_components/real_content/recent_hot'
  //大家都在读实际内容
  import all_read from '@/components/content_components/real_content/all_read'
  //侧边栏热门文章实际内容
  import aside_hot_article from "@/components/content_components/real_content/aside_hot_article"
  //侧边栏新增文章实际内容
  import aside_add_article from "@/components/content_components/real_content/aside_add_article"
  // 侧边栏广告
  import advertising_aside1 from '@/components/content_components/advertising/advertising_aside1'
  // 位于文章中心广告
  import advertising_aside2 from '@/components/content_components/advertising/advertising_aside2'

  export default {
    name: "oops_content_index",
    data(){
      return {
        scroll:"",
        innerHeight:""
      }
    },
    components: {
      'vue-lazy-component': VueLazyComponent,  // 引入组件  用于加载时 先显示骨架 后显示加载回来的内容----优化性能
      "focus_news_skeleton": focus_news_skeleton,//焦点新闻骨架
      "recent_hot_skeleton": recent_hot_skeleton,//最新热门骨架
      "all_read_skeleton": all_read_skeleton,//大家都在读骨架
      "aside_hot_article_skeleton": aside_hot_article_skeleton,//侧边栏热门文章骨架
      "aside_add_article_skeleton": aside_add_article_skeleton,//侧边栏新增文章骨架
      "advertising_aside2_skeleton": advertising_aside2_skeleton, // 位于文章中心广告骨架
      "advertising_aside1_skeleton": advertising_aside1_skeleton, //侧边栏广告骨架
      "all_read": all_read,//大家都在读实际内容
      "focus_news": focus_news,//焦点新闻实际内容
      "recent_hot": recent_hot,//最新热门实际内容
      "aside_hot_article": aside_hot_article,//侧边栏热门文章实际内容
      "aside_add_article": aside_add_article,//侧边栏新增文章实际内容
      advertising_aside1,// 侧边栏广告
      advertising_aside2,// 位于文章中心广告
    },
    created(){
      var isbool = true
      $(window).scroll(function() {
        if (($(this).scrollTop() + $(window).height()) >= $(document).height() && isbool==true) {
          // isbool=false;
          // $.get("url",function(data){
          //   $("#content").append(data);//把新的内容加载到内容的后面
          //   isbool=true;
          // })
          console.log(111)
        }
      })
    },
    mounted() {

    },
    methods: {
      infinite(done) {
        setTimeout(() => {
          done()
        }, 1500)
      }
    }
  }
</script>

<style scoped lang="less">
  .oops_content_index {
    padding-top: 1.0625rem;
    padding-bottom: 1.0625rem;
    .scroll-view {
      /* -- Attention: This line is extremely important in chrome 55+! -- */
      touch-action: none;
      /* -- Attention-- */
      position: relative;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }
    .container {
      max-width: 73.75rem;
      width: 73.75rem;
      padding: 0;
      margin: 0;
      .left_content {
        width: 53rem;
        max-width: 53em;
        padding: 0.1875rem;
      }
      .right_content {
        width: 20rem;
        max-width: 20rem;
        padding: 0.1875rem;
      }
    }
  }
</style>
