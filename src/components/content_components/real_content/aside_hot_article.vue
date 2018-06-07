<template>
  <div class="aside_hot_article card">
    <div class="hot_article_title">
      <span ><img src="/static/img/hot.png"></span>
      <span style="font-weight: 900">熱門文章</span>
      <span class="hot_article_title_line"></span>
    </div>
    <div class="hot_article_content aside_hot" v-for="(item,index) in hot_article" :key="index" style="text-align:left">
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
  // 引入广告 插件
  import advertising from '@/assets/advertHandler'
  export default {
    name: "aside_hot_article",
    data() {
      return {
        default_backgrund_photo:"/static/img/OopsDaily.png" //默认背景图
      }
    },
    props:["hot_article"],
    watch:{
      "hot_article" :{
        deep :true ,
        handler(newval,oldval){
          if(newval){
            let parent = document.querySelector(".aside_hot")
            let advertisings = document.querySelectorAll(".aside_hot .advertising")
            if(advertisings.length>1){
              for(let i = 0 ; i<advertisings.length ; i++){
                parent.removeChild(advertisings[i])
              }
            }else{
              parent.removeChild(advertisings[0])
            }
            let aside_hot = advertising.createDiv(".aside_hot")
            advertising.insertToAside(aside_hot)
          }
        }
      }
    },
    methods: {
    },
    mounted(){
      let aside_hot = document.querySelectorAll('.aside_hot')
      advertising.insertToAside(aside_hot)
    },
    watch:{
      "hot_article": {
        deep: true,
        handler(newval, oldval) {

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
      img{
        height: 130px;
      }
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
    padding: 0 7px;
    border-top: 7px solid #f1463f;
    padding-bottom: 60px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
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
      border-bottom: 3px dashed #f6f6f6;
      max-height: 165px;
      margin-top: 15px;
      cursor: pointer;
      text-align: center;
      vertical-align: top;
      a{
        color: black;
        display: inline-block;
        width: 100%;
        height: 100%;;

      }
      img {
        width: 100%;
        max-height: 130px;
        object-fit: cover;
      }
      p {
        margin: 5px 0 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

  }
</style>
