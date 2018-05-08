<template>
  <div class="aside_hot_article card">
    <div class="hot_article_title">
      <span><img src="../../../../static/img/hot.png"></span>
      <span style="font-weight: 900">熱門文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content" v-for="(item,index) in hot_article" :key="index">
      <img :src="item.img">
      <p>{{item.content}}</p>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import index_message from '@/axios_joggle/axios_index'

  export default {
    name: "aside_hot_article",
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
    methods: {
      skip_inside_content(id) {
        this.$router.push({
          path: "/index/particulars",
          query: {id: id}
        })
      }
    },
    created() {
      // 热门文章
      index_message.hot_article().then(res => {

      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped lang="less">
  .aside_hot_article {
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
      margin-top: 0.9375rem;
      img {
        width: 100%;
        height: 8.125rem;
      }
      p {
        margin: 0.3125rem 0 0.625rem 0;
      }
    }

  }
</style>
