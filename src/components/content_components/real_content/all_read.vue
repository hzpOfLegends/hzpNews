<template>
  <div class="all_read card">
    <h5 style="font-weight: 900;font-size: 20px"><i class="fa fa-eye" style="color: #f39900;margin-right: 20px"></i>大家都在讀
    </h5>
    <div class="all_read_wrap">
      <div class="recent_hot_content all_read_content clearfix " v-for="(item,index) in all_read" :key="index"
      >
        <router-link :to="{path:'/article/'+item.RelationID}">
          <div class="row">
            <!--<router-link to="index/particulars">-->
            <div class="photo">
              <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo" alt="">
            </div>
            <div class="charater">
              <div class="top">
                <div><p>{{item.CategoryName }}</p></div>
                <div><p style=" -webkit-box-orient: vertical">{{item.NewsTitle}}</p></div>
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
              </div>
            </div>
            <!--</router-link>-->
          </div>
        </router-link>
      </div>
      <loading v-show="$store.state.loading_style"/>
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
  // 引入广告 插件
  import advertising from '@/assets/advertHandler'

  export default {
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
    props: ['all_read'],
    watch: {
      // 插广告
      "all_read": {
        deep: true,
        handler(newval, oldval) {
          let advertisings = document.querySelectorAll(".all_read_wrap .advertising")
          if (newval && oldval) {
            advertising.reloadAdvert(advertisings)
            setTimeout(() => {
              let all_read_content = advertising.createDiv(".all_read_content")
              if (all_read_content.length > 0) {
                advertising.insertToAside(all_read_content)
              }
            }, 30)
          }else if(advertisings.length==0){
            setTimeout(() => {
              let all_read_content = advertising.createDiv(".all_read_content")
              if (all_read_content.length > 0) {
                advertising.insertToAside(all_read_content)
              }
            }, 30)
          }
        }
      }
    },
    filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      }
    },
    methods: {},
    mounted() {
      // 插广告
      let advertisings = document.querySelectorAll(".all_read_wrap .advertising")
      let all_read_content = document.querySelectorAll('.all_read_content')
      if(advertisings.length==0){
        setTimeout(()=>{
          if (all_read_content.length > 0) {
            advertising.insertToAside(all_read_content)
          }
        },30)
      }


      // 用于判断 防止重复请求
      var isbool = true
      var that = this
      // 監聽 加載更多
      $(window).scroll(function () {
        // 此操作 是为了防止无数据了 加载条还在加载

        if (($(this).scrollTop() + $(window).height()) >= $(document).height() - 1 && isbool == true) {
          if (that.$store.state.loading_style) {
            //大家都在读
            if (isbool && that.all_read) {
              that.pageNum = that.pageNum + 1
              isbool = false
              index_message.all_read({"pageSize": "20", "pageIndex": that.pageNum}).then(res => {
                if (res.data.ResultCode == 201) {
                  that.$store.state.loading_style = false
                  return
                }
                // 向父組件 發送數據 讓父組件再傳給子組件
                that.$emit("loadMore", res.data.Data.news)

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
  @media screen and (min-width: 1200px) {
    .container {
      max-width: 848px;
    }
  }

  @media screen and(max-width: 768px) {
    .all_read_wrap .photo {
      width: 30%;
      vertical-align: top;
    }

    .charater {
      max-width: 69% !important;
      width: 100%;
    }
  }

  @media screen and(max-width: 430px) {
    .all_read_wrap .photo {
      width: 100% !important;
    }
    .all_read{
      padding: 10px !important;
    }
    .charater {
      margin-top: 10px;
      max-width: 100% !important;
      padding-left: 0 !important;
    }
  }

  .all_read {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: white;
    border-top: 8px solid #f39900;
    padding: 10px 20px 20px;
    text-align: left;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);

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
        margin-top: 20px;
        cursor: pointer;
        a {
          color: black;
        }
        .photo {
          background-color: rgba(0, 0, 0, .1);
          width: 30%;
          height: 160px;
          overflow: hidden;
          display: inline-block;
          position: relative;
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
          display: inline-block;
          position: relative;
          padding-left: 15px;
          .top {
            display: flex;
            height: 100%;
            :nth-child(1) > p {
              margin-top: 2px;
              display: block;
              min-width: 46px;
              padding: 0 5px;
              overflow: hidden;
              word-break: keep-all;
              height: 26px;
              color: #f89c98;
              border: 1px solid #f89c98;
              font-size: 12px;
              text-align: center;
              line-height: 26px;
              border-radius: 3px;
            }
            :nth-child(2) {
              max-width: 460px;
              overflow: hidden;
            }
            :nth-child(2) > p {
              width: 100%;
              height: 100%;
              margin: 0;
              font-weight: 900;
              font-size: 18px;
              padding-left: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3
            }
          }
          .center {
            margin-top: 10px;
            margin-bottom: 16px;
            font-size: 14px;
            max-height: 80px;
            color: #666;
            p {
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
