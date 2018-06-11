<template>
  <div class="account-home">
      <div class="user-info row">
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 l-box">
              <div class="photo"  @click="$router.push({path:'/my/user/info'})" style="cursor:pointer">
                    <img v-if="$store.state.user_info.Avatar" :src="$store.state.user_info.Avatar" alt="">
                    <img v-else src="/static/img/timg.jpg" alt="">
                  <!--<img src="/static/img/timg.jpg" alt="">-->
              </div>
              <div class="msg">
                  <h5 style="margin:0 0 5px 0">{{$store.state.user_info.Name}}</h5>
                  <span>我的會員等級：</span><span style="color:#fcae69">1級</span> <br/>
                  <span>我的賬戶金額：</span><span style="color:#fb8b82">{{$store.state.user_info.Profit || 0}}</span>
              </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 r-box">
                <div>
                    <div class="bg bg1"></div>
                    <p>最新消息(<span>0</span>)</p> 
                </div>
                <div>
                    <div class="bg bg2" @click="$router.push({path:'/my/article/list?CategoryID=0&pageIndex=1'})"></div>
                    <p>發表文章(<span>{{$store.state.user_info.ArticleCount || 0}}</span>)</p> 
                </div>
                <div>
                    <div class="bg bg3" @click="$router.push({path:'/my/payment/income?CategoryID=0&pageIndex=1'})"></div>
                    <p>我的收益(<span>{{$store.state.user_info.Profit || 0}}</span>)</p> 
                    
                </div>
          </div>
      </div>
      <div class="gains item row">
          <div class="title">
              <h5>最近收益</h5>
          </div>
        <div class="content" style="text-align:left;min-height:100px" v-loading="paymentRequest">
            <table class="table table-striped table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
                <th style="padding-left:3.5%">日期</th>
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
                    <td>{{$moment(v.Date).format("YYYY/MM/DD")}}</td>
                    <td>{{v.SelfSpread}}</td>
                    <td>{{v.Spread}}</td>
                    <td>{{v.Writeing}}</td>
                    <td>{{v.ViewCount}}</td>
                    <!--<td>{{123}}</td>-->
                </tr>

            </tbody>
            </table>
            <p v-if="isEmpty" style="text-align:center">暫無數據</p>
        </div>   
      </div>




      <div class="gains item row record">
          <div class="title">
              <h5>最近點閱</h5>
          </div>
        <div class="content" style="text-align:left;min-height:300px">
            <table class=" table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
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
                                <p class="type">類別:{{v.CategoryName}} <span style="padding:0 4px">|</span> ID:{{v.RelationID.length>12?v.RelationID.substr(0,12)+"...":v.RelationID}}</p>
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
            <p v-if="isEmpty1" style="text-align:center;padding-top:18px">暫無數據</p>
        </div>  
      </div>
      
      <div class="gains item row">
          <div class="title">
              <h5>熱門文章</h5>
          </div>
        <div class="content" style="text-align:left;min-height:300px" v-loading="loading">
            <div class="news-list">
                <div class="news-items" v-for="(v,i) in hotList" :key="i">
                    <div style="">
                        <div class="photo">
                            <router-link :to="'/article/'+v.RelationID">
                            <img v-if="v.CoverImges" :src="v.CoverImges" alt="">
                            <img v-else src="/static/img/OopsDaily.png" alt="">
                            </router-link>
                        </div>
                        <div style="padding:0 4% 5%">
                            <div class="news-title">
                                <div style="height:50px;overflow:hidden;" class="hot-title">
                                    <span class="flag">{{v.CategoryName}}</span> <span class="txt">{{v.NewsTitle }}</span>
                                    <!--<span class="flag">{{v.CategoryName}}</span> <span class="txt">{{v.NewsTitle.length<25?v.NewsTitle:v.NewsTitle.substr(0,25)+'...' }}</span>-->
                                </div>
                                <div class="sub-title">
                                    <span>時間：{{$moment(v.PublishTime).format("YYYY-MM-DD HH:mm:ss")}}</span>
                                    &nbsp;<i>|</i>&nbsp;
                                    <span>點閱：{{v.ClickRate}}</span>
                                </div>
                            </div>
                            <div class="" style="margin:17px 0 12px">
                                <button type="button" :class="'btn btn-primary copy-link-'+i" style="width:100%" :data-clipboard-text="linkPathOrigin+v.RelationID+'?r='+ShareID" @click="copyLink('copy-link-'+i)">複製鏈接</button>
                            </div>
                        </div>
                    </div>
                </div>
                
 

            </div>
        </div>   
      </div>




      

  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
import Clipboard from 'clipboard';
    export default {
        data(){
            return {
                userInfo:'',
                loading:false,
                profitStatisticsList:'',
                hotList:'',
                paymentRequest:false,
                recordRequest:false,
                linkPathOrigin:'',
                requestCount:0,
                ShareID:'',
                isEmpty:false,
                isEmpty1:false,
                times:'',
                articleList:'',
                pageSize:10
            }
        },
        watch:{
            '$route.query':'getProfitStatistics',
            'requestCount':'closeNProgress'

        },
        methods:{
            closeNProgress(){
                if(this.requestCount === 3){
                    this.$NProgress.done()
                    this.requestCount = 0
                }
            },
            getRecord(){
                this.recordRequest = true
                this.isEmpty1 = false
                // this.currentPage = Number(this.$route.query.pageIndex)
                // {"pageSize":"","pageIndex":"","Date":"日期,可传入''或空","type":"1:共推,2:撰写,-1为全部","RelationID":"文章ID,用于查询单篇文章的点击信息可传入''或空"}
                accountAxios.record({
                    pageSize:String(this.pageSize),
                    pageIndex:this.$route.query.pageIndex || "1",
                    // CategoryID:this.$route.query.CategoryID,
                    Date:'',
                    type:this.$route.query.type || "-1",
                    RelationID:''
                }).then(res=>{
                    this.requestCount++
                    this.recordRequest = false
                    if(res.data.ResultCode==200){
                        this.articleList = res.data.Data.ArticleView.slice(0,5)
                        this.total = res.data.Data.total
                    }else if(res.data.ResultCode==201){
                        this.isEmpty1 = true
                    }
                }).catch(err=>{
                    this.recordRequest = false
                    this.requestCount++
                })
            },
            //最近收益
            getProfitStatistics(){
                this.paymentRequest = true
                accountAxios.profitStatistics({
                    pageSize:this.pageSize,
                    pageIndex:this.$route.query.pageIndex || "1" ,
                }).then(res=>{
                    this.requestCount++
                    this.paymentRequest = false
                    if(res.data.ResultCode==200){
                        this.profitStatisticsList = res.data.Data.Statistics
                        // this.pages = Math.ceil(res.data.Data.total/this.pageSize)
                    }else if(res.data.ResultCode==201){
                        if(!res.data.Data){
                            this.isEmpty = true
                        }else{
                            this.isEmpty = false
                        }
                    }
                }).catch(err=>{
                    this.paymentRequest = false
                    this.requestCount++
                })
            },
            //熱門好文
            hotArticle(){
                this.loading = true
                // JSON {"pageSize":"15","pageIndex":"1","CategoryID":"-1","sDateTime":"","eDateTime":""} 
                accountAxios.hotArticle({
                    pageSize:"8",
                    pageIndex:"1",
                    CategoryID:"-1",
                    sDateTime:"",
                    eDateTime:""
                }).then(res=>{
                    this.requestCount++
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.hotList = res.data.Data.news
                        // this.pages = Math.ceil(res.data.Data.total/this.pageSize)
                        this.copyLink()
                    }
                }).catch(err=>{
                    this.loading = false
                    this.requestCount++
                })
            },
            copyLink(className){
                const clipboard = new Clipboard('.'+className);
                clipboard.on('success', e=> {
                    // console.info('Action:', e.action);
                    // console.info('Text:', e.text);
                    // console.info('Trigger:', e.trigger);
                    this.$message({
                        message: '複製成功！',
                        type: 'success'
                    });
                    e.clearSelection();
                });

                clipboard.on('error', function(e) {
                    // console.error('Action:', e.action);
                    // console.error('Trigger:', e.trigger);
                });
            }

        },
        components:{},
        mounted(){
            this.$NProgress.start()

        },
        created(){
            this.$store.state.refreshUserInfo = true  //通知刷新userinfo
            if(!this.$route.query.CategoryID || !this.$route.query.pageIndex){
                this.$router.push({query:{CategoryID:'0',pageIndex:'1'}})
            }else{
            }
            this.getProfitStatistics()
            this.hotArticle()
            this.getRecord()
            this.linkPathOrigin = window.location.origin + '/article/'
            this.ShareID = localStorage.getItem('ShareID') || ''
        }
    }
</script>

<style lang="less" scoped>
.account-home {
    max-width :1180px;
    margin:0 auto 30px;
    overflow: hidden;
    padding-top:15px;
    .row {
        margin:0;
    }
    .hot-title {
        // 多行省略
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        .txt {
        }
    }
    .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
         border-left: none;
         border-right: none;
         padding:15px;
    }
    thead {
        tr {
             background:#eeeeee;
             th {
                 padding-top:10px !important;
                 padding-bottom:10px !important;
             }
        }
    }
    .user-info {
        background-color: #fff;
        margin-bottom:10px;
       &>div {
         border:1px solid #eeeeee;
         min-height:140px;
       }

       .l-box {
            display:flex;
            align-items:center;
            // padding:15px;
            .photo {
                width:70px;
                height:70px;
                border-radius:50%;
                overflow: hidden;
                margin:15px;
                margin-left:40px;
                border:1px solid #ccc;
                img {
                    width:100%;
                    height:auto;
                    object-fit:cover; 
                    //    object-fit: fill | contian | cover | none | scale-down;  
                }
            }
            .msg {
                text-align: left;
                h5 {
                    font-size:15px;
                    font-weight: 700;
                }
                span {
                    font-size:13px;
                    color:#aaaaaa;
                }
            }
       }
        .r-box {
            display:flex;
            align-items:center;
            &>div {
                flex:0 0 33%;
                height:80px;
                .bg{
                    width:50px;
                    height:50px;
                    margin:2px auto;
                    background-color:#eee;
                }
                .bg1 {
                    background:url('/static/img/msg_icon.png') no-repeat 0px 7px;
                }
                .bg2 {
                    cursor:pointer;
                    background:url('/static/img/doc_icon.png') no-repeat 0px 7px;
                }
                .bg3 {
                    cursor:pointer;
                    background:url('/static/img/gains_icon.png') no-repeat 0px 7px;
                }
                p{
                    font-size:13px;
                    span {
                        color:#f06a6e;
                    }
                }
                @media screen and (max-width:414px) {
                    p {
                        font-size:12px;
                    }
                }
                
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
            padding-top:20px;
        }
    }
    .record {
            .content {
            min-height:200px;
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

    .news-list {
        display:flex;
        flex-wrap:wrap;
        .news-items {
            flex:0 0 25%;
            justify-content:space-between;
            max-width:288px;
            box-sizing: border-box;
            &>div{
                border:1px solid #e5e5e5;
                margin:1.5% 3% 5%;
            }
            .photo {
                width:100%;
                height:132px;
                margin-bottom:5px;
                background-color: #eee;
                overflow: hidden;
                img {
                    width:100%;
                    height:100%;
                    object-fit: cover;
                }
            }
            .news-title {
                height:74px;
                span.flag {
                    display:inline-block;
                    height:20px;
                    // width:38px;
                    padding-left:3px;
                    padding-right:3px;
                    border:1px solid #fa9b97;
                    color:#fa9b97;
                    border-radius:3px;
                    font-size: 12px;
                    text-align: center;
                    line-height: 20px;
                }
                span.txt {
                    line-height:25px;
                }
                .sub-title {
                    font-size:12px;
                    color:#999999;
                    padding-top:5px;
                    height:38px;
                    // 多行省略
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
            }
            .btn-primary {
                background-color: #2c7fdb;
                height:45px;
                border-color:#2c7fdb;
                &:hover {
                    background-color: #2d70cb;
                }

            }
        }
    }
    @media screen and (max-width:992px) {
            padding:0;
            .user-info {
                .l-box {
                    border-bottom:1px solid transparent;
                }
            }
            p {
                font-size:12px;
            }
            .news-list {
                .news-items {
                    flex:0 0 33%;
                    .photo {
                        height:120px;
                    }
                }
            }
    }
    @media screen and (max-width:768px) {
            padding:0;
            .news-list {
                .news-items {
                    .photo {
                        height:100px;
                    }
                }
                .sub-title {
                    font-size:12px !important;
                }
            }
    }
    @media screen and (max-width:525px) {
            .news-list {
                .news-items {
                    flex:0 0 50% !important;
                }
            }
    }
    @media screen and (max-width:450px) {
            .news-list {
                .news-items {
                    .photo {
                        height:80px;
                    }
                }
            }
        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
            padding:2px;
        }
        .tit {
            padding-left:2px !important;
        }
        .record {
            .content {
                #doc-title {
                    img {
                        display:none
                    }
                }
            }
        }
        .news-title {
            // height:62px !important;
        }

    }
    @media screen and (max-width:330px) {
            .news-list {
                .news-items {
                    .photo {
                        height:65px;
                    }
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
