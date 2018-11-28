<template lang="pug">
  .page
    .page-operatebar
      el-button(type='primary' icon='el-icon-plus') 新增
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='会员卡名称')
          el-table-column(label='面值')
          el-table-column(label='优惠金金额')
          el-table-column(label='积分额')
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

