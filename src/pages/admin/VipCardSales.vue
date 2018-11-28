<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='20')
        el-col(:span='6')
          el-input(placeholder='请输入关键词')
        el-col(:span='6')
          el-date-picker(placeholder='请选择时间' type='daterange' style='width:100%')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary') 搜索
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='日期')
          el-table-column(label='付款ID')
          el-table-column(label='名称')
          el-table-column(label='付款金额')
          el-table-column(label='付款通道')
          el-table-column(label='付款账户信息')
        .page-total 合计
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

<style lang="less" scoped>
.page-total {
    line-height: 40px;
    margin-top: 15px;
    background-color: rgba(241, 101, 17, 0.46);
    color: #fff;
    padding-left: 15px;
}
</style>

