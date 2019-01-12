<template lang="pug">
  .page
    el-collapse(v-model='names' v-if='info')
      el-collapse-item(title='历史累计数据' name='1')
        el-row
          el-col(:span='2')
            .num {{info.memberNum}}
            .text 会员数
          el-col(:span='2')
            .num {{info.businessNum}}
            .text 商家数
          el-col(:span='3')
            .num {{info.areaAgentNum}}
            .text 区县代理数
          el-col(:span='3')
            .num {{info.cityAgentNum}}
            .text 市级代理数
          el-col(:span='3')
            .num {{info.payAmount}}
            .text 付款金额
          el-col(:span='3')
            .num {{info.transactionNum}}
            .text 交易笔数
          el-col(:span='3')
            .num {{info.couponsNum}}
            .text 优惠金金额
          el-col(:span='2')
            .num {{info.pointsNum}}
            .text 积分额
          el-col(:span='3')
            .num {{info.exchangedPointsNum}}
            .text 已兑换积分
      el-collapse-item(title='昨日新增数据' name='2')
        el-row
          el-col(:span='2')
            .num {{info.yesterdayMemberNum}}
            .text 会员数
          el-col(:span='2')
            .num {{info.yesterdayBusinessNum}}
            .text 商家数
          el-col(:span='3')
            .num {{info.yesterdayAreaAgentNum}}
            .text 区县代理数
          el-col(:span='3')
            .num {{info.yesterdayCityAgentNum}}
            .text 市级代理数
          el-col(:span='3')
            .num {{info.yesterdayPayAmount}}
            .text 付款金额
          el-col(:span='3')
            .num {{info.yesterdayTransactionNum}}
            .text 交易笔数
          el-col(:span='3')
            .num {{info.yesterdayCouponsNum}}
            .text 优惠金金额
          el-col(:span='2')
            .num {{info.yesterdayPointsNum}}
            .text 积分额
          el-col(:span='3')
            .num {{info.yesterdayExchangedPointsNum}}
            .text 已兑换积分
      el-collapse-item(title='本月数据（按自然月统计，每月1 ~ 31日）' name='3')
        el-row
          el-col(:span='2')
            .num {{info.monthMemberNum}}
            .text 会员数
          el-col(:span='2')
            .num {{info.monthBusinessNum}}
            .text 商家数
          el-col(:span='3')
            .num {{info.monthAreaAgentNum}}
            .text 区县代理数
          el-col(:span='3')
            .num {{info.monthCityAgentNum}}
            .text 市级代理数
          el-col(:span='3')
            .num {{info.monthPayAmount}}
            .text 付款金额
          el-col(:span='3')
            .num {{info.monthTransactionNum}}
            .text 交易笔数
          el-col(:span='3')
            .num {{info.monthCouponsNum}}
            .text 优惠金金额
          el-col(:span='2')
            .num {{info.monthPointsNum}}
            .text 积分额
          el-col(:span='3')
            .num {{info.monthExchangedPointsNum}}
            .text 已兑换积分
    
</template>

<script>
export default {
  data() {
    return {
      names: ['1', '2', '3'],
      info: null
    }
  },
  methods: {
    getHomeInfo() {
      API.home.getHomeInfo().then(res => {
        if(res.data.code === '0') {
          this.info = res.data.data
        }
      })
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>

<style lang="less" scoped>
.num, .text {
  text-align: center;
}
.info-block {
    margin-bottom: 60px;
}

.num {
    margin-bottom: 10px;
    color: #303133;
}

.text {
    color: #606266;
}
</style>

