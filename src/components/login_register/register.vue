<template>
  <div class="container user_login" @enter="enter_submit">
    <div class="row">
      <div class="login_wrap" v-loading="shade_boo">
        <div class="step1">
          <div>
            <h4 style="font-size: 24px;rgb(51,51,51);padding: 34px 0 22px">創建新賬號</h4>
          </div>
          <div>
            <div class="email">
              <input type="text" v-model="email" @input="emailVerify" @keyup.enter="submit_mess" placeholder="請輸入郵箱">
              <i class="fa fa-envelope"></i>
            </div>
            <p style="color: red ; font-size: 12px;text-align: left">{{email_hint}}</p>
            <div class="password">
              <input type="password" v-model="password" @input="passwordVerify" @keyup.enter="submit_mess" placeholder="請輸入密碼">
              <i class="fa fa-lock"  style="font-size:22px"></i>
            </div>
            <p style="color: red; font-size: 12px;text-align: left">{{password_hint}}</p>
            <div class="new_password">
              <input type="password" v-model="new_password" @input="newpasswordVerify" @keyup.enter="submit_mess" placeholder="請再次輸入密碼">
              <i class="fa fa-lock"  style="font-size:22px"></i>
            </div>
            <p style="color: red; font-size: 12px;text-align: left">{{new_password_hint}}</p>
            <p style="color: red; font-size: 12px;text-align: center">{{register_hint}}</p>
            <button class="btn" @click="submit_mess" :class="{'active':btnActive}" style="padding: 10px 0;color: rgb(153, 153, 153)">
              注冊
            </button>
          </div>


        </div>
        <div class="step2" style="font-family: '宋体';">
          <p style="font-size: 12px">
            已有賬號？
            <router-link to="/user/login" style="color: rgb(90, 148, 238);">前往登錄>></router-link>
          </p>
        </div>
      </div>
      </div>
      <div class="row">
      <login_component v-show="false" :success_register="success_register"/>
      </div>
    </div>
</template>

<script>
  import users_page from '@/axios_joggle/axios_users'
  import login_component from '@/components/login_register/login'
  export default {
    name: "register",
    data() {
      return {
        email: "", // 郵箱值
        btn_boo1: false, //用來判斷btnactive顔色
        email_hint: "", //郵箱提示
        password: "", // 密码值
        btn_boo2: false, //用來判斷btnactive顔色
        password_hint: "", //郵箱提示
        btnActive: false, //按鈕顔色
        new_password: "", // 郵箱值
        btn_boo3: false, //用來判斷btnactive顔色
        new_password_hint: "", //郵箱提示
        shade_boo: false, // 點擊登錄時的遮罩
        register_hint:"", // 注册失败返回的信息
        success_register:{
          email:"",
          password:""
        }
      }
    },
    components:{
      // 引入登錄組件 作爲子組件 用來注冊成功 讓登錄組件登錄
      "login_component":login_component
    },
    created() {
      //隐藏导航栏
      this.$store.state.nav_style = false
      // 隐藏底部1
      this.$store.state.footer_style1 = false
    },
    methods: {
      //郵箱驗證
      emailVerify() {
        let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        if (reg.test(this.email)) {
          this.email_hint = ""
          this.btn_boo1 = true
        } else {
          this.email_hint = "請輸入正確的郵箱"
          this.btn_boo1 = false
        }
        // 邮箱为空 清掉提示
        if(this.email==""){
          this.email_hint = ""
          this.btn_boo1 = false
        }
        // //用來判斷btnactive顔色
        if (this.btn_boo1 && this.btn_boo2 && this.btn_boo3) {
          this.btnActive = true
          this.register_hint = ""
        } else {
          this.btnActive = false
          this.register_hint = ""
        }
      },
      // 密碼嚴重
      passwordVerify() {
        if (this.password_verfiy(this.password)) {
          this.password_hint = ""
          this.btn_boo2 = true
        } else {
          this.password_hint = "請輸入正確的密碼，（8-24位長度字元，支援大寫英文、小寫英文、數字、半形標點，並包含至少三種）"
          this.btn_boo2 = false
        }
        if(this.new_password){
          if(this.password == this.new_password){
            this.btn_boo2 = true
            this.new_password_hint = ""
          }else{
            this.btn_boo2 = false
            this.new_password_hint = "两次輸入的密碼不一致"
          }
        }
        // 密码输入为空 提示消失
        if(this.password == ""){
          this.password_hint = ""
          this.btn_boo2 = false
        }
        //用來判斷btnactive顔色
        if (this.btn_boo1 && this.btn_boo2 && this.btn_boo3) {
          this.btnActive = true
          this.register_hint = ""
        } else {
          this.btnActive = false
          this.register_hint = ""
        }
      },
      // 再次输入密码验证
      newpasswordVerify() {
        if (this.new_password === this.password) {
          this.new_password_hint = ""
          this.btn_boo3 = true
        } else {
          this.new_password_hint = "两次輸入的密碼不一致"
          this.btn_boo3 = false
        }
        if(this.password_verfiy(this.password)){
          if(this.password == this.new_password){
            this.btn_boo2 = true
            this.password_hint = ""
          }else{
            this.btn_boo2 = false
            // this.password_hint = "两次輸入的密碼不一致"
          }
        }
        // 再次输入密码为空 提示消失
        if(this.new_password==""){
          this.new_password_hint = ""
          this.btn_boo3 = false
        }
        //用來判斷btnactive顔色
        if (this.btn_boo1 && this.btn_boo2 && this.btn_boo3) {
          this.btnActive = true
        } else {
          this.btnActive = false
        }
      },
      //發送注冊
      submit_mess() {
        // 锁 防止重复提交
        let lock = true
        if (this.btnActive && lock && this.password === this.new_password) {
          lock = false
          // 遮罩
          this.shade_boo = true
          users_page.register({Email: this.email, Password: this.new_password}).then(res => {
            if (res.status == 200 && res.data.ResultCode == 200) {
              this.register_hint = ""
              // 提示成功
              this.$message.success("注冊成功")
              this.success_register.email = this.email
              this.success_register.password = this.new_password

              this.reset_input()
            } else {
              this.register_hint = this.$store.state.submit_hint
              // 遮罩
              this.shade_boo = false
              lock = true
            }
          }).catch(err => {
            // 遮罩
            this.shade_boo = false
            console.log(err)
            lock = true
          })
        }else{
          this.register_hint = "請輸入正確的信息"
        }
      },
      // 密码正则
      password_verfiy(password){
        if(!password) return false;
        //验证密码强度
        var regArr = [];
        var count = 0;
        regArr.push(/[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/); //匹配半角符号
        regArr.push(/[a-z]/);
        regArr.push(/[A-Z]/);
        regArr.push(/[0-9]/);
        regArr.forEach((v,i)=>{
          if(v.test(password)){
            count++;
          }
        })
        if((password.length<8 || password.length>24) || count<3) {
          return false;
        } else {
          return true;
        }
      },
      // 回车跳到提交
      enter_submit(){
        if(event.keyCode==13){
          this.submit_mess()
          console.log("enter")
        }
      },
      // 注冊成功后調用登錄接口
      // success_register(user,pwd){
      //   users_page.login({
      //     loginName: user,
      //     loginPwd: pwd
      //   }).then(res => {
      //     if (res.status == 200 && res.data.ResultCode == 200) {
      //       // 存储 用户 shareID
      //       let shareid ;
      //       shareid = res.data.Data.ShareID
      //       localStorage.setItem("Ticket",res.data.Data.Ticket)
      //       users_page.login_user_info().then(res => {
      //         // 遮罩
      //         this.shade_boo = false
      //         // 存儲user_info
      //         localStorage.setItem('user_info', JSON.stringify(res.data.Data))
      //         this.$store.state.user_info = res.data.Data
      //         localStorage.setItem('ShareID', shareid)
      //         // 判断是否登录  用来改变样式
      //         this.$store.state.judge_login = true
      //         // 提示彈框
      //         this.$confirm('是否到個人中心', '提示', {
      //           confirmButtonText: '确定',
      //           cancelButtonText: '取消',
      //           type: 'warning'
      //         }).then(() => {
      //           this.$router.push({path:"/my/user/dashboard"})
      //         }).catch(() => {
      //           this.$router.push({path:"/"})
      //         });
      //
      //       }).catch(err => {
      //         console.log(err)
      //       })
      //     }
      //   }).catch(err => {
      //   })
      // },
      // 清空 input
      reset_input() {
        this.email = ""
        this.password = ""
        this.new_password = ""
        this.btnActive = false
      }
    },
    mounted() {
      // 进度条关闭
      this.$NProgress.done()
    }
  }
</script>

<style scoped lang="less">
  .container {
    padding: 0;
    margin: 0 auto;
    .row {
      margin: 0;
    }
    .login_wrap {
      background: white;
      width: 100%;
      margin: 112px auto 188px;
      max-width: 527px;
      border-radius: 3px;

      /*遮罩*/
      .shade {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        text-align: center;
        line-height: 400px;
        i {
          font-size: 50px;
        }
      }
      .email {
        margin: 16px 0;
        position: relative;
        color: #999999;
        text-align: left;
        input {
          width: 100%;
          min-height: 43px;
          line-height: 43px;
          border: 1px solid rgb(241, 241, 241);
          border-radius: 3px;
          font-size: 13px;
          padding-left: 45px;
        }
        i {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-60%);
          font-size: 15px;
        }
      }
      .password {
        margin: 16px 0;
        position: relative;
        color: #999999;
        input {
          width: 100%;
          min-height: 43px;
          line-height: 43px;
          border: 1px solid rgb(244, 244, 244);
          border-radius: 3px;
          font-size: 13px;
          padding-left: 45px;
        }
        i {
          position: absolute;
          left: 17px;
          top: 50%;
          transform: translateY(-60%);
          font-size: 15px;
        }
      }
      .new_password{
        margin: 15px 0 30px;
        position: relative;
        color: #999999;
        input {
          width: 100%;
          min-height: 43px;
          line-height: 43px;
          border: 1px solid rgb(244, 244, 244);
          border-radius: 3px;
          font-size: 13px;
          padding-left: 45px;
        }
        i {
          position: absolute;
          left: 17px;
          top: 50%;
          transform: translateY(-60%);
          font-size: 15px;
        }
      }
    }
    .step1 {
      padding: 0 28px;
      h4 {
        font-weight: 900;
        padding: 16px;
      }
    }
    .step2 {
      border-top: 1px solid #eee;
      p {
        padding: 18px 0 24px;
        font-size: 12px;
        color: #989898;
      }
    }
    //覆蓋原來input 點擊 顯示邊框陰影樣式
    .form-control.is-valid {
      border-color: #eeeeee;
      box-shadow: none;
    }
    .btn {
      width: 100%;
      min-height: 55px;
      border: 1px solid rgb(241, 241, 241);
      background: rgb(246, 246, 246);
      margin-bottom: 45px;
    }
    .active {
      width: 100%;
      border: none;
      background: #468bed;
      color: white !important;
    }
    .email {
      margin: 16px 0;
    }
    .password {
      margin: 16px 0;
    }
    .new_password {
      margin: 1rem 0;
    }
    .forget_password {
      margin-bottom: 30px;
    }
  }
</style>
