<template lang="pug">
  .page
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='申请时间' prop='')
          el-table-column(label='申请人姓名' prop='name')
          el-table-column(label='ID' prop='memberId')
          el-table-column(label='操作' width='100')
            template(slot-scope='{row}')
              el-button(type='text' @click='checkApplication(row.id, 2)' v-if='row.status !== 2') 同意
              el-button(type='text' @click='checkApplication(row.id, 1)' v-if='row.status !== 1') 驳回
</template>

<script>
export default {
  data() {
    return {
      records: []
    }
  },
  methods: {
    checkApplication(id, status) {
      API.admin.checkApplication({
        id,
        status
      }).then(res => {
        if(res.data.code === '0') {
          this.getApplications()
        }
      })
    },
    getApplications() {
      API.admin.getApplications({
        type: 1
      }).then(res => {
        this.records = res.data.data
      })
    }
  },
  mounted() {
    this.getApplications()
  }
}
</script>