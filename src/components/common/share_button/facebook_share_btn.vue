<template>
    <span class="facebook">
       <a class="fb-xfbml-parse-ignore" target="_blank" onclick="return !window.open(this.href, 'Facebook', 'width=640,height=300')"
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
      created(){
        console.log()
          this.share_url = "http://www.facebook.com/sharer/sharer.php?u="+window.location.href.split("/")[2];
      },
      watch:{

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
