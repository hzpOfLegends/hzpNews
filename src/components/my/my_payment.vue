<template>
  <div class="account-payment" v-loading="loading">
      <div class="gains item row">
          <div class="title">
              <h5>我的收益</h5>

          </div>
        <div class="content" style="text-align:left;min-height:300px" >
            <table class="table table-striped table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
                <th>日期</th>
                <th>自推</th>
                <th>共推</th>
                <th>撰寫</th>
                <th>總點閱</th>
                <!--<th>收益</th>-->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,i) in profitStatisticsList" :key="i">
                    <!--<th scope="row">1</th>-->
                    <td>{{$moment(v.Date).format("YYYY-MM-DD HH:mm:ss")}}</td>
                    <td>{{v.SelfSpread}}</td>
                    <td>{{v.Spread}}</td>
                    <td>{{v.Writeing}}</td>
                    <td>{{v.ViewCount}}</td>
                    <!--<td>{{123}}</td>-->
                </tr>

            </tbody>
            </table>
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
        </div>  
          
      </div>
  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
    export default {
        data(){
            return {
                loading:false,
                profitStatisticsList:'',
                pageSize:15,
                total:1
            }
        },
        watch:{
            '$route.query':'getProfitStatistics'
        },
      methods:{
            //最近收益
            getProfitStatistics(){
                this.loading = true
                accountAxios.profitStatistics({
                    pageSize:this.pageSize,
                    pageIndex:this.$route.query.pageIndex || "1" ,
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.profitStatisticsList = res.data.Data.Statistics
                        this.total = res.data.Data.total
                        // this.pages = Math.ceil(res.data.Data.total/this.pageSize)
                        console.log(res);
                    }
                }).catch(err=>{
                    this.loading = false
                })
            },
            changePage(pageIndex){
                console.log(pageIndex);
                let query = Object.assign({},this.$route.query)
                query.pageIndex = pageIndex
                this.$router.push({query:query})
            },
      },
      mounted(){

            if(!this.$route.query.CategoryID || !this.$route.query.pageIndex){
                this.$router.push({query:{CategoryID:'0',pageIndex:'1'}})
            }else{
                this.getProfitStatistics()
            }
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
