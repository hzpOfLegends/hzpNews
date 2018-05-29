<template>
<div class="payout" v-loading="loading">
        <div class="content" style="text-align:left;min-height:300px" >
            <table class="table table-striped table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
                <th>日期</th>
                <th>執行日期</th>
                <th>金額</th>
                <th>狀態</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,i) in payoutList" :key="i">
                    <td>{{$moment(v.Date).format("YYYY-MM-DD")}}</td>
                    <td>{{v.SelfSpread}}</td>
                    <td>{{v.Spread}}</td>
                    <td>{{v.Writeing}}</td>
                </tr>

            </tbody>
            </table>
            <p v-if="isEmpty" style="text-align:center">暂无数据</p>
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
</template>

<script>
import accountAxios from '../../../axios_joggle/axios_account'
    export default {
        data(){
            return {
                loading:false,
                payoutList:'',
                pageSize:15,
                total:1,
                isEmpty:false,
                active:1
            }
        },
        watch:{
            '$route.query':'getPayout'
        },
      methods:{
            //最近收益
            getPayout(){
                this.loading = true
                accountAxios.getEnchashment({
                    pageSize:this.pageSize,
                    pageIndex:this.$route.query.pageIndex || "1" ,
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.profitStatisticsList = res.data.Data.Statistics
                        this.total = res.data.Data.total
                    }else if(res.data.ResultCode==201){
                        if(!res.data.Data){
                            this.isEmpty = true
                        }else{
                            this.isEmpty = false
                        }
                    }
                }).catch(err=>{
                    this.loading = false
                })
            },
            changePage(pageIndex){
                let query = Object.assign({},this.$route.query)
                query.pageIndex = pageIndex
                this.$router.push({query:query})
            },
      },
      mounted(){

            if(!this.$route.query.CategoryID || !this.$route.query.pageIndex){
                this.$router.push({query:{CategoryID:'0',pageIndex:'1'}})
            }else{
                this.getPayout()
            }
      },
      created(){
      }
    }
</script>

<style lang="less" scoped>
.payout {
        .content {
            // padding-top:20px;
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
</style>
