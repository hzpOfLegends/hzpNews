<template>
  <div class="nav_bar">
    <div class="container-fluid">
      <div class="row" style="overflow: hidden">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 nav_name">
          <ul class="clearfix nav_list">
            <li v-for="(item,index) in $store.state.nav_type" :key="index">
              <router-link :to="{path:'/category/'+item.ID}">
                {{item.CategoryName}}
              </router-link>
            </li>

          </ul>
        </div>
        <div class="col-sm-10 col-xs-10 media_block">
          <router-link to="/">
            <span>OOPSDAILY</span>
            <span class="media_414_none">|</span>
            <span class="media_414_none">文章創作分享平台</span>
          </router-link>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" style="position: relative">
          <div @click="nav_toggle" class="click_icon" style="position: absolute;top: 13px;right: 10px">
            <i :class="$store.state.nav_down_icon" id="nav_down_icon" style="color:white;font-size: 20px"></i>
          </div>
        </div>
      </div>
      <div style="height: 100%">
        <div v-show="$store.state.nav_down" class="nav_bar_down "
             style="position: absolute;transform: translateY(0%);left: 0">
          <nav_bar_down/>
          <div class="the_footer clearfix">
            <div class="float-left the_footer_chara col-xs-12" style="padding: 10px">
              <router-link to="/contactus">
                <span @click="footer_show">
                聯係我們
                  </span>
              </router-link>
              <span class="want_line"></span>
              <router-link to="/help">
                <span @click="footer_show">
                幫助中心
                  </span>
              </router-link>
              <span class="want_line "></span>
              <span class="">
              <facebook_share/>
              <google_share/>
              <twitter_share/>
              </span>
            </div>
            <div class="float-right the_footer_icon col-xs-12">
              <router-link to="">
                2018OopsDaily
              </router-link>
              <router-link to="">
                隱私政策
              </router-link>
              <router-link to="">
                服務條款
              </router-link>
              <router-link to="">
                京ICP証080268號
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import nav_bar_down from "@/components/common/nav_bar_down"
  import facebook_share from "@/components/common/share_button/facebook_share_btn"
  import google_share from "@/components/common/share_button/google_share_btn"
  import twitter_share from "@/components/common/share_button/twitter_share_btn"

  export default {
    name: "nav_bar",
    data() {
      return {}
    },
    components: {
      "nav_bar_down": nav_bar_down, //導航下拉
      "facebook_share": facebook_share,
      "google_share": google_share,
      "twitter_share": twitter_share,
      nav_type: []
    },
    created() {

    },
    watch: {},
    methods: {
      // 显示 / 隐藏
      nav_toggle() {
        if (this.$store.state.nav_down_icon == "fa fa-bars") {
          this.$store.state.nav_down = true
          this.$store.state.nav_down_icon = "fa fa-close"
        } else {
          this.$store.state.nav_down = false
          this.$store.state.nav_down_icon = "fa fa-bars"
        }
      },
      footer_show(){
        this.$store.state.foot_all_style = true;
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 414px) {
    .media_414_none {
      display: none;
    }
  }

  @media screen and(min-width: 768px ) {
    .media_block {
      display: none;
    }
  }

  @media screen and(max-width: 768px) {
    .nav_name {
      display: none;
    }

    .the_footer_chara {
      float: none;
    }

    .the_footer_icon {
      float: none;
      text-align: center;
      width: 100%;
    }

    .router-link-active {
      background: none !important;
    }

    .click_icon {
      left: 50%;
      transform: translateX(-50%);
    }

    .media_block {
      display: block;
    }
  }

  .nav_bar {
    width: 100%;
    height: 50px;
    .router-link-active {
      background: rgb(70, 138, 237);
    }
    .container-fluid {
      height: 100%;
      .active {
        background: rgb(70, 138, 237);
      }
      .want_line {
        margin-right: 10px;
        margin-left: 10px;
        border-right: 1px solid rgb(213, 213, 213);
      }
      .the_footer {
        padding: 50px 0 ;
        background: rgb(244, 244, 244);
        vertical-align: top;
        a {
          color: rgb(167, 167, 167);
          background: none;
        }
        .the_footer_chara {
          line-height: 38px;
        }
      }
      .media_block {
        height: 100%;
        text-align: left;
        line-height: 50px;
        a {
          text-decoration: none;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 20px;
        }
        :nth-child(1) {
          font-size: 24px;
          font-weight: 400;
          color: white;
        }
        :nth-child(2) {
          color: #a4a4a4;
          margin: 0 8px;
        }
        :nth-child(3) {
          color: #a4a4a4;
          font-size: 14px;
          font-weight: 300;
          color: white;
        }
      }
      .row {
        height: 100%;
      }
      .nav_name {
        ul {
          margin: 0;
          li {
            float: left;
            line-height: 50px;
            max-width: 80px;
            width: 100%;
            a {
              color: white;
              width: 100%;
              display: inline-block;
            }
          }
          li:hover {
            background: rgb(70, 138, 237);
          }
        }
      }
    }
  }

  .nav_bar_down {
    max-width: 1180px;
    width: 100%;
    box-shadow: 2px 2px 15px gray;
    z-index: 99;
  }
</style>
