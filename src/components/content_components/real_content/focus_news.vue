<template>
  <div class="focus_news card" @click="skip_inside_contnet(focus_news_data.RelationID,focus_news_data.CategoryID)">
    <div class="focus_news_icon">
      <img src="../../../../static/img/focusNews.png" alt="">
    </div>
    <div class="photo">
      <!--<div class="img-box">-->
        <img :src="focus_news_data.CoverImges?focus_news_data.CoverImges:default_backgrund_photo" alt="" class="imgs">
      <!--</div>-->

    </div>
    <div class="character">
        <span>
          {{focus_news_data.CategoryID | type_filter}}
        </span>
      <span>{{focus_news_data.NewsTitle}}</span>
      <p>{{focus_news_data.Content}}</p>
      <div class="author">
        <span><img :src="focus_news_data.Avatar?focus_news_data.Avatar:default_photo"></span>
        <span>{{focus_news_data.AuthorName}}</span>
        <i class="fa fa-clock-o"></i>
        <span>發表時間：</span>
        <span>{{focus_news_data.PublishTime | timezone_filter}}</span>

      </div>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import index_message from '@/axios_joggle/axios_index'
  // 时区转换 / 文章類型轉換
  import filtration from '../../../assets/filtration'
  export default {
    name: "focus-news",
    data() {
      return {
        focus_news_data: "",
        default_photo: "../../../../static/img/timg.jpg",
        default_backgrund_photo:"../../../../static/img/OopsDaily.png"
      }
    },
    filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      },
      type_filter:function (value) {
        return filtration.type_filter(value)
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
        index_message.focus_news({CategoryID:val}).then(res => {
          this.focus_news_data = res.data.Data[0]

        }).catch(err => {
          console.log(err)
        })
      }
    },
    mounted() {
      // console.log(times.defaulttimezone_transition(new Date()))
      // let photo = document.querySelector('.photo')
      // this.getImgWH(photo)
      // console.log(new Date().getTimezoneOffset()/60)

    },
    methods: {
      skip_inside_contnet(RelationID, CategoryID) {
        if(CategoryID){
          sessionStorage.setItem("CategoryID",CategoryID)
        }
        if (RelationID) {
          let q = this.$route.query
          q.RelationID = RelationID
          this.$router.push({
            path: "/article/"+ RelationID,
          })
        }
      }
    },
    created() {
      // 焦点新闻请求
      index_message.focus_news({CategoryID:this.$route.query.CategoryID?this.$route.query.CategoryID:'-1'}).then(res => {
        this.focus_news_data = res.data.Data[0]

      }).catch(err => {
        console.log(err)
      })
    },

  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 1200px) {
    .focus_news{
      max-width: 100%;
    }
  }
  .focus_news {
    width: 100%;
    max-height: 520px;
    background: white;
    cursor: pointer;
    .focus_news_icon {
      position: absolute;
      top: 0;
      left: 0;
    }
    .photo {
      width: 100%;
      max-height: 338px;
      text-align: center;
      background-color: rgba(0,0,0,.1);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .character {
      padding: 20px;
      text-align: left;
      font-size: 13px;
      max-height: 180px;
      :nth-child(1) {
        display: inline-block;
        width: 48px;
        height: 22px;
        color: #f89c98;
        border: 1px solid #f89c98;
        font-size: 12px;
        text-align: center;
        line-height: 22px;
        border-radius: 3px;
      }
      :nth-child(2) {
        font-weight: 900;
        font-size: 18px;
        margin-left: 0.625rem;
      }
      > p {
        margin-top: 1rem;
      }
      .author {
        font-size: 12px;
        color: #999999;
        :nth-child(1) {
          width: 26px;
          height: 26px;
          display: inline-block;
          border-radius: 50%;
          vertical-align: middle;
          background-color: white;
          border: none;
        }
        :nth-child(2) {
          font-size: 12px;
          font-weight: 600;
          padding-left: 0.3125rem;
          padding-right: 0.625rem;
          border-right: 1px solid #999999;
        }
        :nth-child(3) {
          margin: 0 5px 0 15px
        }
      }
    }
    @media screen and (max-width:768px) {
        .photo {
          height:74vw !important;
        }
    }

  }
</style>
