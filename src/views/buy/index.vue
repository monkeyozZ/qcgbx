<template>
  <div>
    <div class="banner">
      <img src="@/assets/carsafe_buy.png">
    </div>
    <div class="form_box">
      <h1 class="title">填写您的车辆信息</h1>
      <group>
        <x-address title="投保地址" :list="addressData" placeholder="请选择车辆行驶城市" v-model="Formdata.citycode"></x-address>
        <flexbox :gutter="5" class="weui-cell">
          <flexbox-item :span="7.5">
             <x-input title="车牌号" placeholder="请输入您的车牌号" v-model="Formdata.plate_number" :disabled="Formdata.has_plate_number"></x-input>
          </flexbox-item>
          <flexbox-item :span="4.5">
             <check-icon :value.sync="Formdata.has_plate_number">新车未上牌</check-icon>
          </flexbox-item>
        </flexbox>
         <x-input title="手机号" placeholder="请输入您的手机号" type="tel" :max="11" v-model="Formdata.phone"></x-input>
         <x-input title="投保人姓名" placeholder="请输入您的姓名" v-model="Formdata.username"></x-input>
      </group>
      <div class="xieyi_box">
        <check-icon :value.sync="Formdata.xieyi">我已阅读并同意</check-icon>
        <a href="">《用户协议》</a>
      </div>
      <button class="btn" type="button" @click="submitForm">立即报价</button>
    </div>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem, CheckIcon, Group, XInput, XAddress, ChinaAddressV4Data} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    CheckIcon,
    Group,
    XInput,
    XAddress,
    ChinaAddressV4Data
  },
  computed: {
    nohas_plate_number: function () {
      return this.Formdata.has_plate_number
    }
  },
  data () {
    return {
      addressData: ChinaAddressV4Data,
      Formdata: {
        citycode: [],
        plate_number: '',
        has_plate_number: false,
        phone: '',
        username: '',
        xieyi: false
      },
      issubmit: false
    }
  },
  methods: {
    myalert (text) {
      this.$vux.toast.text(text, 'top')
    },
    submitForm () {
      let reg = /^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/
      if (this.Formdata.xieyi === true) {
        if (this.Formdata.citycode.length === 0) {
          this.myalert('请选择城市')
          return false
        }
        if (this.Formdata.plate_number === '') {
          if (this.Formdata.has_plate_number === false) {
            this.myalert('请填写车牌号')
            return false
          }
        }
        if (this.Formdata.phone === '') {
          this.myalert('请填写手机号')
          return false
        } else {
          let res = reg.test(this.Formdata.phone)
          if (!res) {
            this.myalert('手机号格式有误')
            return false
          }
        }
        if (this.Formdata.username === '') {
          this.myalert('请填写姓名')
          return false
        } else {
          let ischar = /^[\u4e00-\u9fa5]{2,6}$/
          let r = ischar.test(this.Formdata.username)
          if (!r) {
            this.myalert('请输入正确姓名')
            return false
          } else {
            this.issubmit = true
          }
        }
        if (this.issubmit) {
          console.log('success')
        }
      } else {
        this.myalert('请阅读并同意用户协议')
      }
    }
  },
  watch: {
    'nohas_plate_number': function () {
      if (this.Formdata.has_plate_number === true) {
        this.Formdata.plate_number = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.banner{
  width: 100%;
  background: #fff;
  font-size: 0;
  img{
    display: inline-block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
}
.form_box{
  width: 100%;
  height: e('calc(100vh - 118px)');
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  .title{
    font-size: 18px;
    color:#666;
    font-weight: 400;
    line-height: 30px;
  }
  .vux-flexbox .weui-cell{
    padding: 0;
  }
  .vux-flexbox{
    box-sizing: border-box;
    .vux-flexbox-item{
    &:last-child{
      text-align: center
    }
  }
  }
  .xieyi_box{
    padding: 10px;
    font-size: 14px;
    a{
      display: inline-block;
      color:#ff4400;
      vertical-align: middle;
    }
  }
  .btn{
    display: block;
    width: 90%;
    font-size: 18px;
    color:#fff;
    margin: 50px auto 0;
    line-height: 46px;
    border: none;
    border-radius: 50px;
    outline: none;
    background: linear-gradient(left, rgb(240,152,25), rgb(253, 95, 81))
  }
}
</style>
