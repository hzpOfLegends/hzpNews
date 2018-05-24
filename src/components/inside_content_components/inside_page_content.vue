<template>
  <div class="inside_page_content">
    <div class="container clearfix">
      <div class="float-left left_content">
        <!--詳情内容-->
        <vue-lazy-component>
          <details_content/>
          <details_content_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <div class="float-right right_content related_articles_phone" style="display: none">
          <!--相關文章(适配)-->
          <related_articles/>
        </div>
        <!--同區的其他文章-->
        <vue-lazy-component>
          <other_article style="margin-top: 20px"/>
          <other_article_skeleton slot="skeleton" style="margin-top: 20px"/>
        </vue-lazy-component>
        <!--<div id="fb-root"><div class="fb-comment-embed" data-href="https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&amp;reply_comment_id=654912701278942" data-width="560" data-include-parent="false"></div></div>-->
      </div>
      <div class="float-right right_content related_articles_browser">
        <!--&lt;!&ndash;相關文章&ndash;&gt;-->
        <vue-lazy-component>
          <related_articles/>
          <related_articles_skeleton slot="skeleton"/>
        </vue-lazy-component>
      </div>
    </div>
    <skip_top/>
  </div>
</template>

<script>
  // 詳情内容
  import details_content from '@/components/inside_content_components/real_content/details_content'
  // 同區的其他文章
  import other_article from '@/components/inside_content_components/real_content/other_article'
  // 相關文章
  import related_articles from '@/components/inside_content_components/real_content/related_articles'
  // 點擊到頂部
  import skip_top from '@/components/oneself/skip_top'
  //引入组件  用于加载时 先显示骨架 后显示加载回来的内容----优化性能
  import {component as VueLazyComponent} from '@xunlei/vue-lazy-component'
  // 詳情骨架
  import details_content_skeleton from '@/components/inside_content_components/skeleton/details_content_skeleton'
  // 其他文章骨架
  import other_article_skeleton from '@/components/inside_content_components/skeleton/other_article_skeleton'
  // 相關文章 骨架
  import related_articles_skeleton from '@/components/inside_content_components/skeleton/related_articles_skeleton'

  export default {
    name: "inside_page_content",
    components: {
      details_content, // 詳情内容
      other_article, // 同區的其他文章
      related_articles, // 相關文章
      details_content_skeleton, //詳情内容骨架
      other_article_skeleton,  // 其他文章骨架
      related_articles_skeleton, // 相關文章骨架
      'vue-lazy-component': VueLazyComponent,
      skip_top //點擊到頂部
    },
    watch: {
      '$route': function () {
        // 將滾輪 滾到 頂部
        if ($('html').scrollTop()) {
          $('html').animate({scrollTop: 0}, 1000);
          return false;
        }
        $('body').animate({scrollTop: 0}, 1000);
      }
    },
    mounted() {
      // 將滾輪 滾到 頂部
      if ($('html').scrollTop()) {
        $('html').animate({scrollTop: 0}, 1000);
        return false;
      }
      $('body').animate({scrollTop: 0}, 1000);
      // facebook 插件
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v3.0';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'))
      // 更换背景
      let oops_content_wrap = document.querySelector('.oops_content_wrap')
      oops_content_wrap.style.background = "#f4f4f4"

    },
    created() {
      //展示导航栏
      this.$store.state.nav_style = true
      //隐藏底部
      this.$store.state.foot_all_style = false
    }
  }
</script>

<style scoped lang="less">
  @media screen and (min-width: 1200px) {
    .container {
      max-width: 1180px;
      width: 100%;
      margin: 0 auto;
      .left_content {
        max-width: 848px;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1200px ) {
    .related_articles_phone {
      max-width: 1180px !important;
      float: none !important;
      display: block !important;
    }

    .related_articles_browser {
      display: none !important;
    }
  }

  @media screen and(max-width: 768px) {
    .container {
      max-width: 768px;
    }

    .left_content {
      float: none !important;
    }

    .related_articles_phone {
      max-width: 768px !important;
      float: none !important;
      display: block !important;
    }

    .related_articles_browser {
      display: none !important;
    }

    .right_content_browser {
      display: none !important;
    }
  }

  @media screen and (max-width: 414px) {
    .container {
      max-width: 414px;
      width: 100%;
    }
  }

  .inside_page_content {
    padding-top: 17px;
    padding-bottom: 17px;
    margin: 0 auto;
    .container {
      padding: 0;
      margin: 0;
      margin: 0 auto;
      .left_content {
        max-width: 848px;
        width: 100%;
        padding: 3px;
      }
      .right_content {
        max-width: 320px;
        width: 100%;
        padding: 3px;
      }
    }
  }
</style>
