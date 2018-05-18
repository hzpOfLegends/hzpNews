<template>
  <div class="related_articles">
    <div class="hot_article_title">
      <span><i class="fa fa-file-text"></i></span>
      <span style="font-weight: 900">相關文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content clearfix" v-for="(item,index) in hot_article" :key="index" @click="skip_inside_content(item.RelationID,item.CategoryID)">
      <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo">
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
        }],
        default_backgrund_photo:"../../../../static/img/OopsDaily.png"
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
        if (RelationID) {
          let q = this.$route.query
          q.RelationID = RelationID
          this.$router.push({
            path: "/index/"+ RelationID,
            query: q
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
  @media screen and (min-width: 1200px){
    .related_articles{
      max-width: 320px;
    }
    .hot_article_content{
      max-width: 320px;
    }
  }
  @media screen and (max-width: 1200px) {
    .hot_article_content{
      max-width: 48%;
      display: inline-block;
      margin-right: 2%;
    }
  }
  @media screen and (max-width: 768px) {
    .hot_article_content{
      max-width: 48%;
      display: inline-block;
      margin-right: 2%;
    }
  }
  @media screen and (max-width: 414px) {
    .hot_article_content{
      max-width: 100%;
      display: inline-block;
    }
  }
  .related_articles {
    width: 100%;
    background-color: white;
    text-align: left;
    padding: 0 18px;
    border-top: 7px solid #f1463f;
    border-radius: 3px;
    .hot_article_title {
      width: 100%;
      padding: 14px 0;
      border-bottom: 3px solid #eeeeee;
      position: relative;
      :nth-child(1) {
        i {
          color: #f0473f;
          font-size: 20px;
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
      width: 100%;
      font-size: 14px;
      border-bottom: 3px dashed #f6f6f6;
      margin-top: 0.9375rem;
      cursor: pointer;
      img {
        width: 100%;
        object-fit: cover;
        max-height: 130px;
      }
      p {
        margin: 5px 0 10px 0;
      }
    }
  }
</style>
