<template>
    <div class="index">
        <v-header/>
        <v-swiper :swiperData="datas.swiper"/>
        <v-service/>
        <v-section1 :list="datas.section1.list" :banner='datas.section1.banner'/>
        <v-section2 :list="datas.section2.list" :banner='datas.section2.banner'/>
        <v-section3/>
        <v-baseline/>
        <v-footer/>
    </div>
</template>

<script>
import HeaderBar from '@/components/index/header'
import Swiper from '@/components/index/swiper'
import Service from '@/components/index/service'
import Section1 from '@/components/index/section1'
import Section2 from '@/components/index/section2'
import Section3 from '@/components/index/section3'
import Footer from '@/common/_footer'
import Baseline from '@/common/_baseline.vue'
import index from '@/http/mock' //模拟数据

export default {
    name: 'index',
    components: {
        'v-header': HeaderBar,
        'v-swiper': Swiper,
        'v-service': Service,
        'v-section1': Section1,
        'v-section2': Section2,
        'v-section3': Section3,
        'v-footer': Footer,
        'v-baseline':Baseline
    },
    data() {
        return {
            datas: {
                swiper:[],
                section1: {},
                section2: {},
                section3: {}
            }
        }
    },
    beforeCreate() {
        this.$request({
            method: 'post',
            url: '/index'
        }).then((response) => {
            this.datas = response.data;
        }).catch(function(error) {
            alert(error)
        })
    }
}
</script>
