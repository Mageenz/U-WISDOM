<template lang="pug">
  .page
    .page-operatebar
      el-button(icon='el-icon-plus' type='primary') 新增
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='姓名')
          el-table-column(label='职务')
          el-table-column(label='手机号码')
          el-table-column(label='操作')
    .c3 系统登陆时，以手机号码做为登陆帐号，新增成功时，发送一条短信，告知密码，列表新增一列，初始密码，有权限的人员可以随时修改
</template>

<script>
export default {
  data() {
    return {
      form: {
        keyword: '',
        status: ''
      }
    }
  }
}
</script>

