<template lang="pug">
  .page
    .page-operatebar
      el-button(icon='el-icon-plus' type='primary' @click='add') 新增
    .page-content
      .page-table
        el-table(border stripe :data='records')
          el-table-column(type='index')
          el-table-column(label='图片')
            template(slot-scope='{row}')
              img(:src='row.imgUrl' width='150')
          el-table-column(label='链接' prop='linkUrl')
          el-table-column(label='排序' prop='sequenceNumber')
          el-table-column(label='操作')
            template(slot-scope='{row}')
              el-button(type='text' @click='editBanner(row)') 编辑
              el-button(type='text' @click='deleteBanner(row.id)') 删除
    el-dialog(:visible.sync='isDialogShow' title='新增轮播图' width='40%' @close='closed')
      el-form(label-width='60px')
        el-form-item(label='图片：')
          el-upload(action='/dev/file/upload' :file-list='fileList' list-type='picture-card' :limit='1' :on-success='handleUploadSuccess' :on-preview="handlePictureCardPreview" :on-remove="handleRemove")
            <i class="el-icon-plus"></i>
            .c3(slot='tip') 只能上传jpg/png文件，且不超过500kb
        el-form-item(label='链接：')
          el-input(placeholder='请输入链接' v-model='form.linkUrl')
        el-form-item(label='序号：')
          el-input(placeholder='请输入序号' v-model='form.sequenceNumber')
        el-form-item(label='名称：')
          el-input(placeholder='名称' v-model='form.name' clearable)
        el-form-item(label='标题：')
          el-input(placeholder='标题' v-model='form.title' clearable)
      .dialog-foot(slot='footer')
        el-button(type='primary' @click='submit') 提交
        el-button(@click='isDialogShow=false') 取消
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      isDialogShow: false,
      records: [],
      form: {
        imgUrl: '',
        linkUrl: '',
        name: '',
        sequenceNumber: '',
        title: ''
      }
    }
  },
  methods: {
    closed() {
      this.fileList = []
    },
    submit() {
      if(this.form.id) {
        API.system.editAd(this.form).then(res => {
          if(res.data.code === '0') {
            this.$message.success('操作成功')
            this.isDialogShow = false
            this.getAdList()
          }
        })
      } else {
        API.system.addAd(this.form).then(res => {
          if(res.data.code === '0') {
            this.$message.success('操作成功')
            this.isDialogShow = false
            this.getAdList()
          }
        })
      }
    },
    editBanner(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.fileList = [{
        name: row.name,
        url: row.imgUrl
      }]
      this.isDialogShow = true
    },
    deleteBanner(id) {
      API.system.deleteAd({id, isDeleted: true}).then(res => {
        this.getAdList()
      })
    },
    handleUploadSuccess(response, file, fileList) {
      console.log('re', response, file, fileList)

      this.form.imgUrl = response.data
    },
    handleRemove(file, fileList) {
      this.fileList = fileList
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
    },
    add() {
      this.form = {
        imgUrl: '',
        linkUrl: '',
        name: '',
        sequenceNumber: '',
        title: ''
      }
      this.fileList = []

      this.isDialogShow = true
    },
    getAdList() {
      API.system.getAdList({
        isDeleted: true
      }).then(res => {
        this.records = res.data.data
      })
    }
  },
  created() {
    this.getAdList()
  }
}
</script>

