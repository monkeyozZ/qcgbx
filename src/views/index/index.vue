<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img src="../../assets/banner@2x.png"></swiper-slide>
      <swiper-slide><img src="../../assets/banner@2x.png"></swiper-slide>
      <swiper-slide><img src="../../assets/banner@2x.png"></swiper-slide>
      <swiper-slide><img src="../../assets/banner@2x.png"></swiper-slide>
      <swiper-slide><img src="../../assets/banner@2x.png"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="item_box">
    <grid :cols="3" :show-lr-borders="false">
      <grid-item v-for="i in 6" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide,
    Grid,
    GridItem
  },
  data () {
    return {
      swiperOption: {
        height: 135,
        autoplay: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        spaceBetween: 5,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-container{
  height: 135px;
  margin-top: 8px;
  .swiper-slide{
    width: 92%;
    img{
    display: inline-block;
    width:100%;
    height: 100%;
  }
  }
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 0;
}
</style>
