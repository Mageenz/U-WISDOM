<template lang="pug">
  .page
    //- .page-searchbar
    //-   el-row(:gutter='15')
    //-     el-col(:span='6')
    //-       el-input(placeholder='请输入关键词' v-model='searchForm.name' clearable)
    //-     el-col(:span='6')
    //-       el-cascader.width100(v-model='address' :options='areas' clearable)
    //-     el-col(:span='8')
    //-       el-date-picker.width100(start-placeholder='入驻开始时间' end-placeholder='入驻结束时间' type='daterange' v-model='date' value-format='yyyy-MM-dd')
    //-     el-col(:span='4')
    //-       el-button(icon='el-icon-search' type='primary' @click='search') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='说明' prop='description')
          el-table-column(label='异常编码' prop='exceptionCode')
          el-table-column(label='异常详细信息' prop='exceptionDetail')
          el-table-column(label='请求方法' prop='method')
          el-table-column(label='操作提交的数据' prop='params')
          el-table-column(label='操作IP地址' prop='remoteAddr')
          el-table-column(label='请求URI' prop='requestUri')
          el-table-column(label='日志类型')
            template(slot-scope='{row}')
              span {{type[row.type]}}
          el-table-column(label='操作用户名' prop='user')
      .page-pagination       
        el-pagination(background :total='total' :page-size='size' :current-page='current' @current-change='changePage' layout='prev, pager, next, total, jumper')
</template>

<script>
import mixin from '../../mixin'

export default {
  data() {
    return {
      type: {
        '1': '增加',
        '2': '删除',
        '3': '修改',
        '4': '查询'
      },
      records: [],
      total: 0,
      size: 10,
      current: 1,

      searchForm: {},
    }
  },
  mixins: [mixin],
  methods: {
    initSearchParams() {
      const { current } = this.$route.query
      this.searchForm.current = current || 1
    },
    getTableList() {
      const params = this.getSearchParams()

      params.size = this.size
      API.system.getSystemLogs(params).then(res => {
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

