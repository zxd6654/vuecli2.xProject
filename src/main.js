// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
// 应用api文件
import api from './api/index'
// 引用工具文件
import utils from './utils/index'
// 引用中央事件总线
import EventBus from './utils/event-bus'
// 将api方法绑定到全局
Vue.prototype.$api = api
// 将工具方法绑定到全局
Vue.prototype.$utils = utils
// 将央事件总线绑定到全局
Vue.prototype.$EventBus = EventBus

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Element)
Vue.use(VueLazyLoad, {
  preload: 1,
  error: require('../static/img/Error.png'),
  loading: require('../static/img/Loading.png'),
  attempt: 2,
})
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
