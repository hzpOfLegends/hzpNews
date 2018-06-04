<template>
  <div class="oops_header" onselectstart="return false">
    <div class="oops_header_content">
      <div class="container head1">
        <div class="oops_title row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 oops_title_left" @click="close_nav_down"
               style="cursor: pointer">
            <router-link to="/">
              <span>OOPSDAILY</span>
              <span class="media_none">|</span>
              <span class="media_none">文章創作分享平台</span>
            </router-link>
          </div>
          <div v-if="$store.state.judge_login==false" class="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
          <div class="" id="login-register" v-if="$store.state.judge_login==false">
            <div class="" id="login">
              <router-link to="/user/login" class="login_btn">
                <i class="fa fa-user"></i>
                <span>登錄</span>
              </router-link>
            </div>
            <div class="" id="register">
              <router-link to="/user/register" class="register_btn">
                <i class="fa fa-plus-circle"></i>
                <span>注冊</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" v-if="$store.state.judge_login==true"></div>
          <div class="col-lg-6 col-md-8 col-sm-8 col-xs-8 user_select" v-if="$store.state.judge_login==true">
            <div class="row media_user_none" style="margin: 0;">
              <div class="float-right user_message">
                <i class="fa fa-user"></i>
                當前用戶：
                <span>
                <router-link to="/my" style="color:#37abe3">{{$store.state.user_info.Name}}</router-link>
              </span>
                <span class="subscript">
                  <div class="btn-group">
                    <a href="javascript:;" class="dropdown-toggle caret" style="height: 10px;width: 10px"
                       data-toggle="dropdown" aria-haspopup="true">
                    </a>
                    <ul class="dropdown-menu">
                      <li style="padding: 5px 0"><router-link to="/my/user/dashboard">個人中心</router-link></li>
                      <li style="padding: 5px 0"><a href="javascript:;" @click="login_out">登出</a></li>
                      <!--<li role="separator" class="divider"></li>-->
                    </ul>
                  </div>
              </span>
              </div>
              <div class="float-right user_message" style="padding-right:1.5%">
                <i class="fa fa-file-text-o"></i>
                發表文章：
                <span style="color:red" @click="skip_center()">{{$store.state.user_info.ArticleCount}}</span>
              </div>
              <div class="float-right user_message" style="padding-right:1.5%">
                <i class="fa fa-money"></i>
                我的收入：
                <span style="color:red" @click="skip_center()">{{$store.state.user_info.Profit}}</span>
              </div>
            </div>
            <div class="media_user_block" style="display: none;text-align: right;padding-right: 20px">
              <div class="btn-group">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"><i
                  class="fa fa-ellipsis-h" style="font-size: 40px"></i></a>
                <ul class="dropdown-menu">
                  <li>
                    <div class="user_message" style="margin-left: 0;text-align: center">
                      <i class="fa fa-money"></i>
                      我的收入：                                        <!--第一步 用vuex同步信息 第二步防止刷新信息丟失 -->
                      <span style="color:red" @click="skip_center()">{{$store.state.user_info.Profit}}</span>
                    </div>
                  </li>
                  <li>
                    <div class="user_message" style="margin-left: 0;text-align: center">
                      <i class="fa fa-file-text-o"></i>
                      發表文章：
                      <span style="color:red" @click="skip_center()">{{$store.state.user_info.ArticleCount}}</span>
                    </div>
                  </li>
                  <li>
                    <div class="user_message" style="margin-left: 0;text-align: center">
                      <i class="fa fa-user"></i>
                      當前用戶：
                      <span>
                <router-link to="/my" style="color:#37abe3">{{$store.state.user_info.Name}}</router-link>
              </span>
                      <span class="subscript">
                  <div class="btn-group">
                    <a href="#" class="dropdown-toggle caret" style="height: 10px;width: 10px" data-toggle="dropdown"
                       aria-haspopup="true"></a>
                    <ul class="dropdown-menu">
                      <li style="padding: 5px 0" @click="login_out"><router-link to="/">登出</router-link></li>
                      <li style="padding: 5px 0"><router-link to="/my">個人中心</router-link></li>
                    </ul>
                  </div>
              </span>
                    </div>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <router-link to="">個人中心</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <!--<div class="nav_bar">
      <nav_bar/>
    </div>-->
  </div>

</template>

<script>
  // 引入路由
  import header_message from '@/axios_joggle/axios_header'
  // 引入路由 /登出
  import users_page from '@/axios_joggle/axios_users'

  export default {
    data() {
      return {
        nav_select: [{name: '娛樂', CategoryID: 1}, {name: '興趣', CategoryID: 2}, {name: '生活', CategoryID: 3}, {
          name: '科技',
          CategoryID: 4
        }, {name: '奇趣', CategoryID: 5}, {name: '新聞', CategoryID: -1}],
        nav_other_select: {
          item1: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item2: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item3: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item4: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item5: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item6: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item7: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item8: ['國際', '國際', '國際', '國際', '國際', '國際'],
        },
        nav_down: false,  // 用來切換導航欄的隱藏
        nav_down_icon: "fa fa-bars",
        user_info: {
          name: '未命名'
        }
      }
    },
    watch: {
      "$store.state.is401": "is401Handler"
    },
    created() {
      // vuex是状态管理 一刷新就没了  此步骤当记录
      if (localStorage.getItem('ShareID')) {
        this.$store.state.judge_login = true
      } else {
        this.$store.state.judge_login = false
      }

      if (localStorage.getItem('user_info')) {
        this.user_info = JSON.parse(localStorage.getItem('user_info'))
      }
    },
    mounted() {
      // 判斷是否存在shareID  也就是是否登錄
      let shareID = localStorage.getItem('ShareID')
      if (shareID) {
        this.judge_login = true
      } else {
        this.judge_login = false
      }
    },
    methods: {
      // 點擊其他地方 關閉導航下拉
      close_nav_down() {
        console.log(1)
        this.$store.state.nav_down = false;
        this.$store.state.nav_down_icon = "fa fa-bars"
      },
      // //跳轉登錄
      // skip_login() {
      //   this.$router.push({path: '/login'})
      // },
      // skip_register() {
      //   this.$router.push({path: '/register'})
      // },
      // 登出
      login_out() {
        // 请求后台 登出
        users_page.login_out().then(res => {
          // 清除登錄ID
          localStorage.setItem('ShareID', "")
          // 清楚登錄  用戶信息
          localStorage.setItem('user_info', "")

          // 清除TICKET
          localStorage.setItem('Ticket', "")
        }).catch(err => {

        })

        // 隱藏 用戶欄
        this.$store.state.judge_login = false
        this.$store.state.user_info = []

        // 跳转到首页
        this.$router.push({path: "/user/login"})
      },
      is401Handler() {
        if (this.$store.state.is401) {
          this.login_out()
        }
      }
    },
    created() {
    }

  }
</script>

<style scoped lang="less">
  @media screen and (max-width: 768px) {
    .head1 {
      display: none;
    }

    .media_user_none {
      display: none;
    }

    .media_user_block {
      display: block !important;
    }
  }

  @media screen and(max-width: 1000px) {
    .media_none {
      display: none;
    }
  }

  .oops_header {
    background: white;
    .oops_header_content {
      .user_message {
        margin-left: 1.5rem;
        font-size: 14px;
        color: #9a9a9a;
      }

      // 用戶 下拉
      .dropdown-menu {
        left: -150px;
      }
      .subscript {
        a {
          line-height: 1rem;
        }
      }
      .container {
        max-width: 1180px;
        /*width: 1180px;*/
        /*max-width: 1180px;*/
        margin: 0;
        padding: 0;
        margin: 0 auto;
      }
      .oops_title {
        max-width: 1180px;
        margin: 0 auto;
        height: 4.5rem;
        background-color: #ffffff;
        line-height: 4.5rem;
        /*.login_btn{*/
        /*display: inline-block;*/
        /*width: 4.5rem;*/
        /*height: 1.625rem;*/
        /*background: rgb(238, 238, 238);*/
        /*}*/
        .oops_title_left {
          text-align: left;
          padding-left: 0;
          a {
            text-decoration: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          :nth-child(1) {
            font-size: 24px;
            font-weight: 600;
            color: #0954a2;
          }
          :nth-child(2) {
            color: #a4a4a4;
            margin: 0 8px;
          }
          :nth-child(3) {
            color: #a4a4a4;
            font-size: 14px;
          }
        }
        #register {
          margin-left: 10px;
          .register_btn {
            display: inline-block;
            width: 82px;
            height: 28px;
            line-height: 28px;
            padding: 0;
            background-color: #468bed;
            font-size: 14px;
            color: white;
            border-radius: 3px;
            text-decoration: none;
            span {
              padding-left: 0.625rem;
            }
          }
        }
        #login {
          .login_btn {
            display: inline-block;
            width: 82px;
            height: 28px;
            line-height: 28px;
            padding: 0;
            background-color: #eeeeee;
            color: #656565;
            font-size: 14px;
            text-decoration: none;
            span {
              padding-left: 0.625rem;
            }
          }
        }
      }
      .oops_navs {
        width: 100%;
        height: 2.75rem;
        line-height: 2.75rem;
        background-color: #0954a2;
        margin: 0;
        position: relative;
        .container {
          background-color: #0954a2;
          li {
            width: 90px;
            height: 100%;
            text-align: center;

            a {
              color: white;
              font-size: 14px;
            }
          }
          li:hover {
            background: rgb(70, 138, 237);
          }
          .col-1 {
            div {
              width: 3.125rem;
            }
            div:hover {
              background-color: #043970;
              cursor: pointer;
            }
          }

        }

      }
    }
    #login-register {
      display: flex;
      justify-content: flex-end;
    }
    @media screen and (max-width: 768px) {
      .login_btn, .register_btn {
        width: 62px !important;
      }

      padding-left: 2% !important;
      padding-right: 2% !important;
    }
  }
</style>
