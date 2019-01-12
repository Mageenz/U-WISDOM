<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='20')
        el-col(:span='6')
          el-input(placeholder='请输入关键词' v-model='searchForm.name' clearable)
        el-col(:span='6')
          el-date-picker(start-placeholder='开始时间' end-placeholder='结束时间' clearable type='daterange' style='width:100%' v-model='date' value-format='yyyy-MM-dd')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='发生时间' prop='createdTime')
            template(slot-scope='{row}') {{row.createdTime | parseTime}}
          el-table-column(label='会员ID' prop='memberId')
          el-table-column(label='会员名称' prop='name')
          el-table-column(label='发生数额' prop='changedValue')
            template(slot-scope='{row}') {{row.changedValue/100}}
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

      date: '',
      searchForm: {
        name: '',
        startTime: '',
        endTime: ''  
      }
    }
  },
  mixins: [mixin],
  methods: {
    initSearchParams() {
      const { current, startTime, endTime } = this.$route.query

      this.searchForm.current = current || 1
      this.searchForm.startTime = startTime
      this.searchForm.endTime = endTime

      if(startTime&&endTime) {
        this.date = [startTime, endTime]
      } else {
        this.date = ''
      }
    },
    search() {
      this.changeSearch({
        name: this.searchForm.name,
        startTime: this.date ? this.date[0] : undefined,
        endTime: this.date ? this.date[1] : undefined,
      })
      this.getList()
    },
    getTableList() {
      const params = this.getSearchParams()

      params.size = this.size
      API.admin.getScoreExchangeList(params).then(res => {
        const data = res.data.data
        if (data) {
          this.current = +data.current
          this.records = data.records
          this.total = +data.total
        }
      })
    }
  }
}
</script>