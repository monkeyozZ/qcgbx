<template>
<scroll ref="scroll" class="wrapper"
    :bounce="{top: false}">
  <div>
    <div class="banner_box">
      <div class="banner">
        <img src="../../../static/images/carsafe.png" alt="">
        <h3 class="title">{{user_info.nickname?user_info.nickname:basename}}，您好！</h3>
        <p class="des">买车险，来牛小云，不仅仅是便宜！</p>
      </div>
    </div>

    <div class="nav">
        <h2>多家保险公司特惠报价</h2>
        <flexbox :gutter="0" justify="center">
          <flexbox-item :span="6">
            <router-link :to="{path: 'buy'}">
              <svg-icon icon-class="carsafe@2x"></svg-icon>
              <span>买车险</span>
            </router-link>
          </flexbox-item>
          <flexbox-item :span="6">
            <router-link :to="{path: 'compensate'}">
              <svg-icon icon-class="money@2x"></svg-icon>
              <span>办理赔</span>
            </router-link>
          </flexbox-item>
        </flexbox>
      </div>

    <div class="hot_safe_list">
      <h1>热门车险推荐</h1>
      <div class="list_box">
        <ul>
          <li v-for="(item,index) in list_arr" :key="index">
            <div class="text_left">
              <h2 class="title">{{item.title}}</h2>
              <p class="des">{{item.subtitle}}</p>
              <a :href="item.url" class="btn">立即购买</a>
            </div>
            <div class="img_right">
              <img :src="baseimgurl + item.imgUrl">
            </div>
          </li>
          <li v-show="list_arr.length === 0" style="text-align:center;color:#9e9696;font-size:14px;">暂无数据！</li>
        </ul>
      </div>
    </div>
    <v-logo></v-logo>
  </div>
</scroll>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import logo from '@/components/logo/index'
import productApi from '@/api/product.js'
import {mapGetters} from 'vuex'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    'v-logo': logo
  },
  data () {
    return {
      list_arr: [],
      baseimgurl: process.env.BASE_API,
      basename: '游客',
      limitQuery: {
        pageSize: 20,
        pageNumber: 1
      }
    }
  },
  computed: {
    ...mapGetters({
      user_info: 'user_info'
    })
  },
  methods: {
    showloading () {
      this.$vux.loading.show({
        text: '加载中...'
      })
    },
    hideloading () {
      this.$vux.loading.hide()
    },
    getlist () {
      this.showloading()
      let obj = {
        category: 1,
        pageSize: this.limitQuery.pageSize,
        pageNumber: this.limitQuery.pageNumber
      }
      productApi.getlist(obj).then((res) => {
        this.hideloading()
        if (res.data.code === 0) {
          this.list_arr = res.data.data
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getlist()
  }
}
</script>

<style lang="less" scoped>
.wrapper{
 height: 100vh;
}
.banner_box{
  position: relative;
  font-size: 0;
  .banner{
    width: 100%;
    img{
      display: inline-block;
      max-width: 100%;
      width: 100%;
      height: 100%;
    }
    .title{
    position: absolute;
    top:26px;
    left: 10px;
    font-size: 30px;
    font-weight: 400;
    color:#fff;
    text-align: left;
  }
  .des{
    position: absolute;
    font-size: 18px;
    font-weight: 400;
    color:#fff;
    top:75px;
    left: 10px;
  }
  }
}
  .nav{
    position: relative;
    margin: -45px auto 0;
    padding: 15px 0;
    width: 92%;
    z-index: 999;
    background: #fff;
    border-radius: 5px;
    h2{
      font-size: 18px;
      color:#333;
      line-height: 25px;
      font-weight: 400;
      margin-bottom: 15px;
      padding-left: 10px;
    }
    .vux-flexbox-item{
      text-align: center;
      .svg-icon{
        margin-right: 10px;
        width: 26px;
        height: 26px;
        vertical-align: middle;
      }
      a{
        color:#333;
        line-height: 26px;
      }
      &:first-child{
        border-right: 1px solid #e4e4e4;
      }
    }
  }
.hot_safe_list{
  margin-top: 10px;
  background: #fff;
  h1{
    font-size: 18px;
    color:#333;
    font-weight: 400;
    padding: 0 10px;
    line-height: 44px;
    border-bottom: 1px solid #e4e4e4;
  }
  .list_box{
    padding: 0 10px;
    ul{
      li{
        position: relative;
        overflow: hidden;
        padding: 20px 0 15px 0;
        border-bottom: 1px solid #e4e4e4;
        &:last-child{
          border-bottom: none;
        }
        .text_left{
          width: e('calc(100% - 106px)');
          float: left;
          overflow: hidden;
          .title{
            font-size: 16px;
            font-weight: 400;
            color:#333;
            line-height: 21px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .des{
            font-size: 14px;
            color:#999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .btn{
            position: absolute;
            bottom:20px;
            display: inline-block;
            width: 65px;
            line-height: 22px;
            font-size: 12px;
            text-align: center;
            border-radius: 20px;
            color:#fff;
            background-image: -webkit-linear-gradient(left,#f09819 25px,#fd5f51);
          }
        }
        .img_right{
          width: 96px;
          height: 76px;
          float: right;
          img{
            display: inline-block;
            max-width: 100%;
            width: 100%;
            height: auto;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
@media (max-width: 320px) {
  .hot_safe_list{
    h1{
      font-size: 16px;
      line-height: 40px;
    }
    .list_box{
      ul{
        li{
          padding: 10px 0;
          .text_left{
            width: e('calc(100% - 90px)');
            .title{
              font-size:16px;
            }
            .des{
              font-size: 14px;
            }
            .btn{
              bottom:10px;
            }
          }
          .img_right{
            width: 85px;
          }
        }
      }
    }
  }
}
</style>
