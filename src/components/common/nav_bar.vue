<template>
  <div class="nav_bar">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-11 col-md-11 nav_name">
          <ul class="clearfix nav_list">
            <li index='0' class="active" >
              <router-link to="/index?CategoryID=7">
                問答
              </router-link>
            </li>
            <li index='1'>
              <router-link  to='/index?CategoryID=6'>
                體育
              </router-link>
            </li>
            <li index='2'>
              <router-link to='/index?CategoryID=5'>
                軍事
              </router-link>
            </li>
            <li index='3'>
              <router-link to='/index?CategoryID=4'>
                科技
              </router-link>
            </li>
            <li index='4'>
              <router-link to='/index?CategoryID=3'>
                娛樂
              </router-link>
            </li>
            <li index='5'>
              <router-link to='/index?CategoryID=2'>
                國際
              </router-link>
            </li>
            <li index='6'>
              <router-link to='/index?CategoryID=1'>
                新聞
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-1 col-md-1" style="position: relative">
          <div @click="nav_toggle" style="position: absolute;top: 10px;right: 10px">
            <i :class="nav_down_icon" id="nav_down_icon" style="color:white;font-size: 20px"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-show="$store.state.nav_down" class="nav_bar_down " style="position: absolute;transform: translateY(0%);">
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
        //配置路由正则
        routeObj: {
          '0': "7",
          '1': "6",
          '2': "5",
          '3': "4",
          '4': "3",
          '5': "2",
          '6': "1",
        },
        // 導航欄右邊圖標 點擊 / 顯示 nav—down
        nav_down_icon: "fa fa-bars",
      }
    },
    components: {
      "nav_bar_down": nav_bar_down //導航下拉
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
      //路由改变处理
      changeRoute() {
        //获取第一个//中的字段
        let currentType = this.$route.query.CategoryID;
        let index = '';
        for (let key in this.routeObj) {
          if (this.routeObj[key] == currentType) {
            index = key;
          }
        }
        this.setNavStyle(index);
        // this.activeIndex = index;
      },
      //设置主导航
      setNavStyle(currentIndex) {
        document.querySelectorAll('.nav_list>li').forEach((v, i) => {
          if (v.getAttribute('index') === currentIndex) {
            v.classList.add('active');
          } else {
            v.classList.remove('active');
          }

        })
      },
    },
    mounted(){
      let list = document.querySelectorAll('.nav_list>li')
      for(let i = 0 ; i<list.length ; i++){
        list[i].onclick = this.changeRoute
      }
    }
  }
</script>

<style scoped lang="less">
  .nav_bar {
    width: 100%;
    height: 50px;
    .container-fluid {
      height: 100%;
      .active {
        background: rgb(70, 138, 237);
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
    z-index: 99;}
</style>
