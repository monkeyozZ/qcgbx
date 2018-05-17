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
</style>
