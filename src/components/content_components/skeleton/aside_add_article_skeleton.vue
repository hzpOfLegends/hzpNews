<template>
  <div class="aside_add_article_skeleton card">
    <div class="hot_article_title">
      <span><img src="../../../../static/img/hot.png"></span>
      <span style="font-weight: 900">新增文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content">
      <div class="first">
        <span style="display:inline-block;width: 100%;height: 150px;background-color: #f6f6f6;"></span>
        <p style="width: 100%;background-color: #f6f6f6"></p>
      </div>
      <div class="other" v-for="(item,index) in hot_article" :key="index">
        <p style="background-color: #f6f6f6 ; width: 100px"><span>·</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "aside_add_article_skeleton",
    data() {
      return {
        hot_article: [{
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"}]
      }
    }
  }
</script>

<style scoped lang="less">
  .aside_add_article_skeleton {
    width: 100%;
    background-color: white;
    text-align: left;
    padding: 0 18px;
    border-top: 7px solid #f1463f;
    .hot_article_title {
      padding: 14px 0;
      border-bottom: 3px solid #eeeeee;
      position: relative;
      :nth-child(1) {
        img {
          vertical-align: middle;
        }
      }
      .hot_article_title_line {
        max-width: 94px;
        width: 100%;
        border-bottom: 3px solid #f24740;
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        left: 0;
      }
    }
    .hot_article_content {
      font-size: 14px;

      margin-top: 15px;
      img {
        width: 100%;
      }
      p {
        margin: 5px 0 10px 0;
      }
      .first{
        position: relative;
        p{
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: absolute;
          bottom: 0;
          left: 0;
          color: white;
          font-size: 14px;
          background-color: #333333;
          margin-top: 0;
        }
      }
      .other{
        p{
          width: 100%;
          background-color: #f6f6f6;
          border-bottom: 3px dashed #f6f6f6;
          padding: 5px 0;
          margin: 0;
          span{
            font-size: 20px;
          }
        }
      }
    }

  }
</style>
