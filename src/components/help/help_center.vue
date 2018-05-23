<template>
  <div class="the_help_center">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 content_left">
        <h4>幫助中心</h4>
        <div class="line"></div>
            <router-link to="/help/notgetemail">沒有收到郵箱</router-link>
            <router-link to="/help/changepassword">更改密碼</router-link>
            <router-link to="/help/howembody">如何體現</router-link>
            <router-link to="/help/accountclass">賬號等級小白</router-link>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 content_right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "help_center",

  }
</script>

<style scoped lang="less">
  .router-link-active {
    color: rgb(2, 77, 160);
    border-left: 5px solid rgb(2, 77, 160);
  }

  .the_help_center {
    max-width: 1180px;
    min-height: 480px;
    height: 100%;
    padding: 20px;
    width: 100%;
    margin: 50px auto;
    background: white;
    .line {
      margin: 20px 0;
      width: 100%;
      border-bottom: 1px solid rgb(244, 244, 244);
    }
    .row {
      margin: 0;
      .content_left {
        border-right: 1px solid rgb(244, 244, 244);
        padding: 20px !important;
        h4 {
          font-weight: 600;
          font-size: 16px;
          text-align: left;
        }
        a{
          display: block;
          font-size: 14px;
          text-align: left;
          margin: 10px 0;
          padding-left: 15px;
        }
      }
      .content_right{
        padding: 0 30px !important;
        text-align: left;
      }
    }
  }
</style>
