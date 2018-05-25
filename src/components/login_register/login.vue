<template>
  <div class="container">
    <div class="row">
      <div class="login_wrap" v-loading="shade_boo">
        <div class="step1">
          <div>
            <h4>賬戶登錄</h4>
          </div>
          <div>
            <div class="email">
              <input type="text" v-model="email" ref="user_email" @keyup="emailVerify">
              <i class="fa fa-envelope"></i>
            </div>
            <p style="color: red ; font-size: 12px">{{email_hint}}</p>
            <div class="password">
              <input type="password" v-model="password" ref="user_password" @keyup="passwordVerify">
              <i class="fa fa-lock"></i>

            </div>
            <p style="color: red; font-size: 12px">{{password_hint}}</p>
            <div class="forget_password" style="text-align: right">
              <!--<a href="#" v-b-modal.modal ></a>-->
              <router-link :to="{path:'/user/forgetpassword',query:{step:0}}">忘記密碼？</router-link>
              <b-modal size="xs" id="modal" :hide-header="true" :hide-footer="true">
                <h5>找回密碼</h5>
              </b-modal>
            </div>
            <p style="color: red; font-size: 12px">{{return_login_hint}}</p>
            <button class="btn" @click="submit_mess" :class="{'active':btnActive}">
              登錄
            </button>
          </div>
        </div>
        <div class="step2">
          <p>
            還沒有賬號？
            <router-link to="/user/register">前往注冊>></router-link>
          </p>
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
    name: "login",
    data() {
      return {
        email: "", // 郵箱值
        email_state: true, //郵箱框狀態
        btn_boo1: false, //用來判斷btnactive顔色
        email_hint: "", //郵箱提示
        password: "", // 密码值
        password_state: true, //郵箱框狀態
        btn_boo2: false, //用來判斷btnactive顔色
        password_hint: "", //郵箱提示
        btnActive: false, //按鈕顔色
        return_login_hint: "", //登陸失敗返回的信息
        shade_boo: false, // 點擊登錄時的遮罩
        shareid:""
      }
    },
    created() {
      //隐藏导航栏
      this.$store.state.nav_style = false
      // 显示底部
      this.$store.state.foot_all_style = true
      // 隐藏底部1
      this.$store.state.footer_style1 = false

    },
    watch: {
      getWrap: function (val) {
      }
    },
    mounted() {
      // 进度条关闭
      this.$NProgress.done()
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
        this.enter_submit()
      },
      // 密碼嚴重
      passwordVerify() {
        let reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,24}$/
        if (this.password_verfiy(this.password)) {
          this.password_hint = ""
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
        this.enter_submit()
      },
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
          // console.log("enter")
        }
      },
      submit_mess() {
        // 锁 防止重复提交
        let lock = true
        if (this.btnActive && lock) {
          // 鎖
          lock = false
          //遮罩
          this.shade_boo = true
          users_page.login({
            loginName: this.email,
            loginPwd: this.password
          }).then(res => {
            console.log(res)
            // 存储 用户 shareID
            this.shareid = res.data.Data.ShareID
            if (res.status == 200 && res.data.ResultCode == 200) {
              users_page.login_user_info().then(res => {
                sessionStorage.setItem('user_info',JSON.stringify(res.data.Data))
                this.$message.success("登录成功")
                this.$store.state.user_info = res.data.Data
                lock = true
                // 遮罩
                this.shade_boo = false
                // 登錄失敗返回的文字
                this.return_login_hint = ""
                console.log(11111,res.data)
                sessionStorage.setItem('ShareID', this.shareid)
                this.$router.push({path: "/"})
                // 判断是否登录  用来改变样式
                this.$store.state.judge_login = true
                this.reset_input()
              }).catch(err => {
                console.log(err)
              })

            } else {
              // 遮罩
              this.shade_boo = false
              //登錄失敗 返回文字
              this.return_login_hint = res.data.ResultMessage
              lock = true
            }
          }).catch(err => {
            // 遮罩
            this.shade_boo = false
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
    margin: 0 auto;
    .row {
      margin: 0;
    }
    .login_wrap {
      background: white;
      position: relative;
      // width: 100%;
      margin: 112px auto 188px;
      max-width: 470px;
      border-radius: 3px;
      text-align: left;
    }
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
    .step1 {
      padding: 27px;
      h4 {
        font-weight: 900;
        padding: 16px;
      }
    }
    .step2 {
      border-top: 1px solid #eee;
      text-align: center;
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
      border: 1px solid rgb(241, 241, 241);
      background: rgb(246, 246, 246);
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
      position: relative;
      color: rgb(153, 153, 153);
      input {
        width: 100%;
        min-height: 46px;
        border: 1px solid rgb(241, 241, 241);
        border-radius: 3px;
        font-size: 20px;
        padding-left: 50px;
      }
      i {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
      }
    }
    .password {
      margin: 1rem 0;
      position: relative;
      color: rgb(153, 153, 153);
      input {
        width: 100%;
        min-height: 46px;
        border: 1px solid rgb(244, 244, 244);
        border-radius: 3px;
        font-size: 20px;
        padding-left: 50px;
      }
      i {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
      }
    }
    .forget_password {
      margin-bottom: 30px;
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
          padding: 28px 0 22px;
        }
      }

    }

  }
</style>
