<template>
  <div id="app">
    <!--導航-->
    <oops-header></oops-header>
    <!--面包屑-->
      <!--<div class="breadcrumb_wrap">-->
        <!--<b-breadcrumb :items="items"/>-->
      <!--</div>-->
    <!--内容-->
    <div class="oops_content_wrap">
      <div class="oops_content">
        <router-view></router-view>
        <!--點擊到頂部-->

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
    },

    data(){
      return {
        items: [{
          text: '首頁',
          href: '/'
        }, {
          text: 'Library',
          active: true
        }],
        skip_top:true //點擊到頂部按鈕
      }
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
    background: #f4f4f4;
    /*.breadcrumb_wrap{*/
      /*width: 73.75rem;*/
      /*!*width: 1180px;*!*/
      /*margin: 0 auto;*/
      /*background-color: white;*/
      /*.breadcrumb{*/
        /*background-color: white;*/
        /*margin:  0;*/
        /*padding-left: 0;*/
      /*}*/
    /*}*/

    .oops_content_wrap{
      // max-width:73.75rem;
      // width: 73.75rem;
    margin: 0 auto;
    .oops_content{
      min-height:333px;
      margin: 0 auto;
    }
    }
  }
</style>
