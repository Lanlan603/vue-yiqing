import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 引入css初始化样式
import './assets/css/base.css'
// 引入js适配移动端
// import './assets/js/phone.js'
// 引入vant库
import './plugins/vant'
// 使用开发插件
import echarts from '@/plugins/echarts'
Vue.use(echarts)
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
