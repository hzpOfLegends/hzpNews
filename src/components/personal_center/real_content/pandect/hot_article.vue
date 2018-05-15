<template>
  <div class="row ">
    <div class="col-12">
      <div class="article_list">
        <h4>熱門文章</h4>
        <div class="line">
          <div class="small_line"></div>
        </div>
          <div class="col-12">
            <div class="list">
              <img src="../../../../../static/img/background1.png">
              <div class="title">
                <span>國際</span>
                坐不住了！蘋果CEO庫克即將找特朗普談貿易戰
              </div>
              <div class="chara">
                時間：<span>2017/08/08</span>
                <span class="td_line"></span>
                點開 ： <span>5220</span>
              </div>
              <div class="btn">
                <a href="#">複製鏈接</a>
              </div>
            </div>
            <div class="list">
              <img src="../../../../../static/img/background1.png">
              <div class="title">
                <span>國際</span>
                坐不住了！蘋果CEO庫克即將找特朗普談貿易戰
              </div>
              <div class="chara">
                時間：<span>2017/08/08</span>
                <span class="td_line"></span>
                點開 ： <span>5220</span>
              </div>
              <div class="btn">
                <a href="#">複製鏈接</a>
              </div>
            </div>
            <div class="list">
              <img src="../../../../../static/img/background1.png">
              <div class="title">
                <span>國際</span>
                坐不住了！蘋果CEO庫克即將找特朗普談貿易戰
              </div>
              <div class="chara">
                時間：<span>2017/08/08</span>
                <span class="td_line"></span>
                點開 ： <span>5220</span>
              </div>
              <div class="btn">
                <a href="#">複製鏈接</a>
              </div>
            </div>
            <div class="list">
              <img src="../../../../../static/img/background1.png">
              <div class="title">
                <span>國際</span>
                坐不住了！蘋果CEO庫克即將找特朗普談貿易戰
              </div>
              <div class="chara">
                時間：<span>2017/08/08</span>
                <span class="td_line"></span>
                點開 ： <span>5220</span>
              </div>
              <div class="btn">
                <a href="#">複製鏈接</a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hot_article"
  }
</script>

<style scoped lang="less">
  .row {
    border: 1px solid #e5e5e5;
    .col-12 {
      .article_list {
        padding: 1.25rem 1.375rem 1.875rem;
        background: white;
        h4 {
          font-size: 14px;
          text-align: left;
          font-weight: 600;
        }
        .line {
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
        .col-12 {
          margin-top: 1.375rem;
          .list {
            width: 16.875rem;
            margin-right: 0.800rem;
            display: inline-block;
            img {
              width: 100%;
              height: 9.875rem;
              margin-bottom: 1rem;
            }
            .title {
              padding: 0.625rem 0.625rem;
              text-align: left;
              span {
                display: inline-block;
                border: 1px solid #fa9b98;
                color: #fa9b98;
                font-size: 12px;
                padding: 3px 5px;
                border-radius: 3px;
              }
            }
            .chara {
              padding: 0 0.625rem;
              color: #999999;
              font-size: 14px;
              text-align: left;
              .td_line {
                border: 1px solid #b8b8b8;
                margin: 0 10px;
              }
            }
            .btn {
              padding: 0 0.625rem;
              margin: 0.625rem 0 1.375rem 0;
              width: 100%;
              a {
                display: inline-block;
                width: 100%;
                padding: 0.625rem 0;
                font-size: 12px;
                background: #2c80db;
                color: white;
                border-radius: 3px;
              }
            }
          }
          :last-child {
            margin-right: 0;
          }

        }
      }
    }
  }
</style>
