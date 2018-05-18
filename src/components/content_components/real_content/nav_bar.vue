<template>
  <div class="my-nav">
    <div class="bx" style="position: relative">
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
            </a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav nav-list">
              <li index='0' class="active">
                <router-link :to="{path:'/index',query: {CategoryID: 7}}">
                  总览
                </router-link>
              </li>
              <li index='1'>
                <router-link  :to="{path:'/index',query: {CategoryID: 6}}">
                  娛樂
                </router-link>
              </li>
              <li index='2'>
                <router-link  :to="{path:'/index',query: {CategoryID: 5}}">
                  興趣
                </router-link>
              </li>
              <li index='3'>
                <router-link :to="{path:'/index',query: {CategoryID: 4}}">
                  生活
                </router-link>
              </li>
              <li index='4'>
                <router-link  :to="{path:'/index',query: {CategoryID: 3}}">
                  科技
                </router-link>
              </li>
              <li index='5'>
                <router-link  :to="{path:'/index',query: {CategoryID: 2}}">
                  奇趣
                </router-link>
              </li>
              <li  index='6'>
                <router-link :to="{path:'/index',query: {CategoryID: 1}}">
                  新聞
                </router-link>
              </li>
              <li>

              </li>
            </ul>

            <!--<ul>-->
              <!--<li class="dropdown" v-if="0">-->
                <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">-->
                  <!--<span class="caret"></span>-->
                <!--</a>-->
                <!--<ul class="dropdown-menu">-->
                  <!--<li>-->
                    <!--<a href="#"><i class="glyphicon glyphicon-user"></i> 个人中心</a>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<a href="#"><i class="glyphicon glyphicon-wrench"></i> 修改密码</a>-->
                  <!--</li>-->
                  <!--&lt;!&ndash;<li>-->
                    <!--<a href="#">Something else here</a>-->
                  <!--</li>&ndash;&gt;-->
                  <!--<li role="separator" class="divider"></li>-->
                  <!--<li>-->
                    <!--<a href="#" @click="exitLogin()"><i class="glyphicon glyphicon-log-out"></i> 退出</a>-->
                  <!--</li>-->
                <!--</ul>-->
              <!--</li>-->
            <!--</ul>-->
            <div class="clearfix">
              <div @click="nav_toggle" style="position: absolute;top: 10px;right: 10px">
                <i :class="nav_down_icon" id="nav_down_icon" style="color:white;font-size: 20px"></i>
              </div>
            </div>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
        <div v-show="$store.state.nav_down" class="nav_down " style="position: absolute;transform: translateY(0%);">
          <div class="nav_down_content">
            <!--<ul class="float-left" v-for="(item,index) in nav_select" :key="index">-->
            <!--<li><a href="javascripte:;">{{item.name}}</a></li>-->
            <!--</ul>-->
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
                  <img src="../../../../static/img/team1.png" alt="">
                </li>
                <li class="float-right" style="margin-left: 12px">
                  <img src="../../../../static/img/team2.png" alt="">
                </li>
                <li class="float-right" style="margin-left: 12px">
                  <img src="../../../../static/img/team3.png" alt="">
                </li>
                <li class="float-right" style="margin-left: 12px">
                  <img src="../../../../static/img/team4.png" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>

  </div>
</template>
<!--[{name: '娛樂', CategoryID: 1}, {name: '興趣', CategoryID: 2}, {name: '生活', CategoryID: 3}, {-->
<!--name: '科技',-->
<!--CategoryID: 4-->
<!--}, {name: '奇趣', CategoryID: 5}, {name: '新聞', CategoryID: -1}],-->
<script>
  export default {
    data(){
      return {
        //配置路由正则
        routeObj:{
          '0':"7",
          '1':"6",
          '2':"5",
          '3':"4",
          '4':"3",
          '5':"2",
          '6':"1",

        },
        nav_down_icon: "fa fa-bars",
        nav_other_select: {
          item1: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item2: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item3: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item4: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item5: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item6: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item7: ['國際', '國際', '國際', '國際', '國際', '國際'],
          item8: ['國際', '國際', '國際', '國際', '國際', '國際'],
        }
      }
    },
    components: {
    },
    watch: {
      '$route.query.CategoryID':'changeRoute',
    },
    methods: {
      //路由改变处理
      changeRoute(){
        //获取第一个//中的字段
        let currentQuery = this.$route.query.CategoryID ;
        console.log(currentQuery)
        let index = '';
        for(let key in this.routeObj){
          if(this.routeObj[key] ==currentQuery){
            index = key;
          }
        }
        this.setNavStyle(index);
        // this.activeIndex = index;
      },
      // 显示 / 隐藏
      nav_toggle() {
        let nav_down = document.querySelector('.nav_down')
        let nav_down_icon = document.querySelector('#nav_down_icon')
        if (this.nav_down_icon == "fa fa-bars") {
          this.$store.state.nav_down = true
          this.nav_down_icon = "fa fa-close"
        } else {
          this.$store.state.nav_down = false
          this.nav_down_icon = "fa fa-bars"
        }
      },
      //设置主导航
      setNavStyle(currentIndex){
        document.querySelectorAll('.nav-list>li').forEach((v,i)=>{
          console.log(currentIndex)
          if(v.getAttribute('index')===currentIndex){
            v.classList.add('active');
          }else{
            v.classList.remove('active');
          }

        })
      },
    },
    mounted() {
      this.changeRoute();
    },
    created(){
    }
  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 768px){
    #nav_down_icon{
      display: none;
    }
  }
  .my-nav {
    background-color: #0a53a2;
    // 導航欄 點擊下拉樣式
    .nav_down {
      max-width: 1180px;
      width: 100%;
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

      text-align:left;
      color: #fff;
    }
    .navbar-default .navbar-nav>.active>a {
      background-color: #456ea5;
    }
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
    .navbar-toggle{
      position: absolute;
      right: 0;
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
</style>
