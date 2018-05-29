<template>
  <div class="reset_bg">
    <h1 class="title">选择保险公司</h1>
    <div class="item_box">
      <grid :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item v-for="(item, index) in safe_company_arr" :key="index">
          <a :href="'tel:'+item.phone" class="router_url">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
          </a>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem, Grid, GridItem} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem
  },
  data () {
    return {
      safe_company_arr: [
        {
          img: require('../../../static/images/safe_item_1.png'),
          name: '人保财险',
          phone: '95118'
        },
        {
          img: require('../../../static/images/safe_item_2.png'),
          name: '太平洋产险',
          phone: '95500'
        },
        {
          img: require('../../../static/images/safe_item_3.png'),
          name: '中国人寿财险',
          phone: '95119'
        },
        {
          img: require('../../../static/images/safe_item_4.png'),
          name: '中华保险',
          phone: '95585'
        },
        {
          img: require('../../../static/images/safe_item_5.png'),
          name: '大地保险',
          phone: '95590'
        },
        {
          img: require('../../../static/images/safe_item_6.png'),
          name: '阳光财险',
          phone: '95510'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.reset_bg{
  height: 100vh;
  background: #fff;
}
.title{
  font-size: 18px;
  color: #333;
  font-weight: 400;
  line-height: 57px;
  padding-left: 20px;
  background: #fff;
}
.item_box{
  background: #fff;
  .router_url{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .weui-grids{
    .weui-grid{
      text-align: center;
      p{
        color:#333;
        font-size: 13px;
      }
    }
  }
}
</style>
