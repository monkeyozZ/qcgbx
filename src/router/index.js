import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: layout,
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/index/index')
        }
      ]
    }
  ]
})
