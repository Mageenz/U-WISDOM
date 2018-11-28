import SalesReceiveLogs from '../pages/finance/SalesReceiveLogs.vue'
import ExtractMoneyLogs from '../pages/finance/ExtractMoneyLogs.vue'
import WechatReceiveMoneyLogs from '../pages/finance/WechatReceiveMoneyLogs.vue'
import AlipayReceiveMoneyLogs from '../pages/finance/AlipayReceiveMoneyLogs.vue'
import UnionPayReceiveMoneyLogs from '../pages/finance/UnionPayReceiveMoneyLogs.vue'

export default [
  {name: 'finance', path: '/finance', redirect: '/finance/salesReceiveLogs', component: SalesReceiveLogs,meta: { name: '财务管理', isTopbar: true, type: 'finance' }},
  {name: 'financeSalesReceiveLogs', path: '/finance/salesReceiveLogs', component: SalesReceiveLogs, meta: { name: '销售进账记录', type: 'finance' }}, 
  {name: 'financeExtractMoneyLogs', path: '/finance/extractMoneyLogs', component: ExtractMoneyLogs, meta: { name: '提现记录', type: 'finance' }}, 
  {name: 'financeWechatReceiveMoneyLogs', path: '/finance/wechatReceiveMoneyLogs', component: WechatReceiveMoneyLogs, meta: { name: '微信收款记录', type: 'finance' }}, 
  {name: 'financeAlipayReceiveMoneyLogs', path: '/finance/alipayReceiveMoneyLogs', component: AlipayReceiveMoneyLogs, meta: { name: '支付宝收款记录', type: 'finance' }}, 
  // {name: 'financeUnionPayReceiveMoneyLogs', path: '/finance/unionPayReceiveMoneyLogs', component: UnionPayReceiveMoneyLogs, meta: { name: '银联收款记录', type: 'finance' }}, 
]