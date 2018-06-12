<template>
    <div class="advertising card">
      <router-link to="/oopsdaily">
        <img src="/static/img/join_OopsDaily.png" alt="">
        <span class="ggao">
        廣告
      </span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "advertising"
    }
</script>

<style scoped lang="less">
  @media screen and  (min-width: 768px){
    .advertising{
      max-width: 768px;
    }
  }
  @media screen and (max-width: 1200px) {
    .advertising{
      max-width: 1180px;
    }
  }
  .advertising{
    width: 100%;
    height: 15.625rem;
    background: white;
    overflow: hidden;
    position: relative;
    img{
      width: 100%;
      object-fit: cover;
    }
    .ggao{
      position: absolute;
      left: 0;
      bottom: 0;
      display: inline-block;
      background-color: rgba(0,0,0,.5);
      color: white;
      width: 40px;
    }
  }
</style>
