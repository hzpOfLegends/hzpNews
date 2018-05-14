<template>
  <div id="app">
    <!--導航-->
    <oops-header></oops-header>
    <!--面包屑-->
      <!--<div class="breadcrumb_wrap">-->
        <!--<b-breadcrumb :items="items"/>-->
      <!--</div>-->
    <!--内容-->
    <div class="oops_content_wrap">
      <div class="oops_content">
        <router-view></router-view>
        <!--點擊到頂部-->
        <div v-show="skip_top"><span style="font-size:14px">
          <p id="back-to-top">
            <a href="#top">
              ∧
            </a>
          </p>
        </span>
        </div>
      </div>
    </div>

    <!--底部-->
    <oops-footer></oops-footer>
  </div>
</template>

<script>
  import oopsFooter from '@/components/common/oops_footer'
  import oopsHeader from '@/components/common/oops_header'

  export default {
    name: 'App',
    components: {
      oopsHeader,
      oopsFooter
    },

    data(){
      return {
        items: [{
          text: '首頁',
          href: '/'
        }, {
          text: 'Library',
          active: true
        }],
        skip_top:true //點擊到頂部按鈕
      }
    },
    mounted(){
      //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(window).scroll(function(){
          if ($(window).scrollTop()>100){
            $("#back-to-top").fadeIn(1500);
          }
          else
          {
            $("#back-to-top").fadeOut(1500);
          }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function(){
          //$('body,html').animate({scrollTop:0},1000);
          if ($('html').scrollTop()) {
            $('html').animate({ scrollTop: 0 }, 1000);
            return false;
          }
          $('body').animate({ scrollTop: 0 }, 1000);
          return false;
        });

        // 判断是不是login / register 页面
      let router_path = this.$route.path
        // 獲取元素 用來設置登陸 注冊頁面的背景圖
      let oops_content_wrap = document.querySelector('.oops_content_wrap')
      console.log(router_path.indexOf('/'))
      if(router_path.indexOf('/login')==0 || router_path.indexOf('register')==0){
        // console.log(oops_content_wrap)
        oops_content_wrap.style.background = "url('../static/img/background1.png') no-repeat fixed top"
        this.skip_top = false
      }else{
        oops_content_wrap.style.background = "none"
        this.skip_top = true
      }
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .breadcrumb_wrap{
      width: 73.75rem;
      margin: 0 auto;
      background-color: white;
      .breadcrumb{
        background-color: white;
        margin:  0;
        padding-left: 0;
      }
    }
    // 点击到顶部  按钮样式
    p#back-to-top{
      position:fixed;
      display:none;
      bottom:6.25rem;
      right:5rem;
    }
    p#back-to-top a{
      text-align:center;
      text-decoration:none;
      color:white;
      background: #b7b7b7;
      display:block;
      width:3rem;
      height: 3rem;
      line-height: 3rem;
      font-size: 40px;
      /*使用CSS3中的transition属性给跳转链接中的文字添加渐变效果*/
      -moz-transition:color 1s;
      -webkit-transition:color 1s;
      -o-transition:color 1s;
    }
    p#back-to-top a:hover{
      color:#979797;
    }
    .oops_content_wrap{
      background: #f4f4f4;
      .oops_content{
        max-width:73.75rem;
        width: 73.75rem;
        margin: 0 auto;
      }
    }

    .row{
      /*margin:*/
      margin:0;
    }
  }
</style>
