<template>
  <div>
    <div class="about" v-html="aboutUs">
    </div>
  </div>
</template>

<script>
import personalApi from '@/api/personalCenter'
export default {
  data () {
    return {
      aboutUs: ''
    }
  },
  methods: {
    getlist () {
      personalApi.getdata().then((res) => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.aboutUs = res.data.data.aboutUs
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
  .about{
    height: e('calc(100vh - 40px)');
    background: #fff;
    padding: 20px 10px;
    p{
      font-size: 14px;
      color:#333;
      line-height: 24px;
    }
  }
</style>
