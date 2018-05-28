<template>
  <div class="modify-pwd" v-loading="loading">
      <div class="title">修改密碼</div>
      <div class="m-content">
            <div>
            <div class="form-group">
                <label for="exampleInputEmail22">賬號</label>
                <input type="text" class="form-control" id="exampleInputEmail22" placeholder="Email" v-model="name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">原密碼</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="oldPassword">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword2">新密碼</label>
                <input type="password" class="form-control" id="exampleInputPassword2" placeholder="New Password" v-model="newPassword">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword3">確認密碼</label>
                <input type="password" class="form-control" id="exampleInputPassword3" placeholder="New Password" v-model="newPassword1">
            </div>
            </br>
            <div class="btns">
                <button type="" class="btn btn-default" @click="callClose()">取 消</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="" class="btn btn-default" @click="modify()">保存更改</button>
            </div>
            </div>

      </div>

  </div>
</template>

<script>
import accountAxios from '../../../axios_joggle/axios_account'
import verify from '../../../assets/verify'

    export default {
      data(){
        return {
            name:'',
            oldPassword:'',
            newPassword:'',
            newPassword1:'',
            loading:false
        }
      },
      watch:{
      },
      methods:{
          callClose(success=false){
              this.$emit('closeMe',success)
          },
            //   修改密碼
            //   JSON{"loginName":"","loginPwd":"","NewPassword":""}
           modify(){
                if(!this.name || !this.newPassword || !this.newPassword1 || !this.oldPassword){
                    this.$message({
                        message: '信息輸入不完整',
                        type: 'warning'
                    });
                    return;
                }
                if(!verify.email(this.name)){
                    this.$message({
                        message: '郵箱格式不正確',
                        type: 'warning'
                    });
                    return;
                }
                if(!verify.password(this.newPassword) || !verify.password(this.newPassword1)){
                    this.$message({
                        message: '密碼格式不正確（8-24位長度字元，大寫英文、小寫英文、數字、半形標點包含至少三種）',
                        type: 'warning'
                    });
                    return;
                }
                if(this.newPassword1 !== this.newPassword){
                    this.$message({
                        message: '密碼兩次輸入不一致',
                        type: 'warning'
                    });
                    return;
                }
                this.loading = true
                accountAxios.modifyUserPassword({
                    loginName:this.name,
                    loginPwd:this.oldPassword,
                    NewPassword:this.newPassword
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                        this.$router.push({path:'/user/login'})
                    }else{
                        this.$message.error('修改失败！');
                    }
                }).catch(err=>{
                    this.loading = false
                })
                
           } 
        

      },
      mounted(){
      },
      created(){
          
      }
    }
</script>

<style lang="less" scoped>
.modify-pwd {
    .title {
        text-align: center;
        height:62px;
        line-height: 62px;
        font-size:18px;
        border-bottom:4px solid #0a53a2;
        color:#2665ab;
        background-color: #fff;
        border-radius:6px 6px 0 0 ;
    }
    .m-content{
        text-align: left;
        min-height:370px;
        background-color: #fff;
        border-radius:0 0 6px 6px  ;
        padding:4% 12% 7%;
        .btns {
            text-align: center;
            button {
                padding:8px 18px;
                min-width:99px;
            }
        }
    }
}
</style>
