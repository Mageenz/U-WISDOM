import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import home from './home'
import basic from './basic'
import admin from './admin'
import finance from './finance'
import system from './system'
import message from './message'

import Layout from '../pages/common/Layout.vue'
import Login from '../pages/common/Login.vue'

const routes = home.concat(basic, admin, finance, system, message)

const router = new VueRouter({
  routes: [
    {name: 'main', path: '/', component: Layout, redirect: '/home', children: routes},
    {name: 'login', path: '/login', component: Login}
  ]
})

export {routes, router}