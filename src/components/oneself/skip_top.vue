<template>
  <div><span style="font-size:14px">
          <p id="back-to-top">
            <a href="#top">
              ∧
            </a>
          </p>
        </span>
  </div>
</template>

<script>
  export default {
    name: "skip_top",
    mounted() {
      //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $("#back-to-top").fadeIn(1500);
        }
        else {
          $("#back-to-top").fadeOut(1500);
        }
      });

      //当点击跳转链接后，回到页面顶部位置
      $("#back-to-top").click(function () {
        //$('body,html').animate({scrollTop:0},1000);
        if ($('html').scrollTop()) {
          $('html').animate({scrollTop: 0}, 1000);
          return false;
        }
        $('body').animate({scrollTop: 0}, 1000);
        return false;
      });


    }
  }
</script>

<style scoped lang="less">
  @media screen and (max-width: 768px){
    p#back-to-top {
      position: fixed;
      display: none;
      bottom: 10px !important;
      right: 0 !important;
    }
    p#back-to-top a{
      background: transparent !important;
      color: gray !important;
    }
  }
  // 点击到顶部  按钮样式
  p#back-to-top {
    position: fixed;
    display: none;
    bottom: 100px;
    right: 80px;
  }

  p#back-to-top a {
    text-align: center;
    text-decoration: none;
    color: white;
    background: #b7b7b7;
    display: block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 40px;
    /*使用CSS3中的transition属性给跳转链接中的文字添加渐变效果*/
    -moz-transition: color 1s;
    -webkit-transition: color 1s;
    -o-transition: color 1s;
  }

  p#back-to-top a:hover {
    color: #979797;
  }

  @media screen and(max-width: 768px) {
    .oops_content_wrap {
      max-width: 768px !important;
      margin: 0 auto;
      .oops_content {
        max-width: 768px !important;
        margin: 0 auto;
        .container {
          max-width: 768px;
          margin: 0 auto !important;
        }
      }
    }

  }
</style>
