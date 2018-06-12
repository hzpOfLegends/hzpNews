<template>
  <div class="related_articles">
    <div class="hot_article_title">
      <span><i class="fa fa-file-text"></i></span>
      <span style="font-weight: 900">相關文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content clearfix related_articles_content" v-for="(item,index) in related_article" :key="index">
      <router-link :to="{path:'/article/'+ item.RelationID}">
        <img :src="item.CoverImges?item.CoverImges:default_backgrund_photo">
        <p style=" -webkit-box-orient: vertical">{{item.NewsTitle}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  // 引入广告 插件
  import advertising from '@/assets/advertHandler'
  export default {
    name: "related_articles",
    data() {
      return {
        default_backgrund_photo: "/static/img/OopsDaily.png"
      }
    },
    watch: {
      // 此处无需在mounted 中 插入广告 ， 因为 点进内页会触发 watch 函数
      "related_article" :{
        deep :true ,
        handler(newval,oldval){
          if(newval){
            let advertisings = document.querySelectorAll(".related_articles .advertising")
            advertising.reloadAdvert(advertisings)
            setTimeout(()=>{
            let related_articles_content = advertising.createDiv(".related_articles_content")
              if(related_articles_content.length>0) {
                advertising.insertToAside(related_articles_content)
              }
            },30)
          }
        }
      }
    },
    props: ["related_article"],
    mounted(){
      // 插广告
      let advertisings = document.querySelectorAll(".related_articles .advertising")
      let related_articles_content = document.querySelectorAll('.related_articles_content')
      if(advertisings.length==0){
        setTimeout(()=>{
          if (related_articles_content.length > 0) {
            advertising.insertToAside(related_articles_content)
          }
        },30)
      }
    }
  }
</script>

<style scoped lang="less">
  @media screen and (min-width: 1200px) {
    .related_articles {
      max-width: 320px;
    }

    .hot_article_content {
      max-width: 320px;
    }
  }

  @media screen and (max-width: 1200px) {
    .hot_article_content {
      max-width: 48%;
      display: inline-block;
      margin-right: 2%;
    }
  }

  @media screen and (max-width: 768px) {
    .hot_article_content {
      max-width: 48%;
      display: inline-block;
      margin-right: 2%;
    }
  }

  @media screen and (max-width: 414px) {
    .hot_article_content {
      max-width: 100%;
      display: inline-block;
      max-height: 270px;
      a{
        img{
          height: 170px !important;
        }
      }
    }
  }

  .related_articles {
    width: 100%;
    background-color: white;
    text-align: left;
    padding: 0 7px;
    border-top: 7px solid #f1463f;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    padding-bottom: 60px;
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
        max-width: 84px;
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
      margin-top: 15px;
      cursor: pointer;
      a {
        display: inline-block;
        width: 100%;
        color: black;
        overflow: hidden;
      }
      img {
        height: 130px;
        width: 100%;
        object-fit: cover;
      }
      p {
        margin: 5px 0 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3
      }
    }
  }
</style>
