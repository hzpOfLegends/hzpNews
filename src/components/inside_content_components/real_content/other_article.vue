<template>
  <div class="other_article">
    <h5 style="font-weight: 900;font-size: 20px"><i class="fa fa-line-chart"
                                                    style="color: #f39900;margin-right: 20px"></i>同區的其他文章</h5>
    <div class="other_article_wrap">
      <div class="recent_hot_content clearfix " v-for="(item,index) in recent_hot" :key="index"
           @click="skip_inside_content(item.RelationID,item.CategoryID)">
        <div class="row">
          <!--<div class="float-left">-->
          <div class="photo">
            <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo" alt="">
          </div>
          <!--</div>-->
          <!--<div class="float-left">-->
          <div class="charater">
            <div class="top">
              <span>{{item.CategoryName}}</span>
              <span>{{item.NewsTitle}}</span>
            </div>
            <div class="center">
              <p>{{item.Content}}</p>
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
      </div>
      <div>
        <loading/>
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
    watch: {
      "$route": function () {
        inside_page_message.other_article({
          pageSize: 20,
          pageIndex: 1,
          CategoryID: this.$route.query.CategoryID
        }).then(res => {
          this.recent_hot = res.data.Data.news
        }).catch(err => {
          console.log(err)
        })
      }
    }
    ,
    created() {

      inside_page_message.other_article({
        pageSize: 20,
        pageIndex: this.pageNum,
        CategoryID: sessionStorage.getItem('CategoryID')? sessionStorage.getItem('CategoryID'):"-1"
      }).then(res => {
        console.log(res)
        this.recent_hot = res.data.Data.news
      }).catch(err => {
        console.log(err)
      })
    },
    filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      }
    },
    methods: {
      skip_inside_content(RelationID, CategoryID) {
        if (RelationID) {
          this.$router.push({
            path: "/article/"+ RelationID
          })
        }

      }
    },
    mounted() {
      var isbool = true
      var that = this
      $(window).scroll(function () {
        if (($(this).scrollTop() + $(window).height()) >= $(document).height() && isbool == true) {
          that.pageNum = that.pageNum + 1
          //大家都在读
          if (isbool) {
            console.log(that.$route.query.CategoryID)
            inside_page_message.other_article({
              pageSize: "20",
              pageIndex: that.pageNum,
              CategoryID: sessionStorage.getItem('CategoryID')?sessionStorage.getItem('CategoryID'):"-1"
            }).then(res => {
              for (let i = 0; i < res.data.Data.news.length; i++) {
                that.recent_hot.push(res.data.Data.news[i])
              }
              isbool = true
            }).catch(err => {
            })
          }
          isbool = false
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
        margin-top: 15px;
        cursor: pointer;
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
          padding-left: 15px;
          position: relative;
          display: inline-block;
          position: relative;
          .top {
            :nth-child(1) {
              display: inline-block;
              min-width: 48px;
              max-height: 22px;
              color: #f89c98;
              border: 1px solid #f89c98;
              font-size: 12px;
              text-align: center;
              line-height: 1.375rem;
              border-radius: 3px;
            }
            :nth-child(2) {
              font-weight: 900;
              font-size: 18px;
              margin-left: 10px;
            }
          }
          .center {
            margin-top: 16px;
            font-size: 14px;
            min-height: 20px;
          }
          .bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            .author {
              font-size: 12px;
              color: #999999;
              padding-left: 18px;
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
