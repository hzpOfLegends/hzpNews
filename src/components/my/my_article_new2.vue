<template>
  <div class="accountdoc">
      <div class="gains item row">
          <div class="title">
              <h5 v-if="status==='add'">文章撰寫</h5>
              <h5 v-if="status==='edit'">文章編輯</h5>
                <!--<button type="button " class="btn btn-warning write-btn"><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫</button>-->
                <router-link to="/my/article/list">
                <!--<ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="background:#fb8608">
                        <a href="javascript:;" style="background:#fff;color:#777;font-size:12px">
                            <span aria-hidden="true"></span><i class="glyphicon glyphicon-share"></i> 返回列表
                        </a>
                    </li>
                </ul>-->
                <!--<ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="">
                        <a href="javascript:;" style="background:#fff;color:#777;padding:8px 20px;font-size:12px;border-radius:34px;">
                            <span aria-hidden="true"></span><i class="glyphicon glyphicon-share"></i> 返回列表
                        </a>
                    </li>
                </ul>-->
                <ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="">
                        <a href="javascript:;"   id="btn-icon"  style="">
                            <span aria-hidden="true"></span><i></i> 返回列表
                        </a>
                    </li>
                </ul>
                </router-link>
          </div>
        <div class="content" style="text-align:left" v-loading="loading">
            <form>
            <div class="form-group">
                    <label for="category" style="color:#747474">分類：</label>
                    <select class="form-control" id="cotegory" style="max-width:320px;color:#777" v-model="article.category">
                        <option value="" selected style="color:#ccc">請選擇</option>
                        <option  v-for="(v,i) in $store.state.nav_type?$store.state.nav_type:1" :value="v.ID" :key="i">{{v.CategoryName}}</option>
                        <!--<option value="2">娱乐</option>
                        <option value="3">动漫</option>
                        <option value="4">汽车</option>
                        <option value="5">时政</option>-->
                    </select>



            </div>
            <div class="form-group">
                    <label for="1" style="color:#747474">標題：</label>
                    <input type="text" class="form-control" id="" placeholder="文章標題" v-model="article.title">
            </div>
            <div class="form-group">
                    <label for="" style="color:#747474">內容：</label>
                <div class="">
                    <!--编辑器-->
                        <vue-html5-editor :content="initContent" :height="200" width="100%" @change="updateData" ></vue-html5-editor>
                    <!--<div id="editor" spellcheck="false">-->
                        <!--<p>Welcome!</p>-->
                    <!--</div>-->
                </div>
                <!--<form class="visible-xs">
                    <textarea class="form-control" rows="10" placeholder="文章內容"></textarea>
                </form>-->
            </div>
            
            <button v-if="status==='add'" type="button" class="btn btn-primary" style="padding:11px 35px;margin-top:18px;font-size:14px" @click="submitArticle()">發 表</button>
            <button v-if="status==='edit'" type="button" class="btn btn-primary" style="padding:11px 35px;margin-top:18px;font-size:14px" @click="submitArticle()">保 存</button>
            </form>
            <!--<div v-html="xss"></div>

            </div>-->
        </div>
          
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHtml5Editor from 'vue-html5-editor'
import EditorConfig from './vue_editor_config'
Vue.use(VueHtml5Editor,EditorConfig)
import accountAxios from '../../axios_joggle/axios_account'
export default {
      data(){
        return {
            editor:null,
            article:{
                category:'',
                title:''
            },
            xss:'',
            status:'',
            loading:false,
            categoryList:'',
            initData:'',
            initContent:'',
            content:''
        }
      },
      components:{
        //   'vue-html5-editor':VueHtml5Editor
      },
      mounted(){
            // this.editor = new E('#editor') 
            // this.editor.customConfig.debug = location.href.indexOf('wangeditor_debug_mode=1') > 0
            // // 配置服务器端地址
            // // this.editor.customConfig.uploadImgServer = 'http://35.194.241.228/api/Upload/Imges'
            // this.editor.customConfig.uploadImgServer = accountAxios.path  +'api/Upload/Imges'
            // this.editor.create()
            
            // this.editor.customConfig.uploadImgHooks = {
            //     before: function (xhr, editor, files) {
            //         // 图片上传之前触发
            //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
                    
            //         // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
            //         // return {
            //         //     prevent: true,
            //         //     msg: '放弃上传'
            //         // }
            //     },
            //     success: function (xhr, editor, result) {
            //         console.log("success",result);
            //         // 图片上传并返回结果，图片插入成功之后触发
            //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            //     },
            //     fail: function (xhr, editor, result) {
            //         console.log("fail",result);
            //         // 图片上传并返回结果，但图片插入错误时触发
            //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            //     },
            //     error: function (xhr, editor) {
            //         console.log("error",result);
            //         // 图片上传出错时触发
            //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
            //     },
            //     timeout: function (xhr, editor) {
            //         // 图片上传超时时触发
            //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
            //     },

            //     // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
            //     // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
            //     customInsert: function (insertImg, result, editor) {
            //         // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
            //         // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

            //         // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
            //         // var url = result.url
            //         // insertImg(url)
            //         // console.log('配置',result);

            //         // result 必须是一个 JSON 格式字符串！！！否则报错
            //     }

            // }

      },
      methods:{
          submitArticle(){
            if( !this.article.category){
                this.$message({
                    message: '請輸入類別',
                    type: 'warning'
                });
                return 
            }
            if( !this.article.title){
                this.$message({
                    message: '請輸入標題',
                    type: 'warning'
                });
                return 
            }
            if( !this.editor.txt.html().replace(/&nbsp;|<p>|<\/p>|<br>|\s/g,'')){
                this.$message({
                    message: '請輸入內容',
                    type: 'warning'
                });
                return 
            }
            if(this.status==='add'){
                this.loading = true;
                accountAxios.publish({
                    Title: this.article.title,
                    Content: this.editor.txt.html(),
                    CategoryID: this.article.category
                }).then(res=>{
                    this.loading = false; 
                    if(res.data.ResultCode==200){
                        this.$message({
                            message: '發表成功！',
                            type: 'success'
                        });
                    }
                    this.$store.state.refreshUserInfo = true  //通知刷新userinfo
                    this.article.title = ''
                    this.article.category = ''
                    this.editor.txt.html('<p><br></p>')
                }).catch(err=>{
                    this.loading = false;
                    console.log('error!',err);
                })
            }else if(this.status==='edit'){
                // ｛"RelationID":"","Title":"文章标题","Content":"文章内容","CategoryID":"文章所属分类ID"｝
                this.loading = true;
                accountAxios.editArticle({
                    RelationID:this.initData.RelationID,
                    Title: this.article.title,
                    Content: this.editor.txt.html(),
                    CategoryID: this.article.category
                }).then(res=>{
                    this.loading = false;
                    if(res.data.ResultCode==200){
                        this.$message({
                            message: '保存成功！',
                            type: 'success'
                        });
                    }
                    this.$router.push({
                        path:'/my/article/list?CategoryID=0&pageIndex=1'
                    })
                }).catch(err=>{
                    this.loading = false;
                    console.log('error!',err);
                })

            }
          },
          getCategories(){
                this.loading = true;
                accountAxios.getCategories({}).then(res=>{
                    this.loading = false;
                    if(res.data.ResultCode==200){
                        this.categoryList = res.data.Data
                    }
                }).catch(err=>{
                    this.loading = false;
                    console.log('error!',err);
                })

          },
            updateData(html){
                this.content = html
            },

      },
      created(){
        //   this.getCategories()
          if(this.$route.path.indexOf('/edit/')!==-1){
                this.status = 'edit'
                accountAxios.getNewInfoForLogin({
                    RelationID:this.$route.path.split('/')[4]
                }).then(res=>{
                    if(res.data.ResultCode==200){
                        this.initData = JSON.parse(JSON.stringify(res.data.Data))
                        this.article.category=res.data.Data.CategoryID
                        this.article.title=res.data.Data.NewsTitle
                        this.editor.txt.html(res.data.Data.Content)
                    }
                }).catch(err=>{
                    console.log('error!',err);
                })

          }else{
              this.status = 'add'
          }

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
    #editor ul,#editor ol {
        list-style: none;
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
            padding:20px 30px;
            th.title-header {
                width:380px ;
            }
        }
    }
    #btn-icon {
        // display:inline-block;
        // height:15px;
        // width:15px;
        padding:8px 20px;
        padding-left:38px;
        background:url('/static/img/back_icon.png') no-repeat 19px 9px;;
        color:#777;
        font-size:12px;
        border-radius:34px;
    }

    @media screen and (max-width:992px) {
            .item .content {
                padding:20px 0px;
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
    }
}
</style>
<style>
    .w-e-text-container {
        z-index:0 !important;
    }
    .w-e-toolbar .w-e-menu {
        z-index:1 !important;
    }

</style>

