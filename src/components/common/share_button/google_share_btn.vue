<template>
    <span class="google">
            <a target="_blank"
              :href="web_url" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
              <img src="/static/img/team4.png" alt="">
            </a>
          </span>
</template>

<script>
  export default {
    name: "google_share_btn",
    data() {
      return {
        share:"",
        web_url: ""
      }
    },
    created() {
      this.web_url ="https://plus.google.com/share?url="+ window.location.href
    }
  }
</script>

<style scoped lang="less">
  .google {
    display: inline-block;
    max-width: 38px;
    max-height: 38px;
    width: 100%;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    margin-left: 15px;
    a {
      color: white;
      text-decoration: none;
      img{
        width: 100%;
      }
    }
  }
</style>
