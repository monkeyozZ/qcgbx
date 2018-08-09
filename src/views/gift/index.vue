<template>
  <div>
    <div class="item_box">
      <ul>
        <li v-for="(item, index) in giftarr" :key="index">
          <a :href="item.url">
            <img :src="baseimgurl + item.bImgUrl" >
          </a>
          <p class="des">{{item.subtitle}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import giftApi from '@/api/gift'
export default {
  data () {
    return {
      baseimgurl: process.env.BASE_API,
      giftarr: []
    }
  },
  methods: {
    getlist () {
      giftApi.getdata().then((res) => {
        if (res.data.code === 0) {
          this.giftarr = res.data.data
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
  .item_box{
    ul{
      li{
        margin-top: 10px;
        font-size: 0;
        img{
          display: inline-block;
          max-width: 100%;
          width: 100%;
          height: auto;
        }
        .des{
          padding: 10px;
          box-sizing: border-box;
          font-size: 14px;
          color:#333;
          background: #fff;
          line-height: 18px;
        }
        &:first-child{
          margin-top: 0;
        }
      }
    }
  }
</style>
