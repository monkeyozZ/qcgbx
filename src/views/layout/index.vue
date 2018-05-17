<template>
  <div>
    <router-view></router-view>
    <v-tabbar></v-tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
  components: {
    'v-tabbar': tabbar
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>

</style>
