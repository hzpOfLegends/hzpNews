<template>
  <div class="recent_hot card">
    <h5 style="font-weight: 900;font-size: 20px"><i class="fa fa-line-chart" style="color: #f39900;margin-right: 20px"></i>最近熱門</h5>
    <div class=" recent_hot_wrap">
      <div class="recent_hot_content clearfix " v-for="(item,index) in recent_hots" :key="index"
           >
        <router-link :to="{path:'/article/'+item.RelationID}">
        <div class="row">
          <div class="photo">
            <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo">
          </div>
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
                <!--| timezone_filter-->
                <span>{{item.PublishTime |timezone_filter}}</span>
              </div>
            </div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  // 时区转换
  import filtration from '@/assets/filtration'

  export default {
    name: "recent_hot_",
    data() {
      return {
        default_photo: "/static/img/timg.jpg",  // 默认头像
        default_backgrund_photo: "/static/img/OopsDaily.png" //默认背景图
      }
    },
    props:["recent_hots"],
    created() {

    },
    filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      }
    },
    methods: {
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
      width: 30% !important;
      vertical-align: top;
    }
    .charater{
      max-width: 69% !important;
    }
  }
  @media screen and(max-width: 430px){
    .recent_hot_content{
      .photo{
        width: 100% !important;
      }
      .charater{
        margin-top: 10px;
        max-width: 100% !important;
      }
    }

  }
  .recent_hot {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: white;
    border-top: 8px solid #f39900;
    padding: 10px 20px 20px;
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
        padding-bottom: 20px;
        border-bottom: 1px solid #f6f6f6;
        margin-top: 20px;
        cursor: pointer;
        a{
          color: black;
          display: block;
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
            height:100%;
            :nth-child(1)> p{
              margin-top:2px;
              display: inline-block;
              vertical-align: top;
              min-width: 46px;
              padding: 0 5px;
              overflow: hidden;
              word-break: keep-all;
              height:26px;
              color: #f89c98;
              border: 1px solid #f89c98;
              font-size: 12px;
              text-align: center;
              line-height: 26px;
              border-radius: 3px;
            }
            :nth-child(2){
              max-width: 460px;
              overflow: hidden;
            }
            :nth-child(2)> p {
              font-weight: 900;
              font-size: 18px;
              padding-left: 10px;
            }
          }
          .center {
            margin-top: 10px;
            margin-bottom: 16px;
            font-size: 14px;
            max-height: 80px;
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
