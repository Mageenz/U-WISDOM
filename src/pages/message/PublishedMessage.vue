<template lang="pug">
  .page
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='发布时间')
          el-table-column(label='发布对象')
          el-table-column(label='发布区域')
          el-table-column(label='标题')
          el-table-column(label='内容')
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

