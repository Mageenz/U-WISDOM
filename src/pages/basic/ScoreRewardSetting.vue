<template lang="pug">
  .page
    .page-content
      h2 区县代理商积分奖励及分润设置：
      el-form
        el-form-item(v-for='item in 7')
          span.mr15 当区域内商家数量达到
          el-select(placeholder='数量')
            el-option(value='100') 100
          span.ml15 家时，获得的积分分润比例为：
          el-select.mr15(placeholder='比例')
            el-option(value='3%') 3%
          el-button(type='primary') 提交
    .page-content
      h2 推荐商家入驻积分奖励及分润设置：
      el-form
        el-form-item
          span.mr15 推荐商家入驻时，推荐人获得积分奖励标准为
          el-select.mr15(placeholder='比例')
            el-option(value='3%') 3%
          el-button(type='primary') 提交
        el-form-item.c3 计算公式为：商家收取优惠金金额×40%×对应的分润比例
</template>

<script>
export default {
  
}
</script>


