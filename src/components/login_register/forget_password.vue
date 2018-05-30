<template>
  <div class="container">

  <div class="forgot_wrap">
    <div class="title">
      <h4>找回密碼</h4>
    </div>
    <div class="step_progress">
      <el-steps :align-center="true" :active="active" >
        <el-step title="身份驗證"></el-step>
        <el-step title="重置密碼"></el-step>
        <el-step title="修改成功"></el-step>
      </el-steps>
    </div>
    <div class="step1" v-if="active==0">
      <step1/>
    </div>
    <div class="step2" v-if="active==1">
      <step2/>
    </div>
    <div class="step3" v-if="active==2" style="padding: 20px 0 30px">
        <i class="fa fa-smile-o" style="color:rgb(251, 133, 7);font-size:50px;vertical-align: middle"></i><span style="font-size: 22px;font-weight: 600;margin-left: 10px">修改成功!</span>
    </div>
    <div style="padding: 10px 0 ;border-top: 1px solid #f6f6f6">
      <router-link to="/user/login">返回登錄>>></router-link>
    </div>
  </div>
  </div>
</template>

<script>
  import step1 from "@/components/login_register/step1"
  import step2 from "@/components/login_register/step2"
  export default {
    name: "forget_password",
    data() {
      return {
        active: parseInt(this.$route.query.step)?parseInt(this.$route.query.step):0
      };
    },
    watch:{
      "$route.query.step":"loadPage"
    },
    created(){
    },
    methods:{
      // 使用vuex 來控制 步驟
      loadPage(){
        this.active = parseInt(this.$route.query.step)?parseInt(this.$route.query.step):0
      }
    },
    components:{
      step1,
      step2
    },
    mounted() {
      // 进度条关闭
      this.$NProgress.done()
      // 更换背景
      let oops_content_wrap = document.querySelector('.oops_content_wrap')
      oops_content_wrap.style.background = "url('../static/img/background1.png') no-repeat fixed top"
      oops_content_wrap.style.backgroundSize = "cover"
      oops_content_wrap.style.height = 1080 + "px"
      // 將步驟條文字設小
      let el_step_title = document.querySelectorAll('.el-step__title')
      for(let i = 0 ; i<el_step_title.length ; i++){
        el_step_title[i].style.fontSize = "12px"
      }
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
      max-width: 527px;
      border-radius: 3px;
      font-family: "Microsoft YaHei";
      .title{
        padding: 10px 0 ;
        border-bottom: 5px solid rgb(10, 83, 162);
        color:rgb(10, 83, 162);
        h4{
          font-size: 16px;
        }
      }
      .step_progress {
        margin: 35px 0 15px;
        .el-steps--horizontal{
          width: 70%;
          margin: 0 auto;
          /*text-align: left !important;*/
        }
        .el-step__main{
          .el-step__title{
            font-size: 12px !important;
          }
        }

      }

    }
  }

</style>
