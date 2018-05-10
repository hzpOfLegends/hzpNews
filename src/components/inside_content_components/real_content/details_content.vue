<template>
  <div class="details_content">
    <h3>{{details.NewsTitle}}</h3>
    <div class="author">
      <span><img :src="details.Avatar?details.Avatar:default_photo"></span>
      <span>{{details.AuthorName}}</span>
      <i class="fa fa-clock-o"></i>
      <span>發表時間：</span>
      <span>{{details.PublishTime | timezone_filter}}</span>
      <i class="fa fa-eye"></i>
      <span>閲讀量:</span>
      <span>{{details.ClickRate}}</span>
    </div>
    <div class="line"></div>
    <div class="share">
      <span>分享至:</span>
      <div style="display: inline-block">
          <span class="twitter">
              <a class="twitter-share-button"
                 href="https://twitter.com/intent/tweet?text=Hello%20world"
                 data-size="large">
                <i class="fa fa-twitter"></i>
                          twitter
              </a>
          </span>
        <span class="facebook">
          <span class="fb-share-button" data-href="123"
                data-layout="button_count" data-mobile-iframe="true">
            <a target="_blank"
               href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
               class="fb-xfbml-parse-ignore">
            </a>

          </span>
          <span class="charater">
            <i class="fa fa-facebook-f "></i>
            Facebook
          </span>
        </span>
        <span class="google">
            <a href="https://plus.google.com/share?url={URL}" onclick="javascript:window.open(this.href,
              '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
              <i class="fa fa-google-plus-square"></i>
              Google+
            </a>
          </span>
      </div>
    </div>
    <div class="article_conten">
      <label v-html="details.Content" style="width: 100%">

      </label>
    </div>
    <div class="share">
      <span>分享至:</span>
      <div style="display: inline-block">
       <span class="twitter">
              <a class="twitter-share-button"
                 href="https://twitter.com/intent/tweet?text=Hello%20world"
                 data-size="large">
                <i class="fa fa-twitter"></i>
                          twitter
              </a>
          </span>
        <span class="facebook">
          <span class="fb-share-button" data-href="123"
                data-layout="button_count" data-mobile-iframe="true">
            <a target="_blank"
               href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
               class="fb-xfbml-parse-ignore">
            </a>

          </span>
          <span class="charater">
            <i class="fa fa-facebook-f "></i>
            Facebook
          </span>
        </span>
        <span class="google">
            <a href="https://plus.google.com/share?url={URL}" onclick="javascript:window.open(this.href,
              '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
              <i class="fa fa-google-plus-square"></i>
                            Google+
            </a>
          </span>
      </div>
    </div>
    <div class="line"></div>
    <div>
      <facebook_comment/>
    </div>
  </div>
</template>

<script>
  // 引入路由
  import inside_page_message from '@/axios_joggle/axios_inside'
  // 时区转换
  import filtration from '../../../assets/filtration'
  // facebook 评论插件
  import facebook_comment from './facebook_comment'
  export default {
    name: "details_content",
    data() {
      return {
        details:"",
        default_photo:"../../../../static/img/timg.jpg"
      }
    },
    components:{
      facebook_comment
    },
    filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      }
    },
    watch:{
      "$route":function () {
        inside_page_message.get_new_info({RelationID: this.$route.query.RelationID}).then(res => {
          this.details = res.data.Data
          setTimeout(()=>{
            let imgs = document.querySelectorAll('img')
            for (let i = 0; i < imgs.length; i++) {
              imgs[i].style.width = '100%'
            }
          },1)
        }).catch(err => {
        })
      }
    },
    created() {


    },
    mounted() {
      console.log(this.$route.query.RelationID)
      inside_page_message.get_new_info({RelationID: this.$route.query.RelationID}).then(res => {
        this.details = res.data.Data
        setTimeout(()=>{
          let imgs = document.querySelectorAll('img')
          for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.width = '100%'
          }
        },1)

      }).catch(err => {
      })

    }
  }
</script>

<style scoped lang="less">
  .details_content {
    width: 100%;
    padding: 2.5rem 1.75rem;
    background-color: white;
    box-shadow: 0 0 15px gray;
    text-align: left;
    a {
      text-decoration: none;
    }
    .author {
      font-size: 14px;
      color: #999999;
      text-align: left;
      :nth-child(1) {
        width: 2.8125rem;
        height: 2.8125rem;
        display: inline-block;
        border: 1px solid gray;
        border-radius: 50%;
        vertical-align: middle;
        background-color: white;
        /*border: none;*/
      }
      :nth-child(2) {
        font-size: 12px;
        font-weight: 600;
        padding-left: 0.3125rem;
        padding-right: 0.625rem;
        color: #4ba3f8;
      }
      :nth-child(3) {
        margin: 0 0.3125rem 0 0.9375rem
      }
      :nth-child(6) {
        margin: 0 0.3125rem 0 0.9375rem
      }
    }
    .line {
      border-bottom: 1px solid #eeeeee;
      margin: 0.75rem 0 1.125rem 0;
    }
    .share {
      text-align: left;
      button {
        margin-left: 0.625rem;
        padding: 10px;
        a {
          color: white;
          text-decoration: none;
        }
      }
      i {
        font-size: 20px;
      }
      .twitter {
        display: inline-block;
        width: 6.75rem;
        height: 2.5rem;
        background-color: #28a2f0;
        border-radius: 3px;
        line-height: 2.5rem;
        text-align: center;
        a {
          color: white;
        }
      }
      .google {
        display: inline-block;
        width: 6.75rem;
        height: 2.5rem;
        background-color: #db443e;
        border-radius: 3px;
        line-height: 2.5rem;
        text-align: center;
        a {
          color: white;
        }
      }
      .facebook {
        position: relative;
        display: inline-block;
        width: 6.75rem;
        height: 2.5rem;
        background-color: #2d4671;
        border-radius: 3px;
        line-height: 2.5rem;
        text-align: center;
        .fb-share-button {
          z-index: 999;
          opacity: 0;
          position: absolute;
          left: 0;
          transform: translateX(30%);
          top: -20%;
        }
        .charater {
          color: white;
        }
      }
    }
    .article_conten {
      margin: 1.25rem 0;
      width: 100%;
      label {

        img {
          width: 100px !important;
        }
      }
    }
  }
</style>
