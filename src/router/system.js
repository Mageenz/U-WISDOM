import Editor from '../pages/system/Editor.vue'
import SystemLogs from '../pages/system/SystemLogs.vue'
import AuthManager from '../pages/system/AuthManager.vue'
import BannerManager from '../pages/system/BannerManager.vue'
import FrontModuleControl from '../pages/system/FrontModuleControl.vue'
import AppUpdateManager from '../pages/system/AppUpdateManager.vue'

export default [
  {name: 'system', path: '/system', redirect: '/system/editor', component: Editor,meta: { name: '系统设置', isTopbar: true, type: 'system' }},
  {name: 'systemEditor', path: '/system/editor', component: Editor, meta: { name: '操作员', type: 'system' }}, 
  {name: 'systemAuthManager', path: '/system/authManager', component: AuthManager, meta: { name: '权限管理', type: 'system' }}, 
  {name: 'systemSystemLogs', path: '/system/systemLogs', component: SystemLogs, meta: { name: '系统日志', type: 'system' }}, 
  {name: 'systemBannerManager', path: '/system/bannerManager', component: BannerManager, meta: { name: '广告轮播图', type: 'system' }}, 
  {name: 'systemFrontModuleControl', path: '/system/frontModuleControl', component: FrontModuleControl, meta: { name: '前端模块控制', type: 'system' }}, 
  {name: 'systemAppUpdateManager', path: '/system/appUpdateManager', component: AppUpdateManager, meta: { name: 'APP升级管理', type: 'system' }}, 
]