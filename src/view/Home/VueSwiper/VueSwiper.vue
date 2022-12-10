<!--  -->
<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <img :src="item.image" alt="" width="100%">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 轮播下面的图片 -->
    <ul class="list">
      <li v-for="(item, index) in banner" :key="index" :class="{ active: index == num }" @click="changeIndex(index)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/API'
export default {
  data() {
    // 保存this指向
    let that = this;
    return {
      banner:[],
      num: 0,
      swiperOptions: { // swiper配置内容
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        on: {
          // 回调函数 , swiper从一个slide过渡到另一个slide结束时执行
          slideChangeTransitionStart: function () {
            // console.log('slide下标为' + this.activeIndex) // 2 3 4 5 6
            // 判断
            if (this.activeIndex == that.banner.length + 1) {
              that.num = 0
            } else {
              that.num = this.activeIndex - 1
            }
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        }
      }
    }
  },
  mounted() {
    api.getSwiperData()
    .then(res => {
      // console.log(res.data)
      this.banner = res.data.result
    })
  },
  methods: {
    changeIndex(index) {
      this.num = index
      this.swiper.slideTo(index + 1, 1000, false)
    }
  },
  computed: {
    // 获取swiper实例
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
}
</script>

<style  scoped lang="less">
.list {
  display: flex;

  li {
    flex: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    line-height: 0.32rem;
    margin: 0.1rem;
    background: #eee;
    color: #666;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .active {
    background: rgb(80, 116, 173);
    color: #fff;
  }
}
</style>
