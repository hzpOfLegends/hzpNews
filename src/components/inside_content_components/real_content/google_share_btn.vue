<template>
    <span class="google">
            <a target="_blank"
              :href="web_url" onclick="javascript:window.open(this.href,
              '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
              <i class="fa fa-google-plus-square"></i>
              Google+
            </a>
          </span>
</template>

<script>
  export default {
    name: "google_share_btn",
    data() {
      return {
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
    width: 108px;
    height: 40px;
    background-color: #db443e;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    a {
      color: white;
      text-decoration: none;
    }
  }
</style>
