<template>
    <header>
        <router-link
            class="iconfont icon-go"
            :to="{ name: '首页'}"
            v-if="$route.matched[0].path=='/category'">
        </router-link>
        <div class="back">
          <span class="iconfont icon-fanhui" @click="$router.go(-1)"></span>
        </div>
       
        <slot name="title"></slot>

        
    </header>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
header {
  background-color: #F8FCFF;
  text-align: center;
  position: relative;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  h1 {
    font-size: 1.2rem;
    letter-spacing: .2vw;
    font-weight: 600;
    margin-right: 36vw;
  }
  .back{
    width: 7vw;
    height: 7vw;
    position: absolute;
    left: 4vw;
    top: 2vw;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    text-align: center;
    span,a {
    display: inline-block;
    font-size: 1.2rem;
    transform: rotate(-180deg);
    &::before {
      color:#333;
    }
  }
  
  }
}
</style>