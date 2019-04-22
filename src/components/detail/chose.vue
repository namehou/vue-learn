<template lang="html">
    <section class="chose" v-if="view">
        <div class="chose-view">
            <h1 class="chose-view-title">
                {{ view.title }}  ~~
                <span>已选 {{ colText }} - {{ sizeText }} </span>
                <span>{{view.price}}元</span>     
                <p class="chose-view-intro">{{view.intro}}</p>
            </h1>
        </div>

        <!-- 添加空函数 解决Safari浏览器 :active无效 -->
        <div class="chose-mychosed" ontouchstart="">
            <div class="colChose">
                <span
                v-for="(k,i) in view.chose"
                :class="{active:colSelected==i}"
                @click="colChose(i)"
                >{{k.col}}</span>
            </div>
            <div class="sizeChose" >
                <span
                v-for="(k,i) in view.chose"
                :class="{active:sizeSelected==i}"
                @click="sizeChose(i)"
                >
                {{k.size}}
                </span>
            </div>
            </div>
    </section>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { mapState } from 'vuex'


export default {

  computed: mapState({

    view: state => state.detail.productDatas.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    // 返回当前选择颜色的值(innerText)
    colText() {
      return this.view.chose[this.colSelected].col
    },
    // 返回当前选择规格的值(innerText)
    sizeText() {
      return this.view.chose[this.sizeSelected].size
    }

  }),
  methods: {

    //点击后把i赋值给colSelected,再通过判断决定是否添加选中样式 (active)
    colChose(i) {
      this.$store.commit('CHANGE_COL_SELECTED', i);
    },
    sizeChose(i) {
      this.$store.commit('CHANGE_SIZE_SELECTED', i);
    }

  }
}
</script>

<style lang="scss" scoped>

.chose {
    padding: 3vw;

    .chose-view {
        > h1 {
            color: #2c3e50;
            > span {
                color: rgb(238, 113, 80);
            }
        }
        > span {
            line-height: 10vw;
            
            font-weight: 600;
        }

    }

    .chose-mychosed {

        background-color: #fff;
        > div {
            padding-top: 20px;
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            span {
                
                padding: 6px 10px;
                border: 1px solid rgb(111, 111,111);
                margin-right: 6vw;
                color: rgb(111, 111, 111);
                &.active,
                &:active {
                    
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }

            }
        }
    }

    .footer {
        width: 100%;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        height: 14vw;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #ffffff;
        -moz-user-select: none;
        -webkit-user-select: none;
        
        .footer-addcar,
        .footer-gocar,
        .footer-index {
            text-align: center;
        }

        .footer-index {
            -webkit-flex: 3;
            -ms-flex: 3;
            flex: 3;
            line-height: 14vw;
            height: 14vw;
            padding-top: 1.5vw;
            border-right-color: #f7f7f7;
            border-right-style: solid;
           
            &:active {
                background-color: #f1f1f1;
            }
        }

        .footer-gocar {
            position: relative;
            -webkit-flex: 3;
            -ms-flex: 3;
            flex: 3;
            height: 14vw;
            line-height: 14vw;
            padding-top: 1.6vw;
            span {
                height: 5.5vw;
                width: 5.5vw;
                line-height: 5.5vw;
                position: absolute;
                top: 0.5vw;
                right: 5.5vw;
                
                border-radius: 50%;
                color: #fff;
                
            }
            &:active {
                background-color: #f1f1f1;
            }
            
        }

        .footer-addcar {
            -webkit-flex: 6;
            -ms-flex: 6;
            flex: 6;
            line-height: 14vw;
            height: 14vw;

            color: #fff;
           
            letter-spacing: 0.2vw;
            &:active {
                background-color: #ff7d00;
            }
        }
    }
}
</style>
