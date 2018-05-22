<template>
  <div class="container">

  <div class="forgot_wrap">
    <div class="title">
      <h4>找回密碼</h4>
    </div>
    <div class="step_progress">
      <el-steps :space="200" :active="active" finish-status="success">
        <el-step title="身份驗證"></el-step>
        <el-step title="重置密碼"></el-step>
        <el-step title="修改成功"></el-step>
      </el-steps>
    </div>
    <div>
      123
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "forget_password",
    data() {
      return {
        active: 1
      };
    },
    mounted() {
      // 更换背景
      let oops_content_wrap = document.querySelector('.oops_content_wrap')
      oops_content_wrap.style.background = "url('../static/img/background1.png') no-repeat fixed top"
    }
  }
</script>

<style scoped lang="less">
  .container{
    padding: 0;
    margin: 0;
    margin: 0 auto;
    .forgot_wrap {
      background: white;
      position: relative;
      // width: 100%;
      margin: 112px auto 188px;
      max-width: 470px;
      border-radius: 3px;
      .title{
        padding: 10px 0 ;
        border-bottom: 5px solid rgb(10, 83, 162);
        color:rgb(10, 83, 162);
        h4{
          font-size: 16px;
        }
      }
      .step_progress {


        .el-steps--horizontal{
          width: 70%;
          margin: 0 auto;
          text-align: left !important;
        }
      }

    }
  }

</style>
