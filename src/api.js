import axios from 'axios'
import { Message, Loading } from 'element-ui'
import {router} from './router/router'
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
      if (data.code === 'CMN_1000') {
        router.replace({ name: 'login'})
      }
    }
    return data
  }]
}))

let instanceQuiet = axios.create(Object.assign({}, baseConfig, {
  transformRequest: [function (data, headers) {
    return JSON.stringify(data)
  }],
  transformResponse: [function (data) {
    if (data.code && data.code !== '0') {
      Message.error(data.message)
      if (data.code === 'CMN_1000') {
        router.replace({ name: 'login'})
      }
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
    logout: data => instanceQuiet.post('/admin/user/logout', data),
    getUserInfo: () => instanceQuiet.get('/admin/user/info'),
    menu: params => instance.get('/menus/admin', {params}),
    getAreas: params => instanceQuiet.get('/areas/admin', {params})
  },
  home: {
    home: '/'
  },
  basic: {
    cityOverview: params => instance.get('/areas/admin/page', {params}),
    getBusinessDetail: params => instanceQuiet.get(`/business/admin/${params.id}`),
    changeBusinessStatus: data => instance.put(`/business/admin/${data.id}/status`, data),
    getBusinessList: params => instance.get('/business/admin/page', {params}),
    getCategoryList: params => instance.get('/category/admin', {params}),
    addCategory: data => instanceQuiet.post('/category/admin', data),
    editCategory: data => instanceQuiet.put(`/category/admin/${data.id}`, data),
    deleteCategory: data => instance.delete(`/category/admin/${data.id}`),
    getVipList: params => instance.get('/members/admin', {params}),
    getVipCardList: params => instance.get('/membershipCardSettings/admin', {params}),
    addVipCard: data => instanceQuiet.post('/membershipCardSettings/admin', data),
    editVipCard: data => instanceQuiet.put(`/membershipCardSettings/admin/${data.id}`, data),
    deleteVipCard: params => instance.delete(`/membershipCardSettings/admin/${params.id}`),
    getShareInfo: params => instance.get('/inviteSettings/admin', {params}),
    editShareInfo: data => instance.put(`/inviteSettings/admin/${data.id}`, data),
    getPaymentLogs: params => instanceQuiet.get('/payment/admin', {params}),
    getCouponsLogs: params => instanceQuiet.get('/memberCouponsLog/admin', {params}),
    getScoreLogs: params => instanceQuiet.get('/memberPointsLog/admin', {params}),
    getScoreRewardInfo: params => instance.get('/pointsSettings/admin', {params}),
    editScoreReward: data => instance.put('/pointsSettings/admin', {data})
  },
  system: {
    getEditorList: params => instance.get('/users/admin', {params}),
    addEditor: data => instanceQuiet.post('/users/admin', data),
    editEditor: data => instanceQuiet.put(`/users/admin/${data.id}`, data),
    deleteEditor: data => instance.delete(`/users/admin/${data.id}`),
    getEditorInfo: params => instance.get(`/permissions/admin`, {params}),
    submitAuth: data => instance.post('/permissions/admin', data),
    getSystemLogs: params => instance.get('/logs/admin/page', {params}),
    getAdList: params => instance.get('/advertise/admin', {params}),
    addAd: data => instanceQuiet.post('/advertise/admin', data),
    editAd: data => instanceQuiet.put(`/advertise/admin/${data.id}`, data),
    deleteAd: params => instance.delete(`/advertise/admin/${params.id}`, {params})
  },
  message: {
    getMessageList: params => instance.get('/messages/admin', {params}),
    sendMessage: data => instance.post('/messages/admin', data)
  }
}
