<template>
    <span class="google">
            <a target="_blank"
               @click="skip_page"
              :href="web_url">
              <img src="/static/img/google.png" alt="">
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
    props:["share_path"],
    created() {
      this.share = localStorage.getItem('ShareID')?localStorage.getItem('ShareID'):"";
      if(this.share){
        this.web_url ="https://plus.google.com/share?url="+ this.share_path+'?r='+this.share
      }
      this.web_url ="https://plus.google.com/share?url="+ this.share_path
    },
    methods:{
      skip_page(){
        this.share = localStorage.getItem('ShareID')?localStorage.getItem('ShareID'):"";
        if(this.share){
          this.web_url ="https://plus.google.com/share?url="+ this.share_path+'?r='+this.share
        }
        this.web_url ="https://plus.google.com/share?url="+ this.share_path
        window.open(this.web_url,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      }
    }
  }
</script>

<style scoped lang="less">
  .google {
    display: inline-block;
    max-width: 100px;
    max-height: 38px;
    width: 100%;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    a {
      color: white;
      display: inline-block;
      width: 100%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
  }
</style>
