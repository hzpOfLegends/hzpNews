<template>
  <div class="the_step2" v-loading="load">
    <div class="the_new_password">
      <div style="margin-bottom: 10px;">新密碼：</div>
      <input type="password" v-model="new_password" @input="pwd_verify">
    </div>
    <div class="the_again_password">
      <p style="color: red;font-size: 12px">{{new_password_hint}}</p>
      <div style="margin-bottom: 10px;">確定密碼:</div>
      <input type="password" v-model="again_password" @input="again_verify">
    </div>
    <p style="color: red;">{{again_password_hint}}</p>
    <div class="next_btn">
      <p style="color: red;font-size: 12px">{{next_hint}}</p>
      <button type="button" id="next_step" :class="before_class1" style="color: rgb(153, 153, 153);background: #f6f6f6" @click="next_step">下一步</button>
    </div>
  </div>
</template>

<script>
  // 路由引入
  import users_page from '@/axios_joggle/axios_users'

  export default {
    name: "step2",
    data() {
      return {
        // 新密碼
        new_password: "",
        // 新密碼 提示
        new_password_hint: "",
        // 在輸入一次 密碼
        again_password: "",
        // 在輸入一次 密碼 提示
        again_password_hint: "",
        // 下一步提示
        next_hint: "",
        // 下一步
        before_class1: "btn btn-button",
        // 獲取驗證碼樣式 /可點擊
        change_class: "btn btn-primary",
        load: false
      }
    },
    methods: {
      //密碼嚴重
      pwd_verify() {
        if (this.password_verfiy(this.new_password)) {
          this.new_password_hint = ""
        } else {
          this.new_password_hint = "請輸入正確的密碼，（8-24位長度字元，支援大寫英文、小寫英文、數字、半形標點，並包含至少三種）"
        }
        if(this.new_password == ""){
          this.new_password_hint = ""
        }
        if(this.again_password) {
          if (this.new_password == this.again_password) {
            this.again_password_hint = ""
          } else {
            this.again_password_hint = "两次輸入的密碼不一致"
          }
        }
        this.next_style()
        this.enter_submit()
      },
      // 在輸入一次 驗證
      again_verify() {
        let newpwd = this.new_password
        let againpwd = this.again_password
        if (newpwd === againpwd) {
          this.again_password_hint = ""
        } else {
          this.again_password_hint = "請保持兩次輸入密碼的一致性"
        }
        if(this.again_password == ""){
          this.again_password_hint = ""
        }
        if(this.new_password) {
          if (this.new_password == this.again_password) {
            this.again_password_hint = ""
          } else {
            this.again_password_hint = "两次輸入的密碼不一致"
          }
        }
        this.next_style()
        this.enter_submit()
      },
      // 下一步 樣式
      next_style() {
        if (this.password_verfiy(this.new_password) && this.again_password === this.new_password) {
          this.next_hint =""
          this.before_class1 = this.change_class
        } else {
          this.before_class1 = "btn btn-button"
        }
      },
      // 下一步
      next_step() {
        if (this.before_class1 == this.change_class) {
            this.load = true
          users_page.reset_email_code({
            Email: this.$route.query.email ? this.$route.query.email : "",
            newPassword: this.again_password
          }).then(res => {
            if(res.data.ResultCode == 200){
              this.load = false
              this.next_hint = ""
              this.$router.push({path:"/user/forgetpassword",query:{step:2}})
            }else{
              this.load = false
              this.next_hint = res.data.ResultMessage
            }
          }).catch(err => {
            this.load = false
            console.log(err)
          })
        } else {
          this.next_hint = "請輸入正確的信息"
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
          this.next_step()
          // console.log("enter")
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .the_step2 {
    padding: 0 44px 50px 44px;
    text-align: left;
    .btn-primary{
      background: #468bed !important;
      color: white !important;
    }
    input {
      border: 1px solid rgb(241, 241, 241);
      border-radius: 3px;
    }
    .the_new_password {
      color: #999999;
      input {
        width: 100%;
        min-height: 45px;
        font-size: 12px;
        padding-left: 20px;
      }
    }
    .the_again_password {
      margin: 10px 0;
      color: #999999;
      input {
        width: 100%;
        min-height: 45px;
        font-size: 12px;
        padding-left: 20px;
      }
    }
    .next_btn {
      text-align: center;
      margin: 29px 0  0;
      button {
        min-width: 110px;
        min-height: 45px;
      }
    }
  }
</style>
