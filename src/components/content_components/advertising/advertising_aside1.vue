<template>
    <div class="advertising card">

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
  }
</style>
