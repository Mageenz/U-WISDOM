import RegionProxyOverview from '../pages/admin/RegionProxyOverview.vue'
import CityProxyOverview from '../pages/admin/CityProxyOverview.vue'
import VipCardSales from '../pages/admin/VipCardSales.vue'
import VipStatistics from '../pages/admin/VipStatistics.vue'
import MarketScoreTotal from '../pages/admin/MarketScoreTotal.vue'
import ScoreExchangeLogs from '../pages/admin/ScoreExchangeLogs.vue'
import RegionProxyApply from '../pages/admin/RegionProxyApply.vue'
import CityProxyApply from '../pages/admin/CityProxyApply.vue'
import UshopImportLogs from '../pages/admin/UshopImportLogs.vue'

export default [
  {name: 'admin', path: '/admin', redirect: '/admin/regionProxyOverview', component: RegionProxyOverview,meta: { name: '后台管理', isTopbar: true, type: 'admin' }},
  {name: 'adminRegionProxyOverview', path: '/admin/regionProxyOverview', component: RegionProxyOverview, meta: { name: '区县代理概况', type: 'admin' }}, 
  {name: 'adminCityProxyOverview', path: '/admin/cityProxyOverview', component: CityProxyOverview, meta: { name: '市级代理概况', type: 'admin' }}, 
  {name: 'adminVipCardSales', path: '/admin/vipCardSales', component: VipCardSales, meta: { name: '会员卡销售', type: 'admin' }}, 
  {name: 'adminVipStatistics', path: '/admin/vipStatistics', component: VipStatistics, meta: { name: 'vip统计', type: 'admin' }}, 
  {name: 'adminMarketScoreTotal', path: '/admin/marketScoreTotal', component: MarketScoreTotal, meta: { name: '市场积分总量', type: 'admin' }}, 
  {name: 'adminScoreExchangeLogs', path: '/admin/scoreExchangeLogs', component: ScoreExchangeLogs, meta: { name: '积分兑换记录', type: 'admin' }}, 
  {name: 'adminRegionProxyApply', path: '/admin/regionProxyApply', component: RegionProxyApply, meta: { name: '区县代理申请', type: 'admin' }}, 
  {name: 'adminCityProxyApply', path: '/admin/cityProxyApply', component: CityProxyApply, meta: { name: '市级代理申请', type: 'admin' }}, 
  {name: 'adminUshopImportLogs', path: '/admin/ushopImportLogs', component: UshopImportLogs, meta: { name: 'U+商城导入记录', type: 'admin' }}, 
]