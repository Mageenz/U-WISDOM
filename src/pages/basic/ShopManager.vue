<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='15')
        el-col(:span='6')
          el-input(placeholder='请输入关键词' v-model='form.keyword')
        el-col(:span='6')
          el-select.width100(placeholder='省市区' v-model='form.status')
            el-option(value='1') 浙江省
        el-col(:span='6')
          el-date-picker(style='width: 100%')(placeholder='入驻时间' type='date')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary') 搜索
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(label='序号')
          el-table-column(label='入驻时间')
          el-table-column(label='省')
          el-table-column(label='市')
          el-table-column(label='区')
          el-table-column(label='商家名称')
          el-table-column(label='商家ID')
          el-table-column(label='推荐人名称')
          el-table-column(label='ID号')
          el-table-column(label='审核人员')
          el-table-column(label='操作')
            template(slot-scope='{row}')
              el-button(type='text') 详情
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

