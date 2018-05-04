<template>
  <div class="related_articles">
    <div class="hot_article_title">
      <span><i class="fa fa-file-text"></i></span>
      <span style="font-weight: 900">相關文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content" v-for="(item,index) in hot_article" :key="index">
      <img :src="item.img">
      <p>{{item.content}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "related_articles",
    data() {
      return {
        hot_article: [{
          img: "../../../../static/img/text.png",
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          img: "../../../../static/img/text.png",
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          img: "../../../../static/img/text.png", content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          img: "../../../../static/img/text.png",
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          img: "../../../../static/img/text.png",
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          img: "../../../../static/img/text.png", content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          img: "../../../../static/img/text.png",
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          img: "../../../../static/img/text.png",
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          img: "../../../../static/img/text.png", content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }]
      }
    },
    methods:{
      skip_inside_content(id) {
        this.$router.push({
          path: "/index/particulars",
          query: {id: id}
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .related_articles {
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
        i{
          color: #f0473f;
          font-size: 20px;
        }
      }
      .hot_article_title_line {
        width: 94px;
        border-bottom: 3px solid #f24740;
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        left: 0;
      }
    }
    .hot_article_content {
      font-size: 14px;
      border-bottom: 3px dashed #f6f6f6;
      margin-top: 15px;
      img {
        width: 100%;
      }
      p {
        margin: 5px 0 10px 0;
      }
    }
  }
</style>
