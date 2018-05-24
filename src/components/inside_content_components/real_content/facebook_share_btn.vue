<template>
    <span class="facebook">
          <!--<span class="fb-share-button" data-href="123"-->
                <!--data-layout="box_count" data-mobile-iframe="true">-->
            <a target="_blank"
               :href="share_url"
               class="fb-xfbml-parse-ignore">
              <img src="/static/img/facebook.png">
            </a>

          </span>
          <!--<span class="charater">-->

          <!--</span>-->
        <!--</span>-->
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
          this.share_url = "javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href"+'?r='+this.share+")) ));"
        }else{
          this.share_url = "javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href)) ));"
        }

      },
      watch:{
        "$route" :function () {
          // this.router_path = this.$route.path

          document.querySelector('.fb-share-button').setAttribute('data-href',window.location.href)
        }
      }
    }
</script>

<style scoped lang="less">
  .facebook {
    position: relative;
    display: inline-block;
    max-width: 108px;
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
