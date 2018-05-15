<template>
  <div class="container">
    <div class="row user_data">
      <div class="title">
        <h4>最近點開</h4>
        <div class="line">
          <div class="small_line"></div>
        </div>
      </div>
      <div class="head_photo clearfix">
        <croppa v-model="myCroppa" :initial-image="url" accept="image/png" :file-size-limit="102400" :width="140" :height="140" :url="url" @file-choose="handleCroppaFileChoose" @change="uploadCroppedImage"></croppa>
        <!--<button @click="dataUrl = myCroppa.generateDataUrl('image/jpeg')">Output</button>-->
        <!--{{dataUrl}}-->
        <!--用来保存图片路径-->
      </div>
      <div class="message_modification row">
        <div class="col-6">
          <div>
            <span>名字：</span>
            <b-form-input v-model="text1"
                          type="text"
                          placeholder="Enter your name">
            </b-form-input>
          </div>
          <div>
            <span>喜好语言：</span>
            <b-dropdown text="请选择语言" variant="outline"  class="m-2">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
          <div></div>
          <div></div>
        </div>
        <div class="col-6"></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "user_data",
    data() {
      return {
        myCroppa: {},
        url:"../../../../../static/img/timg.jpg",
        dataUrl:"",  //保存用户上床的路径

      }
    },
    mounted(){
      let canvas_dom = document.querySelector('canvas')
      canvas_dom.style.borderRadius = "50%"
    },
    watch:{
      'myCroppa':function (val) {
        console.log(val)
      }
    },
    methods: {
      uploadCroppedImage() {
        this.myCroppa.generateBlob((blob) => {
          // write code to upload the cropped image file (a file is a blob)
          console.log(blob)
        }, 'image/jpeg', 0.8) // 80% compressed jpeg file
      },
      handleCroppaFileChoose(){
        let dataurl = this.myCroppa.generateDataUrl('image/jpeg')
        console.log(dataurl)
      }
    }

  }
</script>

<style scoped lang="less">
  .user_data {
    background: white;
    width: 100%;
    padding: 1.625rem 1.125rem 5.25rem !important;
    border: 1px solid #eeeeee;
    .title {
      width: 100%;
      h4 {
        font-size: 14px;
        text-align: left;
        font-weight: 600;
      }
      .line {
        width: 100%;
        border-bottom: 4px solid #eeeeee;
        position: relative;
        border-radius: 3px;
        .small_line {
          width: 4.125rem;
          border-bottom: 4px solid #0954a2;
          position: absolute;
          left: 0;
          bottom: -4px;
        }
      }
    }
    .head_photo{
      padding: 2.125rem 0 3.75rem;
      width: 100%;
      margin: 0 auto;
      .croppa-container{
        border-radius: 50%;
        canvas{
          border-radius: 50%;
        }
      }

    }
    .message_modification{
      display: block;
      width: 100%;
      .col-6{
        padding :0 3rem !important;
        text-align: left;
        .form-control{
          width: 23.5rem;
          display: inline-block;
        }
        .b-dropdown{

          .btn-secondary{
            background: white !important;
            width: 23.5rem;
          }
          .btn-secondary:hover{
            background-color: white;
            border-color:white;
          }
        }
      }
    }
  }
</style>
