<template>
  <div class="contact_us">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 content_left">
        <h4>聯係我們</h4>
        <div class="line"></div>
        <ul>
          <li>意見反饋</li>
        </ul>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 content_right">
        <h3>意見反饋</h3>
        <div class="unify_style">
          您的姓名：
          <input type="text" class=" name" ref="user_name" placeholder="" @change="name_verify">
          <span style="color: red;" v-show="name_hint">請輸入您的姓名</span>
        </div>
        <div class="unify_style">
          您的郵箱：
          <input type="text" class="email" ref="user_email" placeholder="" @change="email_verify">
          <span style="color: red;" v-show="email_hint">請輸入正確的郵箱地址</span>
        </div>
        <div class="unify_style">
          反饋内容：
          <textarea class="feedback" ref="user_feedback" cols="30" rows="10" @chang="feedback_verify"></textarea>
          <div style="color: red;text-align: center" v-show="feedback_hint">請輸入您的反饋</div>
        </div>
        <div style="text-align: right;">
          <button style="max-width:120px;width: 100% "  type="button" class="btn btn-primary" @click="submit">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import user_feedback from '@/axios_joggle/axios_feedback'

  export default {
    name: "contact_us",
    data() {
      return {
        email_hint: false,
        name_hint: false,
        feedback_hint: false
      }
    },
    methods: {
      email_verify() {
        let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        if (reg.test(this.$refs.user_email.value)) {
          this.email_hint = false
        } else {
          this.email_hint = true
        }
      },
      name_verify() {
        if (this.$refs.user_name.value) {
          this.name_hint = false
        } else {
          this.name_hint = true
        }
      },
      feedback_verify() {
        if (this.$refs.user_feedback.value) {
          this.feedback_hint = false
        } else {
          this.feedback_hint = true
        }
      },
      submit() {
        let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        if (reg.test(this.$refs.user_email.value) && this.$refs.user_name.value && this.$refs.user_feedback.value) {
          user_feedback.get_feedback({
            "Content": this.$refs.user_feedback.value,
            "Email": this.$refs.user_email.value,
            "Name": this.$refs.user_name.value
          })
            .then(res => {
              if(res.data.ResultCode==200){
                this.$refs.user_email.value = ""
                this.$refs.user_name.value = ""
                this.$refs.user_feedback.value = ""
                alert('提交成功')
              }
            })
            .catch(err => {
            })
        } else {
          console.log('no')
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .contact_us {
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
        ul {
          li {
            font-size: 14px;
            color: rgb(2, 77, 160);
            text-align: left;
            padding-left: 15px;
            border-left: 5px solid rgb(2, 77, 160);
          }
        }
      }
      .content_right {
        padding: 0 30px !important;
        text-align: left;
        .name, .email {
          max-width: 210px;
          height: 38px;
          display: inline-block;
          border: 1px solid rgb(248, 248, 248);
          border-radius: 3px;
        }
        h3 {
          margin-bottom: 20px;
        }
        .feedback {
          border: 1px solid rgb(248, 248, 248);
          vertical-align: top;
          max-width: 700px;
          width: 100%;
          outline: none;
        }
        .unify_style {
          margin: 10px 0;
        }
      }
    }
  }
</style>
