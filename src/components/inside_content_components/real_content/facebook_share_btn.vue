<template>
    <span class="facebook">
       <a class="fb-xfbml-parse-ignore" target="_blank" onclick="return !window.open(this.href, 'Facebook', 'width=640,height=300')"
          :href="share_url"><img src="/static/img/facebook.png"></a>
            <!--<a target="_blank"-->
               <!--:href="share_url"-->
               <!--class="fb-xfbml-parse-ignore">-->
              <!---->
            <!--</a>-->
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
        this.share = sessionStorage.getItem('ShareID')?sessionStorage.getItem('ShareID'):""
        if(this.share){
          let a = window.location.href + "?r="+this.share
          this.share_url = "http://www.facebook.com/sharer/sharer.php?u="+a+""
        }else{
          this.share_url = "http://www.facebook.com/sharer/sharer.php?u="+window.location.href+"";

        }

      },
      watch:{

      }
    }
</script>

<style scoped lang="less">
  .facebook {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 40px;
    background-color: #2d4671;
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
