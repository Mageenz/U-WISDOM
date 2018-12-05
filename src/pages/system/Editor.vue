<template lang="pug">
  .page
    .page-operatebar
      el-button(icon='el-icon-plus' type='primary' @click='isDialogShow=true') 新增
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='姓名' prop='realName')
          el-table-column(label='职务' prop='')
          el-table-column(label='手机号码' prop='telephone')
          el-table-column(label='操作' width='100')
            template(slot-scope='{row}')
              el-button(type='text') 编辑
              el-button(type='text' @click='deleteEditor(row.id)') 删除
    .c3 系统登陆时，以手机号码做为登陆帐号，新增成功时，发送一条短信，告知密码，列表新增一列，初始密码，有权限的人员可以随时修改
    el-dialog(:visible.sync='isDialogShow' title='添加操作员' width='30%')
      el-form(label-position='top')
        el-form-item(label='用户登录名：')
          el-input(placeholder='用户登录名' v-model='form.loginName' clearable)
        el-form-item(label='密码：')
          el-input(placeholder='密码' v-model='form.password' clearable)
        el-form-item(label='手机号：')
          el-input(placeholder='手机号' v-model='form.telephone' clearable)
        el-form-item(label='真实姓名：')
          el-input(placeholder='真实姓名' v-model='form.realName' clearable)
      .foot(slot='footer')
        el-button(type='primary' @click='addEditor') 提交
        el-button(@click='isDialogShow=false') 取消
</template>

<script>
const md5 = require('js-md5');

export default {
  data() {
    return {
      records: [],
      isDialogShow: false,
      form: {
        loginName: '',
        password: '',
        telephone: '',
        realName: ''
      }
    }
  },
  methods: {
    deleteEditor(id) {
      API.system.deleteEditor({id}).then(res => {
        this.$message.success('操作成功')
        this.getList()
      })
    },
    addEditor() {
      const data = {...this.form, password: md5(this.form.password)}

      if(data.id) {
        
      } else {
        API.system.addEditor(data).then(res => {
          if(res.data.code === '0') {
            this.$message.success('操作成功')
            this.isDialogShow = false
            this.getList()
          }
        })
      }
    },
    getList() {
      API.system.getEditorList({
        isDelete: true
      }).then(res => {
        if(res.data.code === '0') {
          this.records = res.data.data
        }
      })
    }
  },
  mounted() {
    this.getList()
  }
}
</script>

