<template>
  <div>
    <div class="customization">
      <div class="text">
        <p>为您私人定制，<br>打造属于您独家的保险方案</p>
      </div>
      <router-link to="/customization" class="btn">立即定制</router-link>
    </div>

    <div>
    <tab :line-width=2 active-color='#ff4400' v-model="index" :scroll-threshold="5">
    <tab-item class="vux-center" :selected="selected === item" v-for="(item, index) in list" @click="selected = item" :key="index">{{item}}</tab-item>
  </tab>
  <swiper v-model="index" :show-dots="false" :threshold="100">
    <swiper-item class="item_box">
      <scroll ref="scroll1" class="wrapper"
            :data="arr"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp">
          <div class="list_item" v-for="(item, index) in arr" :key="index">
            <flexbox :gutter="10" justify="center">
              <flexbox-item :span="3.4">
                <img src="../../assets/pro_list.png">
              </flexbox-item>
              <flexbox-item :span="8.25">
                <h2 class="title">{{item.title}}</h2>
                <p class="des">{{item.des|sub}}</p>
                <div class="price_saleNum">
                  <p class="price">{{item.price}}</p>
                  <p class="saleNum">销量&nbsp;{{item.saleNum}}&nbsp;份</p>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
      </scroll>
    </swiper-item>
    <swiper-item class="item_box">
      <scroll ref="scroll2" class="wrapper"
            :data="arr"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown2"
            @pullingUp="onPullingUp2">
          <div class="list_item" v-for="(item, index) in arr" :key="index">
            <flexbox :gutter="10" justify="center">
              <flexbox-item :span="3.4">
                <img src="../../assets/pro_list.png">
              </flexbox-item>
              <flexbox-item :span="8.25">
                <h2 class="title">{{item.title}}</h2>
                <p class="des">{{item.des|sub}}</p>
                <div class="price_saleNum">
                  <p class="price">{{item.price}}</p>
                  <p class="saleNum">销量&nbsp;{{item.saleNum}}&nbsp;份</p>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
      </scroll>
    </swiper-item>
    <swiper-item class="item_box">
      <scroll ref="scroll3" class="wrapper"
            :data="arr"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown3"
            @pullingUp="onPullingUp3">
          <div class="list_item" v-for="(item, index) in arr" :key="index">
            <flexbox :gutter="10" justify="center">
              <flexbox-item :span="3.4">
                <img src="../../assets/pro_list.png">
              </flexbox-item>
              <flexbox-item :span="8.25">
                <h2 class="title">{{item.title}}</h2>
                <p class="des">{{item.des|sub}}</p>
                <div class="price_saleNum">
                  <p class="price">{{item.price}}</p>
                  <p class="saleNum">销量&nbsp;{{item.saleNum}}&nbsp;份</p>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
      </scroll>
    </swiper-item>
    <swiper-item class="item_box">
      <scroll ref="scroll4" class="wrapper"
            :data="arr"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown4"
            @pullingUp="onPullingUp4">
          <div class="list_item" v-for="(item, index) in arr" :key="index">
            <flexbox :gutter="10" justify="center">
              <flexbox-item :span="3.4">
                <img src="../../assets/pro_list.png">
              </flexbox-item>
              <flexbox-item :span="8.25">
                <h2 class="title">{{item.title}}</h2>
                <p class="des">{{item.des|sub}}</p>
                <div class="price_saleNum">
                  <p class="price">{{item.price}}</p>
                  <p class="saleNum">销量&nbsp;{{item.saleNum}}&nbsp;份</p>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
      </scroll>
    </swiper-item>
    <swiper-item class="item_box">
      <scroll ref="scroll5" class="wrapper"
            :data="arr"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown5"
            @pullingUp="onPullingUp5">
          <div class="list_item" v-for="(item, index) in arr" :key="index">
            <flexbox :gutter="10" justify="center">
              <flexbox-item :span="3.4">
                <img src="../../assets/pro_list.png">
              </flexbox-item>
              <flexbox-item :span="8.25">
                <h2 class="title">{{item.title}}</h2>
                <p class="des">{{item.des|sub}}</p>
                <div class="price_saleNum">
                  <p class="price">{{item.price}}</p>
                  <p class="saleNum">销量&nbsp;{{item.saleNum}}&nbsp;份</p>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
      </scroll>
    </swiper-item>
  </swiper>
  </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux'
import productApi from '@/api/product.js'
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      arr: [],
      list: ['健康险', '旅行险', '意外险', '人寿险', '免费险'],
      selected: '健康险',
      index: 0,
      pullDownRefresh: true,
      pullDownRefreshTxt: '刷新成功',
      pullDownRefreshThreshold: 65,
      pullDownRefreshStop: 40,
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: '数据加载中',
      pullUpLoadNoMoreTxt: '没有更多数据了'
    }
  },
  computed: {
    pullDownRefreshObj: function () {
      return this.pullDownRefresh ? {
        threshold: parseInt(this.pullDownRefreshThreshold),
        stop: parseInt(this.pullDownRefreshStop),
        txt: this.pullDownRefreshTxt
      } : false
    },
    pullUpLoadObj: function () {
      return this.pullUpLoad ? {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
      } : false
    }
  },
  methods: {
    whichselected () {
      let category = this.$route.query.cate
      switch (category) {
        case 'health':
          this.selected = '健康险'
          break
        case 'travel':
          this.selected = '旅行险'
          break
        case 'accident':
          this.selected = '意外险'
          break
        case 'life':
          this.selected = '人寿险'
          break
        case 'free':
          this.selected = '免费险'
          break
        default:
          this.selected = '健康险'
          break
      }
    },
    onPullingDown () { // 下拉刷新
      productApi.Datainit().then((res) => {
        // console.log(res)
        if (res.data.length !== 0) {
          this.arr = res.data
        } else {
          this.$refs.scroll1.forceUpdate()
        }
      })
    },
    onPullingDown2 () { // 下拉刷新
      productApi.Datainit().then((res) => {
        // console.log(res)
        if (res.data) {
          this.arr = res.data
        } else {
          this.$refs2.scroll1.forceUpdate()
        }
      })
    },
    onPullingDown3 () { // 下拉刷新
      productApi.Datainit().then((res) => {
        // console.log(res)
        if (res.data) {
          console.log(res)
          this.arr = res.data
        } else {
          this.$refs3.scroll1.forceUpdate()
        }
      })
    },
    onPullingDown4 () { // 下拉刷新
      productApi.Datainit().then((res) => {
        // console.log(res)
        if (res.data) {
          console.log(res)
          this.arr = res.data
        } else {
          this.$refs4.scroll1.forceUpdate()
        }
      })
    },
    onPullingDown5 () { // 下拉刷新
      productApi.Datainit().then((res) => {
        // console.log(res)
        if (res.data) {
          console.log(res)
          this.arr = res.data
        } else {
          this.$refs5.scroll1.forceUpdate()
        }
      })
    },
    onPullingUp () { // 上拉加载
      // 更新数据
      productApi.pull().then((res) => {
        if (res.data.length !== 0) {
          res.data.map((item) => {
            this.arr = this.arr.concat(item)
          })
        } else {
          console.log(this.$refs)
          this.$refs.scroll1.forceUpdate()
        }
      })
    },
    onPullingUp2 () { // 上拉加载
      // 更新数据
      productApi.pull().then((res) => {
        if (res.data.length !== 0) {
          res.data.map((item) => {
            this.arr = this.arr.concat(item)
          })
        } else {
          console.log(this.$refs)
          this.$refs.scroll2.forceUpdate()
        }
      })
    },
    onPullingUp3 () { // 上拉加载
      // 更新数据
      productApi.pull().then((res) => {
        if (res.data.length !== 0) {
          res.data.map((item) => {
            this.arr = this.arr.concat(item)
          })
        } else {
          console.log(this.$refs)
          this.$refs.scroll3.forceUpdate()
        }
      })
    },
    onPullingUp4 () { // 上拉加载
      // 更新数据
      productApi.pull().then((res) => {
        if (res.data.length !== 0) {
          res.data.map((item) => {
            this.arr = this.arr.concat(item)
          })
        } else {
          console.log(this.$refs)
          this.$refs.scroll4.forceUpdate()
        }
      })
    },
    onPullingUp5 () { // 上拉加载
      // 更新数据
      productApi.pull().then((res) => {
        if (res.data.length !== 0) {
          res.data.map((item) => {
            this.arr = this.arr.concat(item)
          })
        } else {
          console.log(this.$refs)
          this.$refs.scroll5.forceUpdate()
        }
      })
    },
    rebuildScroll () {
      this.nextTick(() => {
        this.$refs.scroll1.destroy()
        this.$refs.scroll1.initScroll()
      })
    },
    initbaseData () {
      productApi.Datainit().then((res) => {
        if (res.data) {
          this.arr = res.data
        }
      })
    }
  },
  watch: {
    pullDownRefreshObj: {
      handler () {
        this.rebuildScroll()
      },
      deep: true
    },
    pullUpLoadObj: {
      handler () {
        this.rebuildScroll()
      },
      deep: true
    }
  },
  mounted () {
    this.initbaseData()
    this.whichselected()
  }
}
</script>

<style lang="less" scoped>
.customization{
  position: relative;
  width: 100%;
  height: 100px;
  background: linear-gradient(left, #6199f6, #8b39f6);
  .text{
    width: 70%;
    p{
      position: absolute;
      top:50%;
      left:15px;
      transform: translate(0, -50%);
      font-size: 17px;
      color:#fff;
      line-height: 20px;
    }
  }
  .btn{
    position: absolute;
    top:50%;
    right: 15px;
    transform: translate(0,-50%);
    display:inline-block;
    width: 80px;
    height: 26px;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    color:#fff;
    border:1px solid #fff;
    border-radius: 20px;
  }
}
.item_box{
  padding-left:10px;
  box-sizing: border-box;
.list_item{
  .vux-flexbox{
    .vux-flexbox-item{
      padding: 15px 0;
      img{
        display: inline-block;
        max-width: 100%;
        width: 100%;
        height: auto;
      }
      .title{
        font-size: 17px;
        color:#333;
        font-weight: 400;
      }
      .des{
        font-size: 14px;
        color:#999;
      }
      .price_saleNum{
        overflow: hidden;
        .price{
          font-size: 18px;
          float: left;
          color:#ff4400;
          font-weight: 700;
          line-height: 28px;
        }
        .saleNum{
          font-size: 14px;
          color:#888;
          font-weight: 400;
          float: right;
          line-height: 28px;
        }
      }
      &:last-child{
        border-bottom: 1px solid #e4e4e4;
        padding-right: 10px;
        box-sizing: border-box;
      }
    }
  }
}
}
@media (max-width: 320px) {
.customization{
  .text{
    p{
     font-size: 16px;
    }
  }
  .btn{
    width: 70px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
  }
}
.item_box{
  .list_item{
    .vux-flexbox{
      .vux-flexbox-item{
         padding: 10px 0;
        .title{
          font-size: 15px;
        }
        .des{
          font-size: 12px;
        }
        .price_saleNum{
        .price{
          font-size: 16px;
        }
        .saleNum{
          font-size: 12px;
        }
      }
      }
    }
  }
}
}
</style>
