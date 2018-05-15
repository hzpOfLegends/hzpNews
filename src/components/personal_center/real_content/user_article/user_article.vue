<template>
  <div class="container">
    <div class="col-12">
      <div class="user_article">
        <div class="title">
          <h4>全部文章</h4>
          <div class="line">
            <div class="small_line"></div>
          </div>
        </div>
        <table>
          <thead>
          <tr>
            <th>標題</th>
            <th>日期</th>
            <th>點開</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="clearfix">
              <div class="float-left img">
                <img src="../../../../../static/img/background1.png" alt="">
              </div>
              <div class="float-left right" style="padding-left: 10px">
                <div>美媒稱美媒稱美媒稱美媒稱美媒稱美媒稱美媒稱美媒稱美媒稱美媒稱美媒稱</div>
                <div class="chara" style="color: #b8b8b8">
                  類別：<span>國際</span>
                  <span class="td_line"></span>
                  ID：<span>123456</span>
                </div>
              </div>
            </td>
            <td>2018/05/08</td>
            <td>50</td>
            <td class="operation">
              <a href="#">
                <i class="fa fa-pencil fa-lg"></i>
              </a>
              <a href="#">
                <i class="fa fa-trash-o fa-lg"></i>
              </a>
              <a href="#" class="copy">複製鏈接</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user_article"
  }
</script>

<style scoped lang="less">
  .user_article {
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
    table{
      margin-top: 1.125rem;
      width: 100%;
      thead{
        tr{
          th{
            padding: 12px 0 ;
            font-weight: 400;
            background: #eeeeee;
          }
        }
      }
      tbody{
        tr{
          td{
            padding: 1rem 1.125rem;
            font-weight: 300;
            font-size: 14px;
            font-weight: 400;
            img{
              width: 6.75rem;
              height: 4.625rem;
            }
            .right{
              position: relative;
              height: 4.625rem;
              .chara{
                text-align: left;
                font-size: 14px;
                position: absolute;
                left: 10px;
                bottom:0 ;
                .td_line{
                  border: 1px solid #b8b8b8;
                  margin: 0 10px;
                }
              }
            }

          }
          .operation{
            text-align: center;
            a{
              color: rgb(153, 153, 153);
              margin-left: 2rem;
            }
            .copy{
              display: inline-block;
              border: 1px solid rgb(130, 180, 235);
              padding: 0.5rem 0.875rem;
              background: rgb(235, 244, 251);
              color: rgb(87, 151, 225);
              border-radius: 5px;
            }
          }
          :first-child{
            max-width: 24.75rem;
          }
        }
      }
    }
  }
</style>
