<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='20')
        el-col(:span='6')
          el-date-picker.width100(placeholder='请选择时间' type='daterange')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary') 搜索
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='交易时间')
          el-table-column(label='商户订单号')
          el-table-column(label='微信支付订单号')
          el-table-column(label='支付场景')
          el-table-column(label='交易状态')
          el-table-column(label='订单金额（元）')
          el-table-column(label='操作')
</template>

<script>
export default {
  data() {
    return {
      form: {
        keyword: '',
        status: ''
      }
    }
  }
}
</script>

