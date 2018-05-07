<template>
  <div class="aside_add_article card">
    <div class="hot_article_title" >
      <span><img src="../../../../static/img/hot.png"></span>
      <span style="font-weight: 900">新增文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content">
      <div class="first" @click="skip_inside_page(1)">
        <img src="../../../../static/img/text.png">
        <p>北京昌平衛計委原副主任受審：受審查asdasdasdas</p>
      </div>
      <div class="other" v-for="(item,index) in hot_article" :key="index" @click="skip_inside_page(item.id)">
        <p><span>·</span>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "aside_add_article",
    data() {
      return {
        hot_article: [{
          id: 1,
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          id: 2,
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }, {
          id: 3,
          content: "坐不住了！蘋果CEO庫克即將找特朗普談貿易戰"
        }]
      }
    },
    methods:{
      skip_inside_page(id){
        this.$router.push({
          path:"particulars",
          query:{id:id}
        })
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
      }
      p {
        margin: 0.3125rem 0 0.625rem 0;
      }
      .first {
        position: relative;
        p {
          width: 100%;
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
