<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='20')
        el-col(:span='6')
          el-input(placeholder='请输入关键词' v-model='searchForm.name' clearable)
        el-col(:span='6')
          el-date-picker(start-placeholder='开始时间' end-placeholder='结束时间' clearable type='daterange' style='width:100%' v-model='date' value-format='yyyy-MM-dd')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary' @click='search') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='付款时间' prop='payTime')
            template(slot-scope='{row}') {{payTime | parseTime}}
          el-table-column(label='付款ID' prop='code')
          el-table-column(label='名称' prop='memberName')
          el-table-column(label='付款金额')
            template(slot-scope='{row}') {{totalFee/100}}
          el-table-column(label='付款通道')
            template(slot-scope='{row}') {{paymentType[row.paymentType]}}
          el-table-column(label='付款账户信息' prop='memberAccount')
      .page-pagination       
        el-pagination(background :total='total' :page-size='size' :current-page='current' @current-change='changePage' layout='prev, pager, next, total, jumper')
</template>

<script>
import mixin from '../../mixin'

export default {
  data() {
    return {
      paymentType: {
        1: '微信支付',
        2: '支付宝支付',
        3: '其他支付'
      },
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
      API.finance.getSaleList(params).then(res => {
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

