<template lang="pug">
  .page
    .page-content
      h2 app升级管理：
      el-form(label-width='120px')
        el-form-item(label='上传：')
          el-uploader
        el-form-item(label='选项：')
          el-radio 强制更新
          el-radio 普通升级
        el-form-item(label='更新说明：')
          el-input(placeholder='单行输入' style='width:300px;')
        el-form-item
          el-button(type='primary') 提交
</template>

<script>
export default {
  
}
</script>
