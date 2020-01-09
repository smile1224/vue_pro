import Vue from 'vue'//引入vue包
import App from '@/layouts/App.vue'// 引入基础样式


import '@/assets/js/font.js'// 引入基础样式
import './assets/css/base.css'

//引入路由对象
import router from './plugins/router.js'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
