<template>
  <div class="related_articles">
    <div class="hot_article_title">
      <span><i class="fa fa-file-text"></i></span>
      <span style="font-weight: 900">相關文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content" v-for="(item,index) in hot_article" :key="index" @click="skip_inside_content(item.RelationID,item.CategoryID)">
      <img :src="item.CoverImges">
      <p>{{item.NewsTitle}}</p>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import inside_page_message from '@/axios_joggle/axios_inside'

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
    watch:{
      "$route":function () {
        inside_page_message.relevance_article({newsId:this.$route.query.RelationID,size:20}).then(res => {
          this.hot_article = res.data.Data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    methods: {
      skip_inside_content(RelationID,CategoryID) {
        if(RelationID) {
          this.$router.push({
            path: "/particulars",
            query: {RelationID: RelationID, CategoryID: CategoryID}
          })
        }
      }
    },
    created() {
      inside_page_message.relevance_article({newsId:this.$route.query.RelationID,size:20}).then(res => {
        this.hot_article = res.data.Data
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped lang="less">
  .related_articles {
    width: 100%;
    background-color: white;
    text-align: left;
    padding: 0 1.125rem;
    border-top: 7px solid #f1463f;
    .hot_article_title {
      padding: 0.875rem 0;
      border-bottom: 3px solid #eeeeee;
      position: relative;
      :nth-child(1) {
        i {
          color: #f0473f;
          font-size: 20px;
        }
      }
      .hot_article_title_line {
        width: 5.875rem;
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
      cursor: pointer;
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
