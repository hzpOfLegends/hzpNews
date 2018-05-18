<template>
  <div class="account-data">
      <div class="gains item row">
          <div class="title">
              <h5>個人資料</h5>
          </div>
        <div class="content" style="text-align:left">
            <div class="photo">
                <img src="/static/img/timg.jpg" alt="">
            </div>
            <div class="user-info">
               <div class="u-left">
                    <form class="form-horizontal">
                      <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label"  style="max-width:110px">名字：</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputEmail3" placeholder="Name">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="select1" class="col-sm-2 control-label"  style="max-width:110px">喜好語言：</label>
                        <div class="col-sm-10">
                          <select class="form-control" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputEmail2" class="col-sm-2 control-label"  style="max-width:110px">等級：</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputEmail2" placeholder="Level">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputEmail1" class="col-sm-2 control-label"  style="max-width:110px">種類：</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputEmail1" placeholder="Type">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="" class="col-sm-2 control-label"  style="max-width:110px"></label>
                        <div class="col-sm-10">
                            </br>
                            <button type="button" class="btn btn-primary" style="padding:8px 25px;font-size:14px">保存更改</button>
                        </div>
                      </div>
                    </form>
               </div>
               <div class="u-right">
                    <ul>
                        <li>
                           <div>
                                <p style="margin-bottom:2px;">綁定郵箱</p>
                                <span style="color:#5aa1fa">email@qq.com</span>
                           </div>
                           <div class="u-btn">
                              <button type="button" class="btn btn-primary" style="padding:6px 22px;">修改</button>
                           </div>
                        </li>
                        <li>
                           <div>
                                <p style="margin-bottom:2px;">綁定郵箱</p>
                                <span style="color:#5aa1fa">email@qq.com</span>
                           </div>
                           <div class="u-btn">
                              <button type="button" class="btn btn-primary" style="padding:6px 22px;">修改</button>
                           </div>
                        </li>
                        <li>
                           <div>
                                <p style="margin-bottom:2px;">綁定郵箱</p>
                                <span style="color:#5aa1fa">email@qq.com</span>
                           </div>
                           <div class="u-btn">
                              <button type="button" class="btn btn-primary" style="padding:6px 22px;">修改</button>
                           </div>
                        </li>
                        <li>
                           <div>
                                <p style="margin-bottom:2px;">綁定郵箱</p>
                                <span style="color:#5aa1fa">email@qq.com</span>
                           </div>
                           <div class="u-btn">
                              <button type="button" class="btn btn-primary" style="padding:6px 22px;">修改</button>
                           </div>
                        </li>
                    </ul>
               </div>
            </div>
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
.account-data {
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
        }
        .content {
            padding:20px 0px;
            .photo {
              margin:5px auto 25px;
              width:126px;
              height:126px;
              border-radius:50%;
              overflow: hidden;
              img {
                width:100%;
                object-fit: cover;
              }
            }
            .user-info {
                display:flex;
            }
            .u-left {
                flex:0  0 50%;
                .form-horizontal .form-group {
                    margin-right: 0px;
                    margin-left: 0px;
                    label {
                      line-height: 34px;;
                    }
                }

            }
            .u-right {
                flex:0  0 50%;
                padding:0 2%;
               ul {
                 padding: -0px 15px;
                 li {
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    min-height:90px;
                    padding-left:70px;
                    border-bottom:1px solid #f3f3f3;
                    background:url('/static/img/set_icon.png') no-repeat 0px 5px;
                    &:nth-child(2){
                      background:url('/static/img/set_icon.png') no-repeat 0px -92px;
                    }
                    &:nth-child(3){
                      background:url('/static/img/set_icon.png') no-repeat 0px -189px;
                    }
                    &:nth-child(2){
                      background:url('/static/img/set_icon.png') no-repeat 0px -286px;
                    }
                   .u-btn {

                   }
                 }
               }
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
    @media screen and (max-width:768px) {
            .form-group label {
              line-height:20px !important;
            }
    }
    @media screen and (max-width:475px) {
        td,th {
            font-size:12px !important;
        }
    }
}
</style>
