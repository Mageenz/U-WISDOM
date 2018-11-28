<template lang="pug">
  .page
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='VIP级别名称')
          el-table-column(label='累计消费金额达')
          el-table-column(label='直推奖比例')
          el-table-column(label='团队奖比例')
          el-table-column(label='操作')
            template(slot-scope='{row}')
              el-button(type='text') 编辑
              el-button(type='text') 删除
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

