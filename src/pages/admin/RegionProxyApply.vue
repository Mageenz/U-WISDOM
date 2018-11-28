<template lang="pug">
  .page
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='序号')
          el-table-column(label='申请时间')
          el-table-column(label='申请人姓名')
          el-table-column(label='ID')
          el-table-column(label='手机号码')
          el-table-column(label='身份证号码')
          el-table-column(label='申请区域')
          el-table-column(label='申请理由')
          el-table-column(label='累计消费额')
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