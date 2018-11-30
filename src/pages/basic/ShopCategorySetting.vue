<template lang="pug">
  .page
    el-collapse(v-model='names')
      el-collapse-item(title='大类设置及排序：' name='1')
        .page-operatebar
          el-button(type='primary' icon='el-icon-plus') 新增
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='大类名称')
          el-table-column(label='图标')
          el-table-column(label='排序')
          el-table-column(label='操作')
      el-collapse-item(title='小类设置及排序：' name='2')
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
  data() {
    return {
      names: ['1', '2']
    }
  }
}
</script>

