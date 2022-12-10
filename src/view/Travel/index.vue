<!--  -->
<template>
  <div>
    <div class="title">疫情期间出行政策</div>
    <!-- 出发城市 -->
    <van-field v-model="goCity" is-link readonly label="出发城市" placeholder="请选择所在地区" @click="show = true" />
    <van-popup v-model="show" round position="bottom">
      <van-cascader v-model="cascaderValue" title="请选择所在地区" :options="options" @close="show = false"
        @finish="onFinish" />
    </van-popup>
    <!-- 到达城市 -->
    <van-field v-model="toCity" is-link readonly label="到达城市" placeholder="请选择所在地区" @click="show2 = true" />
    <van-popup v-model="show2" round position="bottom">
      <van-cascader v-model="cascaderValue2" title="请选择所在地区" :options="options" @close="show = false"
        @finish="toFinish" />
    </van-popup>

    <!-- 查新按钮 -->
    <div class="search">
      <van-button type="primary" size="large" @click="search">查询防疫信息</van-button>
    </div>
    <!-- 防疫政策结果 -->
    <div class="content" v-if="from_name">
      <div>出行城市: {{from_name}}
        <p>{{from_info}}</p>
      </div>
      <div>到达城市: {{to_name}}
      <p>{{to_info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/API'
export default {
  data() {
    return {
      show: false, // 弹出状态
      show2: false, // 弹出状态
      goCity: "",  // 出发的值
      toCity: "", // 到达的值
      to_name: '', // 到达城市
      from_name: '', // 出行城市
      to: '',
      from: '',
      cascaderValue: '',
      cascaderValue2: '',
      from_info: '', // 出行城市政策
      to_info: '', // 到达城市政策
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions, tabIndex }) {
      this.from = value
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join('/');
    },
    toFinish({ value, selectedOptions, tabIndex }) {
      this.to = value
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join('/');
    },
    search() {
      api.getTravelQuery({
        from: this.from,
        to: this.to
      })
      .then(res => {
        console.log(res.data)
        this.from_name = res.data.result.from_info.city_name
        this.to_name = res.data.result.to_info.to_name
        this.from_info = res.data.result.from_info.low_in_desc
        this.to_info = res.data.result.to_info.low_in_desc
      })
    }
  },
  mounted() {
    api.getTravelData()
    .then(res => {
      // console.log(res.data)
      let result = res.data.result
      let arr = []
      result.forEach(item => {
        let obj = {}
        obj.text = item.province
        obj.value = item.province_id
        obj.children = []
        item.citys.forEach(ele => {
          let child = {}
          child.text = ele.city
          child.value = ele.city_id
          // 追加给 obj.children
          obj.children.push(child)
        })
        // 追加给arr
        arr.push(obj)
      })
      // console.log(arr)
      this.options = arr
    })
  }
};
</script>

<style  scoped>
.title {
  padding: .2rem;
}
.search{
  margin: .2rem;
}
</style>
