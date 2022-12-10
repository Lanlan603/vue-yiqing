<!--  -->
<template>
  <div class="num">
    <div class="content">
      <div class="title">截止{{covData.modifyTime | time}}全国数据统计</div>
    <ul class="wrap">
      <li>
        <span>较昨日{{covData.confirmedIncr | number}}</span>
        <div class="bold">{{covData.currentConfirmedCount}}</div>
        <strong>现有确诊</strong>
      </li>
      <li>
        <span>较昨日{{covData.confirmedIncr | number}}</span>
        <div class="bold">{{covData.confirmedCount}}</div>
        <strong>累计确诊</strong>
      </li>
      <li>
        <span>较昨日{{covData.suspectedIncr | number}}</span>
        <div class="bold">{{covData.suspectedCount}}</div>
        <strong>累计境外输入人数</strong>
      </li>
      <li>
        <span>较昨日{{covData.curedIncr | number}}</span>
        <div class="bold">{{covData.curedCount}}</div>
        <strong>累计治愈人数</strong>
      </li>
      <li>
        <span>较昨日{{covData.deadIncr | number}}</span>
        <div class="bold">{{covData.deadCount}}</div>
        <strong>累计死亡人数</strong>
      </li><li>
        <span>较昨日{{covData.seriousIncr | number}}</span>
        <div class="bold">{{covData.seriousCount}}</div>
        <strong>现存无症状人数</strong>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:['covData'],
  //定义过滤器
  filters: {
    number(val) {
      val = val > 0 ? '+' + val : val
      return val
    },
    time(num) {
      let data = new Date(num)
      let y = data.getFullYear()
      let m = data.getMonth() + 1
      let d = data.getDate()
      return y + '-' + m + '-' + d
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style  scoped lang="less">
.num {
  background: #f5f5f5;
  padding-top: .3rem;
  .content {
    background: #fff;
    padding: .2rem;
    min-height: 2rem;
    border-radius: .2rem .2rem 0 0;
    .title {
      color: #666;
      margin-bottom: .2rem;
    }
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    border-radius: .1rem;
    box-shadow: 0 0 3px 2px rgba(194, 192, 192, .2);
    li {
      width: 33.33333%;
      text-align: center;
      margin-bottom: .2rem;
      color: #666;
      strong {
        color: #333;
      }
    }
    .bold {
      font-weight: bold;
    }
    li:nth-child(1) .bold {
      color: red;
    }
    li:nth-child(2) .bold {
      color: green;
    }
    li:nth-child(3) .bold {
      color: orange;
    }
    li:nth-child(4) .bold {
      color: skyblue;
    }
    li:nth-child(5) .bold {
      color:aquamarine;
    }
    li:nth-child(6) .bold {
      color:tan;
    }
  }
}
</style>
