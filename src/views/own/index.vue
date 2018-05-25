<template>
<div>
  <div class="header_nav">
    <div class="avt_name">
      <div  class="avt">
        <router-link to="/data">
           <img src="@/assets/avt.png" alt="头像">
        </router-link>
      </div>
      <p class="name">汪雷书记</p>
    </div>
    <div class="nav">
      <flexbox :gutter="0" justify="0">
      <flexbox-item :span="4">
        <router-link to="/safe/car">
          <svg-icon icon-class="own_car@2x"></svg-icon>
          <p>汽车保险</p>
        </router-link>
      </flexbox-item>
      <flexbox-item :span="4">
          <router-link :to="{ path: '/product/list', query: { cate: 'travel' }}">
            <svg-icon icon-class="header@2x"></svg-icon>
            <p>人身保险</p>
          </router-link>
      </flexbox-item>
      <flexbox-item :span="4">
          <router-link to="/gift">
            <svg-icon icon-class="gift@2x"></svg-icon>
            <p>福利社</p>
          </router-link>
      </flexbox-item>
    </flexbox>
    </div>
  </div>
  <div class="item_box">
    <group>
        <cell-box :is-link="true" link="/about">
          <svg-icon icon-class="about@2x"></svg-icon>
          <span>关于我们</span>
        </cell-box>
        <cell-box :is-link="true" @click.native="showcontact">
          <svg-icon icon-class="phone@2x"></svg-icon>
          <span>联系我们</span>
        </cell-box>
        <cell-box :is-link="true" @click.native="showhezuo">
          <svg-icon icon-class="hezuo@2x"></svg-icon>
          <span>商务合作</span>
        </cell-box>
        <cell-box :is-link="true" @click.native="showfawu">
          <svg-icon icon-class="fawu@2x"></svg-icon>
          <span>法务维权</span>
        </cell-box>
    </group>
  </div>
  <alert v-model="show1" :title="'商务合作'">{{hezuo}}</alert>
  <alert v-model="show2" :title="'法务维权'">{{hezuo}}</alert>
  <alert v-model="show3" :title="'联系我们'">{{hezuo}}</alert>
</div>
</template>

<script>
import {Flexbox, FlexboxItem, CellBox, Group, Alert} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    CellBox,
    Group,
    Alert
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      hezuo: '邮箱：law@qincengu.com'
    }
  },
  methods: {
    showcontact () {
      this.show3 = true
    },
    showhezuo () {
      this.show1 = true
    },
    showfawu () {
      this.show2 = true
    }
  }
}
</script>

<style lang="less" scoped>
.header_nav{
  position: relative;
  width: 100%;
  height: 245px;
  background: url('../../assets/own_bg.png') no-repeat center center;
  background-size: 100% 100%;
  .avt_name{
    overflow: hidden;
    width: 100%;
    .avt{
      margin: 20px auto 10px;
      width: 68px;
      height: 68px;
      border-radius: 50%;
      overflow: hidden;
      img{
        display: inline-block;
        max-width: 100%;
        width: 100%;
        height: auto;
      }
    }
    .name{
      text-align: center;
      font-size: 18px;
      color:#fff;
    }
  }
  .nav{
    position: absolute;
    left: 0;
    bottom:0;
    width: 100%;
    .vux-flexbox-item{
      padding-bottom: 17px;
      text-align: center;
      .svg-icon{
        width: 28px;
        height: 28px;
      }
      p{
        font-size: 14px;
        color:#333;
      }
    }
  }
}
.item_box{
  .svg-icon{
    margin-right: 10px;
  }
  span{
    font-size: 15px;
    color:#333;
  }
}
</style>
