<template>
    <span class="facebook">
       <a class="fb-xfbml-parse-ignore" target="_blank" @click="skpi_page"
          :href="share_url">
         <img src="/static/img/team2.png">
       </a>
          </span>
</template>

<script>
  export default {
    name: "facebook_share_btn",
    data(){
      return {
        share:"",
        share_url:""
      }
    },
    methods:{
      skpi_page(){
        this.share = localStorage.getItem('ShareID')?localStorage.getItem('ShareID'):""
        if(this.share){
          let a = window.location.href + "?r="+this.share
          this.share_url = "http://www.facebook.com/sharer/sharer.php?u="+a+""
        }else{
          this.share_url = "http://www.facebook.com/sharer/sharer.php?u="+window.location.href+"";

        }
        window.open(this.share_url, 'Facebook', 'width=600,height=600')
      }
    },
    created(){
      this.share = localStorage.getItem('ShareID')?localStorage.getItem('ShareID'):""
      if(this.share){
        let a = window.location.href + "?r="+this.share
        this.share_url = "http://www.facebook.com/sharer/sharer.php?u="+a+""
      }else{
        this.share_url = "http://www.facebook.com/sharer/sharer.php?u="+window.location.href+"";

      }

    }
  }
</script>

<style scoped lang="less">
  .facebook {
    position: relative;
    display: inline-block;
    max-width: 38px;
    max-height: 38px;
    width: 100%;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    margin-left: 15px;
    a{
      color: white;
      img{
        width: 100%;
      }
    }
    .fb-share-button {
      z-index: 999;
      opacity: 0;
      position: absolute;
      left: 0;
      transform: translateX(30%);
      top: -20%;
    }
    .charater {
    }
  }
</style>
