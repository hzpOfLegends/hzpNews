<template>

  <div class="nav_down_footer" unselectable="on" onselectstart="return false;" style="-moz-user-select:none;">
    <div class="row all_type">
      <ul class="col-lg-2 col-md-2 col-sm-2 col-xs-4">
        <li @click="setNavStyle">
          <router-link to="/category/1" >問答</router-link>
        </li>
        <li>
          <router-link to="/category/2">體育</router-link>
        </li>
        <li>
          <router-link to="/category/3">軍事</router-link>
        </li>
        <li>
          <router-link to="/category/4">科技</router-link>
        </li>
        <li>
          <router-link to="/category/5">娛樂</router-link>
        </li>
        <li>
          <router-link to="/category/6">國際</router-link>
        </li>
      </ul>
      <ul class="col-lg-2 col-md-2 col-sm-2 col-xs-4">
        <li>
          <router-link to="/category/7">新聞</router-link>
        </li>
        <li>
          <router-link to="/category/8">旅游</router-link>
        </li>
        <li>
          <router-link to="/category/9">任務</router-link>
        </li>
        <li>
          <router-link to="/category/10">音樂</router-link>
        </li>
        <li>
          <router-link to="/category/11">影視</router-link>
        </li>
        <li>
          <router-link to="/category/12">軟件</router-link>
        </li>
      </ul>
      <ul class="col-lg-2 col-md-2 col-sm-2 col-xs-4">
        <li>
          <router-link to="/category/13">文學</router-link>
        </li>
        <li>
          <router-link to="/category/14">美食</router-link>
        </li>
        <li>
          <router-link to="/category/15">健康</router-link>
        </li>
        <li>
          <router-link to="/category/16">醫藥</router-link>
        </li>
        <li>
          <router-link to="/category/17">商鋪</router-link>
        </li>
        <li>
          <router-link to="/category/18">財經</router-link>
        </li>
      </ul>
      <ul class="col-lg-2 col-md-2 col-sm-2 col-xs-4">
        <li>
          <router-link to="/category/19">汽車</router-link>
        </li>
        <li>
          <router-link to="/category/20">房產</router-link>
        </li>
        <li>
          <router-link to="/category/21">動漫</router-link>
        </li>
        <li>
          <router-link to="/category/22">教育</router-link>
        </li>
        <li>
          <router-link to="/category/23">天氣</router-link>
        </li>
        <li>
          <router-link to="/category/24">群體聚集</router-link>
        </li>
      </ul>
      <ul class="col-lg-2 col-md-2 col-sm-2 col-xs-4">
        <li>
          <router-link to="/category/25">自然災害</router-link>
        </li>
        <li>
          <router-link to="/category/26">交通事故</router-link>
        </li>
        <li>
          <router-link to="/category/27">刑事犯罪</router-link>
        </li>
        <li>
          <router-link to="/category/28">暴力執法</router-link>
        </li>
        <li>
          <router-link to="/category/29">求職招聘</router-link>
        </li>
        <li>
          <router-link to="/category/30">食品安全</router-link>
        </li>
      </ul>
      <ul class="col-lg-2 col-md-2 col-sm-2 col-xs-4" style="border-right: none">
        <li>
          <router-link to="/category/31">環境污染</router-link>
        </li>
        <li>
          <router-link to="/category/32">疾病疫情</router-link>
        </li>
        <li>
          <router-link to="/category/33">金融安全</router-link>
        </li>
        <li>
          <router-link to="/category/34">非法組織</router-link>
        </li>
        <li>
          <router-link to="/category/35">反動言論</router-link>
        </li>
        <li>
          <router-link to="/category/36">心靈鷄湯</router-link>
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
        let list = document.querySelectorAll('.all_type>ul>li>a')
        let index = this.$route.path.split('/')[2] //以路由 當作 li的index 給他加樣式
        for (let i = 0; i < list.length; i++) {
          list[i].classList.remove('active')
          if(index){
            list[index - 1].classList.add('active')
          }

        }
      }
    },
    mounted(){
      let index = parseInt(this.$route.path.split('/')[2]) //以路由 當作 li的index 給他加樣式
      let list = document.querySelectorAll('.all_type>ul>li>a')
      if(index){
        list[index+1].classList.add('active')
      }
      for(let i = 0 ;i<list.length ;i++){
        list[i].onclick = ()=>{
          this.$store.state.nav_down = false
        }
      }
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
    padding: 50px 50px;
    width: 100%;
    .row{
      margin: 0;
    }
    .all_type {
      padding-bottom: 20px;
      ul {
        border-right: 1px solid rgb(220, 213, 210);
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
