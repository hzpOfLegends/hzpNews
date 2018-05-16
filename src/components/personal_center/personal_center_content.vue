<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: "personal_center_content",
    created(){
      //展示导航栏
      this.$store.state.nav_style = true
      //隐藏底部
      this.$store.state.foot_all_style = true
      //底部中 俩个样式 （防止漏了 ， 都给true）
      this.$store.state.footer_style1 = true
      this.$store.state.footer_style2 = true
    },
    mounted() {
      // 更换背景
      let oops_content_wrap = document.querySelector('.oops_content_wrap')
      oops_content_wrap.style.background = "#f4f4f4"
    },
  }
</script>

<style lang="less">
  .container {
    margin: 0;
    padding: 0;
    max-width: 73.75rem;
    width: 73.75rem;
  }
</style>
