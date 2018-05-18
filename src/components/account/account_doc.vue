<template>
  <div class="accountdoc">
      <div class="gains item row">
          <div class="title">
              <h5>全部文章</h5>
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
        <div class="content" style="text-align:left">
            <table class="table table-striped table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
                    <th class="title-header">標題</th>
                    <th style="width:190px">時間</th>
                    <th style="width:220px">點開</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="v in 5">
                    <!--<th scope="row">1</th>-->
                    <td>
                        <div id="doc-title">
                            <img src="/static/img/text.png" alt="">
                            <div class="tit">
                                <!--注：22汉字以内-->
                                <p>美國朝鮮新加坡首次會晤，外交部緊急回應后，於是</p>
                                <p class="type">類別：政治</p>
                            </div>
                        </div>
                    </td>
                    <td>2012/3/3</td>
                    <td>5</td>
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
                    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                </ul>
            </nav>
        </div>
          
      </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
        }
      },
      components:{},
      mounted(){

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
