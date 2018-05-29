<template>
    <span class="twitter">
              <a
                class="twitter-share-button"
                :href="web_url"
                  target="_blank"
                data-size="large">
                <img src="/static/img/team3.png" alt="">
              </a>
          </span>
</template>
<script>
  export default {
    name: "twitter_share_btn",
    data() {
      return {
        share: "",
        web_url: ""
      }
    },
    created() {
      this.web_url = "javascript: void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat(encodeURIComponent(location.href))));"
    }
  }
</script>

<style scoped lang="less">
  .twitter {
    display: inline-block;
    max-width: 38px;
    max-height: 38px;
    width: 100%;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    margin-left: 15px;
    a {
      color: white;
      text-decoration: none;
      img {
        width: 100%;
      }
    }
  }
</style>
