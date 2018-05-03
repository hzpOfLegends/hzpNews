<template>
  <div class="oops_header">
    <div class="oops_header_content ">
      <div class="container">
        <div class="oops_title row">
          <div class="col-4 oops_title_left">
            <span>OOPSDAILY</span>
            <span>|</span>
            <span>文章創作分享平台</span>
          </div>
          <div class="col-6"></div>
          <div class="col-2 pr-0">
            <div class="row">
              <div class="col-6 pr-0 pl-0" id="login">
                <b-button variant="secondary">
                  <i class="fa fa-user"></i>
                  <span>登錄</span>
                </b-button>
              </div>
              <div class="col-6 pr-0 pl-0" id="register">
                <b-button variant="primary">
                  <i class="fa fa-plus-circle"></i>
                  <span>注冊</span>
                </b-button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="oops_navs">
        <div class="container">
          <div class="row">
            <div class="col-11">
              <ul>
                <li class="float-left" v-for="(item,index) in nav_select" :key="index"><a
                  href="javascript:;">{{item}}</a></li>
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
                <li v-for="(items,index) in item" :key="index"><a href="javascripte:;">{{items}}</a></li>
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav_select: ['國際', '社會', '軍事', '娛樂', '歷史', '國際', '社會', '軍事', '娛樂', '歷史', '國際', '社會', '軍事'],
        nav_other_select: {
          item1: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item2: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item3: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item4: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item5: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item6: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item7: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item8: ['國際', '國際', '國際', '國際', '國際', '國際']
        },
        nav_down:false,
        nav_down_icon:"fa fa-bars"
      }
    },
    methods:{
      nav_toggle(){
        let nav_down = document.querySelector('.nav_down')
        let nav_down_icon = document.querySelector('#nav_down_icon')
        if(this.nav_down_icon=="fa fa-bars"){
          this.nav_down = true
          this.nav_down_icon = "fa fa-close"
        }else{
          this.nav_down = false
          this.nav_down_icon = "fa fa-bars"
        }
      }
    }

  }
</script>

<style scoped lang="less">
  .oops_header {
    .oops_header_content {
      .container {
        width: 1180px;
        max-width: 1180px;
        margin: 0;
        padding: 0;
        margin: 0 auto;
      }
      .oops_title {
        width: 1180px;
        margin: 0 auto;
        height: 72px;
        background-color: #ffffff;
        line-height: 72px;
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
            width: 82px;
            height: 28px;
            line-height: 28px;
            padding: 0;
            background-color: #468bed;
            font-size: 14px;
          }
        }
        #login {
          button {
            width: 82px;
            height: 28px;
            line-height: 28px;
            padding: 0;
            background-color: #eeeeee;
            color: #656565;
            font-size: 14px;
          }
        }
      }
      .oops_navs {
        width: 100%;
        height: 44px;
        line-height: 44px;
        background-color: #0954a2;
        margin: 0;
        position: relative;
        li {
          margin-right: 50px;
          a {
            color: white;
            font-size: 14px;
          }
        }
        .col-1 {
          div {
            width: 50px;
          }
          div:hover {
            background-color: #043970;
            cursor: pointer;
          }
        }
        .nav_down{
          max-width: 1180px;
          width: 1180px;
          box-shadow: 2px 2px 15px gray;
          z-index: 99;
          .nav_down_content {
            background: white;
            width: 100%;
            border-bottom: 1px solid #e5e5e5;
            ul {
              padding: 0 59px;
              margin: 30px 0;
              border-right: 1px solid #eeeeee;
              text-align: center;
              li {
                margin: 0;
                a {
                  color: #888888;
                }
              }
            }
            :last-child{
              border-right: none;
            }
          }
          .nav_down_footer{
            background: #f4f4f4;
            padding: 50px 54px;
            width: 100%;
            ul{
              margin-bottom: 0;
              li{
                margin: 0;
                color: #d2d2d2;
                a{
                  color: #9a9a9a;
                  font-size: 12px;
                }
              }
              .division{
                margin: 0 15px;
              }
            }
          }
        }

      }
    }
  }
</style>
