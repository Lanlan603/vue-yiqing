import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/view/Home/Home'
// 异步
const HeSuan = () => import('@/view/HeSuan')
const prevention = () => import('@/view/Prevention')
const citys = () => import('@/view/Citys/Citys')
const Travel = () => import('@/view/Travel')
const SelectCity = () => import('@/view/SelectCity')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/hesuan',
    name: 'HeSuan',
    component: HeSuan
  },
  {
    path:'/prevention',
    name:'Prevention',
    component: prevention
  },
  {
    path: '/citys/:cityname',
    name: 'Citys',
    component: citys,
    props: true
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/selectCity',
    name: 'SelectCity',
    component: SelectCity
  }
]

const router = new VueRouter({
  routes
})

export default router