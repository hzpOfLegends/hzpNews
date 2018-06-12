<template>
  <div class="oops_content_index" @click="close_nav_down">
    <div class="container clearfix">
      <div class="float-left left_content" @get_requestCount="get_requestCount">
        <!--焦点新闻-->
        <vue-lazy-component  v-if="$store.state.phone_use==false">
          <focus_news :focus_news_data="focus_news_data"/>
          <focus_news_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <focus_news v-if="$store.state.phone_use==true" :focus_news_data="focus_news_data"/>
        <!--广告 (适配)-->
        <!--<vue-lazy-component class="advertising_aside1_phone" style="display: none ;margin-top: 20px">-->
          <!--<advertising_aside1/>-->
          <!--<advertising_aside1_skeleton slot="skeleton"/>-->
        <!--</vue-lazy-component>-->

        <!--最近热门-->
        <vue-lazy-component style="margin-top: 20px" v-if="$store.state.phone_use==false">
          <recent_hot :recent_hots="recent_hots"/>
          <recent_hot_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <recent_hot v-if="$store.state.phone_use==true" style="margin-top: 20px" :recent_hots="recent_hots"/>
        <!--广告-->
        <!--<vue-lazy-component style="margin-top: 20px" class="advertising_aside2_browser">-->
          <!--<advertising_aside2/>-->
          <!--<advertising_aside2_skeleton slot="skeleton"/>-->
        <!--</vue-lazy-component>-->
        <!--大家都在读-->
        <vue-lazy-component style="margin-top: 20px" class="all_read_browser" v-if="$store.state.phone_use==false">
          <all_read :all_read="all_read" v-on:loadMore="load_more"/> <!-- 這裏的loadMore 子組件 向父組件 傳值 然後父組件 再給子組件傳值-->
          <all_read_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <all_read v-if="$store.state.phone_use==true" class="all_read_browser" style="margin-top: 20px" :all_read="all_read" v-on:loadMore="load_more"/>
      </div>
      <div class="float-right right_content">
        <!--广告-->
        <!--<vue-lazy-component class="advertising_aside1_browser">-->
          <!--<advertising_aside1/>-->
          <!--<advertising_aside1_skeleton slot="skeleton"/>-->
        <!--</vue-lazy-component>-->
        <!--热门文章-->
        <vue-lazy-component v-if="$store.state.phone_use==false">
          <aside_hot_article :hot_article="hot_article"/>
          <aside_hot_article_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <aside_hot_article style="margin-top: 20px" v-if="$store.state.phone_use==true" :hot_article="hot_article"/>
        <!--广告 (适配)-->
        <!--<vue-lazy-component style="margin-top: 20px;display: none" class="advertising_aside2_phone">-->
          <!--<advertising_aside2/>-->
          <!--<advertising_aside2_skeleton slot="skeleton"/>-->
        <!--</vue-lazy-component>-->
        <!--新增文章-->
        <vue-lazy-component style="margin-top: 20px" v-if="$store.state.phone_use==false">
          <aside_add_article :add_articles="add_articles"/>
          <aside_add_article_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <aside_add_article v-if="$store.state.phone_use==true" style="margin-top: 20px" :add_articles="add_articles"/>
        <!--大家都在读 (适配)-->
        <vue-lazy-component style="margin-top: 20px ;display: none" class="all_read_phone" v-if="$store.state.phone_use==false">
          <all_read :all_read="all_read" v-on:loadMore="load_more"/>
          <all_read_skeleton slot="skeleton"/>
        </vue-lazy-component>
        <all_read v-if="$store.state.phone_use==true" class="all_read_phone" style="margin-top: 20px ;display: none" :all_read="all_read" v-on:loadMore="load_more"/>
      </div>

    </div>
    <skip_top/>
  </div>
</template>

<script>
  // 引入广告 插件
  import advertising from '@/assets/advertHandler'
  // 引入路由
  import index_message from '@/axios_joggle/axios_index'
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
        innerHeight: "",
        recent_hot: [], //大家都在读
        focus_news_data: [], //焦点文章
        recent_hots: "", //最近热门
        hot_article: [], // 热门文章
        all_read:"", //大家都在读
        add_articles:[], // 新增文章
        requestCount: 0// 文章
      }
    },
    // 寫一個計算屬性 利用watch 監聽
    computed: {
      get_nav_id() {
        return this.$store.state.nav_id;
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
      // 控制最頂部 進度條 將進度條歸零
      this.requestCount = 0
      // 进度条开始
      this.$NProgress.start()
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
      if (localStorage.getItem('ShareID')) {
        this.$store.state.foot_all_style = false
      }
      // 统一请求
      // 焦点新闻请求
      index_message.focus_news({CategoryID: this.$route.params.categoryId ? this.$route.params.categoryId : '-1'}).then(res => {
        this.focus_news_data = res.data.Data[0]
        this.requestCount++
      }).catch(err => {
        console.log(err)
      })
      // 最近热门
      index_message.recent_hot({CategoryID: this.$route.params.categoryId? this.$route.params.categoryId : '-1'}).then(res => {
        if (res.data.Data) {
          this.recent_hots = res.data.Data
        }
        this.requestCount++
      }).catch(err => {
        console.log(err)
      })
      // 热门文章
      index_message.hot_article({CategoryID: this.$route.params.categoryId ? this.$route.params.categoryId : '-1'}).then(res => {
        this.hot_article = res.data.Data
        this.requestCount++
      }).catch(err => {
        console.log(err)
      })
      //大家都在读
      index_message.all_read({"pageSize": "20", "pageIndex": 1}).then(res => {
        this.requestCount++
        if(res.data.Data){
          if( res.data.Data.news.length < 20 || res.data.ResultCode==201){
            this.$store.state.loading_style = false
            return
          }
          this.all_read = res.data.Data.news
        }else{
          this.$store.state.loading_style = false
        }

      }).catch(err => {
      })
      //新增文章
      index_message.add_article({CategoryID:this.$route.params.categoryId?this.$route.params.categoryId:'-1'}).then(res => {
        // 存返回的值
        let a =  res.data.Data
        // 定义个空数组 用来存储 2-20的新闻
        let b = []
        // 取出第一个  因为第一条新闻展示图片
        if(b.c){
          b.c = res.data.Data.shift()
        }

        // 取出剩余的新闻
        b.d = a
        this.add_articles = b
        this.requestCount++
      }).catch(err => {
        console.log(err)
      })
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
      "$route.path": "listenType",
      "requestCount": "closeNProgress",
      get_nav_id: function () {
        this.$NProgress.start()
        // 此处在切换tab栏时删除 热门文章广告 因为广告会受前个广告影响存在
        this.$nextTick(()=>{
          let advertisings = document.querySelectorAll(".aside_hot_article .advertising")
          advertising.reloadAdvert(advertisings)
        })
        this.$store.state.all_read_start = 1
        // 焦点新闻请求
        index_message.focus_news({CategoryID: this.$route.params.categoryId ? this.$route.params.categoryId : '-1'}).then(res => {
          this.focus_news_data = res.data.Data[0]
          this.requestCount++
        }).catch(err => {
          console.log(err)
        })
        // 最近热门
        index_message.recent_hot({CategoryID: this.$route.params.categoryId ? this.$route.params.categoryId : '-1'}).then(res => {
          if (res.data.Data) {
            this.recent_hots = res.data.Data

          }
          this.requestCount++
        }).catch(err => {
          console.log(err)
        })
        // 热门文章
        index_message.hot_article({CategoryID: this.$route.params.categoryId ? this.$route.params.categoryId : '-1'}).then(res => {
          this.hot_article = res.data.Data
          this.requestCount++
        }).catch(err => {
          console.log(err)
        })
        //新增文章
        index_message.add_article({CategoryID:this.$route.params.categoryId?this.$route.params.categoryId:'-1'}).then(res => {
          if(res.data.Data){
            // 存返回的值
            let a =  res.data.Data
            // 定义个空数组 用来存储 2-20的新闻
            let b = []
            // 取出第一个  因为第一条新闻展示图片
            b.c = res.data.Data.shift()
            // 取出剩余的新闻
            b.d = a
            this.add_articles = b
          }
          this.requestCount++
        }).catch(err => {
          console.log(err)
        })
      }

    },
    methods: {
      get_requestCount(val) {
      },
      // 加載更多
      load_more(val){
        for (let i = 0; i < val.length; i++) {
          this.all_read.push(val[i])
        }
      },
      // 加載更多 條
      infinite(done) {
        setTimeout(() => {
          done()
        }, 1500)
      },
      // 點擊其他地方 關閉導航下拉
      close_nav_down(){
        this.$store.state.nav_down = false;
        this.$store.state.nav_down_icon = "fa fa-bars"
      },
      // 关闭进度条
      closeNProgress() {
        if (this.requestCount >= 4) {
          this.$NProgress.done()
          this.requestCount = 0
        }
      },
      listenType() {
        if (this.$route.path) {
          let CategoryID = this.$route.path.split('/')[2]
          // 傳到vuex中 用來實現同步 切換類型
          this.$store.state.nav_id = CategoryID
        } else {
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
    background: #f4f4f4;
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
