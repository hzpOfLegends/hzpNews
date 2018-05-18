<template>
    <span class="facebook">
          <span class="fb-share-button" data-href="123"
                data-layout="box_count" data-mobile-iframe="true">
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
</template>

<script>
    export default {
        name: "facebook_share_btn"
    }
</script>

<style scoped lang="less">
  .facebook {
    position: relative;
    display: inline-block;
    width: 108px;
    height: 40px;
    background-color: #2d4671;
    border-radius: 3px;
    line-height: 40px;
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
</style>
