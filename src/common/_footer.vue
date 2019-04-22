<template lang="html">
  <!-- gotoRouter:点击后路由跳转到与id名相同的route.name所对应的路径 -->
 <footer class="footer" @click.stop='gotoRouter'>
    <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页">
      <i slot="icon" class="iconfont icon-shouye"></i>
        首页
    </mt-tab-item>
    <mt-tab-item id="分类页">
      <i slot="icon" class="iconfont icon-fenlei"></i>
      分类
    </mt-tab-item>
    <mt-tab-item id="购物车页">
      <i slot="icon" class="iconfont icon-gouwuche"></i>
      购物车
    </mt-tab-item>
    <mt-tab-item id="用户页">
      <i slot="icon" class="iconfont icon-wode"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
  </footer>
</template>

<script>
import '../assets/icon/iconfont.css'

  export default {
    methods: {
      gotoRouter() {
        this.$router.push({
          name: this.selected
        })
      }
    },
    data() {
      return {
        //对应mt-tab-item 的id值
        selected: ''
      }
    },
    mounted() {

      //获取当前路由名称，根据该名称给当前footer添加is-selected
      let Rname = this.$route.name;
      switch (Rname) {
        case '首页':
          this.selected = '首页';
          break;
        case '分类页':
          this.selected = '分类页';

          break;
        case '购物车页':
          this.selected = '购物车页';

          break;
        case '用户页':
          this.selected = '用户页';
          break;
      }
    }

  }
</script>

<style lang="scss" scoped>

.mint-tab-item-label:hover {
  color:#333;

}
  .footer {


    .mint-tabbar {
      background-color: #fff;
      background-image: none;
      box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      -webkit-box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      .is-selected {
        background-color: #fff;
       
      }
      
    }
  }
</style>
