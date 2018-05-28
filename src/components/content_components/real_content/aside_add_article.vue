<template>
  <div class="aside_add_article card">
    <div class="hot_article_title">
      <span><img src="/static/img/hot.png"></span>
      <span style="font-weight: 900">新增文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content">
      <div class="first" @click="skip_inside_page(hot_article_first.RelationID)">
        <router-link :to="{path:'/article/'+ hot_article_first.RelationID}">
        <img :src="hot_article_first.CoverImges?hot_article_first.CoverImges:default_backgrund_photo">
        <div class="Profile">{{hot_article_first.Profile}}</div>
        </router-link>
      </div>
      <div class="other" v-for="(item,index) in hot_article" :key="index" @click="skip_inside_page(item.RelationID,item.CategoryID)">
        <router-link :to="{path:'/article/' + item.RelationID}">
        <p><span>·</span>{{item.NewsTitle}}</p>
        </router-link>
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
        hot_article_first:[],
        // 新增文章 2-20
        hot_article: [],
        default_backgrund_photo:"/static/img/OopsDaily.png" //默认背景图

      }
    },
    props:["add_article"],
    created() {
      // 处理父组件传来的 值
      if(this.add_article){
        //新增文章 1
        this.hot_article_first = this.add_article.shift()
        // 新增文章 2-20
        this.hot_article = this.add_article
      }
    },
    methods: {
      skip_inside_page(RelationID,CategoryID) {
        if(CategoryID){
          sessionStorage.setItem("CategoryID",CategoryID)
        }
        if(RelationID){
          this.$router.push({
            path: "/article/"+ RelationID,
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
        width: 16px;
        height: 18px;
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
      a{
        color: black;
      }
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
          padding: 5px 0;
          margin: 0;
          span {
            font-size: 20px;
          }
        }
      }
    }

  }
</style>
