<template>
  <div class="details_content">
    <h3 style="margin:0;margin-bottom: 20px">{{details.NewsTitle}}</h3>
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
      <span style="color: rgb(184, 184, 184)">分享至:</span>
      <div style="display: inline-block">
        <facebook_btn />
        <google_btn />
        <twitter_btn />
      </div>
    </div>
    <div class="article_conten">
      <label v-html="detail_content" style="width: 100% ;font-size:16px;line-height:25px;">

      </label>
    </div>
    <div class="share">
      <span style="color: rgb(184, 184, 184)">分享至:</span>
      <div style="display: inline-block;margin-bottom: 20px">
        <facebook_btn />
        <google_btn />
        <twitter_btn />
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
  import verify_time from '@/axios_joggle/axios_verify_10'
  // 引入广告 插件
  import advertising from '@/assets/advertHandler'
  // 时区转换
  import filtration from '@/assets/filtration'
  // facebook 评论插件
  import facebook_comment from '@/components/inside_content_components/real_content/facebook_comment'
  // google、facebook、twitter 分享按钮
  import facebook_btn from '@/components/inside_content_components/real_content/facebook_share_btn'
  import twitter_btn from '@/components/inside_content_components/real_content/twitter_share_btn'
  import google_btn from '@/components/inside_content_components/real_content/google_share_btn'

  export default {
    name: "details_content",
    props:['details']
    ,
    data() {
      return {
        default_photo: "/static/img/timg.jpg",
        detail_content:"",
        share_path:""
      }
    },
    filters: {
      timezone_filter: function (value) {
        return filtration.timezone_filter(value)
      }
    },
    methods:{
      // 將後臺返回的html字段 中的img加上父元素
      imgHandler(dom, htmlStr,callback1,callback2) {
        if (dom.nodeType !== 1 || (typeof htmlStr) !== 'string') return
        let viewWidth = dom.offsetWidth
        // let viewWidth = this.$refs.content.offsetWidth
        htmlStr.replace(/<\s?img[^>]*>/gi, '')
        let newContent = htmlStr.replace(/<\s?img[^>]*>/gi, function (tag) {
          let w, h
          tag.replace(/\s?data-width="[^"]*"/, function (attr) {
            w = attr.split('"')[1]
          })
          tag.replace(/\s?data-height="[^"]*"/, function (attr) {
            h = attr.split('"')[1]
          })
          if (w > viewWidth) {
            let temp_w = w
            w = Math.floor(viewWidth)
            h = Math.floor(w * (h / temp_w))
          }
          return `<div class="details_img_wrap" style="display:inline-block;width:${w}px;height:${h}px;margin-bottom: 10px;"> ${tag}</div>`
        });
        setTimeout(()=>{
          callback1 && callback1(dom)
          // 回调 用来设置图片最大宽
          callback2()
        },50)
        return newContent
      },
      // 用来设置图片最大宽
      img_set_width(){
          let imgs = document.querySelectorAll('.details_img_wrap img')
          for(let i = 0 ; i<imgs.length ; i++){
            imgs[i].style.maxWidth = "100%"
          }
      }
    },
    watch: {
      "details.Content":function (val) {
        if(val){
          // 獲取包裹詳情内容的 標簽
          let detail_wrap = document.querySelector('.article_conten label')
          let a =this.imgHandler(detail_wrap,val,advertising.insertToContent,this.img_set_width)
          this.detail_content = a ;
        }
        this.share_path = window.location.href
      }
    },
    components: {
      facebook_btn,
      google_btn,
      twitter_btn,
      facebook_comment
    },
    mounted(){
      // 獲取包裹詳情内容的 標簽
      let detail_wrap = document.querySelector('.article_conten label')
      let a =this.imgHandler(detail_wrap,this.details.Content,advertising.insertToContent,this.img_set_width)
      this.detail_content = a ;
      // facebook 插件
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v3.0';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'))
    }
  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 430px) {
    .details_content{
      padding: 20px 10px !important;
      .share{
        .twitter,.google,.facebook{
          max-width: 80px !important;
        }

      }
    }
  }
  .details_content {
    width: 100%;
    padding: 40px 28px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    text-align: left;
    a {
      text-decoration: none;
    }
    .author {
      font-size: 14px;
      color: #999999;
      text-align: left;
      :nth-child(1) {
        width: 30px;
        height: 30px;
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
        padding-left: 5px;
        padding-right: 10px;
        color: #4ba3f8;
      }
      :nth-child(3) {
        margin: 0 5px 0 15px
      }
      :nth-child(6) {
        margin: 0 5px 0 15px
      }
    }
    .line {
      border-bottom: 1px solid #eeeeee;
      margin: 12px 0 18px 0;
    }
    .share {
      text-align: left;
      button {
        margin-left: 10px;
        padding: 10px;
        a {
          color: white;
          text-decoration: none;
        }
      }
      i {
        font-size: 20px;
      }
    }
    .article_conten {
      margin: 28px 0 30px;
      width: 100%;
      label {
          font-weight: normal;
      }
    }
  }
</style>
