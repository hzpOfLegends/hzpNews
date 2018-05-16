<template>
  <div class="oops_footer" v-if="$store.state.foot_all_style">
    <div class="oops_footer_wrap " v-if="$store.state.footer_style1">
      <div class="container">
        <div class="row">
          <div class="col-3 ">
            <div class="web_name">
              <h2>OOPSDAILY</h2>
              <P>文章創作分享平臺</P>
            </div>
          </div>
          <div class="col-6">
            <div class="web_type">
              <h5>全部分類</h5>
              <span>123</span>
              <span>123</span>
              <span>123</span>
              <span>123</span>
              <span>123</span>
              <span>123</span>
            </div>
          </div>
          <div class="col-3 web_share">
            <router-link to="">
              <img src="../../../static/img/team1.png" alt="">
            </router-link>
            <router-link to="">
              <img src="../../../static/img/team2.png" alt="">
            </router-link>
            <router-link to="">
              <img src="../../../static/img/team3.png" alt="">
            </router-link>
            <router-link to="">
              <img src="../../../static/img/team4.png" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="oops_footer2" v-if="$store.state.footer_style2" >
      <div class="oops_footer_wrap2 clearfix">
        <div class="float-left">
          <router-link to="">@2018OopsDaily</router-link>
          <router-link to="">隱私政策</router-link>
          <router-link to="">服務條款</router-link>
          <router-link to="">京ICP證080268號</router-link>

        </div>
        <div class="float-right">
          <span class="want_line">
            <router-link to="">
              關於我們
            </router-link>
          </span>
          <span class="want_line">
            <router-link to="">
              聯係我們
            </router-link>
          </span>
          <span class="want_line">
            <router-link to="">
              意見反饋
            </router-link>
          </span>
          <span style="padding-left: 10px"  >
            <router-link to="">
              幫助中心
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        judge_login:true,
        judge_login_page:true
      }

    },
    created(){
      //展示底部一
    },

  }
</script>

<style scoped lang="less">
  .oops_footer {
    background-color: white;
    height: 20.25rem;
    .oops_footer_wrap {
      max-width: 73.75rem;
      width: 73.75rem;
      margin: 0 auto;
      height: 100%;
      .container {
        margin: 0;
        padding: 0;
        max-width: 73.75rem;
        width: 100%;
        height: 100%;
        .row {
          height: 100%;
          .web_name {
            padding-top: 48px !important;
            height: 100%;
            border-right: 1px solid #f6f6f6;
            h2 {
              font-weight: 900;
              color: #888888;
            }
          }
          .web_type {
            height: 100%;
            border-right: 1px solid #f6f6f6;
            padding: 3rem 6.6rem 4.37rem 6.6rem !important;
            text-align: left;
            h5 {
              font-size: 16px;
              color: #888888;
              font-weight: 900;
            }
            span {
              display: inline-block;
              width: 90px;
              text-align: left;
            }
          }
          .web_share {
            padding-top: 48px !important;
            a{
              display: inline-block;
              width: 3rem;
              height: 3rem;
              img{
                width: 100%;
              }
            }

          }
        }
      }
    }
    .oops_footer2 {
      background-color: #313131;
      .oops_footer_wrap2 {
        max-width: 73.75rem;
        width: 73.75rem;
        margin: 0 auto;
        height: 3rem;
        a{
          font-size: 14px;
          color: #8d8d8d;
          line-height: 3rem;
        }
        .want_line{
          padding-right: 10px;
          padding-left: 10px;
          border-right: 1px solid #8d8d8d;
          line-height: 3rem;
        }
      }
    }

  }
</style>
