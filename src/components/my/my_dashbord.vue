<template>
  <div class="account-home">
      <div class="user-info row">
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 l-box">
              <div class="photo">
                  <img src="/static/img/timg.jpg" alt="">
              </div>
              <div class="msg">
                  <h5>{{userInfo.Name}}</h5>
                  <span>我的会员等级：</span><span style="color:#fcae69">无</span> <br/>
                  <span>我的账户金额：</span><span style="color:#fb8b82">5055</span>
              </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 r-box">
                <div>
                    <div class="bg bg1"></div>
                    <p>最新消息(<span>无</span>)</p> 
                </div>
                <div>
                    <div class="bg bg2"></div>
                    <p>发表文章(<span>{{userInfo.ArticleCount}}</span>)</p> 
                </div>
                <div>
                    <div class="bg bg3"></div>
                    <p>本月收入(<span>{{userInfo.Profit}}</span>)</p> 
                </div>
          </div>
      </div>
      <div class="gains item row">
          <div class="title">
              <h5>最近收益</h5>
          </div>
        <div class="content" style="text-align:left;min-height:200px" v-loading="paymentRequest">
            <table class="table table-striped table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
                <th>日期</th>
                <th>自推</th>
                <th>共推</th>
                <th>撰寫</th>
                <th>總點閱</th>
                <th>收益</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,i) in profitStatisticsList" :key="i">
                    <!--<th scope="row">1</th>-->
                    <td>{{v.Date}}</td>
                    <td>{{v.SelfSpread}}</td>
                    <td>{{v.Spread}}</td>
                    <td>{{v.Writeing}}</td>
                    <td>{{v.ViewCount}}</td>
                    <td>{{123}}</td>
                </tr>

            </tbody>
            </table>
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
                            <img v-if="v.CoverImges" :src="v.CoverImges" alt="">
                            <img v-else src="/static/img/OopsDaily.png" alt="">
                        </div>
                        <div style="padding:0 4% 5%">
                            <div class="news-title">
                                <span class="flag">{{v.CategoryName}}</span> <span class="txt">{{v.NewsTitle.length<25?v.NewsTitle:v.NewsTitle.substr(0,25)+'...' }}</span>
                                <div class="sub-title">
                                    <span>時間：{{v.PublishTime}}</span>
                                    &nbsp;<i>|</i>&nbsp;
                                    <span>點閱：{{v.ClickRate}}</span>
                                </div>
                            </div>
                            <div class="" style="margin:17px 0">
                                <button type="button" class="btn btn-primary" style="width:100%" @click="copyLink">複製鏈接</button>
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
    export default {
        data(){
            return {
                userInfo:'',
                loading:false,
                profitStatisticsList:'',
                hotList:'',
                paymentRequest:false,
            }
        },
        watch:{
            '$route.query':'getProfitStatistics'
        },
        methods:{
            //最近收益
            getProfitStatistics(){
                this.paymentRequest = true
                accountAxios.profitStatistics({
                    pageSize:this.pageSize,
                    pageIndex:this.$route.query.pageIndex || "1" ,
                }).then(res=>{
                    this.paymentRequest = false
                    if(res.data.ResultCode==200){
                        this.profitStatisticsList = res.data.Data.Statistics
                        // this.pages = Math.ceil(res.data.Data.total/this.pageSize)
                        console.log(res);
                    }
                }).catch(err=>{
                    this.paymentRequest = false
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
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.hotList = res.data.Data.news
                        // this.pages = Math.ceil(res.data.Data.total/this.pageSize)
                        console.log(res);
                    }
                }).catch(err=>{
                    this.loading = false
                })
            },
            copyLink(){
                console.log('copy');
                var tempInput  = '123454';
                document.body.appendChild(tempInput );
                tempInput.select(); // 选择对象
                document.execCommand("Copy"); // 执行浏览器复制命令
                tempInput.className = 'tempInput ';
                tempInput.style.display='none';
                document.body.removeChild(tempInput );//移除
            }

        },
        components:{},
        mounted(){

        },
        created(){
            this.userInfo = JSON.parse(localStorage.getItem('myUserInfo'))

            if(!this.$route.query.CategoryID || !this.$route.query.pageIndex){
                this.$router.push({query:{CategoryID:'0',pageIndex:'1'}})
            }else{
                this.getProfitStatistics()
            }
            this.hotArticle()
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
                    margin:0 auto;
                    background-color:#eee;
                }
                .bg1 {
                    background:url('/static/img/msg_icon.png') no-repeat;
                }
                .bg2 {
                    background:url('/static/img/doc_icon.png') no-repeat;
                }
                .bg3 {
                    background:url('/static/img/gains_icon.png') no-repeat;
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
                height:82px;
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
                    padding-top:8px;
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
            }
    }
    @media screen and (max-width:525px) {
            .news-list {
                .news-items {
                    flex:0 0 50% !important;
                }
            }
    }
    @media screen and (max-width:414px) {
            .news-list {
                .news-items {
                    .photo {
                        height:80px;
                    }
                }
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
