<template>
  <div class="aside_add_article card">
    <div class="hot_article_title">
      <span><img src="../../../../static/img/hot.png"></span>
      <span style="font-weight: 900">新增文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content">
      <div class="first" @click="skip_inside_page(hot_article_first.RelationID)">
        <img :src="hot_article_first.CoverImges">
        <div class="Profile">{{hot_article_first.Profile}}</div>
      </div>
      <div class="other" v-for="(item,index) in hot_article" :key="index" @click="skip_inside_page(item.RelationID,item.CategoryID)">
        <p><span>·</span>{{item.NewsTitle}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import index_message from '@/axios_joggle/axios_index'

  export default {
    name: "aside_add_article",
    data() {
      return {
        //新增文章 1
        hot_article_first:"",
        // 新增文章 2-20
        hot_article: [{
          id: 1,
          NewsTitle: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          id: 2,
          NewsTitle: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          id: 3,
          NewsTitle: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }]

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
        index_message.add_article({CategoryID:val}).then(res => {
          this.hot_article_first = res.data.Data.shift()
          this.hot_article = res.data.Data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created() {
      //新增文章
      index_message.add_article({CategoryID:sessionStorage.getItem('CategoryID')?sessionStorage.getItem('CategoryID'):'-1'}).then(res => {
        this.hot_article_first = res.data.Data.shift()
        this.hot_article = res.data.Data
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      skip_inside_page(RelationID,CategoryID) {
        if(RelationID){
          this.$router.push({
            path: "/particulars",
            query: {RelationID: RelationID,CategoryID:CategoryID}
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .aside_add_article {
    width: 100%;
    background-color: white;
    text-align: left;
    padding: 0 1.125rem;
    border-top: 0.4375rem solid #f1463f;
    .hot_article_title {
      padding: 0.875rem 0;
      border-bottom: 3px solid #eeeeee;
      position: relative;
      :nth-child(1) {
        img {
          vertical-align: middle;
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
      cursor: pointer;
      margin-top: 15px;
      img {
        width: 100%;
        object-fit: cover;
        height: 8.125rem;
      }
      p {
        margin: 0.3125rem 0 0.625rem 0;
      }
      .first {
        position: relative;
        .Profile {
          width: 100%;
          padding-bottom: 5px;
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
      .other {

        cursor: pointer;
        p {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          border-bottom: 3px dashed #f6f6f6;
          padding: 0.3125rem 0;
          margin: 0;
          span {
            font-size: 20px;
          }
        }
      }
    }

  }
</style>
