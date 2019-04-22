<template lang="html">
<div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="k in swiperData" :key="k.id">
          <img :src="k.imgPath">
      </mt-swipe-item>
    </mt-swipe>
    <div class="back" @click="$router.go(-1)">
        
          <span class="iconfont icon-fanhui"></span>
         
      </div>
    
</div>
</template>

<script>
import '../../assets/icon/iconfont.css'

export default {
  props: {
     swiperData:{
       type:Array,
       default:function(){
         return this.$store.state.detail.productDatas.swiper
       }
     }
   },
}
</script>

<style lang="scss" scoped>
.swiper{
    position: relative;
    .mint-swipe {
      width: 100%;
      height:50vw;
      
      img {
        display: block;
        width: 100%;
        height:100%;
        background: #ea5529;
      
      }
    }
    .back {
    width: 7vw;
    height: 7vw;
    position: absolute;
    left: 4vw;
    top: 2vw;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    text-align: center;
    span {
      display: inline-block;
      line-height: 7vw;
      transform: rotate(-180deg);
      &::before {
        color: #fff;
        
      }
      
    }

    &:active {
      transform: scale(1.3);
    }
    
  }
}


</style>
