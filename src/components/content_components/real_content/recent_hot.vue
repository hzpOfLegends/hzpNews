<template>
  <div class="recent_hot card">
    <h5 style="font-weight: 900;font-size: 20px"><i class="fa fa-line-chart"
                                                    style="color: #f39900;margin-right: 20px"></i>最近熱門</h5>
    <div class=" recent_hot_wrap">
      <div class="recent_hot_content clearfix " v-for="(item,index) in recent_hot" :key="index"
           @click="skip_inside_content(item.RelationID,item.CategoryID)">
        <div class="row">
          <div class="photo">
            <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo">
          </div>
          <div class="charater">
            <div class="top">
              <span>{{item.CategoryID | type_filter}}</span>
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
                <!--| timezone_filter-->
                <span>{{item.PublishTime }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import index_message from '@/axios_joggle/axios_index'
  // 时区转换
  import filtration from '@/assets/filtration'

  export default {
    name: "recent_hot",
    data() {
      return {
        recent_hot: [{
          id: 1,
          Avatar: "/static/img/text.png",
          CategoryName: '國際',
          NewsTitle: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          AuthorName: "魚丸相面",
          PublishTime: "2016-08-08"
        },
          // {
          //   id: 2,
          //   img: "../../../../static/img/text.png",
          //   contrys: '國際',
          //   title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          //   synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          //   author: "魚丸相面",
          //   times: "2016-08-08"
          // }, {
          //   id: 3,
          //   img: "../../../../static/img/text.png",
          //   contrys: '國際',
          //   title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          //   synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          //   author: "魚丸相面",
          //   times: "2016-08-08"
          // }
        ],
        default_photo: "/static/img/timg.jpg",  // 默认头像
        default_backgrund_photo: "/static/img/OopsDaily.png" //默认背景图
      }
    },
    created() {
      index_message.recent_hot({CategoryID:this.$route.query.CategoryID?this.$route.query.CategoryID:'-1'}).then(res => {
        this.recent_hot = res.data.Data
        console.log(1,res)
      }).catch(err => {
        console.log(err)
      })
    },
    filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      },
      type_filter:function (value) {
        return filtration.type_filter(value)
      }
    },
    // 寫一個計算屬性 利用watch 監聽
    computed: {
      get_nav_id() {
        return this.$store.state.nav_id;
      }
    },
    watch: {
      get_nav_id(val) {
        index_message.recent_hot({CategoryID: val}).then(res => {
          this.recent_hot = res.data.Data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    methods: {
      skip_inside_content(RelationID, CategoryID) {
        if(CategoryID){
          sessionStorage.setItem("CategoryID",CategoryID)
        }
        if (RelationID) {
          let q = this.$route.query
          q.RelationID = RelationID
          this.$router.push({
            path: "/article/"+ RelationID,
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @media screen and (min-width: 1200px) {
    .container {
      max-width: 848px;
      width: 100%;
    }
  }
  @media screen and(max-width: 768px){
    .photo{
      max-width: 30% !important;
      vertical-align: top;
    }
    .charater{
      max-width: 69% !important;
    }
  }
  @media screen and(max-width: 414px){
    .photo{
      max-width: 100% !important;
    }
    .charater{
      max-width: 100% !important;
    }
  }
  .recent_hot {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: white;
    border-top: 8px solid #f39900;
    padding: 1.25rem;
    text-align: left;
    .recent_hot_wrap {
      padding: 0;
      margin: 0;
      max-width: 846px;
      .row{
        margin: 0;
      }
      h5 {
        font-size: 20px;
      }
      .recent_hot_content {
        padding-bottom: 1.25rem;
        border-bottom: 1px solid #f6f6f6;
        margin-top: 15px;
        cursor: pointer;
        .photo {
          background-color: rgba(0, 0, 0, .1);
          max-width: 30%;
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
          max-height: 160px;
          padding-left: 15px;
          display: inline-block;
          position: relative;
          .top {
            :nth-child(1) {
              display: inline-block;
              width: 48px;
              height: 22px;
              color: #f89c98;
              border: 1px solid #f89c98;
              font-size: 12px;
              text-align: center;
              line-height: 22px;
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
              padding-left: 1.125rem;
              :nth-child(1) {
                width: 26px;
                height: 26px;
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
                margin: 0 5px 0 10px
              }
            }
          }
        }
      }
    }

  }
</style>
