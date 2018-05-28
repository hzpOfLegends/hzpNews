<template>
  <div class="modify-phone" v-loading="loading">
      <div class="title" v-if="isPhoneUser">修改電話</div>
      <div class="title" v-if="!isPhoneUser">綁定電話</div>
      <div class="m-content">
           <div class="m-step">
                <el-steps :align-center="true" :active="currentStep" finish-status="success">
                    <el-step title="身份驗證"></el-step>
                    <el-step title="重置電話" v-if="isPhoneUser"></el-step>
                    <el-step title="綁定電話" v-if="!isPhoneUser"></el-step>
                    <el-step title="修改成功"></el-step>
                </el-steps>
           </div>
            <div v-if="currentStep==1">
                <div class="form-group">
                    <label for="oldPhone">原電話</label>
                    <div style="padding-left:106px;position:relative">
                        <select class="form-control" id="cotegory" style="max-width:105px;position:absolute;left:0;top:0" v-model="step1.phoneCode" :disabled="step1.sendCode">
                            <option value="" selected style="color:#ccc">選擇區號</option>
                            <option  v-for="(v,i) in countryPhoneList" :value="v.dial_code" :key="i">{{v.dial_code}} </option>
                        </select>
                        <input  type="text" class="form-control" id="oldPhone" placeholder="Phone number" v-model="step1.name" :disabled="step1.sendCode">
                    </div>
                </div>
                <div class="form-group f-code">
                    <label for="exampleInputPassword1">驗證碼</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Verify code" v-model="step1.vCode" :disabled="!step1.sendCode">
                    <!--發送驗證碼-->
                    <button type="" class="btn btn-default code-btn"  @click="sendPhoneCode('old')">{{step1.btnTXT}}</button>
                </div>
                </br>
                <div class="btns">
                    <button type="" class="btn btn-default" @click="callClose()">取 消</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="" class="btn btn-default" style="background:#e6e6e6" disabled v-if="!step1.vCode">下一步</button>
                    <button type="" class="btn btn-primary" @click="verifyPhone('old')" v-if="step1.vCode">下一步</button>
                </div>
            </div>
            <div v-if="currentStep==2">
                <div class="form-group">
                    <label for="oldPhone">新電話</label>
                    <div style="padding-left:106px;position:relative">
                        <select class="form-control" id="cotegory1" style="max-width:105px;position:absolute;left:0;top:0" v-model="step2.phoneCode" :disabled="step2.sendCode">
                            <option value="" selected style="color:#ccc">選擇區號</option>
                            <option  v-for="(v,i) in countryPhoneList" :value="v.dial_code" :key="i">{{v.dial_code}} </option>
                        </select>
                        <input  type="text" class="form-control" id="oldPhone" placeholder="Phone number" v-model="step2.name" :disabled="step2.sendCode">
                    </div>
                </div>
                <div class="form-group f-code">
                    <label for="exampleInputPassword1">驗證碼</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Verify code" v-model="step2.vCode" :disabled="!step2.sendCode">
                    <!--發送驗證碼-->
                    <button type="" class="btn btn-default code-btn"  @click="sendPhoneCode('new')">{{step2.btnTXT}}</button>
                </div>
                </br>
                <div class="btns">
                    <button type="" class="btn btn-default" @click="callClose()">取 消</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="" class="btn btn-default" style="background:#e6e6e6" disabled v-if="!step2.vCode">下一步</button>
                    <button type="" class="btn btn-primary" @click="verifyPhone('new')" v-if="step2.vCode">下一步</button>
                </div>
            </div>

            <div v-if="currentStep==3">
                <div class="s3-success">
                    操作成功！
                </div>
                </br>
                <div class="btns">
                    <button type="" class="btn btn-success" @click="callClose(success)">確 定</button>
                </div>
            </div>

      </div>
      <!--<button type="" class="btn btn-success" @click="currentStep=1">1</button>
      <button type="" class="btn btn-success" @click="currentStep=2">2</button>
      <button type="" class="btn btn-success" @click="currentStep=3">3</button>-->

  </div>
</template>

<script>
import accountAxios from '../../../axios_joggle/axios_account'
import countryPhoneList from '../../../assets/country_list'

    export default {
      data(){
        return {
            countryPhoneList:'',
            oldPassword:'',
            newPassword:'',
            newPassword1:'',
            loading:false,
            currentStep:this.isPhoneUser ? 1:2, //根據父傳值判斷，是手機綁定用戶到step1
            step1:{
                phoneCode:'',
                name:'',
                sendCode:false,
                vCode:'',
                btnTXT:'發送驗證碼',
                r_id:''
            },
            step2:{
                phoneCode:'',
                name:'',
                sendCode:false,
                vCode:'',
                btnTXT:'發送驗證碼',
                r_id:''
            },
        }
      },
      props:['isPhoneUser'],
      watch:{
      },
      methods:{
          callClose(success=false){
              this.$emit('closeMe',success)
          },
        sendPhoneCode(status){
            if(status==='old'){
                if(!this.step1.name || !this.step1.phoneCode){
                    this.$message({
                        message: '需輸入原電話',
                        type: 'warning'
                    });
                    return;
                }

                this.loading = true
                // 發手機驗證碼 {"phone":"+8618566086988"}
                accountAxios.sendPhoneCode({
                    phone:this.step1.phoneCode + this.step1.name,
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.step1.r_id = res.data.Data.request_id
                        this.step1.sendCode = true
                        this.step1.btnTXT = "驗證碼已發送"
                    }
                }).catch(err=>{
                    this.loading = false
                })

            }else if(status==='new'){
                if(!this.step2.name || !this.step2.phoneCode){
                    this.$message({
                        message: '需輸入新電話',
                        type: 'warning'
                    });
                    return;
                }

                this.loading = true
                // 发送邮箱验证（需登陆） 验证注册邮箱:{"email":""} 修改用户邮箱:{"email":"新邮箱地址"} 频繁操作会返回1200
                accountAxios.sendPhoneCode({
                    phone:this.step2.phoneCode + this.step2.name,
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.step2.r_id = res.data.Data.request_id
                        this.step2.sendCode = true
                        this.step2.btnTXT = "驗證碼已發送"
                    }
                }).catch(err=>{
                    this.loading = false
                })

            }else{
                return;
            }

            
        }, 
        verifyPhone(status){
            if(status==='old'){
                if(!this.step1.vCode){
                    this.$message({
                        message: '需輸入驗證碼',
                        type: 'warning'
                    });
                    return;
                }

                this.loading = true
                // 驗證手機 {"phone":"+8618566086988","request_id":"","code":""}
                accountAxios.verifyPhone({
                    phone:this.step1.phoneCode + this.step1.name,
                    code:this.step1.vCode,
                    request_id:this.step1.r_id
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.currentStep = 2
                    }
                }).catch(err=>{
                    this.loading = false
                })

            }else if(status==='new'){
                if(!this.step2.vCode){
                    this.$message({
                        message: '需輸入驗證碼',
                        type: 'warning'
                    });
                    return;
                }

                this.loading = true
                // 驗證手機 {"phone":"+8618566086988","request_id":"","code":""}
                accountAxios.verifyPhone({
                    phone:this.step2.phoneCode + this.step2.name,
                    code:this.step2.vCode,
                    request_id:this.step2.r_id
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        // this.currentStep = 2
                        this.modifyPhone()
                    }
                }).catch(err=>{
                    this.loading = false
                })

            }

            
        }, 
        modifyPhone(){
            if(!this.step2.vCode){
                this.$message({
                    message: '需輸入驗證碼',
                    type: 'warning'
                });
                return;
            }

            this.loading = true
            // {"newPhone":"手机号码"} 修改用户手機
            accountAxios.modifyPhone({
                newPhone:this.step2.phoneCode + this.step2.name,
            }).then(res=>{
                this.loading = false
                if(res.data.ResultCode==200){
                    this.currentStep = 3
                }
            }).catch(err=>{
                this.loading = false
            })


            
        }, 
        

      },
      mounted(){
      },
      created(){
          this.countryPhoneList = countryPhoneList
        //   let arr = countryPhoneList.slice(0)
        //   for(let i=0;i<arr.length;i++){
        //       for(let j=0;j<arr.length-i;j++){
        //           if(arr[j+1].dial_code){

        //             if( Number(arr[j]['dial_code'])>Number(arr[j+1]['dial_code'])){
        //                 console.log('JJJJJJJJJJJJJ',arr[j]['dial_code']);
        //                 let temp = arr[j]
        //                 arr[j] = arr[j+1]
        //                 arr[j+1] = temp
        //             }
        //           }else{
        //               arr.splice(j+1,1)
        //           }
        //       }
        //   }
        //   console.log("H",arr);
      }
    }
</script>

<style lang="less">
.modify-phone {
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
    .form-group.f-code{
        position: relative;
        padding-right:99px;
        .code-btn {
            position: absolute;
            right:0px;
            bottom:0px;
            // font-size:13px;
        }
    }
    .s3-success{
        padding-top:30px;
        font-size:25px;
        text-align: center;
    }
    .m-step {
        padding:10px 0px 20px;
        .el-step__head.is-success {
            color: #0a53a2;
            border-color: #0a53a2;
        }
        .el-step__title.is-success {
            color: #0a53a2;
        }
        .el-step__head.is-process {
            color: #c4c7cf;
            border-color: #c4c7cf;
        }
        .el-step__title.is-process {
            color: #c4c7cf;
        }
        // .el-step__icon.is-text {
        // border-radius: 50%;
        // border: 2px solid;
        // border-color: inherit;
    // }
    }
}
</style>
