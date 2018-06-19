<template>
  <div class="aside_add_article card">
    <div class="hot_article_title">
      <span><img src="/static/img/hot.png"></span>
      <span style="font-weight: 900">新增文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content">
      <div class="first" v-if="add_articles.c">
        <router-link :to="{path:'/article/'+ add_articles.c.RelationID}">
          <img :src="add_articles.c.CoverImges?add_articles.c.CoverImges:default_backgrund_photo">
          <p class="Profile" style="padding-left: 15px">{{add_articles.c.NewsTitle}}</p>
        </router-link>
      </div>
      <div class="other" v-if="add_articles.d" v-for="(item,index) in add_articles.d" :key="index"
           @click="skip_inside_page(item.RelationID,item.CategoryID)">
        <router-link :to="{path:'/article/' + item.RelationID}">
          <p><span>·</span>{{item.NewsTitle}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "aside_add_article",
    data() {
      return {
        //新增文章 1
        hot_article_first: [],
        // 新增文章 2-20
        hot_article: [],
        default_backgrund_photo: "/static/img/OopsDaily.png" //默认背景图

      }
    },
    props: ["add_articles"],
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  @media screen and (max-width: 1200px) {
    .aside_add_article {
      .hot_article_content {
        .first {
          a {
            img {
              height: 250px;
            }

            .Profile {
              height: 35px;
              line-height: 35px;
            }

          }
        }

      }
    }
  }

  .aside_add_article {
    width: 100%;
    background-color: white;
    text-align: left;
    padding: 0 18px;
    border-top: 7px solid #f1463f;
    padding-bottom: 60px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    .hot_article_title {
      padding: 14px 0;
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
      font-size: 14px;
      cursor: pointer;
      margin-top: 15px;
      a {
        display: inline-block;
        width: 100%;
        height: 130px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      p {
        margin: 5px 0 10px 0;
        color: #333;
      }
      .first {
        position: relative;
        .Profile {
          width: 100%;
          padding: 3px 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: absolute;
          bottom: 0;
          left: 0;
          color: white;
          font-size: 14px;
          background-color: rgba(0,0,0,.5);
          margin-top: 0;
          margin-bottom: 0;
        }
      }
      .other {

        cursor: pointer;
        p {
          width: 100%;
        color: #333333;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          border-bottom: 3px dashed #f6f6f6;
          padding: 5px 0;
          margin: 0;
          span {
            font-size: 20px;
            vertical-align: middle;
            font-weight: 600;
            color: rgb(202, 202, 202);
            margin-right: 5px;
          }
        }
      }
    }

  }
</style>
