<template>
    <div class="container">
      <div style="padding: 10px 0"></div>
      <self_message/>
      <div style="padding: 10px 0"></div>
      <recent_earnings/>
      <div style="padding: 10px 0"></div>
      <recent_clickOn/>
      <div style="padding: 10px 0"></div>
      <hot_article/>
      <div style="padding: 28px 0"></div>
    </div>
</template>

<script>
  // 个人信息 提示信息
  import self_message from '@/components/personal_center/real_content/pandect/self_message'
  // 最新收益
  import recent_earnings from '@/components/personal_center/real_content/pandect/recent_earnings'
  // 最新點開
  import recent_clickOn from '@/components/personal_center/real_content/pandect/recent_clickOn'
  // 熱門文章
  import hot_article from '@/components/personal_center/real_content/pandect/hot_article'
    export default {
        name: "pandect",
      components:{
        self_message,
        recent_earnings,
        recent_clickOn,
        hot_article
      }
    }
</script>

<style scoped>

</style>
