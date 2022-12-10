/* 
请求接口的方法
*/
// 导入 axios
import axios from "axios"
// 接口地址
import base from './base'
// 引入md5
import md5 from "md5-js"

const api = {
  // 病毒信息获取
  getCovInfo() {
     return axios.get(base.host + base.covInfo)
  },
  // 获取国内疫情
  getChinaData() {
    return axios.get(base.baseUrl + base.chinaData)
  },
  // 获取国外疫情数据
  getWorldData() {
    return axios.get(base.baseUrl + base.worldData)
  },
  // 获取轮播图片
  getSwiperData() {
    return axios.get(base.swiperBanner)
  },
  // 获取出行城市
  getTravelData() {
    return axios.get(base.travel)
  },
  // 获取出行政策
  getTravelQuery(params) {
    return axios.get(base.travelQuery,{
      params
    })
  },
  // 获取城市列表
  getCity() {
    return axios.get(base.getcity)
  }
}

export default api