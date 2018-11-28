<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='20')
        el-col(:span='6')
          el-date-picker(placeholder='请选择时间' type='daterange' style='width:100%')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary') 搜索
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='一星VIP人数')
          el-table-column(label='合计支付金额')
          el-table-column(label='二星VIP人数')
          el-table-column(label='合计支付金额')
          el-table-column(label='三星VIP人数')
          el-table-column(label='合计支付金额')
          el-table-column(label='四星VIP人数')
          el-table-column(label='合计支付金额')
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