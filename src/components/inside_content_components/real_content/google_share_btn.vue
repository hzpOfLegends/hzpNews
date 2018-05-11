<template>
    <span class="google">
            <a href="https://plus.google.com/share?url={URL}" onclick="javascript:window.open(this.href,
              '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
              <i class="fa fa-google-plus-square"></i>
              Google+
            </a>
          </span>
</template>

<script>
    export default {
        name: "google_share_btn"
    }
</script>

<style scoped lang="less">
  .google {
    display: inline-block;
    width: 6.75rem;
    height: 2.5rem;
    background-color: #db443e;
    border-radius: 3px;
    line-height: 2.5rem;
    text-align: center;
    a {
      color: white;
      text-decoration: none;
    }
  }
</style>
