<template>
  <div class="account-home">
      <div class="user-info row">
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 l-box">
              <div class="photo">
                  <img src="/static/img/timg.jpg" alt="">
              </div>
              <div class="msg">
                  <h5>用户名称</h5>
                  <span>我的会员等级：</span><span style="color:#fcae69">1级</span> <br/>
                  <span>我的账户金额：</span><span style="color:#fb8b82">5055</span>
              </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 r-box">
                <div>
                    <div class="bg bg1"></div>
                    <p>最新消息(<span>555</span>)</p> 
                </div>
                <div>
                    <div class="bg bg2"></div>
                    <p>发表文章(<span>5005</span>)</p> 
                </div>
                <div>
                    <div class="bg bg3"></div>
                    <p>本月收入(<span>555</span>)</p> 
                </div>
          </div>
      </div>
      <div class="gains item row">
          <div class="title">
              <h5>最近收益</h5>
          </div>
        <div class="content" style="text-align:left">
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
                <tr>
                    <!--<th scope="row">1</th>-->
                    <td>2012/3/3</td>
                    <td>15</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>$1988</td>
                </tr>
                <tr>
                    <!--<th scope="row">1</th>-->
                    <td>2012/3/3</td>
                    <td>15</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>$1988</td>
                </tr>
                <tr>
                    <!--<th scope="row">1</th>-->
                    <td>2012/3/3</td>
                    <td>15</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>$1988</td>
                </tr>
            </tbody>
            </table>
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
        metaInfo: {
            title: "hello!vue-meta",
            // titleTemplate: '%s - by vue-meta',
            // htmlAttrs: {
            // lang: 'zh'
            // },
            // script: [{innerHTML: 'console.log("hello hello!")', type: 'text/javascript'}],
            // __dangerouslyDisableSanitizers: ['script']
        },
        components:{},
        mounted(){

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
    }
    @media screen and (max-width:475px) {
        td,th {
            font-size:12px !important;
        }
    }
}
</style>
