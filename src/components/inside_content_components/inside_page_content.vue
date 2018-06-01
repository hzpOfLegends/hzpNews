<template>
  <div class="inside_page_content" @click="close_nav_down">
    <div class="container clearfix">
      <div class="float-left left_content">
        <!--詳情内容-->
        <vue-lazy-component  v-if="$store.state.phone_use==false">
          <details_content :details="details" />
          <details_content_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <details_content v-if="$store.state.phone_use==true" :details="details" />
        <div class="float-right right_content related_articles_phone" style="display: none">
          <!--相關文章(适配)-->
          <related_articles/>
        </div>
        <!--同區的其他文章-->
        <vue-lazy-component v-if="$store.state.phone_use==false">
          <other_article style="margin-top: 20px"/>
          <other_article_skeleton slot="skeleton" style="margin-top: 20px"/>
        </vue-lazy-component>
        <other_article v-if="$store.state.phone_use==true" style="margin-top: 20px"/>
        <!--<div id="fb-root"><div class="fb-comment-embed" data-href="https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&amp;reply_comment_id=654912701278942" data-width="560" data-include-parent="false"></div></div>-->
      </div>
      <div class="float-right right_content related_articles_browser">
        <!--&lt;!&ndash;相關文章&ndash;&gt;-->
        <vue-lazy-component v-if="$store.state.phone_use==false">
          <related_articles :hot_article="hot_article"/>
          <related_articles_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <related_articles v-if="$store.state.phone_use==true" :hot_article="hot_article" />
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
  // 引入路由
  import inside_page_message from '@/axios_joggle/axios_inside'
  import verify_time from '@/axios_joggle/axios_verify_10'
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
    data(){
      return {
        details:"", // 传过去details 子组件的值
        hot_article:"", // 传过去 子组件relate的值
        requestCount:0 // 进度条的值
      }
    },
    watch: {
      "$route.path":function () {
        console.log("start")
        // 控制最頂部 進度條 將進度條歸零
        this.requestCount = 0
        // 開啓進度條
        this.$NProgress.start()
        // 详情 请求
            // other_article
        inside_page_message.get_new_info({RelationID: this.$route.path.split('/')[2]}).then(res => {
          this.details = res.data.Data
          localStorage.setItem('CategoryID',this.details.CategoryID)
          inside_page_message.other_article({
            pageSize: 20,
            pageIndex: 1,
            CategoryID: localStorage.getItem('CategoryID')?localStorage.getItem('CategoryID'):this.details.CategoryID,
            RelationID: this.$route.params.RelationID
          }).then(res=>{
            this.$store.state.other_article_content = res.data.Data.news
            // 进度条加1
            this.requestCount++
            console.log(1,this.requestCount)
          })
          // 將返回的圖片 設置為100% 因爲返回的圖片太大 超出屏幕
          setTimeout(() => {
            let imgs = document.querySelectorAll('img')
            for (let i = 0; i < imgs.length; i++) {
              imgs[i].style.maxWidth = '100%'
              imgs[i].style.height = "auto"
            }
          }, 1)
          // 設置定時器 10秒 用於后露記錄
          setTimeout(() => {
            verify_time.timed_10({"RelationID":this.$route.params.RelationID,"ShareID":this.$route.query.r?this.$route.query.r:""}).then(res => {
            }).catch(err => {
              console.log(err)
            })
          }, 10000)
        }).catch(err => {
        })

        // related
        inside_page_message.relevance_article({newsId:this.$route.path.split('/')[2],size:20}).then(res => {
          this.hot_article = res.data.Data
          // 进度条加1
          this.requestCount++
          console.log(2,this.requestCount)
        }).catch(err => {
          console.log(err)
        })
      },
      '$route': function () {
        // 將滾輪 滾到 頂部
        if ($('html').scrollTop()) {
          $('html').animate({scrollTop: 0}, 500);
          return false;
        }
        $('body').animate({scrollTop: 0}, 500);
      },
      "requestCount":"closeNProgress"
    },
    methods:{
      // 點擊其他地方 關閉導航下拉
      close_nav_down(){
        this.$store.state.nav_down = false;
        this.$store.state.nav_down_icon = "fa fa-bars"
      },
      // 关闭进度条
      closeNProgress(){
        if(this.requestCount >= 2){
          this.$NProgress.done()
          this.requestCount = 0
        }
      },
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
      // 控制最頂部 進度條 將進度條歸零
      this.requestCount = 0
      // 进度条开始
      this.$NProgress.start()
      // 详情 请求
      inside_page_message.get_new_info({RelationID: this.$route.path.split('/')[2]}).then(res => {
        this.details = res.data.Data
        localStorage.setItem('CategoryID',this.details.CategoryID)
        inside_page_message.other_article({
          pageSize: 20,
          pageIndex: 1,
          CategoryID: localStorage.getItem('CategoryID')?localStorage.getItem('CategoryID'):this.details.CategoryID,
          RelationID: this.$route.params.RelationID
        }).then(res=>{
          this.$store.state.other_article_content = res.data.Data.news
          // 进度条加1
          this.requestCount++
        })
        setTimeout(() => {
          let imgs = document.querySelectorAll('img')
          for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.maxWidth = '100%'
            imgs[i].style.height = "auto"
          }
        }, 1)
        setTimeout(() => {
          verify_time.timed_10({"RelationID":this.$route.params.RelationID,"ShareID":this.$route.query.r?this.$route.query.r:""}).then(res => {
          }).catch(err => {
            console.log(err)
          })
        }, 10000)
      }).catch(err => {
      })
      // related
      inside_page_message.relevance_article({newsId:this.$route.path.split('/')[2],size:20}).then(res => {
        this.hot_article = res.data.Data
        // 进度条加1
        this.requestCount++
      }).catch(err => {
        console.log(err)
      })
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
    background: #f4f4f4;
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
