<template>
  <div class="accountdoc">
      <div class="gains item row">
          <div class="title">
              <h5>文章撰寫</h5>
                <!--<button type="button " class="btn btn-warning write-btn"><i class="glyphicon glyphicon-plus-sign"></i> 文章撰寫</button>-->
                <router-link to="/my/article/list">
                <ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="background:#fb8608">
                        <a href="javascript:;" style="background:#fff;color:#777;">
                            <span aria-hidden="true"></span><i class="glyphicon glyphicon-share"></i> 返回列表
                        </a>
                    </li>
                </ul>
                </router-link>
          </div>
        <div class="content" style="text-align:left">
<form>
  <div class="form-group">
        <label for="">分類：</label>
        <select class="form-control" style="max-width:320px">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
  </div>
  <div class="form-group">
        <label for="">標題：</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="文章標題">
  </div>
  <div class="form-group">
        <label for="">內容：</label>
      <div class="hidden-xs">
        <div id="div1">
            <p>欢迎使用 wangEditor 编辑器</p>
            <!--</div>-->
            <button id="btn1">获取html</button>
            <button id="btn2">获取text</button>
        </div>
      </div>
      <form class="visible-xs">
        <textarea class="form-control" rows="10" placeholder="文章內容"></textarea>
      </form>
  </div>
 
  <button type="button" class="btn btn-primary" style="padding:8px 25px;font-size:14px">發 表</button>
</form>





            </div>
        </div>
          
      </div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
      data(){
        return {
        }
      },
      components:{},
      mounted(){
        var editor = new E('#div1') 
        editor.customConfig.debug = location.href.indexOf('wangeditor_debug_mode=1') > 0
        // 配置服务器端地址
        editor.customConfig.uploadImgServer = 'http://35.194.241.228/api/Upload/Imges'
        editor.create()

        document.getElementById('btn1').addEventListener('click', function () {
            // 读取 html
            alert(editor.txt.html())
        }, false)

        document.getElementById('btn2').addEventListener('click', function () {
            // 读取 text
            alert(editor.txt.text())
        }, false)
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
            padding:20px 30px;
            th.title-header {
                width:380px ;
            }
        }
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
