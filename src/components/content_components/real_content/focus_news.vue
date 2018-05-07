<template>
  <div class="focus_news card" @click="skip_inside_contnet(1)">
    <div class="focus_news_icon">
      <img src="../../../../static/img/focusNews.png" alt="">
    </div>
    <div class="photo">
      <img :src="focus_news_data.CoverImges" alt="">
    </div>
    <div class="character">
        <span>
          {{focus_news_data.CategoryName}}
        </span>
      <span>{{focus_news_data.NewsTitle}}</span>
      <p>{{focus_news_data.Content}}</p>
      <div class="author">
        <span><img :src="focus_news_data.Avatar" alt=""></span>
        <span>{{focus_news_data.AuthorName}}</span>
        <i class="fa fa-clock-o"></i>
        <span>發表時間：</span>
        <span>{{focus_news_data.PublishTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import index_message from '@/axios_joggle/axios_index'
  // 时区转换
  let times = require('../../../assets/time_format')
  export default {
    name: "focus-news",
    data(){
      return {
        focus_news_data:this.$store.state.focus_news_data
      }
    },
    methods:{
      skip_inside_contnet(id){
        this.$router.push({
          path:"/particulars",
          query:{id:id}
        })
      }
    },
    created(){
      // 焦点新闻请求
      index_message.focus_news().then(res => {
        this.focus_news_data = res.data.Data[0]
        console.log(this.focus_news_data)
      }).catch(err => {
        console.log(err)
      })
    },
    mounted(){
      console.log(times.default.timezone_transition(new Date()))
    }
  }
</script>

<style scoped lang="less">
  .focus_news{
    width: 100%;
    height: 32.8rem;
    background: white;
    cursor: pointer;
    .focus_news_icon{
      position: absolute;
      top: 0;
      left: 0;
    }
    .photo{
      width: 100%;
      height: 342px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .character{
      padding: 20px;
      text-align: left;
      font-size:13px;
      :nth-child(1){
        display: inline-block;
        width: 3rem;
        height: 1.375rem;
        color: #f89c98;
        border: 1px solid #f89c98;
        font-size: 12px;
        text-align: center;
        line-height: 1.375rem;
        border-radius: 3px;
      }
      :nth-child(2){
        font-weight: 900;
        font-size: 18px;
        margin-left: 0.625rem;
      }
      >p{
        margin-top: 1rem;
      }
      .author{
        font-size:12px;
        color:#999999;
        :nth-child(1){
          width: 1.625rem;
          height: 1.625rem;
          display: inline-block;
          border-radius: 50%;
          vertical-align: middle;
          background-color: white;
          border: none;
        }
        :nth-child(2){
          font-size: 12px;
          font-weight: 600;
          padding-left: 0.3125rem;
          padding-right: 0.625rem;
          border-right: 1px solid #999999;
        }
        :nth-child(3){
          margin: 0 5px 0 15px
        }
      }
    }

  }
</style>
