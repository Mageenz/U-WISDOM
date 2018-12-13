<template lang="pug">
  .page
    el-collapse(v-model='names')
      el-collapse-item(title='分享/推荐设置：' name='1')
        el-form(label-width='150px' label-position='right')
          el-form-item(label='新注册用户奖励：')
            el-input(placeholder='新注册用户奖励' v-model='form.registerCoupons' clearable style='width:300px;')
            span.mr15.ml15 优惠金
          el-form-item(label='推荐好友注册奖励：')
            el-input(placeholder='推荐好友注册奖励' v-model='form.inviteCoupons' clearable style='width:300px;')
            span.mr15.ml15 优惠金/人
          el-form-item
            el-button(type='primary' @click='submit') 提交
</template>

<script>
export default {
  data() {
    return {
      names: ['1'],
      form: {
        registerCoupons: '',
        inviteCoupons: ''
      }
    }
  },
  methods: {
    submit() {
      API.basic.editShareInfo(this.form).then(res => {
        if(res.data.code === '0') {
          this.$message.success('操作成功')
        }
      })
    }
  },
  mounted() {
    API.basic.getShareInfo().then(res => {
      if(res.data.code === '0') {
        this.form = res.data.data
      }
    })
  }
}
</script>

