<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
body,html{
  height: 100%;
  background: #f6f7fc;
}
@import '~vux/src/styles/reset.less';
.swiper-pagination-bullet{
  width:6px;
  height: 6px;
  background: rgba(255,255,255,0.6);
  opacity: 1;
}
.swiper-pagination-bullet-active{
  width: 10px;
  height: 6px;
  border-radius: 5px;
  background: rgba(255,255,255,1);
  opacity: 1;
}
.form_box{
  i{
      font-size: 18px;
  }
  i.weui-icon-success{
      color:#f48729;
      &::before{
        color:#f48729
      }
    }
  .vux-flexbox-item{
    .vux-check-icon{
    font-size: 14px;
    span{
      line-height: 14px;
    }
    i{
      font-size: 14px;
    }
    i.weui-icon-success{
      color:#f48729;
      &::before{
        color:#f48729
      }
    }
  }
  }
}
.customization_form{
  i{
      font-size: 18px;
  }
  i.weui-icon-success{
      color:#f48729;
      &::before{
        color:#f48729
      }
    }
}
.weui-input{
    text-align: right!important;
    font-size: 14px!important;
  }
.weui-input::-webkit-input-placeholder{
  font-size: 14px;
  color:#999;
}
.vux-popup-picker-select-box{
  font-size: 14px;
}
.weui-label{
  font-size: 16px;
}
.vux-swiper{
  height: e('calc(100vh - 194px)')!important;
  background: #fff;
}
.customization_form{
  .weui-cells{
  margin-top: 0;
}
}
.vux-cell-value{
    color:#000!important;
  }
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ff4400;
    border-color: #ff4400;
}
.el-checkbox__input.is-focus .el-checkbox__inner{
  border-color:#ff4400;
}
.el-checkbox__input.is-checked+.el-checkbox__label{
  color:#ff4400;
}
.weui-dialog__btn_primary{
  color:#ff4400!important;
}
.data_box{
  .weui-cells{
    margin-top: 0.75em;
  }
}
@media (max-width: 320px) {
.weui-input::-webkit-input-placeholder,.vux-popup-picker-select-box{
  font-size: 12px;
  line-height: 24px;
}
.weui-toast__content{
    font-size: 14px!important;
  }
.weui-toast.weui-toast_text{
      width: 55%!important;
  }
}
</style>
