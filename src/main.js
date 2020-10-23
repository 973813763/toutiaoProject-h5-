import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载Vant 全局样式
import Vant from 'vant'
// 加载全局的样式
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.scss'

// 注册使用Vant 组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
