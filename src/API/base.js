// 公共的请求接口
const base = {
  host: 'https://apis.tianapi.com', // 天行数据 -- 疫情病毒
  baseUrl: 'https://cspe.api.storeapi.net', // 挖数据
  covInfo: '/ncov/index?key=2a5f82ca608b496d6318ea393a796359',  // 疫情病毒信息
  chinaData: '/api/94/219?format=json&appid=23221&sign=cd52a6c5ce94d7070796abc7ee75df8c', // 国内疫情接口
  worldData: '/api/94/220?format=json&appid=23221&sign=cd52a6c5ce94d7070796abc7ee75df8c',  // 国外疫情接口
  city:'/api/94/221',//城市接口
  swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播图疫情
  travel: '/api/springTravel/citys?key=56b33eaac6db135513169a6375551999', // 出行城市列表
  travelQuery: '/api/springTravel/query?key=56b33eaac6db135513169a6375551999', // 出行政策
  getcity:'/foo/aj/getcitycode',
}

export default base