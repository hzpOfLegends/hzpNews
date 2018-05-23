<template>
<div class="account">
  <div class="my-nav">
    <div class="bx">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="javascript:;" v-if="1">
                <div class="logo-a">
                    <a href="www.baidu.com" target="_blank">
                        <img src="" alt="">
                    </a>
                    <div class="logo-b">
                        <a href="www.baidu.com" target="_blank">
                            <img src="" alt="" style="height:38px">
                        </a>
                    </div>
                </div>

            </a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav nav-list">
              <li index='0'>
                <router-link to="/my/user/dashboard">
                   總覽
                </router-link>
              </li>
              <!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
              <!--<li class="dropdown  " index='1'>
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <router-link to="/mbti">
                    资料
                  </router-link>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">文章</a>
                  </li>
                  <li>
                    <a href="#">点开</a>
                  </li>
                  <li>
                    <a href="#">555</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </li>-->
              <li index='1'>
                <router-link to="/my/user/info">
                   資料
                </router-link>
              </li>
              <li index='2'>
                <router-link to="/my/article/list">
                   文章
                </router-link>
              </li>
              <li index='3'>
                <router-link to="/my/record">
                   點閱
                </router-link>
              </li>
              <li class=""  index='4'>
                <router-link to="/my/share">
                好文
                </router-link>
              </li>
              <li class=""  index='5'>
                <router-link to="/my/payment/income">
                收益
                </router-link>
              </li>
              <li class=""  index='6'>
                <router-link to="/my/message">
                消息
                </router-link>
              </li>
            </ul>
            <ul>
              <li class="dropdown" v-if="0">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span class="caret"></span>
                </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#"><i class="glyphicon glyphicon-user"></i> 个人中心</a>
                    </li>
                    <li>
                      <a href="#"><i class="glyphicon glyphicon-wrench"></i> 修改密码</a>
                    </li>
                    <!--<li>
                      <a href="#">Something else here</a>
                    </li>-->
                    <li role="separator" class="divider"></li>
                    <li>
                      <a href="#" @click="exitLogin()"><i class="glyphicon glyphicon-log-out"></i> 退出</a>
                    </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
    </div>

  </div>
  <div  style="min-height:300px;width:100%;" v-loading="loading">
      <router-view v-if="show"></router-view>
  </div>
  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
export default {
  data(){
      return {
          show:false,
          loading:false
      }
  },
  components: {
  },
  watch: {
  },
  methods: {
      login(){
        accountAxios.login({
            loginName:"18566086988@163.com",
            loginPwd:"123456"
        }).then(res=>{
            console.log(res);
            this.getUserInfo()

        }).catch(err=>{
            console.log('error!',err);
        })
      },
      //获取个人资料
      getUserInfo(){
          accountAxios.userInfo({}).then(res=>{
              if(res.data.ResultCode==200){
                  localStorage.setItem('myUserInfo',JSON.stringify(res.data.Data))
                  this.show = true;
              }
          })
      },

  },
  mounted() {
  },
  created(){
    this.login()
  }
}
</script>

<style lang="less">
  .account {
    .my-nav {
      background-color: #0a53a2;
      .navbar {
        margin:0 auto;
        max-width:1180px;
        margin-bottom: 0px;
        .navbar-header {

          // padding: 0 70px;
          position: relative;
          .logo-a {
            position: absolute;
            top:-48px;
            left:.2rem;
            .logo-b {
              position: absolute;
              top:5px;
              right:-160px;
              // @media screen and (max-width:992px) {
              //   display:none;
              // }
            }
          }

        }
        .navbar-nav {
          // padding-left: 170px;
          padding-left: .47rem;
        }
      }
      .navbar.navbar-default {
        background-color: #0a53a2;
        border: none;
      }

      .navbar-default .navbar-nav>li>a {
        color:#fff !important;
      }
      .router-link-exact-active {
          background-color: #053871 !important;
      }
      .router-link-active{
        text-align:left;
        color: red;
      }
      // .navbar-default .navbar-nav>.active>a {
      //   background-color: #456ea5;
      // }
      .navbar-default .navbar-nav>.open>a,
      .navbar-default .navbar-nav>.open>a:focus,
      .navbar-default .navbar-nav>.open>a:hover {
        color: #fff;
        background-color: transparent;
        background-color: rgba(255, 255, 255, .2);
        background-color: rgba(0, 0, 0, .1);
      }
      .navbar-default .navbar-nav>.active>a {
        color: #fff; // background-color: #456ea5;
      }
      .navbar-default .navbar-toggle .icon-bar {
        background-color: #eee;
      }
      .navbar-default .navbar-toggle:focus,
      .navbar-default .navbar-toggle:hover {
        background-color: transparent;
      }
      @media (max-width: 767px) {
        .navbar-default .navbar-nav .open .dropdown-menu>li>a {
          color: #eee;
        }
      }
      .dropdown>a>a {color:#fff !important}
      a:active {color:#fff}  /*点击时状态 。*/
      .navbar-nav>li>.dropdown-menu a {
        color:#1a1a1a
      }
      a:link {color: #1a1a1a}   /*未访问时的状态 。*/
      a:visited {color: #1a1a1a;text-decoration:none} /* 已访问过的状态 。*/
      a:hover {color: #1a1a1a;text-decoration:none}


      .nav-list>li>a {
        padding-left:22px;
        padding-right:22px;
      }
      .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
        color: #fff;
        background-color: #456ea5;;
      }
      .my-nav a:hover, .my-nav a:visited {
        color: #fff;
        text-decoration: none;
      }
      .navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {
        color: #fff;
      }
    }

  }
</style>
