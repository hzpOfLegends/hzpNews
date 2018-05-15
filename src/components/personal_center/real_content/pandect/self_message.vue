<template>
  <div class="row self_message_wrap">
    <div class="col-12 clearfix">
      <div class="self_mess float-left">
        <div class="head float-left">
        </div>
        <div class="float-left chara" style="">
          <div class="big_chara">您好，鱼丸</div>
          <div>我的会员等级: <a href="javascript:;" style="color: #f88605">1级</a></div>
          <div>我的账户金额: <a href="javascript:;" style="color: rgb(251, 69, 51)">30000</a></div>
        </div>
      </div>
      <div class="line float-left"></div>
      <div class="float-left self_hint">
        <div class="row">
          <div class="col-4">
            <a href="#">
              <div>
                <i class="fa fa-commenting-o"></i>
              </div>
              <div class="chara">
                最新消息（<span style="color:#eb1c21">24</span>）
              </div>
            </a>
          </div>
          <div class="col-4">
            <a href="#">
              <div>
                <i class="fa fa-file-text-o"></i>
              </div>
              <div class="chara">
                最新消息（<span style="color:#eb1c21">24</span>）
              </div>
            </a>
          </div>
          <div class="col-4">
            <a href="#">
              <div>
                <i class="fa fa-money"></i>
              </div>
              <div class="chara">
                最新消息（<span style="color:#eb1c21">24</span>）
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "self_message"
  }
</script>

<style scoped lang="less">
  .self_message_wrap {
    .line {
      border-right: 1px solid #eeeeee;
      height: 100%;
    }
    .col-12 {
      background: white;
      .self_mess {
        width: 30.25rem;
        padding: 1.875rem 1.25rem 2.5rem;
        .head {
          width: 5.25rem;
          height: 5.25rem;
          border-radius: 50%;
          background: gray;
        }
        .chara {
          text-align: left;
          padding-left: 10px;
          font-size: 14px;
          color: #c6c6c6;
          .big_chara {
            font-size: 16px;
            color: black;
          }
        }
      }
      .self_hint {
        width: 43.3125rem;
        padding: 1.875rem 1.25rem 2.5rem;
        a {
          display: inline-block;
          color: #434343;
          i {
            font-size: 32px;
            font-weight: 300;
          }
          .chara{
            padding-top: 1rem;
          }
        }
      }
    }
  }
</style>
