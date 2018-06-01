<template>
  <div class="article-list" v-loading="loading">
      <div class="gains item row">
          <div class="title">
              <h5>全部文章</h5>
                <!--<button type="button " class="btn btn-warning write-btn"><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫</button>-->
                <router-link to="/my/article/new">
                <!--<ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="">
                        <a href="javascript:;" style="background:#fb8608;color:#fff;border:none;padding:8px 20px;font-size:12px;border-radius:34px;">
                            <span aria-hidden="true"></span><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫
                        </a>
                    </li>
                </ul>-->
                <ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="">
                        <a href="javascript:;"   id="btn-icon"  style="">
                            <span aria-hidden="true"></span><i></i> 文章撰寫
                        </a>
                    </li>
                </ul>
                </router-link>
          </div>
        <div class="content" style="text-align:left;min-height:300px">
            <table class="table table-striped table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
                    <!--<th class="title-header">標題</th>
                    <th style="width:190px">時間</th>
                    <th style="width:220px">點閱</th>
                    <th>操作</th>-->
                    <th class="title-header"  style="width:42%;padding-left:4%">標題</th>
                    <th style="width:20%">時間</th>
                    <th style="width:12%">點閱</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,i) in newsList" :key="i">
                    <!--<th scope="row">1</th>-->
                    <td>
                            <router-link :to="'/article/'+v.RelationID">
                        <div id="doc-title">
                            <img v-if="v.CoverImges" :src="v.CoverImges" alt="">
                            <img v-else src="/static/img/OopsDaily.png" alt="">
                            <div class="tit">
                                <!--注：22汉字以内-->
                                <!--<p>美國朝鮮新加坡首次會晤，外交部緊急回應后，於是</p>-->
                                <!--<p class="type">類別：政治</p>-->
                                <div style="min-height:42px">
                                    <p style="color:#333333">{{v.NewsTitle}}</p>
                                </div>
                                <p v-if="v.CategoryName" class="type">類別：{{v.CategoryName}}</p>
                                <!--<p v-else class="type">類別：未知</p>-->
                            </div>


                        </div>
                            </router-link>
                    </td>
                    <!--时间-->
                    <td>{{$moment(v.PublishTime).format("YYYY-MM-DD HH:mm:ss")}}</td>
                    <!--点阅数-->
                    <td>{{v.ClickRate }}</td>
                    <td>
                        <!--<div class="hidden-xs">
                            <button type="button" class="btn btn-info" @click="$router.push({path:'/my/article/edit/'+ v.RelationID})"><i class="glyphicon glyphicon-pencil"></i> 編輯</button>
                            <button type="button" class="btn btn-danger" @click="deleteArticle(v.RelationID)"><i class="glyphicon glyphicon-trash"></i> 刪除</button>
                            <button type="button" :class="'btn btn-primary copy-link-'+i" :data-clipboard-text="linkPathOrigin+v.RelationID+'?r='+ShareID" @click="copyLink('copy-link-'+i)">複製鏈接</button>
                        </div>-->


                        <div class="">
                            <span class="edit-btn" @click="$router.push({path:'/my/article/edit/'+ v.RelationID})"><i class="glyphicon glyphicon-pencil"></i> </span>
                            <span class="del-btn" @click="deleteArticle(v.RelationID)"><i class="glyphicon glyphicon-remove"></i> </span>
                            <button type="button" :class="'btn btn-primary copy-btn copy-link-'+i" :data-clipboard-text="linkPathOrigin+v.RelationID+'?r='+ShareID" @click="copyLink('copy-link-'+i)">複製鏈接</button>
                        </div>
                        <!--<div class="btn-group btn-group-justified xs-button" role="group" aria-label="Justified button group" style="max-width:300px;min-width:100px">
                            <a href="#" class="btn btn-default" role="button"><i class="glyphicon glyphicon-pencil"></i><span class="btn-text hidden-xs"> 編輯</span></a>
                            <a href="#" class="btn btn-default" role="button"><i class="glyphicon glyphicon-trash"></i><span class="btn-text hidden-xs"> 刪除</span></a>
                            <a href="#" class="btn btn-default" role="button"><i class="glyphicon glyphicon-duplicate"></i><span class="btn-text hidden-xs"> 複製鏈接</span></a>
                        </div>-->
                        <!--<div class="visible-xs btn-group btn-group-justified xs-button" role="group" aria-label="Justified button group" >
                            <a href="javascript:;" @click="$router.push({path:'/my/article/edit/'+ v.RelationID})" class="btn btn-default" role="button"><i class="glyphicon glyphicon-pencil"></i></a>
                            <a href="javascript:;" @click="deleteArticle(v.RelationID)"><i class="glyphicon glyphicon-trash" class="btn btn-default" role="button"><i class="glyphicon glyphicon-trash"></i></a>
                            <a href="javascript:;" :class="'btn btn-default  copy-link-'+i" :data-clipboard-text="linkPathOrigin+v.RelationID" @click="copyLink('copy-link-'+i)" role="button"><i class="glyphicon glyphicon-duplicate"></i></a>
                        </div>-->
                    </td>
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
  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
import Clipboard from 'clipboard';
    export default {
      data(){
        return {
            newsList:null,
            loading:false,
            pages:1, //分页数
            pageSize:15, //默认分页数
            total:1,
            linkPathOrigin:'',
            ShareID:'',
            isEmpty:false
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
                pageIndex:this.$route.query.pageIndex || '1',
                CategoryID:this.$route.query.CategoryID || '0'
            }).then(res=>{
                this.loading = false
                if(res.data.ResultCode==200){
                    this.newsList = res.data.Data.news
                    this.total = res.data.Data.total
                    this.pages = Math.ceil(res.data.Data.total/this.pageSize)
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
        deleteArticle(id){
            if(id){
                this.$confirm('確定刪除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                        this.loading = true
                        accountAxios.deleteArticle({
                            RelationID:id
                        }).then(res=>{
                            this.loading = false
                            if(res.data.ResultCode==200){
                                this.getMyNews()
                                this.$message({
                                    message: '刪除成功！',
                                    type: 'success'
                                });
                            }

                        }).catch(err=>{
                            this.loading = false
                        })

                }).catch(() => {
                    
                });
            }
        },
        changePage(pageIndex){
            console.log(pageIndex);
            let query = Object.assign({},this.$route.query)
            query.pageIndex = pageIndex
            this.$router.push({query:query})
        },
        init(){
            if(!this.$route.query.CategoryID || !this.$route.query.pageIndex){
                this.$router.push({query:{CategoryID:'0',pageIndex:'1'}})
            }
            this.getMyNews()
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
          this.ShareID = localStorage.getItem('ShareID') || ''
          this.linkPathOrigin = window.location.origin + '/article/'
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
    .edit-btn,.del-btn {
        color:#999999;
        margin:0 10px;
        cursor:pointer;
        padding:7px;
        display:inline-block;
    }
    .copy-btn {
        width:72px !important;
        height:28px;
        background-color: #e9f3fd;
        color:#2c80da;
        border:1px solid #2c80da;
        font-size:13px;
        padding:0;
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
                    object-fit: cover;
                    flex:0 0 33%;
                    max-height:72px;
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
    #btn-icon {
        // display:inline-block;
        // height:15px;
        // width:15px;
        padding:8px 20px;
        padding-left:38px;
        background-color:#fb8608;
        background:#fb8608 url('/static/img/edit_add_icon.png') no-repeat 17px 7px;;
        color:#fff;
        font-size:12px;
        border-radius:34px;
        border:none
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
