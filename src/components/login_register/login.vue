<template>
  <div class="container">
    <div class="row">
      <div class="login_wrap">
        <div class="step1">
          <div>
            <h4>賬戶登錄</h4>
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
              <b-form-invalid-feedback id="inputLiveFeedback">
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
              <b-form-invalid-feedback id="passwordInputFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
                {{password_hint}}
              </b-form-invalid-feedback>
            </div>
            <div class="forget_password" style="text-align: right">
              <a href="#" v-b-modal.modal>忘記密碼？</a>
              <b-modal size="xs" id="modal" :hide-header="true" :hide-footer="true">
                <h5>找回密碼</h5>
              </b-modal>
            </div>
            <button class="btn" @click="submit_mess" :class="{'active':btnActive}">
              登錄
            </button>
          </div>
        </div>
        <div class="step2">
          <p>
            還沒有賬號？
            <router-link to="/register">前往注冊>></router-link>
          </p>
        </div>
      </div>

    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
  import users_page from '../../axios_joggle/axios_users'

  export default {
    name: "login",
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
        btnActive: false //按鈕顔色
      }
    },
    created(){
      //隐藏导航栏
      this.$store.state.nav_style = false
      // 显示底部
      this.$store.state.foot_all_style = true
      // 隐藏底部1
      this.$store.state.footer_style1 = false
    },
    watch: {
      getWrap: function (val) {
        console.log(val)
      }
    },
    mounted() {
      // 去除模態框padding
      setTimeout(() => {
        let modal_padding = document.getElementById('modal1___BV_modal_body_')
        if (modal_padding) {
          modal_padding.style.padding = '0';
        }
      }, 1)
      // 更换背景
      let oops_content_wrap = document.querySelector('.oops_content_wrap')
      oops_content_wrap.style.background = "url('../static/img/background1.png') no-repeat fixed top"

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
        if (this.btn_boo1 && this.btn_boo2) {
          this.btnActive = true
        } else {
          this.btnActive = false
        }
      },
      // 密碼嚴重
      passwordVerify() {
        let reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,24}$/
        if (reg.test(this.password)) {
          this.email_hint = ""
          this.password_state = true
          this.btn_boo2 = true
        } else {
          this.password_hint = "請輸入正確的密碼，（8-24位長度字元，支援大寫英文、小寫英文、數字、半形標點，並包含至少三種）"
          this.password_state = false
          this.btn_boo2 = false
        }
        if (this.btn_boo1 && this.btn_boo2) {
          this.btnActive = true
        } else {
          this.btnActive = false
        }
      },
      submit_mess() {
        // 锁 防止重复提交
        let lock = true
        if (this.btnActive && lock) {
          lock = false
          users_page.login({loginName: this.email, loginPwd: this.password}).then(res => {
            console.log(res)
            if (res.status == 200 && res.data.ResultCode == 200) {
              lock = true
              sessionStorage.setItem('ShareID', res.data.Data.ShareID)
              // window.location.href = "/"
              this.$router.push({path: "/"})
              // 判断是否登录  用来改变样式
              this.$store.state.judge_login = true
              this.reset_input()
            }else{
              lock = true
            }
          }).catch(err => {
            lock = true
          })
        }
      },
      // 清空 input
      reset_input() {
        this.email = ""
        this.password = ""
        this.btnActive = false
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    padding: 0;
    margin: 0;
    .login_wrap {
      background: white;
      width: 100%;
      margin: 7rem auto 11.75rem;
      width: 29.375rem;
      border-radius: 3px;
    }
    .step1 {
      padding: 1.6875rem;
      h4 {
        font-weight: 900;
        padding: 1rem;
      }
    }
    .step2 {
      border-top: 1px solid #eee;
      p {
        margin: 0.75rem auto;
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
      margin: 1rem 0;
    }
    .password {
      margin: 1rem 0;
    }
    .forget_password {
      margin-bottom: 1.875rem;
    }
    // 模態框
    #modal {
      .modal-body {
        padding: 0;
        h5 {
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          color: rgb(10, 83, 162);
          border-bottom: 5px solid rgb(10, 83, 162);
          padding: 1.75rem 0 1.375rem;
        }
      }

    }

  }
</style>
