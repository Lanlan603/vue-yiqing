<!--  -->
<template>
  <div class="slectcity">
    <h2 class="title">城市选择</h2>
    <van-index-bar :index-list="indexList">
      <template v-for="(item, name) in cityList">
        <van-index-anchor :index="name"/>
        <van-cell :title="ele.name" v-for="ele in item" :key="ele.id"  @click="tiao" />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import api from '@/API'
export default {
  data() {
    return {
      cityList: {},
      indexList: []
    }
  },
  created() {
    api.getCity()
      .then(res => {
        // console.log(res.data.result);
        this.cityList = res.data.result.citylist
        // console.log(this.cityList)
        this.indexList = Object.keys(res.data.result.citylist)
        console.log(this.indexList)
      })
  },
  methods: {
    tiao(e) {
      console.dir(e.target.innerText)
      // 本地存储
      localStorage.setItem('value',e.target.innerText)
      // 跳转
      this.$router.go(-1)
    }
  }
}
</script>

<style  scoped lang="less">
.slectcity {
  background: #f5f5f5;

  .title {
    padding: .2rem;
  }
}
</style>
