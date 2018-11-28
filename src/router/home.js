import Home from '../pages/home/Index.vue'

export default [{
    name: 'home',
    path: '/home',
    redirect: '/home/dataOverview',
    component: Home,
    meta: { name: '首页', isParent: true, type: 'home' }
  }, {
    name: 'homeDataOverview',
    path: '/home/dataOverview',
    component: Home,
    meta: { name: '数据预览', type: 'home' }
  }]