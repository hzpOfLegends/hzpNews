<template>
  <div class="oops_content_index">
    <div class="container clearfix">
      <div class="float-left left_content">
        <!--焦点新闻-->
        <vue-lazy-component>
          <focus_news/>
          <focus_news_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <!--广告 (适配)-->
        <vue-lazy-component class="advertising_aside1_phone" style="display: none ;margin-top: 20px">
          <advertising_aside1/>
          <advertising_aside1_skeleton slot="skeleton"/>
        </vue-lazy-component>

        <!--最近热门-->
        <vue-lazy-component style="margin-top: 20px">
          <recent_hot/>
          <recent_hot_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <!--广告-->
        <vue-lazy-component style="margin-top: 20px" class="advertising_aside2_browser">
          <advertising_aside2/>
          <advertising_aside2_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <!--大家都在读-->
        <vue-lazy-component style="margin-top: 20px" class="all_read_browser">
          <all_read/>
          <all_read_skeleton slot="skeleton"/>
        </vue-lazy-component>
      </div>
      <div class="float-right right_content">
        <!--广告-->
        <vue-lazy-component class="advertising_aside1_browser">
          <advertising_aside1/>
          <advertising_aside1_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <!--热门文章-->
        <vue-lazy-component style="margin-top: 20px">
          <aside_hot_article/>
          <aside_hot_article_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <!--广告 (适配)-->
        <vue-lazy-component style="margin-top: 20px;display: none" class="advertising_aside2_phone">
          <advertising_aside2/>
          <advertising_aside2_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <!--新增文章-->
        <vue-lazy-component style="margin-top: 20px">
          <aside_add_article/>
          <aside_add_article_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <!--大家都在读 (适配)-->
        <vue-lazy-component style="margin-top: 20px ;display: none" class="all_read_phone">
          <all_read/>
          <all_read_skeleton slot="skeleton"/>
        </vue-lazy-component>
      </div>

    </div>
    <skip_top/>
  </div>
</template>

<script>
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
  // 點擊到頂部
  import skip_top from '@/components/oneself/skip_top'

  export default {
    name: "oops_content_index",
    data() {
      return {
        scroll: "",
        innerHeight: ""
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
      skip_top //點擊到頂部
    },
    created() {
      var isbool = true
      $(window).scroll(function () {
        if (($(this).scrollTop() + $(window).height()) >= $(document).height() && isbool == true) {

        }
      })
      //展示导航栏
      this.$store.state.nav_style = true
      //隐藏底部
      this.$store.state.foot_all_style = false
      this.$store.state.footer_style1 = true
      if (sessionStorage.getItem('ShareID')) {
        this.$store.state.foot_all_style = true
      }
    },
    watch: {
      "$route": function () {
        // 將滾輪 滾到 頂部
        if ($('html').scrollTop()) {
          $('html').animate({scrollTop: 0}, 1000);
          return false;
        }
        $('body').animate({scrollTop: 0}, 1000);
      },
      "$route.path": "listenType"
    },
    mounted() {
      // 更换背景
      let oops_content_wrap = document.querySelector('.oops_content_wrap')
      oops_content_wrap.style.background = "#f4f4f4"
    },
    methods: {
      infinite(done) {
        setTimeout(() => {
          done()
        }, 1500)
      },
      listenType() {
        if(this.$route.path){
            let CategoryID = this.$route.path.split('/')[2]
            // 傳到vuex中 用來實現同步 切換類型
            this.$store.state.nav_id = CategoryID
        }else{
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @media screen and  (min-width: 1200px) {
    .container {
      max-width: 1180px;
      width: 100%;

    }

    .left_content {
      width: 100%;
    }

    .right_content {
      max-width: 320px;
      width: 100%;
    }
  }

  @media screen and (max-width: 1200px) {
    .right_content {
      max-width: 1180px !important;
    }

    .left_content {
      max-width: 1180px !important;
    }

    .advertising_aside2_phone {
      display: block !important;
    }

    .advertising_aside1_phone {
      display: block !important;
    }

    .advertising_aside2_browser {
      display: none !important;
    }

    .all_read_browser {
      display: none !important;
    }

    .all_read_phone {
      display: block !important;
    }
  }

  @media screen and (max-width: 768px) {
    .left_content {
      max-width: 768px;
      float: none !important;
    }

    .oops_content_index {
      .container {
        max-width: 768px;
        display: block;
      }
    }

    .right_content {
      max-width: 768px !important;
      float: none !important;
    }
  }

  .oops_content_index {
    padding-top: 17px;
    padding-bottom: 17px;

    .container {
      /*max-width: 73.75rem;*/
      /*width: 73.75rem;*/
      /*width: 1180px;*/
      /*max-width: 1180px;*/
      padding: 0;
      margin: 0;
      margin: 0 auto;

      .left_content {
        max-width: 848px;
        width: 100%;
        padding: 3px;

      }
      .right_content {
        /*max-width: 20rem;*/
        max-width: 320px;
        width: 100%;
        padding: 3px;
      }
    }
  }
</style>
