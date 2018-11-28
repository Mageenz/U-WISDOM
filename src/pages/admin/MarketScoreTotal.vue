<template lang="pug">
  .page
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='发生时间')
          el-table-column(label='发生事由')
          el-table-column(label='对象ID')
          el-table-column(label='名称')
          el-table-column(label='发生数额')
          el-table-column(label='实时余额')
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