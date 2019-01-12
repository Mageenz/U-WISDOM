<template lang="pug">
  .page
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='VIP级别名称' prop='name')
          el-table-column(label='累计消费金额达' prop='consumption')
          el-table-column(label='直推奖比例' prop='straightRatio')
          el-table-column(label='团队奖比例' prop='teamRatio')
          el-table-column(label='操作')
            template(slot-scope='{row}')
              el-button(type='text' @click='edit(row)') 编辑
              //- el-button(type='text') 删除
      el-dialog(:visible.sync='isDialogShow' title='编辑vip设置' width='30%')
        el-form(label-position='top')
          el-form-item(label='累计消费：')
            el-input(placeholder='累计消费' v-model='form.consumption' clearable)
          el-form-item(label='VIP级别名称：')
            el-input(placeholder='VIP级别名称' v-model='form.name' clearable)
          el-form-item(label='直推奖比例')
            el-input(placeholder='直推奖比例：' v-model='form.straightRatio' clearable)
          el-form-item(label='团队奖比例：')
            el-input(placeholder='团队奖比例' v-model='form.teamRatio' clearable)
        .p-foot(slot='footer')
          el-button(type='primary' @click='submit') 提交
          el-button(@click='isDialogShow=false') 取消
</template>

<script>
export default {
  data() {
    return {
      isDialogShow: false,
      records: [],
      form: {
        consumption: '',
        name: '',
        straightRatio: '',
        teamRatio: ''
      }
    }
  },
  methods: {
    submit() {
      API.basic.editVipSetting(this.form).then(res => {
        if(res.data.code === '0') {
          this.$message.success('操作成功')
          this.isDialogShow = false
          API.basic.getVipSettingList().then(res => {
            this.records = res.data.data
          })
        }
      })
    },
    edit(row) {
      this.isDialogShow = true
      this.form = JSON.parse(JSON.stringify(row))
    }
  },
  mounted() {
    API.basic.getVipSettingList().then(res => {
      this.records = res.data.data
    })
  }
}
</script>

