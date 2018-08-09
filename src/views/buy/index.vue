<template>
  <div>
    <div class="banner">
      <img src="../../../static/images/carsafe_buy.png">
    </div>
    <div class="form_box">
      <h1 class="title">填写您的车辆信息</h1>
      <group>
        <x-address title="投保地址" ref="address" :list="addressData" placeholder="请选择车辆行驶城市" v-model="citycode"></x-address>
        <flexbox :gutter="5" class="weui-cell">
          <flexbox-item :span="7.5">
             <x-input title="车牌号" placeholder="请输入您的车牌号" v-model="Formdata.licensePlate" :disabled="Formdata.has_plate_number"></x-input>
          </flexbox-item>
          <flexbox-item :span="4.5">
             <check-icon :value.sync="has_plate_number">新车未上牌</check-icon>
          </flexbox-item>
        </flexbox>
         <x-input title="手机号" placeholder="请输入您的手机号" type="tel" :max="11" v-model="Formdata.mobile"></x-input>
         <x-input title="投保人姓名" placeholder="请输入您的姓名" v-model="Formdata.name"></x-input>
      </group>
      <div class="xieyi_box">
        <check-icon :value.sync="xieyi">我已阅读并同意</check-icon>
        <a href="">《用户协议》</a>
      </div>
      <button class="btn" type="button" @click="submitForm">立即报价</button>
    </div>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem, CheckIcon, Group, XInput, XAddress, ChinaAddressV4Data} from 'vux'
import buyApi from '@/api/buy'
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
  data () {
    return {
      addressData: ChinaAddressV4Data,
      citycode: [],
      Formdata: {
        address: '',
        licensePlate: '',
        mobile: '',
        name: ''
      },
      has_plate_number: false,
      xieyi: false,
      issubmit: false
    }
  },
  methods: {
    onShadowChange (ids, names) {
      this.Formdata.address = names
    },
    myalert (text) {
      this.$vux.toast.text(text, 'top')
    },
    save () {
      buyApi.savedata(this.Formdata).then((res) => {
        if (res.data.code === 0) {
          this.myalert('提交成功')
          this.Formdata.address = ''
          this.citycode = []
          this.Formdata.licensePlate = ''
          this.has_plate_number = false
          this.Formdata.mobile = ''
          this.Formdata.name = ''
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    submitForm () {
      let reg = /^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/
      if (this.xieyi === true) {
        if (this.Formdata.address === '') {
          this.myalert('请选择城市')
          return false
        }
        if (this.Formdata.licensePlate === '') {
          if (this.Formdata.has_plate_number === false) {
            this.myalert('请填写车牌号')
            return false
          }
        }
        if (this.Formdata.mobile === '') {
          this.myalert('请填写手机号')
          return false
        } else {
          let res = reg.test(this.Formdata.mobile)
          if (!res) {
            this.myalert('手机号格式有误')
            return false
          }
        }
        if (this.Formdata.name === '') {
          this.myalert('请填写姓名')
          return false
        } else {
          let ischar = /^[\u4e00-\u9fa5]{2,6}$/
          let r = ischar.test(this.Formdata.name)
          if (!r) {
            this.myalert('请输入正确姓名')
            return false
          } else {
            this.issubmit = true
          }
        }
        if (this.issubmit) {
          this.save()
        }
      } else {
        this.myalert('请阅读并同意用户协议')
      }
    }
  },
  watch: {
    has_plate_number: function () {
      if (this.has_plate_number === true) {
        this.Formdata.licensePlate = '*'
      } else {
        this.Formdata.licensePlate = ''
      }
    },
    citycode: {
      handler () {
        this.Formdata.address = this.$refs.address.nameValue
      },
      deep: true
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
    background: -webkit-linear-gradient(left, rgb(240,152,25), rgb(253, 95, 81))
  }
}
</style>
