import axios from 'axios'
import { Message, Loading } from 'element-ui'
// import Router from '@/router'
import store from './store'

const baseUrl = process.env.NODE_ENV === 'development' ? '/dev' : '' // url根路径

let loading = null

const baseConfig = {
  baseURL: baseUrl,
  // withCredentials: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
}

let instance = axios.create(Object.assign({}, baseConfig, {
  transformRequest: [function (data, headers) {
    store.commit('updateLoadingStatus', true)
    return JSON.stringify(data)
  }],
  transformResponse: [function (data) {
    store.commit('updateLoadingStatus', false)

    if (data.code && data.code !== '0') {
      Message.error(data.message)
      // if (data.code === '100000004') {
      //   Router.replace({ name: 'login', query: { redirect: encodeURIComponent(Router.currentRoute.fullPath) } })
      // }
    }
    return data
  }]
}))

let instanceQuiet = axios.create(Object.assign({}, baseConfig, {
  transformRequest: [function (data, headers) {
    return JSON.stringify(data)
  }],
  transformResponse: [function (data) {
    // 如果返回的结果没有code，将被直接返回
    if (data.code && data.code !== '0') {
      Message.error(data.message)
      // if (data.code === '100000004') {
      //   Router.replace({ name: 'login', query: { redirect: encodeURIComponent(Router.currentRoute.fullPath) } })
      // }
    }
    return data
  }]
}))

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  Message.error({ message: '系统繁忙，请稍后重试' })
  return Promise.reject(error)
})

instanceQuiet.interceptors.response.use(function (response) {
  return response
}, function (error) {
  Message.error({ message: '系统繁忙，请稍后重试' })
  return Promise.reject(error)
})

window.API = {
  common: {
    login: data => instanceQuiet.post('/admin/user/login', data),
    menu: params => instanceQuiet.get('/menus/admin', {params}),
    getAreas: params => instanceQuiet.get('/areas/admin', {params})
  },
  home: {
    home: '/'
  },
  basic: {
    cityOverview: '/',
    getBusinessDetail: params => instanceQuiet.get(`/business/admin/${params.id}`),
    changeBusinessStatus: params => instance.put(`/business/admin/${params.id}/status`),
    getBusinessList: params => instance.get('/business/admin/page', {params})
  }
}