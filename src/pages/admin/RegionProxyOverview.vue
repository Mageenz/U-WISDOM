<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='20')
        el-col(:span='6')
          el-input(placeholder='请输入' v-model='searchForm.name')
        el-col(:span='6')
          el-cascader.width100(v-model='address' :options='areas' clearable)
        el-col(:span='4')
          el-button(icon='el-icon-search' type='primary' @click='search') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='省' prop='provName')
          el-table-column(label='市' prop='cityName')
          el-table-column(label='区县' prop='areaName')
          el-table-column(label='代理商姓名' prop='name')
          el-table-column(label='ID' prop='id')
          el-table-column(label='联系方式' prop='phone')
          el-table-column(label='累计收入积分' prop='incomePointNum')
          el-table-column(label='区域内商家数' prop='expandBusinessNum')
          el-table-column(label='直推会员数' prop='recommendNum')
      .page-pagination       
        el-pagination(background :total='total' :page-size='size' :current-page='current' @current-change='changePage' layout='prev, pager, next, total, jumper')
</template>

<script>
import areas from '../../assets/common/areas'
import mixin from '../../mixin'

export default {
  data() {
    return {
      records: [],
      total: 0,
      size: 10,
      current: 1,

      address: [],
      searchForm: {
        proId: '',
        cityId: '',
        areaId: '',
        name: '',
        type: 1
      },
      areas,
    }
  },
  mixins: [mixin],
  methods: {
    initSearchParams() {
      const { current, name, proId, cityId, areaId } = this.$route.query

      this.searchForm.name = name
      this.searchForm.proId = proId
      this.searchForm.cityId = cityId
      this.searchForm.areaId = areaId
      this.searchForm.current = current || 1

      this.address = [proId, cityId, areaId]

    },
    getTableList() {
      const params = this.getSearchParams()

      params.size = this.size
      API.admin.getOverviewList(params).then(res => {
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
        proId: this.address[0],
        cityId: this.address[1],
        areaId: this.address[2]
      })
    }
  }
}
</script>

