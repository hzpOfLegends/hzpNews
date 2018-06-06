<template>
  <div class="other_article">
    <h5 style="font-weight: 900;font-size: 20px"><i class="fa fa-line-chart"
                                                    style="color: #f39900;margin-right: 20px"></i>同區的其他文章</h5>
    <div class="other_article_wrap">
      <div class="recent_hot_content clearfix " v-for="(item,index) in $store.state.other_article_content" :key="index"
          >
        <router-link :to="{path:'/article/'+ item.RelationID}">
        <div class="row">
          <!--<div class="float-left">-->
          <div class="photo">
            <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo" >
          </div>
          <!--</div>-->
          <!--<div class="float-left">-->
          <div class="charater">
            <div class="top">
              <div><p>{{item.CategoryName }}</p></div>
              <div><p>{{item.NewsTitle}}</p></div>
            </div>
            <div class="center">
              <p>{{item.Profile}}</p>
            </div>
            <div class="bottom">
              <div class="author">
                <span><img :src="item.Avatar?item.Avatar:default_photo" alt=""></span>
                <span>{{item.AuthorName}}</span>
                <i class="fa fa-clock-o"></i>
                <span>發表時間：</span>
                <span>{{item.PublishTime | timezone_filter}}</span>
              </div>
              <!--</div>-->
            </div>
          </div>
        </div>
        </router-link>
      </div>
      <div>
        <loading v-show="$store.state.loading_progress"/>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import inside_page_message from '@/axios_joggle/axios_inside'
  // loading 引入
  import loading from '@/components/oneself/loading'
  // 时区转换 / 類型轉化
  import filtration from '@/assets/filtration'
  export default {
    name: "other_article",
    data() {
      return {
        recent_hot: [{
          id: 1,
          img: "/static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        }, {
          id: 2,
          img: "/static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        }, {
          id: 3,
          img: "/static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        }],
        default_photo: "/static/img/timg.jpg",
        pageNum: 1, // 同区文章 页数
        default_backgrund_photo: "/static/img/OopsDaily.png"
      }
    },
    components: {
      loading
    },
    filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      }
    },
    methods: {
    },
    mounted() {
      var isbool = true
      var that = this
      // 監聽 滾動加載更多數據
      $(window).scroll(function () {
          if (($(this).scrollTop() + $(window).height()) >= $(document).height()-1 && isbool == true) {
            if(that.$store.state.loading_progress){
            //同区其他文章
            if (isbool) {
              that.pageNum = that.pageNum + 1
              isbool = false
              inside_page_message.other_article({
                pageSize: "20",
                pageIndex: that.pageNum,
                CategoryID: localStorage.getItem('CategoryID')?localStorage.getItem('CategoryID'):this.details.CategoryID,
                RelationID: that.$route.params.RelationID
              }).then(res => {
                if(res.data.ResultCode==201){
                  that.$store.state.loading_progress = false
                  return
                }
                  for (let i = 0; i < res.data.Data.news.length; i++) {
                    that.$store.state.other_article_content.push(res.data.Data.news[i])
                  }
                  isbool = true

              }).catch(err => {
                isbool = true
              })
            }
          }
        }

      })
    }
  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 768px) {
    .photo {
      max-width: 30% !important;
      width: 100%;
      vertical-align: top;
    }

    .charater {
      max-width: 69% !important;
      width: 100%;
    }
  }

  @media screen and(max-width: 414px) {
    .photo {
      max-width: 100% !important;
      width: 100%;
    }

    .charater {
      margin-top: 10px;
      max-width: 100% !important;
      width: 100%;
    }
  }

  .other_article {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: white;
    border-top: 8px solid #f39900;
    padding: 20px;
    text-align: left;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    .other_article_wrap {
      padding: 0;
      margin: 0;
      max-width: 846px;
      .row {
        margin: 0;
      }
      .recent_hot_content {
        padding-bottom: 20px;
        border-bottom: 1px solid #f6f6f6;
        margin-top: 20px;
        cursor: pointer;
        a{
          color: black;
        }
        .photo {
          background-color: rgba(0, 0, 0, .1);
          max-width: 30%;
          width: 100%;
          max-height: 160px;
          overflow: hidden;
          position: relative;
          display: inline-block;
          vertical-align: top;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .charater {
          max-width: 69%;
          width: 100%;
          max-height: 160px;
          padding-left: 15px;
          position: relative;
          display: inline-block;
          overflow: hidden;
          .top {
            display: flex;
            height: 100%;
            :nth-child(1) >p{
              margin-top: 2px;
              display: block;
              min-width: 42px;
              padding: 0 5px;
              overflow: hidden;
              word-break: keep-all;
              height: 22px;
              color: #f89c98;
              border: 1px solid #f89c98;
              font-size: 12px;
              text-align: center;
              line-height: 22px;
              border-radius: 3px;
            }
            :nth-child(2){
              max-width: 460px;
              overflow: hidden;
            }
            :nth-child(2)>p{
              width: 100%;
              height: 100%;
              margin: 0;
              font-weight: 900;
              font-size: 18px;
              padding-left: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp:3;
              -webkit-box-orient: vertical
            }
          }
          .center {
            margin-top: 10px;
            margin-bottom: 16px;
            font-size: 14px;
            max-height: 80px;
            color: #666;
            p{
              max-height: 60px;
              height: 100%;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }
          }
          .bottom {
            .author {
              font-size: 12px;
              color: #999999;
              :nth-child(1) {
                max-width: 26px;
                max-height: 26px;
                display: inline-block;
                border-radius: 50%;
                vertical-align: middle;
                background-color: white;
                border: none;
              }
              :nth-child(2) {
                font-size: 12px;
                font-weight: 600;
                padding-left: 5px;
                padding-right: 10px;
                border-right: 1px solid #999999;
              }
              :nth-child(3) {
                margin: 0 5px 0 15px
              }
            }
          }
        }
      }
    }
  }
</style>
