<template>
  <div class="container">
    <div class="row">
      <div class="login_wrap">
        <div class="step1">
          <div>
            <h4>創建新賬號</h4>
          </div>
          <div>
            <div class="email">
              <b-form-input id="emailInput"
                            v-model.trim="email"
                            type="text"
                            :state="email_state"
                            aria-describedby="emailInput inputLiveFeedback"
                            placeholder="Enter your email" @change="emailVerify">
              </b-form-input>
              <b-form-invalid-feedback id="inputLiveFeedback" style="color: red">
                <!-- This will only be shown if the preceeding input has an invalid state -->
                {{email_hint}}
              </b-form-invalid-feedback>
            </div>
            <div class="password">
              <b-form-input id="passwordInput"
                            v-model.trim="password"
                            type="password"
                            :state="password_state"
                            aria-describedby="passwordInput passwordInputFeedback"
                            placeholder="Enter your password" @change="passwordVerify">
              </b-form-input>
              <b-form-invalid-feedback id="passwordInputFeedback" style="color: red">
                <!-- This will only be shown if the preceeding input has an invalid state -->
                {{password_hint}}
              </b-form-invalid-feedback>
            </div>
            <div class="new_password">
              <b-form-input id="new_passwordInput"
                            v-model.trim="new_password"
                            type="password"
                            :state="new_password_state"
                            aria-describedby="new_passwordInput new_passwordInputFeedback"
                            placeholder="Enter your password" @change="newpasswordVerify">
              </b-form-input>
              <b-form-invalid-feedback id="new_passwordInputFeedback" style="color: red">
                <!-- This will only be shown if the preceeding input has an invalid state -->
                {{new_password_hint}}
              </b-form-invalid-feedback>
            </div>
            <button class="btn" @click="submit_mess" :class="{'active':btnActive}">
              注冊
            </button>
          </div>
        </div>
        <div class="step2">
          <p>
            已有賬號？<router-link to="/user/login">前往登錄>></router-link>
          </p>
        </div>
        <div class="shade" v-show="shade_boo">
          <i class="fa fa-spin fa-spinner"></i>
        </div>
      </div>

    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
  import users_page from '@/axios_joggle/axios_users'

  export default {
    name: "register",
    data() {
      return {
        email: "", // 郵箱值
        email_state: true, //郵箱框狀態
        btn_boo1: false, //用來判斷btnactive顔色
        email_hint: "", //郵箱提示
        password: "", // 郵箱值
        password_state: true, //郵箱框狀態
        btn_boo2: false, //用來判斷btnactive顔色
        password_hint: "", //郵箱提示
        btnActive: false, //按鈕顔色
        new_password: "", // 郵箱值
        new_password_state: true, //郵箱框狀態
        btn_boo3: false, //用來判斷btnactive顔色
        new_password_hint: "", //郵箱提示
        shade_boo:false, // 點擊登錄時的遮罩
      }
    },
    created(){
      //隐藏导航栏
      this.$store.state.nav_style = false
      // 隐藏底部1
      this.$store.state.footer_style1 = false
    },
    methods: {
      //郵箱驗證
      emailVerify() {
        let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        // return  reg.test(this.email)?true:false
        if (reg.test(this.email)) {
          this.email_hint = ""
          this.email_state = true
          this.btn_boo1 = true
        } else {
          this.email_hint = "請輸入正確的郵箱"
          this.email_state = false
          this.btn_boo1 = false
        }
        // //用來判斷btnactive顔色
        if (this.btn_boo1 && this.btn_boo2 && this.btn_boo3) {
          this.btnActive = true
        } else {
          this.btnActive = false
        }
      },
      // 密碼嚴重
      passwordVerify() {
        let reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,24}$/
        if (reg.test(this.password)) {
          this.password_hint = ""
          this.password_state = true
          this.btn_boo2 = true
        } else {
          this.password_hint = "請輸入正確的密碼，（8-24位長度字元，支援大寫英文、小寫英文、數字、半形標點，並包含至少三種）"
          this.password_state = false
          this.btn_boo2 = false
        }
        //用來判斷btnactive顔色
        if (this.btn_boo1 && this.btn_boo2 && this.btn_boo3) {
          this.btnActive = true
        } else {
          this.btnActive = false
        }
      },
      newpasswordVerify() {
        if (this.new_password === this.password) {
          this.new_password_hint = ""
          this.new_password_state = true
          this.btn_boo3 = true
        } else {
          this.new_password_hint = "倆次輸入的密碼不一致"
          this.new_password_state = false
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
        if (this.btnActive && lock) {
          lock = false
          // 遮罩
          this.shade_boo = true
          users_page.register({Email: this.email, Password: this.new_password}).then(res => {
            if(res.status==200 && res.data.ResultCode==200){
              // 遮罩
              this.shade_boo = false
              this.$router.push({path:'/login'})
              this.reset_input()
            }else{
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
        }
      },
      // 清空 input
      reset_input(){
        this.email = ""
        this.password = ""
        this.new_password = ""
        this.btnActive = false
      }
    },
    mounted(){
      // 更换背景
      let oops_content_wrap = document.querySelector('.oops_content_wrap')
      oops_content_wrap.style.background = "url('../static/img/background1.png') no-repeat fixed top"
    }
  }
</script>

<style scoped lang="less">
  .container {
    padding: 0;
    margin: 0 auto;
    .row {
      margin:0;
    }
    .login_wrap {
      background: white;
      width: 100%;
      margin: 7rem auto 11.75rem;
      max-width: 470px;
      border-radius: 3px;
      /*遮罩*/
      .shade{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        text-align: center;
        line-height: 400px;
        i{
          font-size: 50px;
        }
      }
    }
    .step1 {
      padding: 27px;
      h4 {
        font-weight: 900;
        padding: 16px;
      }
    }
    .step2 {
      border-top: 1px solid #eee;
      p {
        padding: 12px 0;
        font-size: 14px;
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
      border: 1px solid gray;
      background: white;
      margin-bottom: 5rem;
    }
    .active {
      width: 100%;
      border: none;
      background: #468bed;
      color: white;
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
