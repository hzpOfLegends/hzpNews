<template>
  <div class="nav_bar">
    <div class="container-fluid">
      <div class="row" style="overflow: hidden">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 nav_name">
          <ul class="clearfix nav_list">
            <li>
              <router-link to="/category/1">
                問答
              </router-link>
            </li>
            <li>
              <router-link to='/category/2'>
                體育
              </router-link>
            </li>
            <li>
              <router-link to='/category/3'>
                軍事
              </router-link>
            </li>
            <li>
              <router-link to='/category/4'>
                科技
              </router-link>
            </li>
            <li>
              <router-link to='/category/5'>
                娛樂
              </router-link>
            </li>
            <li>
              <router-link to='/category/6'>
                國際
              </router-link>
            </li>
            <li>
              <router-link to='/category/7'>
                新聞
              </router-link>
            </li>
            <li>
              <router-link to="/category/8">旅游</router-link>
            </li>
            <li>
              <router-link to="/category/9">任務</router-link>
            </li>
            <li>
              <router-link to="/category/10">音樂</router-link>
            </li>
            <li>
              <router-link to="/category/11">影視</router-link>
            </li>
            <li>
              <router-link to="/category/12">軟件</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-10 col-xs-10 media_block">
          <router-link to="/">
            <span>OOPSDAILY</span>
            <span>|</span>
            <span>文章創作分享平台</span>
          </router-link>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" style="position: relative">
          <div @click="nav_toggle" style="position: absolute;top: 10px;right: 10px">
            <i :class="nav_down_icon" id="nav_down_icon" style="color:white;font-size: 20px"></i>
          </div>
        </div>
      </div>
      <div style="height: 100%">
        <div v-show="$store.state.nav_down" class="nav_bar_down "
             style="position: absolute;transform: translateY(0%);left: 0">
          <nav_bar_down/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import nav_bar_down from "@/components/common/nav_bar_down"

  export default {
    name: "nav_bar",
    data() {
      return {

        // 導航欄右邊圖標 點擊 / 顯示 nav—down
        nav_down_icon: "fa fa-bars",
      }
    },
    components: {
      "nav_bar_down": nav_bar_down //導航下拉
    },
    watch: {
      "$route.path": "setNavStyle"
    },
    methods: {
      // 显示 / 隐藏
      nav_toggle() {
        if (this.nav_down_icon == "fa fa-bars") {
          this.$store.state.nav_down = true
          this.nav_down_icon = "fa fa-close"
        } else {
          this.$store.state.nav_down = false
          this.nav_down_icon = "fa fa-bars"
        }
      },
      //设置導航樣式
      setNavStyle(currentIndex) {
        let list = document.querySelectorAll('.nav_list>li')
        let index = this.$route.path.split('/')[2] //以路由 當作 li的index 給他加樣式
        // 因爲下拉導航 點擊后隱藏  所以導航欄的字體圖標 要改回來
        if(!this.$store.state.nav_down){
          this.nav_down_icon = "fa fa-bars"
        }
        for (let i = 0; i < list.length; i++) {
          if (index <= list.length) {
            list[i].classList.remove('active')
            list[index - 1].classList.add('active')
          }

        }
      },
    },
    mounted() {
      let index = parseInt(this.$route.path.split('/')[2])
      let list = document.querySelectorAll('.nav_list>li')

      if (index <= list.length) { // 因爲導航衹顯示 12個 可能index 會比他大 所以會報錯 加一個判斷
        list[index + 1].classList.add('active')
      }
    }
  }
</script>

<style scoped lang="less">
  @media screen and(min-width: 768px ) {
    .media_block {
      display: none;
    }
  }

  @media screen and(max-width: 768px) {
    .nav_name {
      display: none;
    }

    .media_block {
      display: block;
    }
  }

  .nav_bar {
    width: 100%;
    height: 50px;
    .container-fluid {
      height: 100%;
      .active {
        background: rgb(70, 138, 237);
      }
      .media_block {
        height: 100%;
        text-align: left;
        line-height: 50px;
        a {
          text-decoration: none;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 20px;
        }
        :nth-child(1) {
          font-size: 24px;
          font-weight: 400;
          color: white;
        }
        :nth-child(2) {
          color: #a4a4a4;
          margin: 0 8px;
        }
        :nth-child(3) {
          color: #a4a4a4;
          font-size: 14px;
          font-weight: 300;
          color: white;
        }
      }
      .row {
        height: 100%;
      }
      .nav_name {
        ul {
          margin: 0;
          li {
            float: left;
            line-height: 50px;
            max-width: 80px;
            width: 100%;
            a {
              color: white;
              width: 100%;
              display: inline-block;
            }
          }
          li:hover {
            background: rgb(70, 138, 237);
          }
        }
      }
    }
  }

  .nav_bar_down {
    max-width: 1180px;
    width: 100%;
    box-shadow: 2px 2px 15px gray;
    z-index: 99;
  }
</style>
