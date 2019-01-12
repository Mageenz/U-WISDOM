<template lang="pug">
  .page
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='发生时间' prop='createdTime')
            template(slot-scope='{row}') {{row.createdTime | parseTime}}
          el-table-column(label='发生事由' prop='remark')
          el-table-column(label='会员ID' prop='memberId')
          el-table-column(label='会员名称' prop='name')
          el-table-column(label='发生数额' prop='changedValue')
          el-table-column(label='实时余额' prop='balance')
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
      size: 10,
      current: 1,
      searchForm: {
        current: 1
      }
    }
  },
  mixins: [mixin],
  methods: {
    initSearchParams() {
      const {current} = this.$route.query

      this.searchForm.current = current || 1
    },
    getTableList() {
      const params = this.getSearchParams()

      params.size = this.size
      API.admin.getMarketPoints(params).then(res => {
        const data = res.data.data
        if (data) {
          this.current = +data.current
          this.records = data.records
          this.total = +data.total
        }
      })
    },
  }
}
</script>