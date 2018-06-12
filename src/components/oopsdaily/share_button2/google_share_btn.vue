<template>
    <span class="google">
            <a target="_blank"
               @click="skip_page"
               :href="web_url">
              <img src="/static/img/team9.png" alt="">
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
    position: relative;
    display: inline-block;
    max-width: 38px;
    max-height: 38px;
    width: 100%;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    margin-left: 15px;
    vertical-align: middle;
    a {
      color: white;
      text-decoration: none;
      img{
        width: 100%;
      }
    }
  }
</style>
