<template lang="pug">
  .page
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='发布时间' width='120')
            template(slot-scope='{row}')
              //- span {{row.date | parseTime}}
          el-table-column(label='发布对象' prop='type')
            template(slot-scope='{row}')
              span(v-if='row.type.indexOf(1) > -1') 所有用户,
              span(v-if='row.type.indexOf(2) > -1') 会员,
              span(v-if='row.type.indexOf(3) > -1') VIP,
              span(v-if='row.type.indexOf(4) > -1') 区县代理,
              span(v-if='row.type.indexOf(5) > -1') 市级代理,
              span(v-if='row.type.indexOf(6) > -1') 商家
          el-table-column(label='发布区域' width='160')
            template(slot-scope='{row}')
              span {{row.provId | parseAreaSpec(row.cityId, row.areaId)}}
          el-table-column(label='标题' prop='name')
          el-table-column(label='内容' prop='description')
</template>

<script>
import areas from '../../assets/common/areas'
const areasSpec = JSON.parse(JSON.stringify(areas))
areasSpec.unshift({
  value: 0,
  label: '全国'
})
areasSpec.forEach(item => {
  if(item.children) {
    item.children.unshift({
      value: 0,
      label: '全市'
    })
  }
})

export default {
  data() {
    return {
      records: []
    }
  },
  methods: {
    getMessageList() {
      API.message.getMessageList().then(res => {
        this.records = res.data.data
      })
    }
  },
  filters: {
    parseAreaSpec(provinceCode, cityCode, areaCode) {
      if (!provinceCode) {
        return ''
      }
      const result = []
      areasSpec.forEach(function (item) {
        if (provinceCode && item.value == provinceCode) {
          result.push(item.label)
          if(item.children) {
            item.children.forEach(function (city) {
              if (cityCode && city.value == cityCode) {
                result.push(city.label)
                if (areaCode && Array.isArray(city.children)) {
                  city.children.forEach(function (area) {
                    if (area.value == areaCode) {
                      result.push(area.label)
                    }
                  })
                }
              }
            })
          }
        }
      })
      return result.join('-')
    }
  },
  created() {
    this.getMessageList()
  }
}
</script>

