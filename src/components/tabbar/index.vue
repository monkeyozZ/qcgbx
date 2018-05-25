<template>
  <div class="tabbar_box">
    <tabbar>
      <tabbar-item :selected="$route.path == '/index'" link="/index">
        <svg-icon slot="icon" icon-class="index@2x"></svg-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path == '/product/list'" link="/product/list">
        <svg-icon slot="icon" icon-class="product@2x"></svg-icon>
        <span slot="label">产品</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path == '/own/list'" link="/own/list">
        <svg-icon slot="icon" icon-class="own@2x"></svg-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less" scoped>
.weui-tabbar{
  position: fixed;
  background: #fff;
}
.tabbar_box{
  .svg-icon{
    width: 80%;
    height: 80%;
    margin-top: 20%;
  }
}
</style>
