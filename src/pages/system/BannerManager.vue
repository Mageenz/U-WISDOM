<template lang="pug">
  .page
    .page-operatebar
      el-button(icon='el-icon-plus' type='primary') 新增
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='图片')
          el-table-column(label='链接')
          el-table-column(label='排序')
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

