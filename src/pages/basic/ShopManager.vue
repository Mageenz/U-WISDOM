<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='15')
        el-col(:span='6')
          el-input(placeholder='请输入关键词' v-model='searchForm.name' clearable)
        el-col(:span='6')
          el-cascader.width100(v-model='address' :options='areas' clearable)
        el-col(:span='8')
          el-date-picker.width100(start-placeholder='入驻开始时间' end-placeholder='入驻结束时间' type='daterange' v-model='date' value-format='yyyy-MM-dd')
        el-col(:span='4')
          el-button(icon='el-icon-search' type='primary' @click='search') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='入驻时间')
            template(slot-scope='{row}')
              span {{row.enterTime | parseTime}}
          el-table-column(label='省-市-区')
            template(slot-scope='{row}')
              //- span {{row.provId | parseArea(row.cityId, row.areaId)}}
              span {{"110000" | parseArea("110100", "110101")}}
          el-table-column(label='商家名称' prop='name')
          el-table-column(label='商家ID' prop='id')
          el-table-column(label='推荐人名称' prop='referrerName')
          el-table-column(label='推荐人ID' prop='referrerId')
          el-table-column(label='审核人员')
          el-table-column(label='操作')
            template(slot-scope='{row}')
              el-button(type='text' @click='viewDetail(row.id)') 详情
              el-button(type='text' @click='changeStatus(row.id, 0)' v-if='row.status > 0') 下架
              el-button(type='text' @click='changeStatus(row.id, 2)' v-if='row.status == 0') 上架
              el-button(type='text' @click='check(row.id, 2)' v-if='row.status == 0 || row.status == 4') 审核通过
              el-button(type='text' @click='check(row.id, 1)' v-if='row.status == 0 || row.status == 4') 审核不通过
              //- 商家状态：-1 未激活 0-已下架；1-休息中，2-正常
      .page-pagination       
        el-pagination(background :total='total' :page-size='size' :current-page='current' @current-change='changePage' layout='prev, pager, next, total, jumper')
    el-dialog(:visible.sync='isDialogShow' title='商家详情' width='60%')
      table.table.table-layout-main
        tr
          th 商家名称：
          td {{detail.name}}
          th 商家地址：
          td {{detail.provName}}{{detail.cityName}}{{detail.areaName}}{{detail.areaDetail}}
        tr
          th 联系电话：
          td {{detail.telephone}}
          th 联系地址：
          td {{detail.address}}
        tr
          th 邮箱：
          td {{detail.email}}
          th 入驻时间：
          td {{detail.enterTime}}
        tr
          th 推荐人名称：
          td {{detail.referrerName}}
          th 推荐人手机号码：
          td {{detail.referrerPhone}}
        tr
          th 营业开始时间：
          td {{detail.shopStartTime}}
          th 营业结束时间：
          td {{detail.shopEndTime}}
        tr
          th 标语：
          td {{detail.slogan}}
          th 商家状态：
          td {{detail.status}}
        tr
          th 商家图片：
          td(colspan='3')
            img(:src='detail.picUrl' width='100')
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
        areaId: '',
        startTime: '',
        endTime: ''
      },
      areas,
      isDialogShow: false,
      detail: {}
    }
  },
  mixins: [mixin],
  methods: {
    check(businessId, status) {
      API.basic.checkShop({
        businessId,
        status
      }).then(res => {
        if(res.data.code === '0') {
          this.$message.success('审核成功')
        }
      })
    },
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
    getAreas() {
      API.common.getAreas().then(res => {
        // this.areas = res.data.data
        let areas = []

        res.data.data.forEach(item1 => {
          const data = {
            value: item1.id,
            label: item1.name
          }
          if(item1.parentId === 0) {
            areas.push(data)
          } else {
            areas.forEach(item2 => {

              if(item2.value == item1.parentId) {
                if(item2.children) {
                  item2.children.push(data)
                } else {
                  item2.children = [data]
                }
              } else {
                if(item2.children) {
                  item2.children.forEach(item3 => {
                    if(item3.value == item1.parentId) {
                      if(item3.children) {
                        item3.children.push(data)
                      } else {
                        item3.children = [data]
                      }
                    }
                  })
                }
              }
            })
          }
        })

        this.areas = areas
      })
    },
    initSearchParams() {
      const { current, name, proId, cityId, areaId, startTime, endTime } = this.$route.query

      this.searchForm.name = name
      this.searchForm.proId = proId
      this.searchForm.cityId = cityId
      this.searchForm.areaId = areaId
      this.searchForm.startTime = startTime
      this.searchForm.endTime = endTime
      this.searchForm.current = current || 1

      this.address = [proId, cityId, areaId]

      if(startTime&&endTime) {
        this.date = [startTime, endTime]
      } else {
        this.date = ''
      }
    },
    getTableList() {
      const params = this.getSearchParams()

      params.size = this.size
      API.basic.getBusinessList(params).then(res => {
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
        startTime: this.date ? this.date[0] : undefined,
        endTime: this.date ? this.date[1] : undefined,
      })
    }
  }
}
</script>

