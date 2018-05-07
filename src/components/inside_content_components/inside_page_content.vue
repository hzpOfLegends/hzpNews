<template>
    <div class="inside_page_content">
        <div class="container clearfix">
          <div class="float-left left_content">
            <!--詳情内容-->
            <details_content/>
            <!--同區的其他文章-->
            <other_article style="margin-top: 20px"/>
            <!--<div id="fb-root"><div class="fb-comment-embed" data-href="https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&amp;reply_comment_id=654912701278942" data-width="560" data-include-parent="false"></div></div>-->
          </div>
          <div class="float-right right_content">
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
      components:{
        details_content , // 詳情内容
        other_article , // 同區的其他文章
        related_articles , // 相關文章
      },
      mounted(){
          // facebook 插件
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v3.0';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'))
      }
    }
</script>

<style scoped lang="less">
  .inside_page_content{
    padding-top: 1.0625rem;
    padding-bottom: 1.0625rem;
    .container {
      max-width: 73.75rem;
      width: 73.75rem;
      padding: 0;
      margin: 0;
      .left_content {
        width: 53.1rem;
        max-width: 52.1rem;
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
