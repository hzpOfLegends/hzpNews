<template>
  <div class="oops_header" onselectstart="return false">
    <div class="oops_header_content">
      <div class="container">
        <div class="oops_title row">
          <div class="col-4 oops_title_left" @click="skip_index" style="cursor: pointer">
            <span>OOPSDAILY</span>
            <span>|</span>
            <span>文章創作分享平台</span>
          </div>
          <div v-show="judge_login" class="col-6"></div>
          <div class="col-2 pr-0" v-show="judge_login">
            <div class="row">
              <div class="col-6 pr-0 pl-0" id="login">
                <b-button variant="secondary" @click="skip_login">
                  <i class="fa fa-user"></i>
                  <span>登錄</span>
                </b-button>
              </div>
              <div class="col-6 pr-0 pl-0" id="register">
                <b-button variant="primary" @click="skip_register">
                  <i class="fa fa-plus-circle"></i>
                  <span>注冊</span>
                </b-button>
              </div>
            </div>
          </div>
          <div class="col-2">

          </div>
          <div class="col-6" v-show="judge_login_page">
            <div class="float-right user_message">
              <i class="fa fa-user"></i>
              當前用戶：
              <span style="color:#37abe3">
                  鱼丸
              </span>
              <span class="subscript" >
                <b-dropdown variant="link" size="sm">
                  <b-dropdown-item href="#">登出</b-dropdown-item>
                  <b-dropdown-item href="/personal_center">个人中心</b-dropdown-item>
                  <!--<b-dropdown-item href="#"></b-dropdown-item>-->
                </b-dropdown>
              </span>
            </div>
            <div class="float-right user_message">
              <i class="fa fa-file-text-o"></i>
              發表文章：
              <span style="color:red" @click="skip_center()">123456</span>
            </div>
            <div class="float-right user_message">
              <i class="fa fa-money"></i>
              已賺取金額：
              <span style="color:red"  @click="skip_center()">123456</span>
            </div>
          </div>
        </div>

      </div>
      <div class="oops_navs" v-show="judge_login_page">
        <div class="container">
          <div class="row">
            <div class="col-11" style="overflow: hidden">
              <ul>
                <li class="float-left" v-for="(item,index) in nav_select" :key="index">
                  <a href="javascript:;" @click="skip_type(item.CategoryID)">
                    {{item.name}}
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-1 clearfix">
              <div class="float-right" @click="nav_toggle">
                <i :class="nav_down_icon" id="nav_down_icon" style="color:white"></i>
              </div>
            </div>
          </div>
          <div v-show="nav_down" class="nav_down row position-absolute">
            <div class="nav_down_content">
              <ul class="float-left" v-for="(item,index) in nav_other_select" :key="index">
                <li><a href="javascripte:;">{{item.CategoryName}}</a></li>
              </ul>
            </div>
            <div class="nav_down_footer">
              <div class="clearfix">
                <ul class="float-left">
                  <li class="float-left"><a href="javascript:;">聯係我們</a></li>
                  <li class="float-left division">|</li>
                  <li class="float-left"><a href="javascript:;">幫助中心</a></li>
                  <li class="float-left division">|</li>
                  <li class="float-left"><a href="javascript:;">2018OopsDaily 隱私政策 服務條款 京ICP証080268號</a></li>
                </ul>
                <ul class="float-right">
                  <li class="float-right" style="margin-left: 12px">
                    <img src="../../../static/img/team1.png" alt="">
                  </li>
                  <li class="float-right" style="margin-left: 12px">
                    <img src="../../../static/img/team2.png" alt="">
                  </li>
                  <li class="float-right" style="margin-left: 12px">
                    <img src="../../../static/img/team3.png" alt="">
                  </li>
                  <li class="float-right" style="margin-left: 12px">
                    <img src="../../../static/img/team4.png" alt="">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  </div>
</template>

<script>
  // 引入路由
  import header_message from '@/axios_joggle/axios_header'

  export default {
    data() {
      return {
        nav_select: [{name:'娛樂',CategoryID:1},{name:'興趣',CategoryID:2},{name:'生活',CategoryID:3},{name:'科技',CategoryID:4},{name:'奇趣',CategoryID:5},{name:'新聞',CategoryID:-1}],
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
        judge_login_page:false,
        judge_login:true,
        nav_down: false,
        nav_down_icon: "fa fa-bars"
      }
    },
    created() {
      // header_message.nav_type().then(res => {
      //   this.nav_select = res.data.Data
      //   this.nav_other_select = res.data.Data
      // }).catch(err => {
      //   console.log(err)
      // })
      let router_path = this.$route.path
      if(router_path.indexOf('/login')==0 || router_path.indexOf('register')==0){
        this.judge_login_page = false
      }else{
        this.judge_login_page = true
      }
    },
    methods: {
      // 显示 / 隐藏
      nav_toggle() {
        let nav_down = document.querySelector('.nav_down')
        let nav_down_icon = document.querySelector('#nav_down_icon')
        if (this.nav_down_icon == "fa fa-bars") {
          this.nav_down = true
          this.nav_down_icon = "fa fa-close"
        } else {
          this.nav_down = false
          this.nav_down_icon = "fa fa-bars"
        }
      },
      // 选择分类
      skip_type(id) {
        this.$store.state.nav_id = id
        this.$router.push({path:"/"})
        sessionStorage.setItem('CategoryID',id)
      },
      // 跳转
      skip_center(){
        // this.$route.push()
        alert('跳转个人中心')
      },
      skip_index(){
        this.$router.push({path:"/"})
      },
      //跳轉登錄
      skip_login(){
        this.$router.push({path:'/login'})
      },
      skip_register(){
        this.$router.push({path:'/register'})
      }
    }

  }
</script>

<style scoped lang="less">
  .oops_header {
    .oops_header_content {
      .user_message{
        margin-left: 1.5rem;
        font-size: 14px;
        color: #9a9a9a;
      }
      .subscript{
        a{
          line-height: 1rem;

        }
      }
      .container {
        width: 73.75rem;
        max-width: 73.75rem;
        margin: 0;
        padding: 0;
        margin: 0 auto;
      }
      .oops_title {
        width: 73.75rem;
        margin: 0 auto;
        height: 4.5rem;
        background-color: #ffffff;
        line-height: 4.5rem;
        .oops_title_left {
          text-align: left;
          padding-left: 0;
          :nth-child(1) {
            font-size: 24px;
            font-weight: 600;
            color: #0954a2;
          }
          :nth-child(2) {
            color: #a4a4a4;
          }
          :nth-child(3) {
            color: #a4a4a4;
            font-size: 14px;
          }
        }
        #register {
          button {
            width: 5.125rem;
            height: 1.75rem;
            line-height: 1.75rem;
            padding: 0;
            background-color: #468bed;
            font-size: 14px;
          }
        }
        #login {
          button {
            width: 5.125rem;
            height: 1.75rem;
            line-height: 1.75rem;
            padding: 0;
            background-color: #eeeeee;
            color: #656565;
            font-size: 14px;
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
            margin-right: 3.125rem;
            a {
              color: white;
              font-size: 14px;
            }
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
          .nav_down {
            max-width: 73.75rem;
            width: 73.75rem;
            box-shadow: 2px 2px 15px gray;
            z-index: 99;
            .nav_down_content {
              background: white;
              width: 100%;
              border-bottom: 1px solid #e5e5e5;
              ul {
                padding: 0 3.6875rem;
                margin: 1.875rem 0;
                border-right: 1px solid #eeeeee;
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
              background: #f4f4f4;
              padding: 3.125rem 3.375rem;
              width: 100%;
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
          }
        }

      }
    }
  }
</style>
