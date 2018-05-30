<template>

  <div class="nav_down_footer" unselectable="on" onselectstart="return false;" style="-moz-user-select:none;">
    <div class="col-xs-12 media_user_info" style="display: none" v-if="$store.state.judge_login==true">
      <div class="row media_user_none" style="margin: 0;text-align: left;color: #888888;margin-bottom: 10px;">
        <div class="col-xs-4 user_message">
          <i class="fa fa-user"></i>
          當前用戶：
          <span>
                <router-link to="/my" style="color:#37abe3">{{$store.state.user_info.Name}}</router-link>
              </span>
          <span class="subscript">
                  <div class="btn-group">
                    <a href="javascript:;" class="dropdown-toggle caret" style="height: 10px;width: 10px" data-toggle="dropdown" aria-haspopup="true">
                    </a>
                    <ul class="dropdown-menu">
                      <li style="padding: 5px 0"><router-link to="/my/user/dashboard">個人中心</router-link></li>
                      <li style="padding: 5px 0"><a href="javascript:;"  @click="login_out">登出</a></li>
                      <!--<li role="separator" class="divider"></li>-->
                    </ul>
                  </div>
              </span>
        </div>
        <div class="col-xs-4 user_message">
          <i class="fa fa-file-text-o"></i>
          發表文章：
          <span style="color:red">{{$store.state.user_info.ArticleCount}}</span>
        </div>
        <div class="col-xs-4 user_message">
          <i class="fa fa-money"></i>
          有效點擊數：
          <span style="color:red">{{$store.state.user_info.Profit}}</span>
        </div>
      </div>
    </div>
    <div class="row all_type">
      <ul class="col-lg-2 col-md-2 col-sm-2 col-xs-4" v-for="(item,index) in $store.state.nav_type" :key="index">
        <li>
          <router-link :to="{path:'/category/'+item.ID}" >{{item.CategoryName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="btn" v-if="$store.state.judge_login==false">
      <router-link to="/user/login" class="login_btn">
        登錄
      </router-link>
      <router-link to="/user/register" class="register_btn">
        注冊
      </router-link>
    </div>
    <div class="clearfix media_none contact" v-show="$store.state.nav_bar_down_contack">
      <ul class="float-left">
        <li class="float-left"><a href="javascript:;">聯係我們</a></li>
        <li class="float-left division">|</li>
        <li class="float-left"><a href="javascript:;">幫助中心</a></li>
        <li class="float-left division">|</li>
        <li class="float-left"><a href="javascript:;">2018OopsDaily 隱私政策 服務條款 京ICP証080268號</a></li>
      </ul>
      <ul class="float-right clearfix">
        <li class="float-right" style="margin-left: 12px">
          <img src="/static/img/team1.png" alt="">
        </li>
        <li class="float-right" style="margin-left: 12px">
          <img src="/static/img/team2.png" alt="">
        </li>
        <li class="float-right" style="margin-left: 12px">
          <img src="/static/img/team3.png" alt="">
        </li>
        <li class="float-right" style="margin-left: 12px">
          <img src="/static/img/team4.png" alt="">
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  import header_message from "@/axios_joggle/axios_header"
  export default {
    name: "nav_bar_down",
    methods:{
      // 登出
      login_out() {
        // 清除登錄ID
        sessionStorage.setItem('ShareID', "")
        // 清楚登錄  用戶信息
        sessionStorage.setItem('user_info', "")
        // 隱藏 用戶欄
        this.$store.state.judge_login = false
        this.$store.state.user_info = []
        // 请求后台 登出
        users_page.login_out()
        // 跳转到首页
        this.$router.push({path:"/user/login"})
      },
    },
    created(){

    },
    mounted(){

    }
  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 768px) {
    .nav_down_footer {
      padding: 20px !important;
      .media_user_info{
        display: block !important;
      }
      .all_type {
        ul {
          border-right: none !important;
          li{

          }
        }
      }
      .btn {
        display: block !important;
      }
      .contact {
        /*display: none;*/
        >.float-left {
          float: none;
          .float-left {
            float: none;
          }
          .division {
            display: none
          }
        }
        >.float-right{
          float: none;
          margin-top: 10px;
          >.float-right{
            float: none;
            display: inline-block;
          }
        }
      }
    }

  }
  .router-link-active{
    display: inline-block;
    width: 50%;
    border-radius: 30px;
    /*background: rgb(10, 83, 162);*/
    color:  rgb(10, 83, 162) !important;
    /*background: red;*/
  }
  .nav_down_content {
    width: 100%;
    border-bottom: 1px solid #e5e5e5;

    ul {
      padding: 0 58px;
      margin: 30px 0;
      text-align: center;
      li {
        margin: 0;
        a {
          color: #888888;
        }
      }
    }
    :last-child {
      border-right: none;
    }
  }

  .nav_down_footer {
    padding: 50px 50px 0 50px;
    width: 100%;
    background: white;
    .user_message {
      font-size: 14px;
      color: #9a9a9a;
    }
    .col-xs-4,.col-xs-12{
      padding: 0;
    }
    .row{
      margin: 0;
    }
    .all_type {
      padding-bottom: 20px;
      ul {

        li {
          padding: 5px 0;
          text-align: left;
          a {
            /*font-size: 16px;*/
          }
        }
      }
    }
    .btn {
      width: 100%;
      padding: 0;
      display: none; //默認隱藏  等變小屏幕在顯示
      a {
        display: block;
        height: 48px;
        line-height: 48px;
        width: 100%;
        text-decoration: none;
        border-radius: 3px;
      }
      .login_btn {
        background: rgb(238, 238, 238);
        color: rgb(130, 130, 130);
      }
      .register_btn {
        background: rgb(70, 138, 237);
        color: white;
        margin-top: 10px;
      }
    }
    ul {
      margin-bottom: 0;
      li {
        margin: 0;
        color: #d2d2d2;
        a {
          color: #9a9a9a;
          font-size: 12px;
        }
      }
      .division {
        margin: 0 15px;
      }
    }
  }
</style>
