<template>
  <div class="step1_wrap" v-loading="load">
    <div class="the_email">
      <div style="padding-bottom: 10px">郵箱：</div>
      <input type="text" ref="email" @input="email_verify">

    </div>
    <div class="the_code">
      <p style="color: red;font-size: 12px">{{email_hint}}</p>
      <div style="padding-bottom: 10px">驗證碼:</div>
      <input type="text" ref="code" @keyup="code_verify">
      <button type="button" id="get_code" :class="before_class" @click="get_code" style="color: rgb(153, 153, 153);background: #f6f6f6">{{code_name}}</button>

    </div>
    <p style="color: red;font-size: 12px">{{code_hint}}</p>
    <div class="next_btn">
      <p style="color: red;font-size: 12px">{{next_hint}}</p>
      <button type="button" id="next_step" :class="before_class1"  style="color: rgb(153, 153, 153);background: #f6f6f6" @click="next_step">下一步</button>
    </div>
  </div>
</template>

<script>
  // 路由引入
  import users_page from '@/axios_joggle/axios_users'

  export default {
    name: "step1",
    data() {
      return {
        //獲取驗證碼樣式 /不可點擊
        before_class: "btn btn-button",
        // 下一步
        before_class1: "btn btn-button",
        // 獲取驗證碼樣式 /可點擊
        change_class: "btn btn-primary",
        // 郵箱提示
        email_hint: "",
        // 驗證碼提示
        code_hint: "",
        // 下一步提示
        next_hint:"",
        code_name: "獲取驗證碼",
        timer: "", //定時器
        code_lock: true, // 防止重複點擊
        load: false, // loading

      }
    },
    methods: {
      // 郵箱驗證
      email_verify() {
        let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        if (reg.test(this.$refs.email.value)) {
          this.email_hint = ""
          this.verify_right()
        } else {
          this.email_hint = "請填寫正確的郵箱地址"
          this.verify_wrong()
        }
        // 郵箱爲空 清除提示
        if(this.$refs.email.value==""){
          this.email_hint = ""
          this.verify_wrong()
        }
        this.next_style()
        this.enter_submit()
      },
      // 驗證碼 保證不爲空
      code_verify() {
        let reg = /^\d{4,}$/
        if (reg.test(this.$refs.code.value)) {
          this.code_hint = ""
        } else {
          this.code_hint = "請輸入正確的驗證碼"
        }
        // 驗證碼爲空時 清除 提示
        if(this.$refs.code.value==""){
          this.code_hint = ""
        }
        this.next_style()
        this.enter_submit()
      },
      // 回车跳到提交
      enter_submit(){
        if(event.keyCode==13){
          this.next_step()
          // console.log("enter")
        }
      },
      // 獲取驗證碼
      get_code() {
        let reg1 = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        if (reg1.test(this.$refs.email.value) && this.before_class == "btn btn-primary") {
          if (this.code_lock) {
            this.code_name = 60
            this.setInterval_name()
            users_page.send_email_code({Email: this.$refs.email.value}).then(res => {
              if(res.data.ResultCode==200){
                this.email_hint = ""
              }else{
                this.email_hint = res.data.ResultMessage
              }
            }).catch(err => {
              console.log(err)
            })
          }
        }else{
          this.email_hint = "請輸入正確郵箱"
        }
      },
      // 定時器 秒數
      setInterval_name() {

        this.code_lock = false
        this.timer = setInterval(() => {
          if (this.code_name > 0) {
            --this.code_name
          } else if (this.code_name == 0) {
            clearInterval(this.timer)
            this.code_name = "重新發送"
            this.code_lock = true
          }
        }, 1000)
      },
      // 判斷 用戶填寫正確 -》獲取驗證碼按鈕
      verify_right() {
        this.before_class = this.change_class
      },
      // 判斷 用戶填寫錯誤 -》獲取驗證碼按鈕
      verify_wrong() {
        this.before_class = "btn btn-button"
      },
      // 下一步 樣式
      next_style() {
        let reg1 = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        let reg2 = /^\d{4,}$/
        if (reg1.test(this.$refs.email.value) && reg2.test(this.$refs.code.value) && this.before_class == "btn btn-primary") {
          this.before_class1 = this.change_class
        } else {
          this.before_class1 = "btn btn-button"
        }
      },
      // 點擊下一步
      next_step() {
        if (this.before_class1 == this.change_class) {
          this.load = true
          users_page.verify_email_code({Email: this.$refs.email.value, Code: this.$refs.code.value}).then(res => {
            if(res.data.ResultCode == 200){
              this.next_hint = ""
              this.load = false
              this.$router.push({path:'/user/forgetpassword',query:{step:1,email:this.$refs.email.value}})
            }else{
              this.next_hint = this.$store.state.submit_hint
              this.load = false
            }
          }).catch(err => {
            this.load = false
            console.log(err)
          })
        }else{
          this.next_hint = "請輸入正確的信息"
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less">
  .step1_wrap {
    padding: 0 44px 0 44px;
    text-align: left;
    input {
      border: 1px solid rgb(241, 241, 241);
      border-radius: 3px;
    }
    .btn-primary{
      background: #468bed !important;
      color: white !important;
    }
    .the_email {
      color: #999999;
      input {
        width: 100%;
        min-height: 45px;
        font-size: 12px;
        padding-left: 20px;
      }
    }
    .the_code {
      margin: 10px 0;
      color: #999999;
      input {
        max-width: 338px;
        width: 100%;
        min-height: 45px;
        font-size: 12px;
        padding-left: 20px;
      }
      button {
        min-width: 84px;
        min-height: 46px;
      }

    }
    .next_btn {
      text-align: center;
      margin: 29px 0 58px;
      input {
        min-width: 90px;
        min-height: 40px;
      }
      button{
        width: 110px;
        height: 45px;
      }
    }
  }
</style>
