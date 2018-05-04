<template>
    <div class="advertising card" @click="skip_register_page">
        <h5>加入OOPSDAILY,撰寫/分享好文，輕鬆賺現金</h5>
        <div class="photo">
          <img src="../../../../static/img/text.png">
          <div class="lab">
            廣告
          </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "advertising_aside2",
      methods:{
        skip_register_page(){
          alert('注冊頁面')
        }
      }
    }
</script>

<style scoped lang="less">
.advertising{
  width: 100%;
  background-color: white;
  padding: 28px 20px;
  text-align: left;

  .photo{
    position: relative;
    img{
      width: 100%;
    }
  }
  .lab{
    width: 42px;
    height: 24px;
    border-top-right-radius: 5px;
    background-color: rgba(0,0,0,.6);
    color: white;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
