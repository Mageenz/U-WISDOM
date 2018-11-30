<template lang="pug">
  .page
    .page-operatebar
      el-button(icon='el-icon-plus' type='primary' @click='add') 新增
    .page-content
      .page-table
        el-table(border stripe)
          el-table-column(type='index')
          el-table-column(label='图片')
          el-table-column(label='链接')
          el-table-column(label='排序')
          el-table-column(label='操作')
    el-dialog(:visible.sync='isDialogShow' title='新增轮播图' width='30%')
      el-form(label-width='60px')
        el-form-item(label='图片：')
          el-upload(action='action' list-type='picture')
            el-button(type='primary') 点击上传
            .c3(slot='tip') 只能上传jpg/png文件，且不超过500kb
        el-form-item(label='链接：')
          el-input(placeholder='请输入链接')
        el-form-item(label='序号：')
          el-input(placeholder='请输入序号')
      .dialog-foot(slot='footer')
        el-button(type='primary') 提交
        el-button 取消
</template>

<script>
export default {
  data() {
    return {
      isDialogShow: false,
      form: {
        keyword: '',
        status: ''
      }
    }
  },
  methods: {
    add() {
      this.isDialogShow = true
    }
  }
}
</script>

