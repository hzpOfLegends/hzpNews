<template>
    <div class="other_article">
      <h5 style="font-weight: 900"><i class="fa fa-line-chart" style="color: #f39900;margin-right: 20px"></i>同區的其他文章</h5>
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
                    <span><img :src="item.Avatar?item.Avatar:default_photo" alt=""></span>
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
        name: "other_article",
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
          }],
          default_photo:"../../../../static/img/timg.jpg"
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
.other_article{
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
        }
      }
      .charater {
        height: 10.125rem;
        padding-left: 0.9375rem;
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
