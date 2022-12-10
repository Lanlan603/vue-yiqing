<!--  -->
<template>
  <div>
    <h3 class="title">中国地图疫情</h3>
    <!-- 地图容器 -->
    <!-- 为Echarts准备定义一个宽高DOM元素 -->
    <van-tabs v-model="active" animated @change="change">
      <van-tab title="现有确诊">
        <div id="nowmain" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="main" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from '@/API/index'
export default {
  data() {
    return {
      active: 0,
      arr: []
    }
  },
  mounted() {
    // 获取国内疫情数据
    api.getChinaData()
      .then(res => {
        // 获取省份数据
        let citys = res.data.retdata
        let arr = []
        let nowarr = []
        for (let i = 0; i < citys.length; i++) {
          let obj = {}
          let now = {}
          obj.name = citys[i].xArea
          obj.value = citys[i].confirm  // 累计
          now.name = citys[i].xArea
          now.value = citys[i].curConfirm    // 现存
          arr.push(obj)
          nowarr.push(now)
        }
        this.arr = arr
       this.$nextTick(() => {
         // 显示现存的地图
         this.$myChart.chinaMap('nowmain', nowarr)
       })
      })
  },
  methods:{
    change(title) {
      if (title === 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap('main', this.arr)
        })
      }
    }
  }
}
</script>

<style  scoped>
.title {
  padding: .2rem;
}
.title::before {
  content: "";
  border-left: 0.1rem solid rgb(9, 60, 202);
  font-size: 0.26rem;
  margin-right: 0.1rem;
}

#main,#nowmain {
  background: #f5f5f5;
}
</style>
