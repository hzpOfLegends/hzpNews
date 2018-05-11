<template>
  <div class="aside_hot_article card">
    <div class="hot_article_title">
      <span><img src="../../../../static/img/hot.png"></span>
      <span style="font-weight: 900">熱門文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content" v-for="(item,index) in hot_article" :key="index" @click="skip_inside_content(item.RelationID,item.CategoryID)">
      <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo">
      <p>{{item.NewsTitle}}</p>
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
        }],
        default_backgrund_photo:"../../../../static/img/OopsDaily.jpg" //默认背景图
      }
    },
    // 寫一個計算屬性 利用watch 監聽
    computed: {
      get_nav_id() {
        return this.$store.state.nav_id;
      }
    },
    watch: {
      get_nav_id(val) {
        // 热门文章
        index_message.hot_article({CategoryID:val}).then(res => {
          this.hot_article = res.data.Data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    methods: {
      skip_inside_content(RelationID,CategoryID) {
        if(RelationID){
          this.$router.push({
            path: "/particulars",
            query: {RelationID: RelationID,CategoryID:CategoryID}
          })
        }

      }
    },
    created() {
      // 热门文章
      index_message.hot_article({CategoryID:sessionStorage.getItem('CategoryID')?sessionStorage.getItem('CategoryID'):'-1'}).then(res => {
        // console.log(1,res)
        this.hot_article = res.data.Data
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
    padding: 0 1.125rem;
    border-top: 7px solid #f1463f;
    padding-bottom: 3.75rem;
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
      cursor: pointer;
      text-align: center;
      background-color: rgba(0,0,0,.1);
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
