import Vue from 'vue'
import App from './App.vue'
import {router} from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './api'
import store from './store'
import './filters'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' });

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
