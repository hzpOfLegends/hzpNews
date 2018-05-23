<template>
  <div class="article-list">
      <div class="gains item row">
          <div class="title">
              <h5>全部文章</h5>
                <!--<button type="button " class="btn btn-warning write-btn"><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫</button>-->
                <router-link to="/my/article/new">
                <ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="background:#fb8608">
                        <a href="javascript:;" style="background:#fb8608;color:#fff;border:none">
                            <span aria-hidden="true"></span><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫
                        </a>
                    </li>
                </ul>
                </router-link>
          </div>
        <div class="content" style="text-align:left;min-height:500px" v-loading="loading">
            <table class="table table-striped table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
                    <th class="title-header">標題</th>
                    <th style="width:190px">時間</th>
                    <th style="width:220px">點閱</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,i) in newsList" :key="i">
                    <!--<th scope="row">1</th>-->
                    <td>
                        <div id="doc-title">
                            <img v-if="v.CoverImges" :src="v.CoverImges" alt="">
                            <img v-else src="/static/img/OopsDaily.png" alt="">
                            <div class="tit">
                                <!--注：22汉字以内-->
                                <!--<p>美國朝鮮新加坡首次會晤，外交部緊急回應后，於是</p>-->
                                <!--<p class="type">類別：政治</p>-->
                                <p>{{v.NewsTitle}}</p>
                                <p v-if="v.CategoryName" class="type">類別：{{v.CategoryName}}</p>
                                <p v-else class="type">類別：未知</p>
                            </div>
                        </div>
                    </td>
                    <!--时间-->
                    <td>{{v.PublishTime}}</td>
                    <!--点阅数-->
                    <td>{{v.ClickRate }}</td>
                    <td>
                        <div class="hidden-xs">
                            <button type="button" class="btn btn-info"><i class="glyphicon glyphicon-pencil"></i> 編輯</button>
                            <button type="button" class="btn btn-danger"><i class="glyphicon glyphicon-trash"></i> 刪除</button>
                            <button type="button" class="btn btn-default"><i class="glyphicon glyphicon-duplicate"></i> 複製鏈接</button>
                        </div>
                        <!--<div class="btn-group btn-group-justified xs-button" role="group" aria-label="Justified button group" style="max-width:300px;min-width:100px">
                            <a href="#" class="btn btn-default" role="button"><i class="glyphicon glyphicon-pencil"></i><span class="btn-text hidden-xs"> 編輯</span></a>
                            <a href="#" class="btn btn-default" role="button"><i class="glyphicon glyphicon-trash"></i><span class="btn-text hidden-xs"> 刪除</span></a>
                            <a href="#" class="btn btn-default" role="button"><i class="glyphicon glyphicon-duplicate"></i><span class="btn-text hidden-xs"> 複製鏈接</span></a>
                        </div>-->
                        <div class="visible-xs btn-group btn-group-justified xs-button" role="group" aria-label="Justified button group" >
                            <a href="#" class="btn btn-default" role="button"><i class="glyphicon glyphicon-pencil"></i></a>
                            <a href="#" class="btn btn-default" role="button"><i class="glyphicon glyphicon-trash"></i></a>
                            <a href="#" class="btn btn-default" role="button"><i class="glyphicon glyphicon-duplicate"></i></a>
                        </div>
                    </td>
                </tr>

            </tbody>
            </table>
            <nav aria-label="" style="text-align:center;">
                <ul class="pagination">
                    <li class="disabled"><a href="javascript:;" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                    <!--<li class="active"><a href="javascript:;">1<span class="sr-only">(current)</span></a></li>-->
                    <li><a href="javascript:;" v-for="(v,i) in pages" :key="i" @click="changePage(i+1)">{{i+1}}</a></li>
                    <li><a href="javascript:;" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                </ul>
            </nav>
        </div>
          
      </div>
  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
    export default {
      data(){
        return {
            newsList:null,
            loading:false,
            pages:1, //分页数
            pageSize:15, //默认分页数
        }
      },
      watch:{
        '$route.query':'getMyNews'
      },
      methods:{
        getMyNews(){
            this.loading = true
            accountAxios.getMyNews({
                pageSize:this.pageSize,
                pageIndex:this.$route.query.pageIndex,
                CategoryID:this.$route.query.CategoryID
            }).then(res=>{
                this.loading = false
                if(res.data.ResultCode==200){
                    this.newsList = res.data.Data.news
                    this.pages = Math.ceil(res.data.Data.total/this.pageSize)
                }
            }).catch(err=>{
                this.loading = false
            })
        },
        changePage(pageIndex){
            console.log(pageIndex);
            let query = this.$route.query
            query.pageIndex = pageIndex
            this.$router.push({query:query})
        },
        init(){
            if(!this.$route.query.CategoryID || !this.$route.query.pageIndex){
                this.$router.push({query:{CategoryID:'0',pageIndex:'1'}})
            }
            this.getMyNews()
        }

      },
      components:{},
      mounted(){

      },
      created(){
          
          this.init()
      }
    }
</script>

<style lang="less" scoped>
.article-list {
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
