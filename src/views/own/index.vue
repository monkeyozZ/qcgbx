<template>
<div>
  <div class="header_nav">
    <div class="avt_name">
      <div  class="avt">
        <router-link to="/data">
           <img :src="user_info.headimgurl?user_info.headimgurl:baseavt" alt="头像">
        </router-link>
      </div>
      <p class="name">{{user_info.nickname?user_info.nickname:basename}}</p>
    </div>
    <div class="nav">
      <flexbox :gutter="0" justify="0">
      <flexbox-item :span="4">
        <router-link :to="{ path: '/safe/car' }">
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
          <router-link :to="{path: '/gift'}">
            <svg-icon icon-class="gift@2x"></svg-icon>
            <p>福利社</p>
          </router-link>
      </flexbox-item>
    </flexbox>
    </div>
  </div>
  <div class="item_box">
    <group>
        <cell-box :is-link="true" :link="{path: '/about'}">
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
  <div v-transfer-dom>
    <alert v-model="show1" mask-transition="vux-dialog" :title="'商务合作'">{{business}}</alert>
  </div>
  <div v-transfer-dom>
    <alert v-model="show2" mask-transition="vux-dialog" :title="'法务维权'">{{legal}}</alert>
  </div>
  <div v-transfer-dom>
    <alert v-model="show3" mask-transition="vux-dialog" :title="'联系我们'">{{contact}}</alert>
  </div>
</div>
</template>

<script>
import {Flexbox, FlexboxItem, CellBox, Group, Alert, TransferDom} from 'vux'
import {mapGetters} from 'vuex'
import personalApi from '@/api/personalCenter'
export default {
  directives: {
    TransferDom
  },
  components: {
    Flexbox,
    FlexboxItem,
    CellBox,
    Group,
    Alert
  },
  data () {
    return {
      baseavt: require('../../../static/images/avt.png'),
      basename: '未登录用户',
      show1: false,
      show2: false,
      show3: false,
      contact: '',
      legal: '',
      business: ''
    }
  },
  computed: {
    ...mapGetters({
      user_info: 'user_info'
    })
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
    },
    getlist () {
      personalApi.getdata().then((res) => {
        if (res.data.code === 0) {
          this.contact = res.data.data.contactUs
          this.legal = res.data.data.legal
          this.business = res.data.data.business
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
.header_nav{
  position: relative;
  width: 100%;
  height: 245px;
  background: url('../../../static/images/own_bg.png') no-repeat center center;
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
    line-height: 24px;
  }
}
</style>
