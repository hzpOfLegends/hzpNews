<template>
  <div class="oops_footer" v-if="$store.state.foot_all_style">
    <div class="oops_footer_wrap " v-if="$store.state.footer_style1">
      <div class="">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="web_name">
              <h2>OOPSDAILY</h2>
              <P>文章創作分享平臺</P>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 type-all">
            <div class="web_type">
              <h5>全部分類</h5>
              <type_name/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 web_share">
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
        <div class="float-left" id="copy">
          <router-link to=""><span>@2018OopsDaily</span></router-link>
          <router-link to=""><span>隱私政策</span></router-link>
          <router-link to=""><span>服務條款</span></router-link>
          <router-link to=""><span>京ICP證080268號</span></router-link>

        </div>
        <div class="float-right">
          <span class="want_line">
            <router-link to="">
              關於我們
            </router-link>
          </span>
          <span class="want_line">
            <router-link to="/contactus">
              聯係我們
            </router-link>
          </span>
          <span class="want_line">
            <router-link to="">
              意見反饋
            </router-link>
          </span>
          <span style="padding-left: 10px"  >
            <router-link to="/help">
              幫助中心
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import type_name from "@/components/common/nav_bar_down"
  export default {
    data(){
      return {
        judge_login:true,
        judge_login_page:true
      }

    },
    components:{
      "type_name":type_name
    },
    created(){
      //
      this.$store.state.nav_bar_down_contack = false
    },
    mounted(){
      setTimeout(()=>{
       let ulList = document.querySelectorAll('.all_type>ul')
        for (let i = 0 ; i<ulList.length ; i++){
         ulList[i].style.borderRight = "none"
        }
      },1)
    }
  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 768px){
    .oops_footer_wrap{
      display: none;
    }
  }
  .oops_footer {
    .row {
      margin:0;
    }
    background-color: white !important;
    // height: 20.25rem;
    .oops_footer_wrap {

      margin: 0 auto;
      height: 100%;
        margin: 0;
        padding: 0;
        .row {
          height: 100%;
          .web_name {
            padding-top: 36px !important;
            height: 100%;
            h2 {
              font-weight: 900;
              color: #888888;
            }
          }
          .web_type {
            min-height: 220px;
            border-right: 1px solid #f6f6f6;
            border-left: 1px solid #f6f6f6;
            text-align: left;
            h5 {
              font-size: 16px;
              color: #888888;
              font-weight: 900;
              padding:15px 12% 3px;
              @media screen and  (max-width:768px) {
                  text-align:center;
              }
            }
            span {
              display: inline-block;
              width: 90px;
              text-align: left;
            }
          }

          .web_share {
            margin-top:48px;
            height:70px;
            // background-color:red;;
            a{
              display: inline-block;
              width: 3rem;
              height: 3rem;
              margin: 0 4px;
              img{
                width: 100%;
              }
            }

          }
      }
    }

    .oops_footer2 {
      background-color: #313131;
      .oops_footer_wrap2 {
        margin: 0 auto;
        max-height: 48px;
        height: 100%;
        max-width: 1180px;
        width: 100%;
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
    .types {
        display:flex;
        &>ul {
           flex:0 0 33%;
           li{
             text-align:center;
             padding:5px 0;
           }
        }
    }
    @media screen and  (max-width:414px) {
        #copy {
          span {
            font-size:12px !important;
          }
        }
        .type-all {
          font-size:12px;
        }
        .web_share {
            margin-top:0px !important;
        }
    }

  }
  .nav_down_footer{
    background: white;
    padding: 20px;
  }
</style>
