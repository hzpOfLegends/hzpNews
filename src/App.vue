<template>
  <div id="app">
    <!--導航-->
    <oops-header></oops-header>
    <!--面包屑-->
    <!--<div class="breadcrumb_wrap">-->
    <!--<b-breadcrumb :items="items"/>-->
    <!--</div>-->
    <!--内容-->
    <div class="oops_content_wrap">
      <div class="oops_content">
        <router-view></router-view>
        <!--點擊到頂部-->
      </div>
    </div>
    <!--底部-->
    <oops-footer></oops-footer>
  </div>
</template>
<script>
  import oopsFooter from '@/components/common/oops_footer'
  import oopsHeader from '@/components/common/oops_header'
  import accountAxios from './axios_joggle/axios_account'
  // 引入路由 獲取導航分類
  import header_message from "@/axios_joggle/axios_header"

  export default {
    name: 'App',
    components: {
      oopsHeader,
      oopsFooter
    },
    watch: {
      "$route.fullPath": "getMeta"
    },
    metaInfo() {
      return {
        title: this.$store.state.meta.title || '',
        meta: this.$store.state.meta.meta || '',
        link: this.$store.state.meta.link || ''
      }
    },
    methods: {
      default_setting(){
        console.log("fuck")
      },
      getMeta() {
        console.log(window.location.origin);
        // 匹配内文
        let insideReg = /^\/article?/
        // 匹配分類 首頁
        let typeIndex = /^\/category?/
        accountAxios.getMeta({url: this.$route.fullPath}).then(res => {
          let d = res.data.Data
          let meta = {
            title: d.title,
            meta: [
              {
                charset: 'UTF-8',
                name: "apple-mobile-web-app-capable",
                content: "yes"
              },
              {
                name: "apple-mobile-web-app-status-bar-style",
                content: "black"
              },
              {
                name: "mobile-web-app-capable",
                content: "yes"
              },
              {
                name: "referrer",
                content: "no-referrer",
              },
              {
                name: "theme-color",
                content: "#00709F"
              },
              {
                name: "viewport",
                content: "width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=5"
              },
              // 需携带参数的meta
              {title: d.title},
              {
                name: "description",
                content: d.description
              },
              {
                name: "keywords",
                content: d.keywords
              },
              {
                name: "title",
                content: d.title
              },
              {
                name: "twitter:card",
                content: "summary_large_image"
              },
              {
                name: "twitter:creator",
                content: "@" + d.siteName
              },
              {
                name: "twitter:description",
                content: d.description
              },
              {
                name: "twitter:image",
                content: d.imageUrl
              },
              {
                name: "twitter:site",
                content: d.twitterSiteName
              },
              {
                name: "twitter:title",
                content: d.title
              },
              {
                name: "twitter:url",
                content: d.canonicalUrl
              },
              {
                property: "fb:app_id",
                content: d.facebookAppId
              },
              {
                property: "fb:pages",
                content: d.facebookPageId
              },
              {
                property: "og:description",
                content: d.description
              },
              {
                property: "og:image",
                content: d.imageUrl
              },
              {
                property: "og:site_name",
                content: d.siteName
              },
              {
                property: "og:title",
                content: d.title
              },
              {
                property: "og:type",
                content: d.pageType
              },
              {
                property: "og:url",
                content: d.canonicalUrl
              }
            ],
            link: [
              {
                rel: "canonical",
                href: d.canonicalUrl
              },
              //ICON
              {
                rel: "shortcut icon",
                href: d.siteIcon,
                type: "image/x-icon"
              },
              {
                rel: "apple-touch-icon",
                href: d.siteImage
              }
            ]
          }
          if (this.$route.fullPath.indexOf('/article') >= 0) {
            // 内文加载
            let inside = [
              {
                property: "article:author",
                content: d.facebookPageUrl
              },
              {
                property: "article:published_time",
                content: d.publishedTime
              },
              {
                property: "article:publisher",
                content: d.siteName
              },
              {
                property: "article:section",
                content: d.section
              }
            ]
            let keyword = d.keywords.split(",")
            for (let l = 0; l < keyword.length; l++) {
              meta.meta.push({property: "article:tag", content: keyword[l]})
            }
            for (let i = 0; i < inside.length; i++) {
              meta.meta.push(inside[i])
            }
          }
          this.$store.commit('setMeta', meta)
        })
        if(this.$route.fullPath.indexOf('/oopsdaily')=="-1"){
          this.$store.state.oopsdaily_control = true
        }else{
          this.$store.state.oopsdaily_control = false
        }
        // 判斷底部 分類
        if (this.$route.fullPath.indexOf("/my") != "-1") {
          this.$store.state.footer_style1 = true
        } else {
          this.$store.state.footer_style1 = false
        }
        // 控制背景圖 儅在登錄 注冊 忘記 密碼的時候換背景圖
        if (this.$route.fullPath.indexOf("/user/login") != "-1" || this.$route.fullPath.indexOf("/user/register") != "-1" || this.$route.fullPath.indexOf("/user/forgetpassword") != "-1") {

          // 底部样式 控制
          //隐藏导航栏
          this.$store.state.nav_style = false
          // 隐藏底部
          this.$store.state.foot_all_style = false
          // 隐藏底部1
          this.$store.state.footer_style1 = false
          // 只是显示底部2
          this.$store.state.footer_style2 = true

          // 更换背景
          setTimeout(() => {
            let oops_content_wrap = document.querySelector('.oops_content_wrap')
            let user_login = document.querySelector('.user_login')
            user_login.style.height = 1080 + "px"
            oops_content_wrap.style.background = "url('/static/img/background1.jpg')"
            oops_content_wrap.style.backgroundSize = "cover"
          }, 1)
        } else if (this.$route.fullPath != "/" && insideReg.test(this.$route.fullPath)==false  && !typeIndex.test(this.$route.fullPath) ) {
          //显示导航栏
          this.$store.state.nav_style = true
          // 显示底部
          this.$store.state.foot_all_style = true
          // 显示底部1
          this.$store.state.footer_style1 = true
          // 显示底部2
          this.$store.state.footer_style2 = true
          // 更换背景
          setTimeout(() => {
            let oops_content_wrap = document.querySelector('.oops_content_wrap')
            oops_content_wrap.style.background = "#f4f4f4"
          }, 1)
        } else if (this.$route.fullPath === "/" || insideReg.test(this.$route.fullPath) == true || typeIndex.test(this.$route.fullPath)) {

          //隐藏导航栏
          this.$store.state.nav_style = false
          // 显示底部
          this.$store.state.foot_all_style = false
          // 隐藏底部1
          this.$store.state.footer_style1 = false
          // 隐藏底部2
          this.$store.state.footer_style2 = false
          // 更换背景
          setTimeout(() => {
            let oops_content_wrap = document.querySelector('.oops_content_wrap')
            oops_content_wrap.style.background = "#f4f4f4"
          }, 1)
        }
        else {
          // 更换背景
          setTimeout(() => {
            let oops_content_wrap = document.querySelector('.oops_content_wrap')
            oops_content_wrap.style.background = "#f4f4f4"
          }, 1)
        }
        // if(this.$route.fullPath.indexOf(""))
        // 點擊其他地方 關閉導航下拉
        this.$store.state.nav_down = false;
        this.$store.state.nav_down_icon = "fa fa-bars"
      }
    },
    data() {
      return {
        items: [{
          text: '首頁',
          href: '/'
        }, {
          text: 'Library',
          active: true
        }],
        skip_top: true //點擊到頂部按鈕
      }
    },
    created() {
      // 此判断是 为了插入广告 relate_article 根据不同屏幕而改变 所以display:none 解决不了（因为在获取元素的时候会获取俩个） ， 所以 用v-if
      if (window.innerWidth <= 1200) {
        this.$store.state.related_article_cut = false
      } else {
        this.$store.state.related_article_cut = true
      }
      if (window.innerWidth <= 768) {
        this.$store.state.phone_use = true
      } else {
        this.$store.state.phone_use = false
      }
      // 獲取導航分類
      header_message.nav_type().then(res => {
        if (res.data.Data) {
          this.$store.state.nav_type = res.data.Data
        }
      }).catch(err => {
        console.log(err)
      })
      // 獲取登錄后返回的用戶信息 存於 vuex
      if (localStorage.getItem("user_info")) {
        this.$store.state.user_info = JSON.parse(localStorage.getItem("user_info"))
        this.$store.state.judge_login = true
      }
      this.getMeta()
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #f4f4f4;
    /*.breadcrumb_wrap{*/
    /*width: 73.75rem;*/
    /*!*width: 1180px;*!*/
    /*margin: 0 auto;*/
    /*background-color: white;*/
    /*.breadcrumb{*/
    /*background-color: white;*/
    /*margin:  0;*/
    /*padding-left: 0;*/
    /*}*/
    /*}*/

    .oops_content_wrap {
      // max-width:73.75rem;
      // width: 73.75rem;
      margin: 0 auto;
      .oops_content {
        min-height: 300px;
        margin: 0 auto;
      }
    }
  }
</style>
