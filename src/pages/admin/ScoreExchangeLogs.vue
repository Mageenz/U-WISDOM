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
          el-table-column(label='发生时间')
          el-table-column(label='对象ID')
          el-table-column(label='名称')
          el-table-column(label='发生数额')
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