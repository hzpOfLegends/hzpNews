<template>
    <div class="recent_hot_skeleton">
      <h5 style="font-weight: 900"><i class="fa fa-line-chart" style="color: #f39900;margin-right: 20px"></i></h5>
      <div v-for="(item,index) in recent_hot" :key="index">

        <div class="recent_hot_content clearfix">
          <div class="float-left photo">

          </div>
          <div class="float-left charater">
            <div class="top"></div>
            <div class="center"></div>
            <div class="bottom"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "recent_hot_skeleton",
      data(){
        return {
          recent_hot: [{
            img: "../../../../static/img/text.png",
            contrys: '國際',
            title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
            synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
            author: "魚丸相面",
            times: "2016-08-08"
          },{
            img: "../../../../static/img/text.png",
            contrys: '國際',
            title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
            synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
            author: "魚丸相面",
            times: "2016-08-08"
          },{
            img: "../../../../static/img/text.png",
            contrys: '國際',
            title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
            synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
            author: "魚丸相面",
            times: "2016-08-08"
          }]
        }
      }
    }
</script>

<style scoped lang="less">
  .recent_hot_skeleton{
    width: 100%;
    height: 100%;
    // margin-top: 20px;
    border-radius: 3px;
    background-color: white;
    border-top: 8px solid #f39900;
    padding: 20px;
    text-align: left;
    .recent_hot_content{
      padding-bottom: 20px;
      border-bottom: 1px solid #f6f6f6;
      .photo{
        width: 230px;
        height: 160px;
        background-color: #f6f6f6;
      }
      .charater{
        margin-left: 20px;
        .top{
          width: 200px;
          height: 20px;
          background-color: #f6f6f6;
        }
        .center{
          width: 400px;
          margin-top: 10px;
          height: 20px;
          background-color: #f6f6f6;
        }
        .bottom{
          margin-top: 80px;
          width: 200px;
          height: 20px;
          background-color: #f6f6f6;
        }
      }
    }

  }
</style>
