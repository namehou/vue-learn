<template>
    <div class="service">
        <ul>
            <li><i class="el-icon-circle-check-outline"></i><span>自营品牌</span></li>
            <li><i class="el-icon-circle-check-outline"></i><span>无忧退货</span></li>
            <li><i class="el-icon-circle-check-outline"></i><span>48小时快速退款</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "service"
}
</script>
<style lang="scss" scoped>
.service {
    border-bottom: 1px solid rgba(185, 185, 185, 0.14);
    ul {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-around;
        li {
            display: -webkit-flex;
            display: -ms-flex;
            display: flex;
            align-items: center;
            padding: 3.3vw 0;
            span {
                font-size: 0.9rem;
                padding-left: 1vw;
            }
            i {
                font-size: 1.25rem;
                color: #ea545d;
            }
      }
    }
  }

</style>



