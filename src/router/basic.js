import CityOverview from '../pages/basic/CityOverview.vue'
import VipManager from '../pages/basic/VipManager.vue'
import VipSetting from '../pages/basic/VipSetting.vue'
import VipCardSetting from '../pages/basic/VipCardSetting.vue'
import ShopManager from '../pages/basic/ShopManager.vue'
import ShopCategorySetting from '../pages/basic/ShopCategorySetting.vue'
import ShopExchangeSetting from '../pages/basic/ShopExchangeSetting.vue'
import ShareSetting from '../pages/basic/ShareSetting.vue'
import ScoreRewardSetting from '../pages/basic/ScoreRewardSetting.vue'

export default [
  {name: 'basic', path: '/basic', redirect: '/basic/cityOverview', component: CityOverview,meta: { name: '基础设置', isParent: true, type: 'basic' }},
  {name: 'basicCityOverview', path: '/basic/cityOverview', component: CityOverview, meta: { name: '城市概览', type: 'basic' }}, 
  {name: 'basicVipManager', path: '/basic/vipManager', component: VipManager, meta: { name: '会员管理', type: 'basic' }},
  {name: 'basicShopManager', path: '/basic/shopManager', component: ShopManager, meta: { name: '商家管理', type: 'basic' }},
  {name: 'basicVipCardSetting', path: '/basic/vipCardSetting', component: VipCardSetting, meta: { name: '会员卡设置', type: 'basic' }},
  {name: 'basicShareSetting', path: '/basic/shareSetting', component: ShareSetting, meta: { name: '分享/推荐设置', type: 'basic' }},
  {name: 'basicVipSetting', path: '/basic/vipSetting', component: VipSetting, meta: { name: 'VIP设置', type: 'basic' }},
  {name: 'basicScoreRewardSetting', path: '/basic/scoreRewardSetting', component: ScoreRewardSetting, meta: { name: '积分奖励设置', type: 'basic' }},
  {name: 'basicShopCategorySetting', path: '/basic/shopCategorySetting', component: ShopCategorySetting, meta: { name: '商家类别设置', type: 'basic' }},
  {name: 'basicShopExchangeSetting', path: '/basic/shopExchangeSetting', component: ShopExchangeSetting, meta: { name: '商家兑换设置', type: 'basic' }},
]