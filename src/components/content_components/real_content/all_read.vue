<template>
  <div class="all_read card">
    <h5 style="font-weight: 900"><i class="fa fa-eye" style="color: #f39900;margin-right: 20px"></i>大家都在讀</h5>
    <div class=" container">
      <div class="recent_hot_content clearfix " v-for="(item,index) in recent_hot" :key="index"
           @click="skip_inside_content(item.RelationID)">
        <div class="row">
          <!--<router-link to="index/particulars">-->
          <div class="col-4">
            <div class="photo">
              <img :src="item.CoverImges" alt="">
            </div>
          </div>
          <div class="col-8">
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
              </div>
            </div>
          </div>
          <!--</router-link>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import index_message from '@/axios_joggle/axios_index'
  // 时区转换
  import filtration from '../../../assets/filtration'

  export default {
    name: "all_read",
    data() {
      return {
        recent_hot: [{
          id: 1,
          img: "../../../../static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        }, {
          id: 2,
          img: "../../../../static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        }, {
          id: 3,
          img: "../../../../static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        }],
        default_photo:"../../../../static/img/timg.jpg"
      }
    },
    created() {
      //大家都在读
      index_message.all_read({"pageSize": "5", "pageIndex": "1"}).then(res => {
        this.recent_hot = res.data.Data.news
        console.log(res)
      }).catch(err => {
      })
    }, filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      }
    },
    methods: {
      skip_inside_content(id) {
        console.log(id)
      }
    }
  }
</script>

<style scoped lang="less">
  .all_read {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: white;
    border-top: 0.5rem solid #f39900;
    padding: 1.25rem;
    text-align: left;
    .container {
      padding: 0;
      margin: 0;
      .recent_hot_content {
        padding-bottom: 1.25rem;
        border-bottom: 1px solid #f6f6f6;
        margin-top: 0.9375rem;
        cursor: pointer;
        .photo {
          img {
            width: 100%;
            height: 10.125rem;
          }
        }
        .charater {
          height: 10.125rem;
          padding-left: 15px;
          .top {
            :nth-child(1) {
              display: inline-block;
              width: 3rem;
              height: 1.375rem;
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
              margin-left: 0.625rem;
            }
          }
          .center {
            margin-top: 1rem;
            font-size: 14px;
          }
          .bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            .author {
              font-size: 12px;
              color: #999999;
              padding-left:1.125rem;
              :nth-child(1) {
                width: 1.625rem;
                height: 1.625rem;
                display: inline-block;
                border-radius: 50%;
                vertical-align: middle;
                background-color: white;
                border: none;
              }
              :nth-child(2) {
                font-size: 12px;
                font-weight: 600;
                padding-left: 0.3125rem;
                padding-right: 0.625rem;
                border-right: 1px solid #999999;
              }
              :nth-child(3) {
                margin: 0 0.3125rem 0 0.9375rem
              }
            }
          }
        }
      }
    }

  }
</style>
