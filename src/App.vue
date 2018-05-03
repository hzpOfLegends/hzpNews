<template>
  <div id="app">
    <!--導航-->
    <oops-header></oops-header>
    <!--内容-->
    <div class="oops_content_wrap">
      <div class="oops_content">
        <router-view></router-view>
      </div>

    </div>

    <!--底部-->
    <oops-footer></oops-footer>
  </div>
</template>

<script>
  import oopsFooter from '@/components/common/oops_footer'
  import oopsHeader from '@/components/common/oops_header'

  export default {
    name: 'App',
    components: {
      oopsHeader,
      oopsFooter
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .oops_content_wrap{
      background: #f4f4f4;
      .oops_content{
        max-width: 1180px;
        width: 1180px;
        margin: 0 auto;
      }
    }

    .row{
      /*margin:*/
      margin:0;
    }
  }
</style>
