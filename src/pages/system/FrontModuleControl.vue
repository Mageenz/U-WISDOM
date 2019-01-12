<template lang="pug">
  .page
    //- .page-operatebar
    //-   el-button(icon='el-icon-plus' type='primary' @click='add') 新增
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='模块名称' prop='name')
          el-table-column(label='是否显示')
            template(slot-scope='{row}') {{row.isDisplay == 0 ? '否' : '是'}}
          el-table-column(label='操作' width='100')
            template(slot-scope='{row}')
              el-button(type='text' @click='editModule(row)') 编辑
    el-dialog(:visible.sync='isDialogShow' title='编辑模块' width='30%')
      el-form(label-position='top')
        el-form-item(label='名称' prop='')
          el-input(placeholder='名称' v-model='form.name' clearable)
        el-form-item(label='是否显示' prop='')
          el-radio(:label='0' v-model='form.isDisplay') 否
          el-radio(:label='1' v-model='form.isDisplay') 是
      .p-foot(slot='footer')
        el-button(type='primary' @click='submit') 提交
        el-button(@click='isDialogShow=false') 取消
</template>

<script>
export default {
  data() {
    return {
      records: [],
      form: {
        name: '',
        isDisplay: 0
      },
      isDialogShow: false
    }
  },
  methods: {
    submit() {
      API.system.submitFrontSettings(this.form).then(res => {
        if(res.data.code === '0') {
          this.$message.success('操作成功')
          this.isDialogShow = false
          this.frontSettings()
        }
      })
    },
    editModule(row) {
      this.isDialogShow = true

      this.form = JSON.parse(JSON.stringify(row))
    },
    frontSettings() {
      API.system.frontSettings().then(res => {
        this.records = res.data.data
      })
    }
  },
  mounted() {
    this.frontSettings()
  }
}
</script>

