<template>
  <div class="account-data">
      <div class="gains item row">
          <div class="title">
              <h5>個人資料</h5>
          </div>
        <div class="content" style="text-align:left" v-loading="loading">
            <div class="photo">
                <img v-if="userInfo.Avatar" :src="userInfo.Avatar" alt="">
                <img v-else src="/static/img/timg.jpg" alt="">
            </div>
            <div class="user-info">
               <div class="u-left">
                    <form class="form-horizontal">
                      <div class="form-group l-side">
                        <label for="inputEmail3" class="col-sm-2 control-label"  style="max-width:110px">名字：</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputEmail3" placeholder="Name" v-model="userInfo.Name">
                        </div>
                      </div>
                      <div class="form-group l-side">
                        <label for="select1" class="col-sm-2 control-label"  style="max-width:110px">喜好語言：</label>
                        <div class="col-sm-10">
                          <select class="form-control"  v-model="userInfo.Language">
                            <option>en</option>
                            <option>zh-tw</option>
                            <option>zh-cn</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group l-side">
                        <label for="inputEmail2" class="col-sm-2 control-label"  style="max-width:110px">等級：</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputEmail2" placeholder="Level" disabled>
                        </div>
                      </div>
                      <div class="form-group l-side">
                        <label for="inputEmail1" class="col-sm-2 control-label"  style="max-width:110px">總類：</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputEmail1" placeholder="總類" disabled>
                        </div>
                      </div>
                      <div class="form-group l-side">
                        <label for="" class="col-sm-2 control-label"  style="max-width:110px"></label>
                        <div class="col-sm-10">
                            </br>
                            <button type="button" class="btn btn-primary" style="padding:8px 25px;font-size:14px" @click="modifyInfo()">保存更改</button>
                        </div>
                      </div>
                    </form>
               </div>
               <div class="u-right">
                    <ul>
                        <li>
                           <div>
                                <p style="margin-bottom:2px;">綁定郵箱</p>
                                <span style="color:#5aa1fa">{{userInfo.Email}}</span>
                           </div>
                           <div class="u-btn">
                              <button type="button" class="btn btn-primary" style="padding:6px 22px;">修改</button>
                           </div>
                        </li>
                        <li>
                           <div>
                                <p style="margin-bottom:2px;">綁定手機</p>
                                <span v-if="userInfo.Phone" style="color:#5aa1fa">{{userInfo.Phone}}</span>
                                <span v-else style="color:#fb8507"><i class="glyphicon glyphicon-exclamation-sign"></i> 未綁定</span>
                           </div>
                           <div class="u-btn">
                              <button v-if="userInfo.Phone" type="button" class="btn btn-primary" style="padding:6px 22px;">修改</button>
                              <button v-else type="button" class="btn btn-warning" style="padding:6px 22px;">綁定</button>
                           </div>
                        </li>
                        <li>
                           <div>
                                <p style="margin-bottom:2px;">支付方式/賬號</p>
                                <span style="color:#5aa1fa">支付寶 <span style="padding:0 5px;color:#2e3e4f">|</span> 5050000001@qq.com</span>
                           </div>
                           <div class="u-btn">
                              <button type="button" class="btn btn-primary" style="padding:6px 22px;">修改</button>
                           </div>
                        </li>
                        <li>
                           <div>
                                <p style="margin-bottom:2px;">登錄密碼</p>
                                <span style="color:#5aa1fa">******</span>
                           </div>
                           <div class="u-btn">
                              <button type="button" class="btn btn-primary" style="padding:6px 22px;" @click="clickModify('pwd')">修改</button>
                           </div>
                        </li>
                    </ul>
               </div>
            </div>
        </div>
          
      </div>

      <!--彈層-->
      <div class="modify-cover" v-if="modify">
          <div class="m-view" >
                <modifyPWD @closeMe="closeSubcomponent" v-if="modify==='pwd'"></modifyPWD>
          </div>
      </div>

  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
import modifyPWD from './subcomponent/modify_pwd'
export default {
    data(){
        return {
            userInfo:'',
            initUserInfo:'', //修改前數據
            modify:'',
            loading:false
        }
    },
    components:{
        modifyPWD
    },
    methods:{
        // 監聽子組件關閉信號
        closeSubcomponent(val){
            if(val){
                this.modify = ''
            }
        },
        modifyInfo(){
        //   if(JSON.stringify(this.userInfo) === JSON.stringify(this.initUserInfo)){
          if(this.userInfo.Language === this.initUserInfo.Language && this.userInfo.Name === this.initUserInfo.Name){
                this.$message({
                    message: '請修改后再作保存',
                    type: 'warning'
                });
                return;
          }
          this.loading = true
          accountAxios.modifyUserInfo({
              Language:this.userInfo.Language,
              Name:this.userInfo.Name
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
        },
        clickModify(value){
            this.modify=value
        }
    },
    mounted(){

    },
    created(){
        this.userInfo = JSON.parse(localStorage.getItem('myUserInfo'))
        this.userInfo.Language = this.userInfo.Language?this.userInfo.Language:'en'
        this.initUserInfo = JSON.parse(JSON.stringify(this.userInfo))
    }
    
}
</script>

<style lang="less" scoped>
.account-data {
    max-width :1180px;
    margin:0 auto 30px;
    overflow: hidden;
    padding-top:15px;
    .row {
        margin:0;
    }
    // 彈層
    .modify-cover {
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,.5);
        .m-view {
            max-width:550px;
            max-height:470px;
            margin:140px auto;
        }
    }
    .item {
        padding:2%;
        padding-top:1%;
        background-color: #fff;
        box-sizing: border-box;
        .title {
            // height:38px;
            text-align:left;
            border-bottom:3px solid #eeeeee;
            position: relative;
            h5 {
                display:inline-block;
                padding:2px 3px;
                font-weight:700;
                position: relative;
                &:after {
                    content:"";
                    display:block;
                    height:3px;
                    width:100%;
                    background-color: #0a53a2;
                    position: absolute;
                    bottom:-13px;
                    left:0px;
                }
            }
        }
        .content {
            padding:20px 0px;
            .photo {
              margin:5px auto 25px;
              width:126px;
              height:126px;
              border-radius:50%;
              overflow: hidden;
              img {
                width:100%;
                object-fit: cover;
              }
            }
            .user-info {
                display:flex;
                padding:2%;
            }
            .u-left {
                flex:0  0 46%;
                padding-top:35px;
                .form-horizontal .form-group {
                    margin-right: 0px;
                    margin-left: 0px;
                    label {
                      line-height: 34px;;
                    }
                }

            }
            .u-right {
                flex:0  0 54%;
                padding:0 2.5%;
                margin-left:4%;
                border-left:1px solid #eeeeee;
               ul {
                 padding: -0px 15px;
                 li {
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    min-height:90px;
                    padding-left:70px;
                    border-bottom:1px solid #f3f3f3;
                    background:url('/static/img/set_icon.png') no-repeat 0px 12px;
                    &:nth-child(2){
                      background:url('/static/img/set_icon.png') no-repeat 0px -85px;
                    }
                    &:nth-child(3){
                      background:url('/static/img/set_icon.png') no-repeat 0px -182px;
                    }
                    &:nth-child(4){
                      background:url('/static/img/set_icon.png') no-repeat 0px -283px;
                    }
                   .u-btn {

                   }
                 }
               }
            }
            .form-group.l-side  {
              margin-bottom:25px;
            }
        }
    }
    @media screen and (max-width:992px) {
            .item .content {
                padding:20px 0px;
            }
            .user-info {
                .l-box {
                    border-bottom:1px solid transparent;
                }
            }
            p {
                font-size:12px;
            }
    }
    @media screen and (max-width:768px) {
            .form-group label {
              line-height:20px !important;
            }
            .user-info {
                flex-wrap:wrap;
                padding:2% 5% !important;
                .u-left {
                    flex:0  0 100% !important;
                }
                .u-right {
                    flex:0  0 100% !important;
                    margin:11% 0 !important;
                    border-left:none !important;
                }
            }
    }
    @media screen and (max-width:475px) {
        td,th {
            font-size:12px !important;
        }
    }
}
</style>
