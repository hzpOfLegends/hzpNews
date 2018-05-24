<template>
  <div class="detail_content_wrap">

  </div>
</template>

<script>
    export default {
        name: "details_content_skeleton"
    }
</script>

<style scoped lang="less">
  @media screen and (min-width: 1200px){
    .detail_content_wrap{
      max-width: 840px;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px){
    .detail_content_wrap{
      max-width: 840px;
      width: 100%;
    }
  }
  .detail_content_wrap{
    max-width: 840px;
    width: 100%;
    height: 500px;
    border: 1px solid #f6f6f6;

  }
</style>
