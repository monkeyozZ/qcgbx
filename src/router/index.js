import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'
import Auth from '../utils/auth'
import store from '../store'
import authApi from '@/api/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/bx/',
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: layout,
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/index/index'),
          meta: {title: '牛小云'}
        }
      ]
    },
    {
      path: '/safe',
      component: layout,
      children: [
        {
          path: 'car',
          name: 'car',
          component: () => import('@/views/car/index'),
          meta: { title: '车险服务' }
        },
        {
          path: 'buy',
          name: 'buy',
          component: () => import('@/views/buy/index'),
          meta: { title: '买车险' }
        },
        {
          path: 'compensate',
          name: 'compensate',
          component: () => import('@/views/compensate/index'),
          meta: { title: '办理赔' }
        }
      ]
    },
    {
      path: '/product',
      component: layout,
      children: [
        {
          path: 'list',
          name: 'prolist',
          component: () => import('@/views/product/index'),
          meta: { title: '产品' }
        }
      ]
    },
    {
      path: '/customization',
      name: 'customization',
      component: () => import('@/views/customization/index'),
      meta: { title: '保险定制' }
    },
    {
      path: '/own',
      component: layout,
      children: [
        {
          path: 'center',
          name: 'owncenter',
          component: () => import('@/views/own/index'),
          meta: { title: '我的' }
        }
      ]
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('@/views/data/index'),
      meta: { title: '个人资料' }
    },
    {
      path: '/gift',
      name: 'gift',
      component: () => import('@/views/gift/index'),
      meta: { title: '福利社' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/index'),
      meta: { title: '关于我们' }
    }
  ]
})
router.beforeEach((to, from, next) => {
  let status = Auth.isLogin() ? Auth.isLogin() : 'false'

  if (to.query.code && JSON.parse(status) === false) {
    Auth.setLoginStatus(true)
    store.dispatch('setcode', to.query.code)
    next()
  }

  if (JSON.parse(status)) {
    store.dispatch('setLoginstatus', true)
    authApi.getuserinfo().then((res) => {
      if (res.data.code === 0) {
        store.dispatch('inituserinfo', res.data.data)
      } else {
        Auth.setLoginStatus(false)
      }
    }).catch((err) => {
      console.log(err)
    })
    next()
  }

  status = Auth.isLogin() ? Auth.isLogin() : 'false'

  if (JSON.parse(status) === false) {
    let fullurl = to.fullPath
    let gourl = encodeURI('http://niuxiaoyun.qcgjr.com/bx' + fullurl)
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5fefcf409f90955a&redirect_uri=' + gourl + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    return false
  }
  next()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
