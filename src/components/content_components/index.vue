<template>
  <div class="index">
    <div class="my-nav">
      <!--<div class="bx" style="position: relative">-->
      <!--<nav class="navbar navbar-default">-->
      <div class="navbar">
        <nav_bar/>
      </div>
    </div>

    <router-view></router-view>
  </div>

</template>
<!--[{name: '娛樂', CategoryID: 1}, {name: '興趣', CategoryID: 2}, {name: '生活', CategoryID: 3}, {-->
<!--name: '科技',-->
<!--CategoryID: 4-->
<!--}, {name: '奇趣', CategoryID: 5}, {name: '新聞', CategoryID: -1}],-->
<script>
  import nav_bar from "@/components/common/nav_bar"

  import header_message from "@/axios_joggle/axios_header"
  export default {
    data() {
      return {
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
      "nav_bar": nav_bar, // 導航
    },
    watch: {},
    methods: {
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

    },
    mounted() {
    },
    created() {
      header_message.nav_type().then(res => {
        if(res.data.Data){

          this.$store.state.nav_type = res.data.Data
          console.log(this.$store.state.nav_type)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 768px) {
    #nav_down_icon {
      display: none;
    }
  }

  .index {

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
        .all_type {
          padding-bottom: 20px;
          ul {
            border-right: 1px solid rgb(220, 213, 210);
            li {
              padding: 5px 0;
              a {
                font-size: 16px;
              }
            }
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
    }
    .navbar {
      margin: 0 auto;
      max-width: 1180px;
      margin-bottom: 0px;
      .navbar-header {

        // padding: 0 70px;
        position: relative;
        .logo-a {
          position: absolute;
          top: -48px;
          left: .2rem;
          .logo-b {
            position: absolute;
            top: 5px;
            right: -160px;
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
    .navbar-default .navbar-nav > li > a {
      color: #fff !important;
    }
    .router-link-exact-active {
      background-color: #053871 !important;
    }
    .navbar-default .navbar-nav > .active > a {
      background-color: #456ea5;
    }
    .navbar-default .navbar-nav > .open > a,
    .navbar-default .navbar-nav > .open > a:focus,
    .navbar-default .navbar-nav > .open > a:hover {
      color: #fff;
      background-color: transparent;
      background-color: rgba(255, 255, 255, .2);
      background-color: rgba(0, 0, 0, .1);
    }
    .navbar-default .navbar-nav > .active > a {
      color: #fff; // background-color: #456ea5;
    }
    .navbar-toggle {
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
      .navbar-default .navbar-nav .open .dropdown-menu > li > a {
        color: #eee;
      }
    }
    .dropdown > a > a {
      color: #fff !important
    }
    a:active {
      color: #fff
    }
    /*点击时状态 。*/
    .navbar-nav > li > .dropdown-menu a {
      color: #1a1a1a
    }
    a:link {
      color: #1a1a1a
    }
    /*未访问时的状态 。*/
    a:visited {
      color: #1a1a1a;
      text-decoration: none
    }
    /* 已访问过的状态 。*/
    a:hover {
      color: #1a1a1a;
      text-decoration: none
    }

    .nav-list > li > a {
      padding-left: 22px;
      padding-right: 22px;
    }
    .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {
      color: #fff;
      background-color: #456ea5;;
    }
    .my-nav a:hover, .my-nav a:visited {
      color: #fff;
      text-decoration: none;
    }
    .navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-nav > li > a:hover {
      color: #fff;
    }

  }
</style>
