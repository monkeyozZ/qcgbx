<template>
  <div>
    <div class="item_box">
      <ul>
        <li>
          <router-link to="/">
            <img src="../../../static/images/gift_item_1.png" >
          </router-link>
          <p class="des">免费赠送您出行保障，点击立即领取，新人专享</p>
        </li>
        <li>
          <router-link to="/">
          <img src="../../../static/images/gift_item_2.png" >
          </router-link >
          <p class="des">免费赠送您出行保障，点击立即领取，新人专享</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

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
