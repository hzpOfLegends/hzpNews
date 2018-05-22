<template>

  <div class="nav_down_footer" unselectable="on" onselectstart="return false;" style="-moz-user-select:none;">
    <div class="row all_type">
      <ul class="col-lg-2 col-md-2 col-sm-2 col-xs-4" v-for="(item,index) in $store.state.nav_type" :key="index">
        <li @click="setNavStyle">
          <router-link :to="{path:'/category/'+item.ID}" >{{item.CategoryName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="btn">
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
  export default {
    name: "nav_bar_down",
    watch: {
      "$route.path": "setNavStyle"
    },
    methods:{
      //设置導航樣式
      setNavStyle(currentIndex) {
      }
    },
    mounted(){

    }
  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 768px) {
    .nav_down_footer {
      background: white !important;
      padding: 20px !important;
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
    background: rgb(10, 83, 162);
    color: white !important;
    /*background: red;*/
  }
  .nav_down_content {
    background: white;
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
    background: #f4f4f4;
    padding: 50px 50px;
    width: 100%;
    .row{
      margin: 0;
    }
    .all_type {
      padding-bottom: 20px;
      ul {

        li {
          padding: 5px 0;
          text-align: center;
          a {
            font-size: 16px;
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
