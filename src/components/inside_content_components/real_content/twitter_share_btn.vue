<template>
    <span class="twitter">
              <a
                class="twitter-share-button"
                @click="skip_page"
                :href="web_url"
                target="_blank"
                data-size="large">
                <img src="/static/img/twitter.png" alt="">
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
    methods:{
      skip_page(){
        this.share = localStorage.getItem('ShareID') ? localStorage.getItem('ShareID') : "";
        if(this.share){
          this.web_url = "javascript: void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat(encodeURIComponent("+location.href+'?r='+this.share+"))));"
        }
        this.web_url = "javascript: void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat(encodeURIComponent(location.href))));"
      }
    },
    created() {
      this.share = localStorage.getItem('ShareID') ? localStorage.getItem('ShareID') : "";
      if(this.share){
        this.web_url = "javascript: void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat(encodeURIComponent("+location.href+'?r='+this.share+"))));"
      }
      this.web_url = "javascript: void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat(encodeURIComponent(location.href))));"

    }
  }
</script>

<style scoped lang="less">
  .twitter {
    display: inline-block;
    max-width: 110px;
    width: 100%;
    height: 40px;
    background-color: #28a2f0;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    a {
      display: inline-block;
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
</style>
