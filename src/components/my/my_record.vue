<template>
  <div class="record-list" v-loading="loading">
      <div class="gains item row">
          <div class="title">
              <h5>點閱記錄</h5>
                <!--<button type="button " class="btn btn-warning write-btn"><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫</button>-->
                <!--<a to="/account/doc/editor">
                <ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="background:#fb8608">
                        <a href="javascript:;" style="background:#fb8608;color:#fff;border:none">
                            <span aria-hidden="true"></span><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫
                        </a>
                    </li>
                </ul>
                </a>-->
          </div>
          <div class="m-search">
                <el-input  style="width:150px;margin-right:3px;"
                    placeholder="請輸入ID"
                    v-model="searchID"
                    clearable>
                </el-input>
                <el-button type="primary" style="margin-right:15px" @click="searchById()">搜索</el-button>
                <!--<el-date-picker  style="margin-right:3px"
                    v-model="selectDate"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="開始日期"
                    end-placeholder="結束日期">
                </el-date-picker>-->
                <el-date-picker   style="margin-right:3px"
                    v-model="selectDate"
                    type="date"
                    placeholder="選擇日期">
                </el-date-picker>
                <el-button type="primary" @click="searchByDate()">篩選</el-button>
          </div>

        <div class="m-tab">
            <ul class="clearfix">
                <li :class="active==='-1'?'active':''">
                    <a href="javascript:;"  @click="changeQuery('-1')">
                        <span>全部</span>
                    </a>
                </li>
                <li :class="active==='2'?'active':''">
                    <a href="javascript:;" @click="changeQuery('2')">
                        <span>撰寫</span>
                    </a>
                </li>
                <li :class="active==='1'?'active':''">
                    <a href="javascript:;" @click="changeQuery('1')">
                        <span>共推</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="content" style="text-align:left;min-height:300px">
            <table class=" table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr style="width:100%">
                    <th class="title-header" style="padding-left:4%">標題</th>
                    <th style="width:180px;">日期</th>
                    <th style="width:115px;">自推數</th>
                    <th style="width:115px;">公推數</th>
                    <th style="width:115px;">撰寫數</th>
                    <th style="width:115px;">總點閱</th>
                    <th style="width:115px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,i) in articleList" :key="i">
                    <!--<th scope="row">1</th>-->
                    <td>
                        <router-link :to="'/article/'+v.RelationID">
                        <div id="doc-title">
                            <img v-if="v.CoverImges" :src="v.CoverImges" alt="">
                            <img v-else src="/static/img/OopsDaily.png" alt="">
                            <div class="tit" style="color:#373737">
                                <div style="height:36px;margin-bottom:5px">
                                    <p>{{v.Title}}</p>
                                </div>
                                <p class="type">類別:{{v.CategoryName}} <span style="padding:0 4px">|</span> ID:{{v.RelationID.length>10?v.RelationID.substr(0,9)+"...":v.RelationID}}</p>
                            </div>
                        </div>
                        </router-link>
                    </td>
                    <td>{{$moment(v.Date).format("YYYY/MM/DD")}}</td>
                    <td>{{v.SelfSpread}}</td>
                    <td>{{v.Spread}}</td>
                    <td>{{v.Writeing}}</td>
                    <td>{{v.ViewCount}}</td>
                    <td>
                            <router-link :to="'/my/record/'+v.RelationID">全部</router-link>
                    </td>
                </tr>

            </tbody>
            </table>
            <p v-if="isEmpty" style="text-align:center;padding-top:18px">暫無數據</p>
        </div>
        <nav style="text-align:center;padding:40px 0 20px">
            <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            @current-change="getCurrentPage"
            :current-page="2"
            :pager-count = "5"
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
                currentPage:1,
                isEmpty:false,
                active:'-1',
                selectDate:'',
                searchID:''
            }
        },
        watch:{
            '$route.query':'getRecord',
            'selectDate':function(){
                if(!this.selectDate){
                    let query = Object.assign({},this.$route.query)
                    query.Date = ""
                    query.pageIndex = "1" 
                    this.$router.push({query:query})
                }
            },
        },
        components:{},
        methods:{
            searchByDate(){
                if(this.selectDate){
                    let query = Object.assign({},this.$route.query)
                    query.Date = this.$moment(this.selectDate).utc().format("YYYY-MM-DD") //转utc
                    let d = this.$moment(this.selectDate).format("YYYY-MM-DD") 
                    query.sDateTime = this.$moment(d+" 00:00:00").utc().format() //转utc
                    query.eDateTime = this.$moment(d+" 23:59:59").utc().format() //转utc
                    query.pageIndex = "1" 
                    this.$router.push({query:query})
                }else {
                    this.$message({
                        message: '搜索日期不能為空！',
                        type: 'warning',
                        duration: 2500,
                        showClose: true
                    });
                }
            },
            searchById(){
                if(this.searchID){
                    this.$router.push({
                        path:'/my/record/'+ this.searchID
                    })
                }else {
                    this.$message({
                        message: '搜索ID不能為空！',
                        type: 'warning',
                        duration: 2500,
                        showClose: true
                    });
                }
            },
            getRecord(){
                this.loading = true
                this.isEmpty = false
                // this.currentPage = Number(this.$route.query.pageIndex)
                // {"pageSize":"","pageIndex":"","Date":"日期,可传入''或空","type":"1:共推,2:撰写,-1为全部","RelationID":"文章ID,用于查询单篇文章的点击信息可传入''或空"}
                accountAxios.record({
                    pageSize:String(this.pageSize),
                    pageIndex:this.$route.query.pageIndex || "1",
                    // CategoryID:this.$route.query.CategoryID,
                    Date:this.$route.query.Date || "",
                    type:this.$route.query.type || "-1",
                    RelationID:'',
                    sDateTime:this.$route.query.sDateTime || "",
                    eDateTime:this.$route.query.eDateTime || "",
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.articleList = res.data.Data.ArticleView
                        this.total = res.data.Data.total
                    }else if(res.data.ResultCode==201){
                        this.isEmpty = true
                    }
                }).catch(err=>{
                    this.loading = false
                })
            },
            changeQuery(type){
                this.active = type
                let query = Object.assign({},this.$route.query)
                query.Date = "" 
                this.selectDate = ""
                query.type = type
                query.pageIndex = "1" 
                this.$router.push({query:query})
            },
            getCurrentPage(page){
                let q = JSON.parse(JSON.stringify(this.$route.query))
                q.pageIndex = page  //改变页码
                this.$router.push({query:q})
            },
            init(){
                let Q = this.$route.query
                if(Object.keys(Q).length < 1){
                    this.$router.push({query:{pageIndex:'1',type:'-1'}})
                }else{
                    if(Q.Date){
                        // this.selectDate  = this.$moment(Q.Date)
                        this.selectDate = this.$moment(Q.Date+'T00:00:00Z').format("YYYY-MM-DD")  // utc轉當地時間
                    }
                    this.active = Q.type || '-1'
                    this.getRecord()
                }
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
.record-list {
    max-width :1180px;
    margin:0 auto 30px;
    overflow: hidden;
    padding-top:15px;
    .row {
        margin:0;
    }
    .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
         border-left: none;
         border-right: none;
         padding:15px;
    }
    .table-bordered > tbody > tr > td {
        vertical-align: top;
        // padding-top:15px;
    }
    thead {
        tr {
             background:#eeeeee;
             th {
                 padding-top:8px !important;
                 padding-bottom:8px !important;
             }
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
            .write-btn {
                position: absolute;
                bottom:6px;
                right:0px;
                border-radius:16px;
            }
        }
    .m-search {
        padding:15px 0;
        display:flex;
        border-bottom:1px solid #eeeeee;
    }
        .m-tab {
            &>ul {
                background-color: #ffffff;
                border:1px solid #dddddd;
                // margin-top:22px;
                margin-bottom:-0px;
                // margin-right:1px;
                li {
                    float:left;
                    position: relative;
                    // height:48px;
                    span {
                        display: block;
                        padding:14px 35px;
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
            padding-top:0px;
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
                    &>div {
                        // 多行省略
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;

                    }
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
        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
            padding:3px;
        }
    }
}
</style>
<style>
    .m-search .el-range-separator {
        padding:0 !important;
    }
</style>

