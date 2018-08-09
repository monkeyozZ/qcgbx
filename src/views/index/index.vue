<template>
  <div>
    <scroll ref="scroll" class="wrapper"
    :bounce="{momentum: false}" :scrollbar="true">
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in bannerlist" :key="index">
          <a :href="item.url">
            <img :src="baseimgurl + item.imgUrl">
          </a>
          </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
        <div class="item_box">
          <grid :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
              <grid-item>
                <router-link to="/safe/car" class="router_url">
                  <svg-icon icon-class="car@2x"></svg-icon>
                  <p>车险服务</p>
                </router-link>
              </grid-item>

            <grid-item>
              <router-link :to="{ path: '/product/list', query: { cate: 'health' }}" class="router_url">
                <svg-icon icon-class="health@2x"></svg-icon>
                <p>健康保险</p>
              </router-link>
            </grid-item>

            <grid-item>
              <router-link :to="{ path: '/product/list', query: { cate: 'travel' }}" class="router_url">
                <svg-icon icon-class="treal@2x"></svg-icon>
                <p>旅行保障</p>
               </router-link>
            </grid-item>

            <grid-item>
              <router-link :to="{ path: '/product/list', query: { cate: 'accident' }}" class="router_url">
              <svg-icon icon-class="yiwai@2x"></svg-icon>
              <p>意外险</p>
              </router-link>
            </grid-item>

            <grid-item>
              <router-link :to="{ path: '/product/list', query: { cate: 'life' }}" class="router_url">
              <svg-icon icon-class="renshou@2x"></svg-icon>
              <p>人寿险</p>
              </router-link>
            </grid-item>

            <grid-item>
              <router-link :to="{ path: '/product/list', query: { cate: 'free' }}" class="router_url">
              <svg-icon icon-class="free@2x"></svg-icon>
              <p>免费险</p>
              </router-link>
            </grid-item>
          </grid>
        </div>
        <div class="welfare">
          <h1 class="title">牛小云福利社</h1>
          <scroller lock-y :scrollbar-x=false>
          <div class="box">
            <a :href="item.url" v-for="(item, index) in welfarelist" :key="index">
              <div class="box-item" :style="{background: 'url(' + baseimgurl +  item.lImgUrl+ ')', 'background-repeat': 'no-repeat', 'background-position': 'right bottom'}">
                <p>{{item.title}}</p>
                <span>{{item.subtitle}}</span>
              </div>
            </a>
            <!-- <div class="box-item">
              <p>宝贝守护计划</p>
              <span>赠送10万保障</span>
            </div>
            <div class="box-item">
              <p>宝贝守护计划</p>
              <span>赠送10万保障</span>
            </div> -->
          </div>
        </scroller>
        </div>

        <div class="list_box">
            <div class="list_item" v-if="recommendproducts[0]">
              <h2 class="item_title">为我父母挑保险</h2>
              <p class="des">为您推荐<span class="setcolor">健康险</span></p>
              <a :href="recommendproducts[0].url">
              <div class="list_item_box">
                <img :src="baseimgurl + recommendproducts[0].imgUrl">
                <div class="item_right">
                  <h3>{{recommendproducts[0].title}}</h3>
                  <p class="text">{{recommendproducts[0].subtitle}}</p>
                  <p class="tag">{{recommendproducts[0].company}}</p>
                </div>
              </div>
              </a>
            </div>
          <div class="adv" v-if="advertisinglist[0]">
            <a :href="advertisinglist[0].url">
              <img :src="baseimgurl + advertisinglist[0].imgUrl">
            </a>
          </div>
          <div class="list_item" v-if="recommendproducts[1]">
            <h2 class="item_title">为我孩子挑保险</h2>
            <p class="des">为您推荐<span class="setcolor">健康险</span></p>
            <a :href="recommendproducts[1].url">
              <div class="list_item_box">
                <img :src="baseimgurl + recommendproducts[1].imgUrl">
                <div class="item_right">
                  <h3>{{recommendproducts[1].title}}</h3>
                  <p class="text">{{recommendproducts[1].subtitle}}</p>
                  <p class="tag">{{recommendproducts[1].company}}</p>
                </div>
              </div>
              </a>
          </div>
          <div class="list_item" v-if="recommendproducts[2]">
            <h2 class="item_title">为我自己挑保险</h2>
            <p class="des">为您推荐<span class="setcolor">健康险</span></p>
            <a :href="recommendproducts[2].url">
              <div class="list_item_box">
                <img :src="baseimgurl + recommendproducts[2].imgUrl">
                <div class="item_right">
                  <h3>{{recommendproducts[2].title}}</h3>
                  <p class="text">{{recommendproducts[2].subtitle}}</p>
                  <p class="tag">{{recommendproducts[2].company}}</p>
                </div>
              </div>
              </a>
          </div>
          <div class="adv" v-if="advertisinglist[1]">
            <a :href="advertisinglist[1].url">
              <img :src="baseimgurl + advertisinglist[1].imgUrl">
            </a>
          </div>
        </div>

        <div class="hot_sale">
           <h1 class="title">热销Top5</h1>
          <scroller lock-y :scrollbar-x=false>
          <div class="box">
            <div class="box-item" v-for="(item, index) in hotProducts" :key="index">
             <img :src="baseimgurl + item.imgUrl">
              <p>{{item.title}}</p>
            </div>
          </div>
        </scroller>
        </div>
        <v-logo></v-logo>
      </div>
    </scroll>
  </div>
</template>

<script>
import indexApi from '@/api/index'
import { Grid, GridItem, Scroller } from 'vux'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import logo from '../../components/logo/index'
export default {
  components: {
    swiper,
    swiperSlide,
    Grid,
    GridItem,
    Scroller,
    'v-logo': logo
  },
  data () {
    return {
      baseimgurl: process.env.BASE_API,
      swiperOption: {
        height: 135,
        autoplay: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        // loop: true,
        spaceBetween: 5,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      bannerlist: [{}],
      welfarelist: [],
      hotProducts: [],
      recommendproducts: [{}, {}, {}],
      advertisinglist: [{}, {}]
    }
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
    getdata () {
      this.showloading()
      indexApi.getData().then((res) => {
        if (res.data.code === 0) {
          this.hideloading()
          this.bannerlist = res.data.data.bannerList
          this.welfarelist = res.data.data.welfareList
          this.hotProducts = res.data.data.hotProducts
          this.recommendproducts = res.data.data.recommendProducts
          this.advertisinglist = res.data.data.advertisingList
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  height: e('calc(100vh - 48px)');
}
body,html{
  height: 100%;
}
.swiper-container{
  height: 135px;
  padding-top: 8px;
  background: #fff;
  .swiper-slide{
    width: 92%;
    img{
    display: inline-block;
    width:100%;
    height: 100%;
  }
  }
}
.item_box{
  padding-top: 5px;
  margin: 0 auto 10px;
  background: #fff;
  .weui-grids{
    &::before{
      border: none;
    }
  .weui-grid{
    text-align: center;
    padding: 10px;
    .svg-icon{
    width: 30px;
    height: 30px;
  }
  p{
    color: #333333;
    font-size: 14px;
  }
  &::before,&::after{
    border: none;
  }
  }
  .router_url{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
}
.welfare{
  background: #fff;
  padding: 15px 0;
  .title{
    margin-bottom: 10px;
    padding-left: 15px;
    color: #333;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  .box {
  height: 92px;
  position: relative;
  width: 490px;
}
.box-item {
  width: 150px;
  height: 90px;
  padding: 10px 0 0 10px;
  box-sizing: border-box;
  border:1px solid #eee;
  border-radius: 4px;
  display:inline-block;
  margin-left: 10px;
  float: left;
  box-shadow:0px 0px 1px rgba(0,0,0,0.1);
  &:first-child{
    background: url('item_1.png') no-repeat center center;
    background-size: 100% 100%;
  }
  &:nth-child(2){
    background: url('item_2.png') no-repeat center center;
    background-size: 100% 100%;
  }
  &:last-child{
    background: url('item_2.png') no-repeat center center;
    background-size: 100% 100%;

  }
}
p{
  color:#333;
  font-size: 14px;
  line-height: 20px;
}
span{
  font-size: 12px;
  color:#999;
  line-height: 18px;
}
}
.list_box{
  background: #fff;
  margin-top: 10px;
  padding: 10px;
  .list_item{
    padding: 10px 0px 20px;
    .item_title{
      font-size: 16px;
      color:#333;
      font-weight: 400;
      line-height: 22px;
    }
    .des{
      font-size: 14px;
    }
    .list_item_box{
      height: 135px;
      overflow: hidden;
      margin-top: 10px;
      border: 1px solid #e6e9f0;
      border-radius: 4px;
      img{
        display: inline-block;
        width: 115px;
        height: 135px;
        float: left;
        margin-right: 10px;
      }
      .item_right{
        height: 100%;
        position: relative;
        overflow: hidden;
        h3{
          font-size: 16px;
          color:#333;
          font-weight: 400;
          line-height: 40px;
        }
        .text{
          font-size: 12px;
          color:#999;
        }
        .tag{
          position: absolute;
          left: 0;
          bottom: 20px;
          width: 60px;
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          text-align: center;
          background: #ffefe2;
          color: #ff4400;
        }
      }
    }
  }
  .adv{
    margin: 10px auto;
    img{
      display: inlink-block;
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
}
.hot_sale{
  background: #fff;
  padding: 15px 0;
  margin-top: 10px;
  .title{
    margin-bottom: 10px;
    padding-left: 15px;
    color: #333;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  .box {
  position: relative;
  width: 810px;
}
.box-item {
  width: 150px;
  box-sizing: border-box;
  display:inline-block;
  margin-left: 10px;
  float: left;
  img{
    display:inline-block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
  p{
    color: #333;
    font-size: 14px;
    line-height: 16px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
}
.setcolor{
  color:#ff6600;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 0;
}
</style>
