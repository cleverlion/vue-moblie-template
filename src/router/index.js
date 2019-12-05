/* eslint-disable no-use-before-define */
import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../pages/layout/index'
Vue.use(Router)

export const constantRouterMap = [
  { path: '/',
    component: Layout,
    redirect: '/dish-list',
    name: '首页',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: (resolve) => require(['@/pages/dashboard/dashboard'], resolve)
      },
      {
        path: 'home',
        name: 'home',
        component: (resolve) => require(['@/pages/home/home'], resolve)
      },
      {
        path: 'dish-list',
        name: 'dishList',
        component: (resolve) => require(['@/pages/dishList/index'], resolve)
      }
    ]
  }
]


export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

