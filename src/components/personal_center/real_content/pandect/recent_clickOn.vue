<template>
  <div class="row">
    <div class="col-12">
      <div class="clickOn_table">
        <h4>最近點開</h4>
        <div class="line">
          <div class="small_line"></div>
        </div>
        <table>
          <thead>
          <tr>
            <th>標題</th>
            <th>日期</th>
            <th>自推數</th>
            <th>共推數</th>
            <th>撰寫數</th>
            <th>縂點數</th>
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
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <th><a href="#">全部</a></th>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recent_click-on"
  }
</script>

<style scoped lang="less">
  .row {
    border: 1px solid #e5e5e5;
    .col-12 {
      background: white;
      .clickOn_table{
        padding: 1.25rem 1.5625rem 3.5rem;
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
              :first-child{
                max-width: 24.75rem;
              }
            }
          }
        }
      }
    }
  }
</style>
