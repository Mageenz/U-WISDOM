<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='20')
        el-col(:span='6')
          el-date-picker(start-placeholder='开始时间' end-placeholder='结束时间' clearable type='daterange' style='width:100%' v-model='date' value-format='yyyy-MM-dd')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary' @click='search') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='一星VIP人数' prop='oneVipNum')
          el-table-column(label='合计支付金额' prop='oneVipPayAmount')
          el-table-column(label='二星VIP人数' prop='twoVipNum')
          el-table-column(label='合计支付金额' prop='twoVipPayAmount')
          el-table-column(label='三星VIP人数' prop='threeVipNum')
          el-table-column(label='合计支付金额' prop='threeVipPayAmount')
          el-table-column(label='四星VIP人数' prop='fourVipNum')
          el-table-column(label='合计支付金额' prop='fourVipPayAmount')
</template>

<script>
export default {
  data() {
    return {
      records: [],
      date: '',
      searchForm: {
        startTime: '',
        endTime: ''  
      }
    }
  },
  methods: {
    search() {
      let date = this.date || ['', '']

      this.searchForm.startTime = this.date[0]
      this.searchForm.endTime = this.date[1]
      this.getList()
    },
    getList() {
      API.admin.getVipS(this.searchForm).then(res => {
        this.records = [res.data.data]
      })
    }
  },
  mounted() {
    this.getList()
  }
}
</script>