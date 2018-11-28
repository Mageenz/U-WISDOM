<template lang="pug">
  .page
    .page-content
      h2 大类设置及排序：
      .page-operatebar
        el-button(type='primary' icon='el-icon-plus') 新增
      el-table(border stripe)
        el-table-column(type='index')
        el-table-column(label='大类名称')
        el-table-column(label='图标')
        el-table-column(label='排序')
        el-table-column(label='操作')
    .page-content
      h2 小类设置及排序：
      .page-operatebar
        el-button(type='primary' icon='el-icon-plus') 新增
      el-table(border stripe)
        el-table-column(type='index')
        el-table-column(label='大类名称')
        el-table-column(label='图标')
        el-table-column(label='排序')
        el-table-column(label='操作')
</template>

<script>
export default {
  
}
</script>

