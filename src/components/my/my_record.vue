<template>
  <div class="accountdoc">
      <div class="gains item row">
          <div class="title">
              <h5>點閱記錄</h5>
                <!--<button type="button " class="btn btn-warning write-btn"><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫</button>-->
                <router-link to="/account/doc/editor">
                <ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="background:#fb8608">
                        <a href="javascript:;" style="background:#fb8608;color:#fff;border:none">
                            <span aria-hidden="true"></span><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫
                        </a>
                    </li>
                </ul>
                </router-link>
          </div>
        <div class="content" style="text-align:left;min-height:300px" v-loading="loading">
            <table class="table table-striped table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
                    <th class="title-header">標題</th>
                    <th style="width:180px">日期</th>
                    <th style="width:125px">自推數</th>
                    <th style="width:125px">公推數</th>
                    <th style="width:125px">撰寫數</th>
                    <th style="width:125px">總點閱</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,i) in articleList" :key="i">
                    <!--<th scope="row">1</th>-->
                    <td>
                        <div id="doc-title">
                            <img v-if="v.CoverImges" :src="v.CoverImges" alt="">
                            <img v-else src="/static/img/text.png" alt="">
                            <div class="tit">
                                <!--注：22汉字以内-->
                                <p>{{v.Title}}</p>
                                <p class="type">類別：{{v.CategoryName}}</p>
                            </div>
                        </div>
                    </td>
                    <td>{{$moment(v.Date).format("YYYY-MM-DD HH:mm:ss")}}</td>
                    <td>{{v.SelfSpread}}</td>
                    <td>{{v.Spread}}</td>
                    <td>{{v.Writeing}}</td>
                    <td>{{v.ViewCount}}</td>
                    <td>
                            <router-link to="">全部</router-link>
                    </td>
                </tr>

            </tbody>
            </table>
        </div>
        <nav style="text-align:center;">
            <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            @current-change="getCurrentPage"
            :current-page="2" 
            :total="total">
            </el-pagination>
        </nav>
          
      </div>
  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
    export default {
        data(){
            return {
                loading:false,
                articleList:'',
                pageSize:8,
                total:1,
                currentPage:1
            }
        },
        watch:{
            '$route.query':'getRecord'
        },
        components:{},
        methods:{
            getRecord(){
                this.loading = true
                // this.currentPage = Number(this.$route.query.pageIndex)
                // {"pageSize":"","pageIndex":"","Date":"日期,可传入''或空","type":"1:共推,2:撰写,-1为全部","RelationID":"文章ID,用于查询单篇文章的点击信息可传入''或空"}
                accountAxios.record({
                    pageSize:String(this.pageSize),
                    pageIndex:this.$route.query.pageIndex || "1",
                    // CategoryID:this.$route.query.CategoryID,
                    Date:'',
                    type:'-1',
                    RelationID:''
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.articleList = res.data.Data.ArticleView
                        this.total = res.data.Data.total
                    }
                }).catch(err=>{
                    this.loading = false
                })
            },
            getCurrentPage(page){
                let q = JSON.parse(JSON.stringify(this.$route.query))
                q.pageIndex = page  //改变页码
                this.$router.push({query:q})
            },
            init(){
                if(!this.$route.query.pageIndex){
                    this.$router.push({query:{pageIndex:'1'}})
                }
                // this.currentPage = Number(this.$route.query.pageIndex)
                this.getRecord()
            }
        },
        mounted(){
        },
        created(){
            this.init()
        }
    }
    </script>

<style lang="less" scoped>
.accountdoc {
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
                    max-height:80px;
                    object-fit: cover;
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
