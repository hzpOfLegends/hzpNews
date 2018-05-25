<template>
  <div class="share" v-loading="loading">
      <div class="gains item row">
          <div class="title">
              <h5>熱門好文</h5>
          </div>
        <div class="content" style="text-align:left;min-height:300px">
            <div class="news-list" style="min-height:300px">
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
                                    <span>時間：{{$moment(v.PublishTime).format("YYYY-MM-DD HH:mm:ss")}}</span>
                                    &nbsp;<i>|</i>&nbsp;
                                    <span>點閱：{{v.ClickRate}}</span>
                                </div>
                            </div>
                            <div class="" style="margin:17px 0">
                                <button type="button" :class="'btn btn-primary copy-link-'+i" style="width:100%" :data-clipboard-text="linkPathOrigin+v.RelationID" @click="copyLink('copy-link-'+i)">複製鏈接</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="news-items" v-for="(v,i) in 11" :key="i">
                    <div style="">
                        <div class="photo">
                            
                            <img src="/static/img/OopsDaily.png" alt="">
                        </div>
                        <div style="padding:0 4% 5%">
                            <div class="news-title">
                                <span class="flag">fsdfs</span> <span class="txt">fafsadf</span>
                                <div class="sub-title">
                                    <span>時間：fafsdaf</span>
                                    &nbsp;<i>|</i>&nbsp;
                                    <span>點閱：fasfsdf</span>
                                </div>
                            </div>
                            <div class="" style="margin:17px 0">
                                <button type="button" class="btn btn-primary" style="width:100%" @click="copyLink">複製鏈接</button>
                            </div>
                        </div>
                    </div>
                </div>-->
                
 

            </div>
          <!--分頁器 -->
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
  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
import Clipboard from 'clipboard';
    export default {
        data(){
            return {
                loading:false,
                hotList:'',
                total:1,
                pageSize:12,
                linkPathOrigin:''
            }
        },
        watch:{
            '$route.query':'hotArticle'
        },
        metaInfo: {
            title: "hello!vue-meta",
            // titleTemplate: '%s - by vue-meta',
            // htmlAttrs: {
            // lang: 'zh'
            // },
            // script: [{innerHTML: 'console.log("hello hello!")', type: 'text/javascript'}],
            // __dangerouslyDisableSanitizers: ['script']
        },
        methods:{
            //熱門好文
            hotArticle(){
                this.loading = true
                // JSON {"pageSize":"15","pageIndex":"1","CategoryID":"-1","sDateTime":"","eDateTime":""}
                accountAxios.hotArticle({
                    pageSize:this.pageSize,
                    pageIndex:this.$route.query.pageIndex || "1",
                    CategoryID:"-1",
                    sDateTime:"",
                    eDateTime:""
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.hotList = res.data.Data.news
                        this.total = res.data.Data.total
                        console.log(res);
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

        },
        created(){
            if(!this.$route.query.CategoryID || !this.$route.query.pageIndex){
                this.$router.push({query:{CategoryID:'0',pageIndex:'1'}})
            }else{
            }
            this.hotArticle()
            this.linkPathOrigin = window.location.origin + '/article/'
        }
    }
</script>

<style lang="less" scoped>
.share {
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
