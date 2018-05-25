<template>
  <div class="aside_hot_article card">
    <div class="hot_article_title">
      <span ><img src="/static/img/hot.png"></span>
      <span style="font-weight: 900">熱門文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content" v-for="(item,index) in hot_article" :key="index" @click="skip_inside_content(item.RelationID,item.CategoryID)" style="text-align:left">
      <router-link :to="{path:'/article/'+item.RelationID}">
      <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo">
      <p>{{item.NewsTitle}}</p>
      </router-link>
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
        default_backgrund_photo:"/static/img/OopsDaily.png" //默认背景图
      }
    },
    props:["hot_article"],
    methods: {
      skip_inside_content(RelationID,CategoryID) {
        if(CategoryID){
          sessionStorage.setItem("CategoryID",CategoryID)
        }
        if(RelationID){
          this.$router.push({
            path: "/article/"+ RelationID,
          })
        }

      }
    },
    created() {

    }
  }
</script>

<style scoped lang="less">
  @media screen and (max-width:768px ){
    .hot_article_content{
      width: 48%;
      display: inline-block;
      margin-right: 2%;
    }
  }
  @media screen and (max-width:1200px ){

    .hot_article_content{
      width: 48%;
      display: inline-block;
      margin-right: 2%;
    }
  }
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
        width: 16px;
        height: 18px;
        display: inline-block;
        img {
          width: 100%;
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
      border-bottom: 3px dashed #f6f6f6;
      margin-top: 15px;
      cursor: pointer;
      text-align: center;
      a{
        color: black;
      }
      img {
        width: 100%;
        height: 8.125rem;
        object-fit: cover;
      }
      p {
        margin: 5px 0 10px 0;
      }
    }

  }
</style>
