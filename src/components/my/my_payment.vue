<template>
  <div class="account-payment">
      <div class="gains item row">
          <div class="title">
              <h5>我的收益</h5>

          </div>
        <div class="account-show">
            我的賬戶餘額：<span>$ {{$store.state.user_info.Profit}}</span>
        </div>
        <div class="m-tab">
            <ul class="clearfix">
                <li :class="active===1?'active':''" @click="active=1">
                    <router-link to="/my/payment/income">
                        <span>收益記錄</span>
                    </router-link>
                </li>
                <li :class="active===2?'active':''" @click="active=2">
                    <router-link to="/my/payment/payout">
                        <span>提現記錄</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <Income v-if="active===1"></Income>
        <Payout v-if="active===2"></Payout>


        <!--<div class="content" style="text-align:left;min-height:300px" >
            <table class="table table-striped table-bordered" >
            <thead>
                <tr>
                <th>日期</th>
                <th>自推</th>
                <th>共推</th>
                <th>撰寫</th>
                <th>總點閱</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,i) in profitStatisticsList" :key="i">
                    <td>{{$moment(v.Date).format("YYYY-MM-DD")}}</td>
                    <td>{{v.SelfSpread}}</td>
                    <td>{{v.Spread}}</td>
                    <td>{{v.Writeing}}</td>
                    <td>{{v.ViewCount}}</td>
                </tr>

            </tbody>
            </table>
            <p v-if="isEmpty" style="text-align:center">暫無數據</p>
        </div> 

        <div style="text-align:center">
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="changePage"
            >
            </el-pagination>
        </div>  -->
          
      </div>
  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
import Income from './subcomponent/payment_income'
import Payout from './subcomponent/payment_payout'

    export default {
        data(){
            return {
                // loading:false,
                // profitStatisticsList:'',
                // pageSize:15,
                // total:1,
                // isEmpty:false,
                active:1,
                userInfo:''
            }
        },
        components:{
            Income,Payout
        },
        watch:{
        },
      methods:{
            // //最近收益
            // getProfitStatistics(){
            //     this.loading = true
            //     accountAxios.profitStatistics({
            //         pageSize:this.pageSize,
            //         pageIndex:this.$route.query.pageIndex || "1" ,
            //     }).then(res=>{
            //         this.loading = false
            //         if(res.data.ResultCode==200){
            //             this.profitStatisticsList = res.data.Data.Statistics
            //             this.total = res.data.Data.total
            //             // this.pages = Math.ceil(res.data.Data.total/this.pageSize)
            //             console.log(res);
            //         }else if(res.data.ResultCode==201){
            //             if(!res.data.Data){
            //                 this.isEmpty = true
            //             }else{
            //                 this.isEmpty = false
            //             }
            //         }
            //     }).catch(err=>{
            //         this.loading = false
            //     })
            // },
            // changePage(pageIndex){
            //     console.log(pageIndex);
            //     let query = Object.assign({},this.$route.query)
            //     query.pageIndex = pageIndex
            //     this.$router.push({query:query})
            // },
      },
      mounted(){

            // if(!this.$route.query.CategoryID || !this.$route.query.pageIndex){
            //     this.$router.push({query:{CategoryID:'0',pageIndex:'1'}})
            // }else{
            //     this.getProfitStatistics()
            // }
      },
      created(){
          this.active = this.$route.path.split('/')[3]==='income' ? 1:2

          this.userInfo = JSON.parse(localStorage.getItem('user_info'))
      }
    }
</script>

<style lang="less" scoped>
.account-payment {
    max-width :1180px;
    margin:0 auto 30px;
    overflow: hidden;
    padding-top:15px;
    .row {
        margin:0;
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
            .write-btn {
                position: absolute;
                bottom:6px;
                right:0px;
                border-radius:16px;
            }
        }
        .account-show {
            height:90px;
            background-color: #f6f9fe;
            border:1px solid #bfd9f4;
            margin-top:20px;
            line-height: 90px;
            text-align: left;
            padding-left:2%;
            &>span {
                color:#fc432f;
                font-size:30px;
            }
        }
        .m-tab {
            &>ul {
                background-color: #ffffff;
                border:1px solid #dddddd;
                margin-top:22px;
                margin-bottom:-0px;
                margin-right:1px;
                li {
                    float:left;
                    position: relative;
                    // height:48px;
                    span {
                        display: block;
                        padding:15px 35px;
                        font-size:15px;
                        color:#515151;
                    }
                    &:after {
                        content:"";
                        height:3px;
                        width:70px;
                        background-color: #4a8fdf;
                        position: absolute;
                        bottom:0px;
                        left:50%;
                        transform: translateX(-50%);
                        display:none
                    }
                }
                li.active {
                    span {
                        color:#4a8fdf;
                    }
                    &:after {
                        display:block
                    }
                        
                }

            }
        }
        .content {
            padding-top:20px;
            th.title-header {
                width:380px ;
            }
            #doc-title {
                // width:380px ;
                display:flex;
                align-items:flex-start;
                // border:none;
                // border-bottom:1px solid #dddddd;
                img {
                    width:33%;
                    object-fit: scale-down;
                    flex:0 0 33%;
                }
                .tit {
                    font-size:13px;
                    padding-left:10px;
                }
                p.type {
                    color:#bdbdbd;
                    margin-bottom:0;
                }
            }
        }
    }
    @media screen and (max-width:992px) {
        .item .content {
            #doc-title {
                .tit {
                    font-size:11px;
                }
            }
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
    @media screen and (max-width:475px) {
        td,th {
            font-size:12px !important;
        }
        .item .content {
            #doc-title {
                img {
                    display:none
                }
                .tit {
                    font-size:11px;
                    padding-left:0px;
                }
            }
            .xs-button {
                a {
                    padding:3px 6px;
                }
            }
        }
    }
}
</style>
