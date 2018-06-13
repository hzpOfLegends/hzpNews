<template>
  <div class="oopsdaily_wrap">
    <div class="oopsdaily_content">
      <div class="header_wrap">
        <div style="border-bottom: 1px solid #5067cd;">
          <div class="oops_header row">
            <div class="oops_chara col-lg-6 col-md-6 col-sm-6 col-xs-6" style="text-align: left">
              <router-link to="/">
              <strong>
                OopsDaily

              </strong>
              <span class="line" style="vertical-align: middle"></span>
              <span style="font-size: 16px;color: #eaecf8;vertical-align: middle">文章創作分享平臺</span>
              </router-link>
            </div>
            <div class="oops_share col-lg-6 col-md-6 col-sm-6 col-xs-6" style="text-align: right">
              <facebook_share/>
              <google_share/>
              <twitter_share/>
            </div>
          </div>
        </div>
        <div class="oops_join row">
          <div class="join_us">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div style="margin-top: 80px">
              <h1 style="font-weight: 'Arial';font-style: italic">

                OopsDaily發文賺錢平臺
              </h1>
              <h3>分享好文章，輕鬆賺現金</h3>
              <p style="margin-top: 30px">OopsDaily 讓您發表文章創造收入，支援多種付費方式</p>
              <p>PayPal、支付寶、Bitcoin</p>
              <div class="join_us_btn">
                <router-link to="/user/register">馬上加入</router-link>

              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 back">
            <div class="join_us_back">
              <img src="/static/img/team10.png" >
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="row feature_content">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <img src="/static/img/team11.png" alt="">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 feature_chara">
          <span class="top_line"></span>
          <p style="font-size: 28px;font-weight: 200;margin-bottom: 45px">OopsDaily 特色</p>
          <p style="margin-bottom: 20px"><span class="circle"></span> 發文賺錢 - 原創文章或轉載，依照文章點閱數計算收益</p>
          <p style="margin-bottom: 20px"><span class="circle"></span> 好文推廣 - 好文被其他會員推廣，您也可獲得收入</p>
          <p style="margin-bottom: 20px"><span class="circle"></span> 推廣能手 - 會推廣的會員，可以推廣站內好文，輕鬆賺取收益</p>
          <div class="feature_btn">
            <router-link to="/user/register">
              馬上加入
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="how_join">
      <div class="row how_join_content">
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
          <ul>
            <li class="row">
              <div class="col-lg-2">
                <img src="/static/img/team14.png" alt="">
              </div>
              <div class="col-lg-10" style="padding-left: 26px !important;">
                <p style="font-size: 20px">如何加入OopsDaily</p>
                <p>文章發表不限於原創作者，如為轉載則不可侵犯他人權益。</p>
              </div>
            </li>
            <li class="row" style="margin: 60px 0">
              <div class="col-lg-2">
                <img src="/static/img/team13.png" alt="">
              </div>
              <div class="col-lg-10" style="padding-left: 26px !important;">
                <p style="font-size: 20px">可以分享什麽類型的文章</p>
                <p>除了情色、血腥、廣告、暴力、賭博以及侵犯他人智慧財產權及
                  權利外任何的文章，我們都歡迎您分享！</p>
              </div>
            </li>
            <li class="row">
              <div class="col-lg-2">
                <img src="/static/img/team12.png" alt="">
              </div>
              <div class="col-lg-10" style="padding-left: 26px !important;">
                <p style="font-size: 20px">關於計算收益</p>
                <p>依照文章被點閱次數，不同類型會員有不同的收益一千次點閱
                  US $2.00 ~ US $4.00。</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="margin-left: 60px">
          <div class="how_join_back">
            <img src="/static/img/team15.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="explain">
      <div class="explain_content row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="row">
            <div class="col-lg-3">
              <img src="/static/img/team16.png" alt="">
            </div>
            <div class="col-lg-9" style="text-align: left">
              <h3 style="margin-top: 0">匯款説明</h3>
              <p>多種付款方式，PayPal、支付寶、Bitcoin</p>
              <p>當每月累計達到最低付款額度（5美元），在隔一個月的月底前匯款</p>
              <p>若收益未達到支付金額，會累計到下個月</p>
            </div>
          </div>
          <div style="display: inline-block">
          </div>
          <div style="display: inline-block">

          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="row">
            <div class="col-lg-3">
              <img src="/static/img/team17.png" alt="">
            </div>
            <div class="col-lg-9" style="text-align: left">
              <h3 style="margin-top: 0">合作邀請</h3>
              <p>歡迎作家、原創部落格主、翻譯高手、行業專家等分享文章，請於註</p>
              <p>冊後與我們聯絡，我們將提供特別認證(首頁特約作者專區、原創文</p>
              <p>章標示……等），以及更高的收益(1,000次點閱$2.25~$4.00美金)。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import facebook_share from "@/components/oopsdaily/share_button2/facebook_share_btn"
  import google_share from "@/components/oopsdaily/share_button2/google_share_btn"
  import twitter_share from "@/components/oopsdaily/share_button2/twitter_share_btn"
  export default {
    name: "oopsdaily",
    mounted() {
      //将头部  隐藏掉
      this.$store.state.oopsdaily_control = false
    },
    components:{
      "facebook_share":facebook_share,
      "google_share":google_share,
      "twitter_share":twitter_share
    }
  }
</script>

<style scoped lang="less">
  .oopsdaily_wrap{
    background-color: white;
    row{
      margin: 0 !important;
    }
    .line{
      display: inline-block;
      border-right: 1px solid white;
      margin: 0 10px;
      height: 20px;
    }
    .top_line{
      display: inline-block;
      border-top: 5px solid #71c2fb;
      width: 60px;
      margin-bottom: 20px;
    }
    .circle{
      display: inline-block;
      border: 2px solid #71c2fb;
      width: 15px;
      height: 15px;
      vertical-align: middle;
      margin-right: 15px;
      border-radius: 50%;
    }
    .oopsdaily_content{
      .header_wrap{
        background:url("/static/img/background2.png") no-repeat center;
        row{
          margin: 0;
        }
        .oops_header{
          max-width: 1180px;
          width: 100%;
          margin: 0 auto;
          height: 80px;
          line-height: 80px;
          .oops_chara{
            a{
              color: white;
            }
          }
          strong{
            font-size: 26px;
            color: white;
            vertical-align: middle;
          }
        }
        .oops_join{
          padding: 56px 0 60px ;
          min-height: 668px;
          .join_us{
            max-width: 1180px;
            width: 100%;
            margin: 0 auto;
            text-align: left;
            color: white;
            p{
              font-size: 16px;
            }
            .join_us_btn{
              width: 142px;
              height: 45px;
              border-radius: 28px;
              background-color: white;
              color: #3c58d8;
              font-size: 18px;
              line-height: 45px;
              text-align: center;
              margin-top: 56px;
              cursor: pointer;
            }
            .back{
              position: relative;
              min-height: 550px;
              img{
                position: absolute;
                right: 0;

              }
            }
          }
        }
      }

    }
    .feature{
      background-color: white;
      padding: 74px 0 114px ;
      width: 100%;
      max-height: 668px;
      border-bottom: 1px solid #eeeeee;
      .feature_content{
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
      }
      .feature_chara{
        text-align: left;
        margin-top: 36px;
        padding-left: 50px !important;
        .feature_btn{
          width: 122px;
          height: 40px;
          color: white;
          text-align: center;
          line-height: 40px;
          background-color: rgb(62, 107, 220);
          border-radius: 50px;
          margin-top: 70px;
          cursor: pointer;
          a{
            color: white;
          }
        }
      }
    }
    .how_join{
      background-color: white;
      padding: 72px 0 90px;
      border-bottom: 1px solid #eeeeee;
      .how_join_content{
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
        text-align: left;
        ul{
          .row{
            margin: 0;
          }
          li{
            img{
              vertical-align: middle;
            }
          }
        }
      }
      .how_join_back{
        position: relative;
        min-height: 478px;
        img{
          position: absolute;
          right: 0;
        }
      }

    }
    .explain{
      background-color: white;
      padding: 110px 0 127px;
      border-bottom: 1px solid #eee;
      .explain_content{
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
</style>
