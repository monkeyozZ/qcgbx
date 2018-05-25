<template>
  <div>
    <h1 class="title">完善个人资料后可享受更多保险服务</h1>
    <div class="data_box">
      <group>
        <cell-box class="select_box">
          <flexbox :gutter="0" justify="center">
            <flexbox-item :span="6">
               <span>头像</span>
            </flexbox-item>
            <flexbox-item :span="6">
                <label for="file" class="avt_box">
                  <img :src="blobURL?blobURL:avtbaseimg">
                </label>
                <input type="file" id="file" accept="image/*" @change="handleFileChange " ref="img" multiple="multiple">
            </flexbox-item>
          </flexbox>
        </cell-box>
        <x-input title="姓名" placeholder="请输入您的姓名" v-model="Formdata.username"></x-input>
        <x-input title="身份证" placeholder="请输入真实身份证号" v-model="Formdata.idcard" type="tel" :max="18"></x-input>
        <x-input title="手机号" placeholder="请输入您的手机号" v-model="Formdata.phone" type="tel" :max="11"></x-input>
        <cell-box class="select_box">
          <flexbox :gutter="0" justify="center">
            <flexbox-item :span="4">
               <span class="code_title">手机验证码</span>
            </flexbox-item>
            <flexbox-item :span="5">
              <input type="tel" placeholder="请输入手机验证码" class="code" v-model="Formdata.code">
            </flexbox-item>
            <flexbox-item :span="3">
              <button class="get_code" @click="getcode" :disabled="isdisabled">{{btn_text}}</button>
            </flexbox-item>
          </flexbox>
        </cell-box>
      </group>
      <button class="btn" type="button" @click="submitForm">保存</button>
    </div>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem, Group, XInput, CellBox} from 'vux'
import baseimg from '@/assets/avt.png'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    XInput,
    CellBox
  },
  data () {
    return {
      Formdata: {
        imgfile: '',
        username: '',
        idcard: '',
        phone: '',
        code: ''
      },
      issubmit: false,
      blobURL: '',
      avtbaseimg: baseimg,
      btn_text: '获取验证码',
      isdisabled: false
    }
  },
  methods: {
    myalert (text) {
      this.$vux.toast.text(text, 'top')
    },
    handleFileChange (e) {
      this.imgfile = e.target.files[0]
      let URL = window.URL || window.webkitURL
      if (URL) {
        URL.revokeObjectURL(this.blobURL)
        let file = e.target.files[0]
        this.blobURL = URL.createObjectURL(file)
        console.log(file)
      }
    },
    checkIdcard (value) {
      if (value.length === 0) {
        return true
      } else {
        var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
        var status = regIdCard.test(value)
        if (status) {
          if (value.length === 18) {
            var idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 将前17位加权因子保存在数组里
            var idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2] // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
            var idCardWiSum = 0 // 用来保存前17位各自乖以加权因子后的总和
            for (var i = 0; i < 17; i++) {
              idCardWiSum += value.substring(i, i + 1) * idCardWi[i]
            }

            var idCardMod = idCardWiSum % 11 // 计算出校验码所在数组的位置
            var idCardLast = value.substring(17) // 得到最后一位身份证号码

            // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if (idCardMod === 2) {
              if (idCardLast === 'X' || idCardLast === 'x') {
                // alert("恭喜通过验证啦！");
                return true
              } else {
                // alert("身份证号码错误！");
                return false
              }
            } else {
              // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
              if (idCardLast === idCardY[idCardMod].toString()) {
                // alert("恭喜通过验证啦！");
                return true
              } else {
                // alert("身份证号码错误！");
                return false
              }
            }
          }
        } else {
          // alert("身份证格式不正确!")
          return false
        }
      }
    },
    submitForm () {
      let reg = /^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/
      if (this.Formdata.username === '') {
        this.myalert('请填写姓名')
        return false
      } else {
        let ischar = /^[\u4e00-\u9fa5]{2,6}$/
        let r = ischar.test(this.Formdata.username)
        if (!r) {
          this.myalert('请输入正确姓名')
          return false
        }
      }
      if (this.Formdata.idcard === '') {
        this.myalert('请输入身份证号码')
        return false
      } else {
        let res = this.checkIdcard(this.Formdata.idcard)
        if (!res) {
          this.myalert('身份证号码格式错误')
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
        } else {
          this.checkcode = true
        }
      }
    },
    getcode () {
      let reg = /^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/
      if (this.Formdata.phone === '') {
        this.myalert('请填写手机号')
        return false
      } else {
        let res = reg.test(this.Formdata.phone)
        if (!res) {
          this.myalert('手机号格式有误')
          return false
        } else {
          let n = 30
          let t = setInterval(() => {
            n--
            this.btn_text = n + 's'
            this.isdisabled = true
            if (n === 0) {
              this.btn_text = '获取验证码'
              clearInterval(t)
              n = 30
            }
          }, 1000)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.title{
  padding: 15px 10px 0;
  font-size: 14px;
  color:#586881;
  font-weight: 400;
}
.data_box{
  #file{
    display: none;
  }
  .avt_box{
    display: inline-block;
    float: right;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    img{
      display: inline-block;
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
  .code_title{
    font-size: 16px;
  }
  .code{
    display: inline-block;
    width: 90%;
    line-height: 19px;
    border: none;
    outline: none;
    &::-webkit-input-placeholder{
      color:#999;
    }
  }
  .get_code{
    float: right;
    display: block;
    width: 70px;
    height: 22px;
    outline: none;
    border-radius: 15px;
    background: transparent;
    border:1px solid #1975cf;
    color:#1975cf;
    font-size: 12px;
  }
    .btn{
    display: block;
    width: 90%;
    font-size: 18px;
    color:#fff;
    margin: 70px auto 0;
    line-height: 46px;
    border: none;
    border-radius: 50px;
    outline: none;
    background: linear-gradient(left, rgb(240,152,25), rgb(253, 95, 81))
  }
}
</style>
