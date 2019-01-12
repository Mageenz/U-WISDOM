<template lang="pug">
  .page
    el-collapse(v-model='names')
      el-collapse-item(name='1' title='app升级管理')
        el-form(label-width='120px')
          el-form-item(label='apk版本号：')
            el-input(placeholder='apk版本号' v-model='form.apkVersion' clearable style='width:300px;')
          el-form-item(label='上传apk包：')
            el-upload(action='/dev/file/upload' :limit='1' :on-success='handleUploadSuccess')
              el-button(type='primary' icon='el-icon-upload') 上传apk包
          el-form-item(label='更新方式：')
            el-radio(v-model='form.type' label='1') 强制更新
            el-radio(v-model='form.type' label='2') 普通升级
          el-form-item(label='更新说明：')
            el-input(placeholder='更新说明' v-model='form.description' clearable style='width:300px;')
          el-form-item
            el-button(type='primary' @click='submit') 提交
</template>

<script>
export default {
  data() {
    return {
      names: ['1'],
      form: {
        apkVersion: '',
        description: '',
        type: '1',
        url: ''
      }
    }
  },
  methods: {
    handleUploadSuccess(response) {
      this.form.url = response.data
    },
    submit() {
      API.system.appUpdate(this.form).then(res => {
        if(res.data.code === '0') {
          this.$message.success('操作成功')
        }
      })
    }
  }
}
</script>
