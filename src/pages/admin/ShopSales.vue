<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='15')
        el-col(:span='6')
          el-input(placeholder='请输入商家名称' v-model='searchForm.name' clearable)
        el-col(:span='6')
          el-cascader.width100(v-model='address' :options='areas' clearable)
        el-col(:span='4')
          el-button(icon='el-icon-search' type='primary' @click='search') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='省-市-区')
            template(slot-scope='{row}')
              span {{row.provId | parseArea(row.cityId, row.areaId)}}
              //- span {{"110000" | parseArea("110100", "110101")}}
          el-table-column(label='商家名称' prop='name')
          el-table-column(label='商家ID' prop='id')
          el-table-column(label='推荐人名称' prop='referrerName')
          el-table-column(label='推荐人ID' prop='referrerId')
      .page-pagination       
        el-pagination(background :total='total' :page-size='size' :current-page='current' @current-change='changePage' layout='prev, pager, next, total, jumper')
</template>

<script>
import mixin from '../../mixin'
import areas from '../../assets/common/areas'

export default {
  data() {
    return {
      records: [],
      total: 0,
      size: 10,
      current: 1,

      address: [],
      date: '',

      searchForm: {
        name: '',
        proId: '',
        cityId: '',
        areaId: ''
      },
      areas,
      isDialogShow: false,
      detail: {}
    }
  },
  mixins: [mixin],
  methods: {
    changeStatus(id, status) {
      API.basic.changeBusinessStatus({
        status,
        id
      }).then(res => {
        this.$message.success('操作成功')
        this.getTableList()
      })
    },
    viewDetail(id) {
      this.isDialogShow = true
      API.basic.getBusinessDetail({id}).then(res => {
        this.detail = res.data.data.business
      })
    },
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
      API.admin.getShopSaleList(params).then(res => {
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
        areaId: this.address[2],
      })
    }
  }
}
</script>

