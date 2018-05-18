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
  @media screen and(min-width: 1200px){
    .focus_news_skeleton{
      min-width: 848px;
      min-height: 524px;
      .photo{
        height: 338px;
      }
    }
  }
  @media screen and(min-width: 768px){
    .focus_news_skeleton{
      min-width: 768px;
      min-height: 524px;
      .photo{
        min-width: 768px;
        height: 238px !important;
      }
    }
  }
  @media screen and(max-width: 768px){
    .focus_news_skeleton{
      max-width: 768px;
      max-height: 524px;
      .photo{
        max-width: 768px;
        height: 238px !important;
      }
    }
  }
  .focus_news_skeleton{
    max-width: 100%;
    max-height: 524px;
    background: white;
    position: relative;
    border: 1px solid #f9f9f9;
    .focus_news_icon{
      position: absolute;
      top: 0;
      left: 0;
    }
    .photo{
      width: 100%;
      max-height: 338px;
      background-color: #f4f4f4;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .character{
      padding: 20px;
      text-align: left;
      font-size:13px;
      max-height: 180px;
      overflow:hidden;
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
