<!--  -->
<template>
  <div class="home">
    <!-- 首页图片 -->
    <div class="logo">
      <img src="@/assets/images/1.jpg" alt="" style="width: 100%">
      <router-link class="select" to="/selectCity">{{ city }}</router-link>
    </div>
    <!-- 病毒信息 -->
    <CovInfo :news="news" />
    <!-- 疫情-小导航 -->
    <div class="list">
      <div>
        <img src="@/assets/images/1.png" alt="" />
        <div>风险地区</div>
      </div>
      <div>
        <router-link to="/hesuan">
          <img src="@/assets/images/2.png" alt="" />
          <div>核算检测</div>
        </router-link>
      </div>
      <div>
        <router-link to="/prevention">
          <img src="@/assets/images/3.png" alt="" />
          <div>防疫物资</div>
        </router-link>
      </div>
      <div>
        <router-link to="/travel">
          <img src="@/assets/images/4.png" alt="" />
          <div>出行政策</div>
        </router-link>
      </div>
    </div>
    <!-- 数据统计 -->
    <CovNumber :covData="covData" />
    <!-- 国内地图 -->
    <!-- <ChinaMap/> -->
    <!-- 世界地图 -->
    <!-- <WorldMap/> -->
    <!-- 轮播模块 -->
    <VueSwiper />
  </div>
</template>

<script>
import CovInfo from './CovInfo/CovInfo'
import CovNumber from './CovInfo/CovNumber'
// import ChinaMap from './VueEcharts/ChinaMap'
// import WorldMap from './VueEcharts/WorldMap'
import VueSwiper from './VueSwiper/VueSwiper'
import api from '@/API/index'
export default {
  components: {
    CovInfo,
    CovNumber,
    // ChinaMap,
    // WorldMap,
    VueSwiper
  },
  data() {
    return {
      news: [],
      covData: {},
      city: '国内疫情'
    }

  },
  created() {
    // 请求病毒接口
    api.getCovInfo()
      .then(res => {
        // 疫情热点
        this.news = res.data.result.news
        // 疫情信息
        this.covData = {
          currentConfirmedCount: res.data.result.desc.currentConfirmedCount,
          confirmedCount: res.data.result.desc.confirmedCount,
          suspectedCount: res.data.result.desc.suspectedCount,
          curedCount: res.data.result.desc.curedCount,
          deadCount: res.data.result.desc.deadCount,
          seriousCount: res.data.result.desc.seriousCount,
          suspectedIncr: res.data.result.desc.suspectedIncr,
          confirmedIncr: res.data.result.desc.confirmedIncr,
          curedIncr: res.data.result.desc.curedIncr,
          deadIncr: res.data.result.desc.deadIncr,
          seriousIncr: res.data.result.desc.seriousIncr,
          modifyTime: res.data.result.desc.modifyTime,
        }
      })

      // 读取本地存储
      let city = localStorage.getItem('value')
      // 判断
      if(city) {
        this.city = city + '疫情'
      }
  }

}
</script>

<style  scoped lang="less">
.logo {
  position: relative;
  .select {
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
  }
}
.list {
  display: flex;
  padding-bottom: 0.2rem;

  >div {
    flex: 1;
    text-align: center;
    color: #666;

    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>
