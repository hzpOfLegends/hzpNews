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
      "$route.fullPath": "getMeta",
    },
    metaInfo() {
      return {
        title: this.$store.state.meta.title || '',
        meta: this.$store.state.meta.meta || '',
        link: this.$store.state.meta.link || ''
      }
    },
    methods: {
      getMeta() {
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
      // 獲取導航分類
        header_message.nav_type().then(res => {
          if(res.data.Data){
            this.$store.state.nav_type = res.data.Data
          }
        }).catch(err => {
          console.log(err)
        })
      // 獲取登錄后返回的用戶信息 存於 vuex
      if(localStorage.getItem("user_info")){
        this.$store.state.user_info=JSON.parse(localStorage.getItem("user_info"))
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
