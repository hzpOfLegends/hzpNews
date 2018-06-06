<template>
    <span class="twitter">
              <a
                class="twitter-share-button"
                @click="skip_page"
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
    max-width: 100px;
    max-height: 38px;
    width: 100%;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    a {
      color: white;
      text-decoration: none;
      img {
        width: 100%;
      }
    }
  }
</style>
