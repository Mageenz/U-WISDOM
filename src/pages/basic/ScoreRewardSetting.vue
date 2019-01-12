<template lang="pug">
  .page
    el-collapse(v-model='names')
      el-collapse-item(title='区县代理商积分奖励及分润设置' name='1')
        el-form
          el-form-item(v-for='item in records1' label='当区域内商家数量达到：')
            el-input(placeholder='数量' v-model='item.maxBusinessAmount' clearable).w300px
            span.ml15 家时，获得的积分分润比例为：
            el-input-number(:min='0' :max='100' :precision="2" :step="0.1" placeholder='比例' v-model='item.rewardRatio' clearable).w300px
          el-form-item
            el-button(type='primary' @click='submit(records1)') 提交
      el-collapse-item(title='推荐商家入驻积分奖励及分润设置' name='2')
        el-form
          el-form-item(v-for='item in records2' label='推荐商家入驻时，推荐人获得积分奖励标准为：')
            el-input-number(:min='0' :max='100' :precision="2" :step="0.1" placeholder='比例' v-model='item.rewardRatio' clearable).w300px
          el-form-item
            el-button(type='primary' @click='submit(records2)') 提交
          el-form-item.c3 计算公式为：商家收取优惠金金额×40%×对应的分润比例
      el-collapse-item(title='市级代理商积分奖励及分润设置' name='3')
        el-form
          el-form-item(v-for='item in records3' label='地级市范围内，每笔交易的积分奖励标准为：')
            el-input-number(:min='0' :max='100' :precision="2" :step="0.1" placeholder='比例' v-model='item.rewardRatio' clearable).w300px
          el-form-item
            el-button(type='primary' @click='submit(records3)') 提交
          el-form-item.c3 计算公式为：商家收取优惠金金额×40%×对应的分润比例
</template>

<script>
export default {
  data() {
    return {
      names: ['1', '2', '3'],
      records: [],
      records1: [],
      records2: [],
      records3: []
    }
  },
  methods: {
    submit(records) {
      const data = JSON.parse(JSON.stringify(records))

      data.forEach(item => {
        item.rewardRatio = item.rewardRatio*100
      })

      API.basic.editScoreReward(data).then(res => {
        if(res.data.code === '0') {
          this.$message.success('操作成功')
          this.getInfo()
        }
      })
    },
    getInfo() {
      API.basic.getScoreRewardInfo().then(res => {
        if(res.data.code === '0') {
          this.records = res.data.data.map(item => {
            return {...item, rewardRatio: item.rewardRatio/100}
          })

          this.records1 = this.records.filter(item => item.type == 1)
          this.records2 = this.records.filter(item => item.type == 2)
          this.records3 = this.records.filter(item => item.type == 3)
        }
      })
    }
  },
  mounted() {
    this.getInfo()
  }
}
</script>


<style lang="less" scoped>
.w300px {
  width: 300px;
}
</style>
