import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
          meta: {title: '牛小云保险'}
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
        }
      ]
    },
    {
      path: '/safe',
      component: layout,
      children: [
        {
          path: 'buy',
          name: 'buy',
          component: () => import('@/views/buy/index'),
          meta: { title: '买车险' }
        }
      ]
    },
    {
      path: '/safe',
      component: layout,
      children: [
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
          path: 'list',
          name: 'ownlist',
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
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
