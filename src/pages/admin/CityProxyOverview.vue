<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='20')
        el-col(:span='6')
          el-input(placeholder='请输入关键词')
        el-col(:span='6')
          el-select.width100(placeholder='省市区')
            el-option(value='1') 123
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='省')
          el-table-column(label='市')
          el-table-column(label='代理商姓名')
          el-table-column(label='ID')
          el-table-column(label='联系方式')
          el-table-column(label='累计收入积分')
          el-table-column(label='区域内商家数')
          el-table-column(label='直推会员数')
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

