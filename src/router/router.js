import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import home from './home'
import basic from './basic'
import admin from './admin'
import finance from './finance'
import system from './system'
import message from './message'

import Sidebar from '../components/Sidebar.vue'
import Layout from '../components/Layout.vue'
import Login from '../pages/common/Login.vue'

const routes = home.concat(basic, admin, finance, system, message)

routes.forEach(item => {
  item.components = {
    sidebar: Sidebar,
    content: item.component
  }

  delete item.component
})

const router = new VueRouter({
  routes: [
    {path: '/', component: Layout, redirect: '/home', children: routes},
    {path: '/login', component: Login}
  ]
})
const topbar = routes.filter(item => item.meta.isTopbar)

export {routes, router, topbar}