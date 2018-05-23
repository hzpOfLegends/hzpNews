<template>
  <div class="all_read card">
    <h5 style="font-weight: 900;font-size: 20px"><i class="fa fa-eye" style="color: #f39900;margin-right: 20px"></i>大家都在讀
    </h5>
    <div class=" all_read_wrap">
      <div class="recent_hot_content clearfix " v-for="(item,index) in recent_hot" :key="index"
           @click="skip_inside_content(item.RelationID,item.CategoryID)">
        <div class="row">
          <!--<router-link to="index/particulars">-->
          <div class="photo">
            <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo" alt="">
          </div>
          <div class="charater">
            <div class="top">
              <div><p>{{item.CategoryName }}</p></div>
              <div><p>{{item.NewsTitle}}</p></div>
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
          <!--</router-link>-->
        </div>
      </div>
      <loading v-if="$store.state.loading_style"/>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import index_message from '@/axios_joggle/axios_index'
  // 时区转换
  import filtration from '../../../assets/filtration'
  // loading 引入
  import loading from '../../oneself/loading'

  export default {
    name: "all_read",
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
        pageNum: 1,
        default_backgrund_photo: "/static/img/OopsDaily.png" //默认背景图
      }
    },
    components: {
      loading //loading组件引入
    },
    created() {
      //大家都在读
      index_message.all_read({"pageSize": "20", "pageIndex": this.pageNum}).then(res => {
        this.recent_hot = res.data.Data.news
      }).catch(err => {
      })
    }, filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      }
    },
    methods: {
      skip_inside_content(RelationID, CategoryID) {
        if(CategoryID){
          sessionStorage.setItem("CategoryID",CategoryID)
        }
        if (RelationID) {
          this.$router.push({
            path: "/article/"+ RelationID,
          })
        }
      }
    },
    mounted() {
      // 用于判断 防止重复请求
      var isbool = true
      var that = this
      // 如果有shareID  代表已经登录 无需 无限加载
      if (sessionStorage.getItem('ShareID')) {
        this.$store.state.loading_style = false
      } else {
        $(window).scroll(function () {
          if (($(this).scrollTop() + $(window).height()) >= $(document).height() && isbool == true) {
            that.pageNum = that.pageNum + 1
            //大家都在读
            if (isbool) {
              index_message.all_read({"pageSize": "20", "pageIndex": that.pageNum}).then(res => {
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
  }
</script>

<style scoped lang="less">
  @media screen and (min-width: 1200px) {
    .container {
      max-width: 848px;
    }
  }
  @media screen and(max-width: 768px){
    .all_read_wrap .photo{
      width: 30%;
      vertical-align: top;
    }
    .charater{
      max-width: 69% !important;
      width: 100%;
    }
  }
  @media screen and(max-width: 414px){
    .all_read_wrap .photo{
      width: 100% !important;
    }
    .charater{
      margin-top: 10px;
      max-width: 100% !important;
    }
  }
  .all_read {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: white;
    border-top: 8px solid #f39900;
    padding: 20px;
    text-align: left;
    .all_read_wrap {
      padding: 0;
      margin: 0;
      max-width: 846px;
      .row {
        margin: 0;
      }
      .recent_hot_content {
        padding-bottom: 20px;
        border-bottom: 1px solid #f6f6f6;
        margin-top: 3px;
        cursor: pointer;
        .photo {
          background-color: rgba(0, 0, 0, .1);
          width: 30%;
          max-height: 160px;
          overflow: hidden;
          display: inline-block;
          position: relative;
          vertical-align: top;
          img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
        .charater {
          max-width: 69%;
          width: 100%;
          min-height: 100px;
          display: inline-block;
          position: relative;
          padding-left: 15px;
          .top {
            display:flex;
            :nth-child(1)>p {
              margin-top:2px;
              display: block;
              min-width: 42px;
              max-width:66px;
              overflow: hidden;
              word-break: keep-all;
              height:22px;
              color: #f89c98;
              border: 1px solid #f89c98;
              font-size: 12px;
              text-align: center;
              line-height: 22px;
              border-radius: 3px;
            }
            :nth-child(2)>p {
              font-weight: 900;
              font-size: 18px;
              padding-left: 10px;
            }
          }
          .center {
            margin-top: 16px;
            margin-bottom: 16px;
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
                margin: 0 5px 0 15px
              }
            }
          }
        }
      }
    }

  }
</style>
