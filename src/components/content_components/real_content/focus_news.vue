<template>
  <div class="focus_news card">
    <div class="focus_news_icon">
      <img src="../../../../static/img/focusNews.png" alt="">
    </div>
    <div class="photo">
      <img src="../../../../static/img/text.png" alt="">
    </div>
    <div class="character">
        <span>
          國際
        </span>
      <span>習近平縂書記湖北之行第一天</span>
      <p>倆年前，2016年1月5日，倆年前，2016年1月5日，倆年前，2016年1月5日，倆年前，2016年1月5日，倆年前，2016年1月5日，倆年前，2016年1月5日，倆年前，2016年1月5日，倆年前，2016年1月5日，倆年前，2016年1月5日，倆年前，2016年1月5日，</p>
      <div class="author">
        <span></span>
        <span>魚丸相面</span>
        <i class="fa fa-clock-o"></i>
        <span>發表時間：</span>
        <span>2016-08-08</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "focus-news"
  }
</script>

<style scoped lang="less">
  .focus_news{
    width: 100%;
    height: 32.8rem;
    background: white;
    .focus_news_icon{
      position: absolute;
      top: 0;
      left: 0;
    }
    .photo{
      width: 100%;
      height: 342px;
      img{
        width: 100%;
      }
    }
    .character{
      padding: 20px;
      text-align: left;
      font-size:13px;
      :nth-child(1){
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
      :nth-child(2){
        font-weight: 900;
        font-size: 18px;
        margin-left: 10px;
      }
      >p{
        margin-top: 16px;
      }
      .author{
        font-size:12px;
        color:#999999;
        :nth-child(1){
          width: 26px;
          height: 26px;
          display: inline-block;
          border-radius: 50%;
          vertical-align: middle;
          background-color: white;
          border: none;
        }
        :nth-child(2){
          font-size: 12px;
          font-weight: 600;
          padding-left: 5px;
          padding-right: 10px;
          border-right: 1px solid #999999;
        }
        :nth-child(3){
          margin: 0 5px 0 15px
        }
      }
    }

  }
</style>
