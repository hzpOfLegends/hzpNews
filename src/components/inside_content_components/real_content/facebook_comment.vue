<template>
    <div>
      <div class="fb-comments" data-numposts="5"></div>
    </div>
</template>

<script>
    export default {
        name: "facebook_comment",
        router_path:"",
      watch:{
       "$route" :function () {
         // this.router_path = this.$route.path
         document.querySelector('.fb-comments').setAttribute('data-href',window.location.href)
         console.log(document.querySelector('.fb-comments').getAttribute('data-href'))
       }
      }
    }
</script>

<style scoped>

</style>
