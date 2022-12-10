<!--  -->
<template>
   <div>
    <h3 class="title">世界地图疫情</h3>
    <!-- 地图容器 -->
    <div id="main" style="width: 7.5rem; height: 7rem"></div>
  </div>
</template>

<script>
import api from '@/API/index'
export default {
  data () {
    return {
    }
  },
  mounted() {
    api.getWorldData()
    .then(res => {
      console.log(res)
      let world = res.data.retdata
      let arr = [] // 累计
      for (let i = 0; i < world.length; i++) {
        let obj = {}
        obj.name = world[i].xArea
        obj.value = world[i].confirm
        arr.push(obj)
      }
      this.$myChart.worldMap('main', arr)
    })
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
