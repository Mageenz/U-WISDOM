<template lang="pug">
  .page
    .page-content
      h2 商家用优惠金兑换现金时的比例
      el-form
        el-form-item
          span.ml15 今日兑换比例为：
          el-select.mr15(placeholder='比例')
            el-option(value='3%') 3%
          el-button(type='primary') 提交
    .page-content
      h2 预先设置接下来一周兑换比例（当天0点生效）
      .page-operatebar
        el-button(type='primary' icon='el-icon-plus') 新增
      el-table(border stripe)
        el-table-column(type='index')
        el-table-column(label='日期')
        el-table-column(label='兑换比例')
        el-table-column(label='操作')
</template>

<script>
export default {
  
}
</script>

