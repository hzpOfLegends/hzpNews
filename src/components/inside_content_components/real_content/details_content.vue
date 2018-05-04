<template>
  <div class="details_content">
    <h3>美國校園搶襲案嫌疑犯獲釋 師生陷入“死亡名單”恐慌</h3>
    <div class="author">
      <span></span>
      <span>123</span>
      <i class="fa fa-clock-o"></i>
      <span>發表時間：</span>
      <span>2017-12-08</span>
      <i class="fa fa-eye"></i>
      <span>閲讀量:</span>
      <span>9999</span>
    </div>
    <div class="line"></div>
    <div class="share">
      <span>分享至:</span>
      <span>
        <b-button variant="primary">
          <a class="twitter-share-button"
             href="https://twitter.com/intent/tweet?text=Hello%20world"
             data-size="large">
            <i class="fa fa-twitter"></i>
                      twitter
          </a>
        </b-button>
        <b-button variant="secondary">
            <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/"
                 data-layout="button_count" data-mobile-iframe="false">
              <a target="_blank"
                 href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                 class="fb-xfbml-parse-ignore">
                <i class="fa fa-facebook-f "></i>
                  Facebook
              </a>
            </div>
        </b-button>
        <b-button variant="danger">
          <i class="fa fa-google-plus-square"></i>
          Google+
        </b-button>
      </span>
    </div>
    <div class="article_conten">
      ...
    </div>
    <div class="share">
      <span>分享至:</span>
      <span>
        <b-button variant="primary">
          <i class="fa fa-twitter"></i>
          twitter
        </b-button>
        <b-button variant="secondary">
            <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/"
                 data-layout="button_count"  data-mobile-iframe="false">
              <a target="_blank"
                 href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                 class="fb-xfbml-parse-ignore">
                <i class="fa fa-facebook-f "></i>
                  Facebook
              </a>
            </div>
        </b-button>
        <b-button variant="danger">
          <i class="fa fa-google-plus-square"></i>
          Google+
        </b-button>
      </span>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    name: "details_content"
  }
</script>

<style scoped lang="less">
  .details_content {
    width: 100%;
    padding: 2.5rem 1.75rem;
    background-color: white;
    box-shadow: 0 0 15px gray;
    text-align: left;
    .author {
      font-size: 14px;
      color: #999999;
      text-align: left;
      :nth-child(1) {
        width: 45px;
        height: 45px;
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
        a {
          color: white;
          text-decoration: none;
        }
      }
      i {
        font-size: 25px;
      }
    }
    .article_conten {
      margin: 20px 0;
    }
  }
</style>
