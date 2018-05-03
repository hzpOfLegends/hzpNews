<template>
    <div class="focus_news_skeleton">
      <div class="focus_news_icon">
        <img src="../../../../static/img/focusNews.png" alt="">
      </div>
      <div class="photo">
      </div>
      <div class="character">
        <span>

        </span>
        <span></span>
        <p></p>
        <div class="author">

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "focus-news_skeleton"
    }
</script>

<style scoped lang="less">
  .focus_news_skeleton{
    width: 52.1rem;
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
      background-color: #f4f4f4;
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
        display: inline-block;
        width: 236px;
        height: 20px;
        background-color: #f4f4f4;
      }
      >p{
        background-color: #f4f4f4;
        width: 100%;
        height: 40px;
      }
      .author{
        width: 200px;
        height: 20px;
        background-color: #f4f4f4;
      }
    }

  }
</style>
