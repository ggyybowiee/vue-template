import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import router from './router/router'
import VueI18n from 'vue-i18n'
import moment from 'moment'
import _ from 'lodash'
import store from "./store";
import VuePlugins from './plugins'
import lang from './assets/i18n/language'
import common from './utils/common'

import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import './styles/global.css'
import './utils/rem'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VuePlugins)
Vue.prototype.$http = axios
Vue.prototype.common = common
Vue.prototype.moment = moment
Vue.prototype._ = _

// 多语言
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  messages: lang
})

new Vue({
  render: h => h(App),
  store,
  router,
  i18n
}).$mount('#app')