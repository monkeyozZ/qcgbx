// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './icons' // icon
import 'swiper/dist/css/swiper.css'
import scroll from '@/components/scroll/index'
import { Checkbox } from 'element-ui'
import { ToastPlugin } from 'vux'
Vue.component('scroll', scroll)
Vue.use(ToastPlugin, { position: 'top', width: '80%' })
Vue.use(Checkbox)

Vue.filter('sub', function (str) {
  if (str.length > 30) {
    return str.substring(0, 30) + '...'
  } else {
    return str
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
