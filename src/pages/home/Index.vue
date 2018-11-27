<template lang="pug">
  .wrap
    .info-block
      h2 历史累计数据
      el-row
        el-col(:span='2')
          .num 3
          .text 会员数
        el-col(:span='2')
          .num 3
          .text 商家数
        el-col(:span='3')
          .num 3
          .text 区县代理数
        el-col(:span='3')
          .num 3
          .text 市级代理数
        el-col(:span='3')
          .num 3
          .text 付款金额
        el-col(:span='3')
          .num 3
          .text 交易笔数
        el-col(:span='3')
          .num 3
          .text 优惠金金额
        el-col(:span='2')
          .num 3
          .text 积分额
        el-col(:span='3')
          .num 3
          .text 已兑换积分
    
    .info-block
      h2 昨日新增数据
      el-row
        el-col(:span='2')
          .num 3
          .text 会员数
        el-col(:span='2')
          .num 3
          .text 商家数
        el-col(:span='3')
          .num 3
          .text 区县代理数
        el-col(:span='3')
          .num 3
          .text 市级代理数
        el-col(:span='3')
          .num 3
          .text 付款金额
        el-col(:span='3')
          .num 3
          .text 交易笔数
        el-col(:span='3')
          .num 3
          .text 优惠金金额
        el-col(:span='2')
          .num 3
          .text 积分额
        el-col(:span='3')
          .num 3
          .text 已兑换积分
    
    .info-block
      h2 本月数据（按自然月统计，每月1 ~ 31日）
      el-row
        el-col(:span='2')
          .num 3
          .text 会员数
        el-col(:span='2')
          .num 3
          .text 商家数
        el-col(:span='3')
          .num 3
          .text 区县代理数
        el-col(:span='3')
          .num 3
          .text 市级代理数
        el-col(:span='3')
          .num 3
          .text 付款金额
        el-col(:span='3')
          .num 3
          .text 交易笔数
        el-col(:span='3')
          .num 3
          .text 优惠金金额
        el-col(:span='2')
          .num 3
          .text 积分额
        el-col(:span='3')
          .num 3
          .text 已兑换积分
</template>

<script>
export default {

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

