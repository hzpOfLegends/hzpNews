<template>
  <div class="record-item" v-loading="loading">
      <div class="gains item row">
          <div class="title">
              <h5>點閱記錄</h5>
                <router-link to="/my/record">
                <!--<ul class="pager write-btn" style="margin:0">
                    <li class="previous" style="background:#fb8608">
                        <a href="javascript:;" style="background:#fff;color:#777;">
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
        <div class="content" style="text-align:left;min-height:300px" >
            <div class="info">
                <div id="doc-title" v-if="recordList.length>0">
                    <img v-if="recordList[0].CoverImges" :src="recordList[0].CoverImges" alt="">
                    <img v-else src="/static/img/OopsDaily.png" alt="">
                    <div class="tit">
                        <!--注：22汉字以内-->
                        <!--<p>美國朝鮮新加坡首次會晤，外交部緊急回應后，於是</p>-->
                        <!--<p class="type">類別：政治</p>-->
                        <div style="overflow: hidden;height:45px">
                            <p style="font-size:16px">{{recordList[0].Title}}</p>
                        </div>
                        <div  class="type">
                            <p v-if="recordList[0].CategoryName">類別:{{recordList[0].CategoryName}}<span style="padding:0 7px">|</span> ID:{{recordList[0].RelationID}}</p>
                        </div>
                        <!--<p v-else class="type">類別：未知 <span>|</span> ID:{{recordList[0].RelationID}}</p> -->
                    </div>
                </div>
            </div>
            <table class="table table-striped table-bordered" >
            <!--<caption>Optional table caption.</caption>-->
            <thead>
                <tr>
                <th>日期</th>
                <th>自推數</th>
                <th>共推數</th>
                <th>撰寫數</th>
                <th>總數</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,i) in recordList" :key="i">
                    <td>{{$moment(v.Date).format("YYYY/MM/DD")}}</td>
                    <td>{{v.SelfSpread}}</td>
                    <td>{{v.Spread}}</td>
                    <td>{{v.Writeing}}</td>
                    <td>{{v.ViewCount}}</td>
                </tr>

            </tbody>
            </table>
            <!--<div class="t-total">總計：<span style="color:">555</span></div>-->
        </div> 

        <!--<div style="text-align:center">
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="changePage"
            >
            </el-pagination>
        </div>  -->
          
      </div>
  </div>
</template>

<script>
import accountAxios from '../../axios_joggle/axios_account'
    export default {
        data(){
            return {
                loading:false,
                // profitStatisticsList:'',
                pageSize:15,
                // total:1,
                RelationID:'',
                recordList:[]
            }
        },
        watch:{
        },
      methods:{
            //最近收益
            getRecordInfo(){
                this.loading = true
                accountAxios.record({
                    pageSize:"15",
                    pageIndex:this.$route.query.pageIndex || "1",
                    CategoryID:this.$route.query.CategoryID,
                    Date:'',
                    type:'-1',
                    RelationID:this.RelationID
                }).then(res=>{
                    this.loading = false
                    if(res.data.ResultCode==200){
                        this.recordList = res.data.Data.ArticleView
                        // this.total = res.data.Data.total
                    }
                }).catch(err=>{
                    this.loading = false
                })
            },
      },
      created(){

            this.RelationID = this.$route.path.split('/')[3]
            this.getRecordInfo()

      }
    }
</script>

<style lang="less" scoped>
.record-item {
    max-width :1180px;
    margin:0 auto 30px;
    overflow: hidden;
    padding-top:15px;
    .row {
        margin:0;
    }
    thead {
        tr {
             background:#eeeeee;
            //  th {
            //      padding-top:8px !important;
            //      padding-bottom:8px !important;
            //  }
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
                // display:flex;
                // align-items:flex-start;
                // border:none;
                // border-bottom:1px solid #dddddd;
                padding-left:110px;
                // margin-left:20px;
                position: relative;
                height:90px;
                img {
                    width:110px;
                    object-fit: scale-down;
                    // flex:0 0 33%;
                    position: absolute;
                    top:-2px;
                    left:-2px;
                }
                .tit {
                    font-size:13px;
                    padding-left:10px;
                    height:100%;
                }
                p.type {
                    color:#bdbdbd;
                    margin-bottom:0;
                    font-size:12px;
                    position: absolute;
                    top:50px;
                    left:120px;
                }
            }
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
                max-height:70px;
            }
            .tit {
                font-size:15px;
                padding-left:10px;
            }
            div.type {
                color:#bdbdbd;
                margin-bottom:0;
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
                    // display:none
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
