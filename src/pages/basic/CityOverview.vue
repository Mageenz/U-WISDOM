<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='15')
        el-col(:span='6')
          el-input(placeholder='请输入关键词' v-model='searchForm.name' clearable)
        el-col(:span='6')
          el-select.width100(placeholder='代理开通状态' v-model='searchForm.status' clearable)
            el-option(value='0' label='未开通')
            el-option(value='1' label='开通')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary' @click='search') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='名称' prop='name')
          el-table-column(label='英文' prop='engName')
          el-table-column(label='编码' prop='code')
          el-table-column(label='排序' prop='sequenceNumber')
          el-table-column(label='是否开通')
            template(slot-scope='{row}')
              span {{row.status == 0 ? '未开通' : '开通'}}
          //- el-table-column(label='操作')
      .page-pagination       
        el-pagination(background :total='total' :page-size='size' :current-page='current' @current-change='changePage' layout='prev, pager, next, total, jumper')
</template>

<script>
import mixin from '../../mixin'

export default {
  data() {
    return {
      records: [],
      total: 0,
      size: 20,
      current: 1,
      searchForm: {
        keyword: '',
        status: ''
      }
    }
  },
  mixins: [mixin],
  methods: {
    initSearchParams() {
      this.searchForm.name = this.$route.query.name
      this.searchForm.status = this.$route.query.status
      this.searchForm.current = this.$route.query.current || 1
    },
    getTableList() {
      const params = this.getSearchParams()

      params.size = this.size
      API.basic.cityOverview(params).then(res => {
        const data = res.data.data
        if (data) {
          this.current = +data.current
          this.records = data.records
          this.total = +data.total
        }
      })
    },
    search() {
      this.changeSearch({
        name: this.searchForm.name,
        status: this.searchForm.status
      })
    }
  }
}
</script>

