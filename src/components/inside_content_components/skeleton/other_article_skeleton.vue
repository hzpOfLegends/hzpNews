<template>
  <div class="all_read_skeleton">
    <h5 style="font-weight: 900;font-size: 20px"><i class="fa fa-line-chart" style="color: #f39900;margin-right: 20px"></i>同區的其他文章</h5>
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
    name: "all_read_skeleton",
    data(){
      return {
        recent_hot: [{
          img: "/static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        },{
          img: "/static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        },{
          img: "/static/img/text.png",
          contrys: '國際',
          title: "港媒：陳水扁唱衰民進黨選情 暗藏玄機",
          synopsis: "2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年2018年臺灣選舉年",
          author: "魚丸相面",
          times: "2016-08-08"
        }]
      }
    },
    mounted(){

    }
  }
</script>

<style scoped lang="less">
  @media screen and (min-width: 1200px){
    .all_read_skeleton{
      max-width: 848px;
    }
  }
  @media screen and (max-width: 1200px){
    .detail_content_wrap{
      max-width: 840px;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px){
    .all_read_skeleton{
      max-width: 768px;
    }
  }
  .all_read_skeleton{
    max-width: 848px;
    height: 100%;
    border-radius: 3px;
    background-color: white;
    border-top: 8px solid #f39900;
    padding: 20px;
    text-align: left;
    .recent_hot_content{
      padding-bottom: 20px;
      padding-top: 20px;
      border-bottom: 1px solid #f6f6f6;
      .photo{
        max-width: 230px;
        width: 30%;
        height:160px;
        display: inline-block;
        max-height: 160px;
        background-color: #f6f6f6;
        vertical-align: top;
      }
      .charater{
        margin-left: 20px;
        max-width: 582px;
        width: 68%;
        display: inline-block;
        .top{
          max-width: 200px;
          width: 100%;
          height: 20px;
          background-color: #f6f6f6;
        }
        .center{
          max-width: 400px;
          width: 100%;
          height: 20px;
          margin-top: 10px;
          max-height: 20px;
          background-color: #f6f6f6;
        }
        .bottom{
          margin-top: 80px;
          width: 100%;
          height: 20px;
          max-width: 200px;
          max-height: 20px;
          background-color: #f6f6f6;
        }
      }
    }

  }
</style>
