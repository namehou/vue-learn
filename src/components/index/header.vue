<template>
<div class="header-bar">
    <mt-header title="电商联盟">

  <router-link :to="{name:''}" slot="right">
    <mt-button icon="search"></mt-button>
  </router-link>
</mt-header>
       
</div>
    
</template>

<script>
export default {
    name: "header-bar"
}
</script>
<style lang="scss" scoped>
    .mint-header {
        padding: 6.8vw 4.8vw;
        background-color: #fff;
        color: #333!important;
        font-size: 1.25rem;
    }
</style>
