<template>
  <div class="inside_page_content">
    <div class="container clearfix">
      <div class="float-left left_content">
        <!--詳情内容-->
        <details_content/>
        <div class="float-right right_content related_articles_phone" style="display: none">
          <!--相關文章(适配)-->
          <related_articles/>
        </div>
        <!--同區的其他文章-->
        <other_article style="margin-top: 20px"/>
        <!--<div id="fb-root"><div class="fb-comment-embed" data-href="https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&amp;reply_comment_id=654912701278942" data-width="560" data-include-parent="false"></div></div>-->
      </div>
      <div class="float-right right_content related_articles_browser">
        <!--相關文章-->
        <related_articles/>
      </div>
    </div>
  </div>
</template>

<script>
  // 詳情内容
  import details_content from '@/components/inside_content_components/real_content/details_content'
  // 同區的其他文章
  import other_article from '@/components/inside_content_components/real_content/other_article'
  // 相關文章
  import related_articles from '@/components/inside_content_components/real_content/related_articles'

  export default {
    name: "inside_page_content",
    components: {
      details_content, // 詳情内容
      other_article, // 同區的其他文章
      related_articles, // 相關文章
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
  @media screen and(max-width: 768px){
    .left_content{
      float: none !important;
    }
    .related_articles_phone{
      max-width: 768px !important;
      float: none !important;
      display: block !important;
    }
    .right_content_browser{
      display: none !important;
    }
  }
  .inside_page_content {
    padding-top: 1.0625rem;
    padding-bottom: 1.0625rem;
    margin: 0 auto;
    .container {
      max-width: 73.75rem;
      padding: 0;
      margin: 0;
      margin: 0 auto ;
      .left_content {
        max-width: 834px;
        padding: 0.1875rem;
      }
      .right_content {
        max-width: 320px;
        padding: 0.1875rem;
      }
    }
  }
</style>
