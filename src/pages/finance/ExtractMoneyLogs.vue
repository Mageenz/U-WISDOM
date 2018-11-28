<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='20')
        el-col(:span='6')
          el-input(placeholder='请输入关键词')
        el-col(:span='6')
          el-date-picker.width100(placeholder='请选择时间' type='daterange')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary') 搜索
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='日期')
          el-table-column(label='付款ID')
          el-table-column(label='名称')
          el-table-column(label='提现金额')
          el-table-column(label='提现通道')
          el-table-column(label='账户信息')
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

