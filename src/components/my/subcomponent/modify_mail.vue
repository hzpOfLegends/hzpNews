<template>
  <div class="modify-mail" v-loading="loading">
      <div class="title">修改郵箱</div>
      <div class="m-content">
            <div>
            <div class="form-group">
                <label for="exampleInputEmail1">原郵箱</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">驗證碼</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="vCode1" style="width:70%;">
                <button type="" style="display:inline-block" class="btn btn-default">發送驗證碼</button>
            </div>
            </br>
            <div class="btns">
                <button type="" class="btn btn-default" @click="callClose()">取 消</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="" class="btn btn-default" @click="modify()">下一步</button>
            </div>
            </div>

      </div>

  </div>
</template>

<script>
import accountAxios from '../../../axios_joggle/axios_account'
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
          callClose(){
              this.$emit('closeMe',true)
          },
            //   修改密碼
            //   JSON{"loginName":"","loginPwd":"","NewPassword":""}
           modify(){
               console.log(this.name ,this.newPassword,this.newPassword1,this.oldPassword);
                if(!this.name || !this.newPassword || !this.newPassword1 || !this.oldPassword){
                    this.$message({
                        message: '信息輸入不完整',
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
.modify-mail {
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
                padding:10px 20px;
                min-width:99px;
            }
        }
    }
}
</style>
