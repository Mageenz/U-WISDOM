<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='15')
        el-col(:span='6')
          el-input(placeholder='请输入关键词' v-model='form.keyword')
        el-col(:span='6')
          el-select.width100(placeholder='代理开通状态' v-model='form.status')
            el-option(value='1') 开通
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary') 搜索
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(label='序号')
          el-table-column(label='名称')
          el-table-column(label='英文')
          el-table-column(label='编码')
          el-table-column(label='排序')
          el-table-column(label='是否开通')
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

