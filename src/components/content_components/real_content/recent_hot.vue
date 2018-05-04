<template>
  <div class="recent_hot card">
    <h5 style="font-weight: 900"><i class="fa fa-line-chart" style="color: #f39900;margin-right: 20px"></i>最近熱門</h5>
    <div class=" container">
      <div class="recent_hot_content clearfix " v-for="(item,index) in recent_hot" :key="index" @click="skip_inside_content(item.id)">
        <div class="row">
          <div class="col-4">
            <div class="photo">
              <img :src="item.img" alt="">
            </div>
          </div>
          <div class="col-8">
            <div class="charater">
              <div class="top">
                <span>{{item.contrys}}</span>
                <span>{{item.title}}</span>
              </div>
              <div class="center">
                <p>{{item.synopsis}}</p>
              </div>
              <div class="bottom">
                <div class="author">
                  <span></span>
                  <span>{{item.author}}</span>
                  <i class="fa fa-clock-o"></i>
                  <span>發表時間：</span>
                  <span>{{item.times}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recent_hot",
    data() {
      return {
        recent_hot: [{
          id:1,
          img: "../../../../static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        },{
          id:2,
          img: "../../../../static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        },{
          id:3,
          img: "../../../../static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        }]
      }
    },
    methods:{
      skip_inside_content(id){
        this.$router.push({
          path:"/index/particulars",
          query:{id:id}
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .recent_hot {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: white;
    border-top: 8px solid #f39900;
    padding: 20px;
    text-align: left;
    .container {
      padding: 0;
      margin: 0;
      .recent_hot_content {
        padding-bottom: 20px;
        border-bottom: 1px solid #f6f6f6;
        margin-top: 15px;
        cursor: pointer;
        .photo {
          img {
            width: 100%;
          }
        }
        .charater {
          height: 162px;
          padding-left: 15px;
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
          }
          .bottom {
            position: absolute;
            bottom: 0;
            left: 0;
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
