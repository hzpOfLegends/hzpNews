<template>
    <span class="twitter">
              <a class="twitter-share-button"
                 href="https://twitter.com/intent/tweet?text=Hello%20world"
                 data-size="large">
                <i class="fa fa-twitter"></i>
                          twitter
              </a>
          </span>
</template>

<script>
    export default {
        name: "twitter_share_btn"
    }
</script>

<style scoped lang="less">
  .twitter {
    display: inline-block;
    width: 108px;
    height: 40px;
    background-color: #28a2f0;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    a {
      color: white;
      text-decoration: none;
    }
  }
</style>
