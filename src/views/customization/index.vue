<template>
  <div>
    <div class="banner">
      <img src="../../../static/images/customization.png">
    </div>

    <div class="customization_form">
      <group>
        <x-input title="您的姓名" placeholder="请输入您的姓名" v-model="Formdata.realName"></x-input>
        <x-input title="您的身份证号" placeholder="身份证号便于有效投保" v-model="Formdata.idNo" type="tel" :max="18"></x-input>
        <x-address ref="address" title="您长居地点" :list="addressData" placeholder="请选择地点" v-model=" citycode"></x-address>
        <cell-box is-link class="select_box">
          <flexbox :gutter="0" justify="center">
            <flexbox-item :span="6">
               <span>保障需求（可多选）</span>
            </flexbox-item>
            <flexbox-item :span="6">
                <input type="text" readonly placeholder="点击选择" @click="show">
            </flexbox-item>
          </flexbox>
        </cell-box>
        <x-input title="您的手机号" placeholder="请输入您的手机号" type="tel" :max="11" v-model="Formdata.mobile"></x-input>
      </group>
      <div class="xieyi_box">
        <check-icon :value.sync="xieyi">我已阅读并同意</check-icon>
        <a href="">《用户协议》</a>
      </div>
      <button class="btn" type="button" @click="submitForm">提交</button>
    </div>
    <div class="confirm">
        <confirm v-model="isshow"
        @on-cancel="resetItem">
          <h2 class="title">保障需求</h2>
          <p class="des">选择你的意向需求（可多选）</p>
          <flexbox :gutter="0" justify="center">
            <flexbox-item :span="6"><el-checkbox true-label="重疾医疗" false-label="" v-model="demand.yiliao">重疾医疗</el-checkbox></flexbox-item>
            <flexbox-item :span="6"><el-checkbox true-label="意外伤害" false-label="" v-model="demand.yiwai">意外伤害</el-checkbox></flexbox-item>
          </flexbox>
          <flexbox :gutter="0" justify="center">
            <flexbox-item :span="6"><el-checkbox true-label="旅游出行" false-label="" v-model="demand.lvxing">旅游出行</el-checkbox></flexbox-item>
            <flexbox-item :span="6"><el-checkbox true-label="人身寿险" false-label="" v-model="demand.renshou">人身寿险</el-checkbox></flexbox-item>
          </flexbox>
          <flexbox :gutter="0" justify="center">
            <flexbox-item :span="6"><el-checkbox true-label="理财分红" false-label="" v-model="demand.licai">理财分红</el-checkbox></flexbox-item>
            <flexbox-item :span="6"><el-checkbox true-label="少儿" false-label="" v-model="demand.shaoer">少儿</el-checkbox></flexbox-item>
          </flexbox>
        </confirm>
    </div>
  </div>
</template>

<script>
import customApi from '@/api/custom'
import {Flexbox, FlexboxItem, CheckIcon, Group, XInput, XAddress, ChinaAddressV4Data, CellBox, Confirm} from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    CheckIcon,
    Group,
    XInput,
    XAddress,
    ChinaAddressV4Data,
    CellBox,
    Confirm
  },
  data () {
    return {
      addressData: ChinaAddressV4Data,
      isshow: false,
      demand: {
        yiliao: '',
        yiwai: '',
        lvxing: '',
        renshou: '',
        licai: '',
        shaoer: ''
      },
      citycode: [],
      Formdata: {
        realName: '',
        idNo: '',
        address: '',
        demand: '',
        mobile: ''
      },
      xieyi: false,
      arr: [],
      issubmit: false
    }
  },
  watch: {
    demand: {
      handler: function () {
        this.arr = []
        this.Formdata.demand = ''
        for (const key in this.demand) {
          if (this.demand[key] !== '') {
            this.Formdata.demand += this.demand[key] + ','
          }
        }
      },
      deep: true
    },
    citycode: {
      handler () {
        this.Formdata.address = this.$refs.address.nameValue
      },
      deep: true
    }
  },
  methods: {
    save () {
      customApi.savedata(this.Formdata).then((res) => {
        if (res.data.code === 0) {
          this.myalert('提交成功')
          this.Formdata.address = ''
          this.citycode = []
          this.Formdata.idNo = ''
          this.Formdata.demand = ''
          for (const key in this.demand) {
            this.demand[key] = ''
          }
          this.Formdata.mobile = ''
          this.Formdata.realName = ''
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    show () {
      this.isshow = true
    },
    resetItem () {
      for (const key in this.demand) {
        this.demand[key] = ''
      }
    },
    myalert (text) {
      this.$vux.toast.text(text, 'top')
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
    hasselected (val) {
      for (const key in val) {
        if (val[key] !== '') {
          this.arr.push(true)
        } else {
          this.arr.push(false)
        }
      }
      const r = this.arr.some(function (item) {
        return (item === true)
      })
      return r
    },
    submitForm () {
      let reg = /^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/
      if (this.xieyi === true) {
        if (this.Formdata.realName === '') {
          this.myalert('请填写姓名')
          return false
        } else {
          let ischar = /^[\u4e00-\u9fa5]{2,6}$/
          let r = ischar.test(this.Formdata.realName)
          if (!r) {
            this.myalert('请输入正确姓名')
            return false
          }
        }
        if (this.Formdata.idNo === '') {
          this.myalert('请输入身份证号码')
          return false
        } else {
          let res = this.checkIdcard(this.Formdata.idNo)
          if (!res) {
            this.myalert('身份证号码格式错误')
            return false
          }
        }
        if (this.Formdata.address === '') {
          this.myalert('请选择城市')
          return false
        }
        if (!this.hasselected(this.demand)) {
          this.myalert('至少选择一项保障需求')
          return false
        }
        if (this.Formdata.mobile === '') {
          this.myalert('请填写手机号')
          return false
        } else {
          let res = reg.test(this.Formdata.mobile)
          if (!res) {
            this.myalert('手机号格式有误')
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
  }

}
</script>

<style lang="less" scoped>
.banner{
  width: 100%;
  height: 113px;
  font-size: 0;
  img{
    display: inline-block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
}
.customization_form{
  height: e('calc(100vh - 113px)');
  background: #fff;
  .vux-cell-value{
    color:#000;
  }
  .select_box{
    span{
      font-size: 16px;
    }
    input[type='text']{
      display: inline-block;
      width: 90%;
      height: 18px;
      border: none;
      outline: none;
      &::-webkit-input-placeholder{
        text-align: right;
        font-size: 14px;
        color:#999;
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
  .select_box.vux-tap-active:active,.select_box.weui-cell_access{
    background-color: #fff;
  }
}
.confirm{
  .title{
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color:#333;
  }
  .des{
    text-align: left;
    font-size: 12px;
    line-height: 22px;
    font-weight: 400;
    color:#666;
  }
  .vux-flexbox{
    margin-top: 15px;
  }
}
</style>
