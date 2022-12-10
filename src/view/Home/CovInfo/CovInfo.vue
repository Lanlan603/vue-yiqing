<!--  -->
<template>
  <div class="info">
   <div class="cov">
    <div class="title">病毒信息</div>
    <p>病毒： SARS-CoV-2，其导致疾病命名 COVID-19</p>
    <p>传播源：新冠肺炎患者。无症状感染者也可能成为传染源。</p>
    <p>传播途径：经呼吸道飞沫，接触传播是主要的传播途径。气溶胶传播和消化道等传播途径尚未明确</p>
    <p>易感人群：人群普遍易感。老年人及有基础疾病者感染后病情较重，儿童及婴幼儿也有发病</p>
    <p>潜伏期：一般为3~7天，最长不超过14天，潜伏期内可能出现传染性，其中无症状病例传染性非常罕见</p>
    <p>宿主：野生动物，可能为中华菊头蝠</p>
   </div>
  <div class="hot">
    <div class="title">
      <img src="@/assets/images/hot.png" alt="" style="width: 60px; vertical-align:middle">
      <a href="##"
          >查看更多<img src="@/assets/images/more.png" alt=""
        /></a>
    </div>
    <ul class="list">
      <li v-for="item in news" :key="item.id">
      <span>最新</span> {{item.title}}
      <img src="@/assets/images/right.png" alt="" />
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style  scoped lang="less">
.info {
  padding: 0.2rem;
  .title {
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    color: #666;
    a {
      float: right;
      font-weight: normal;
      color: #4169e2;
      font-size: 0.26rem;
      img {
        width: 0.26rem;
      }
    }
  }
  .title::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
  }
  p {
    line-height: 0.5rem;
    color: #666;
  }
  .hot {
    padding-top: 0.2rem;
    border-bottom: 1px solid #eee;
    .icon {
      width: 1.2rem;
      vertical-align: top;
    }
    .list {
      li {
        line-height: 0.44rem;
        margin-bottom: 0.2rem;
        letter-spacing: 0.03rem;
        font-size: 0.3rem;
        color: #666;
      }
      span {
        background: #ff5555;
        color: #fff;
        font-size: 0.26rem;
        padding: 0.02rem 0.06rem;
        border-radius: 0.06rem;
      }
      img {
        float: right;
        width: 0.24rem;
        padding-top: 0.1rem;
      }
    }
  }
}
</style>
