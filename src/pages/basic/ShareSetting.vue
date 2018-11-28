<template lang="pug">
  .page
    .page-content
      h2 分享/推荐设置：
      el-form
        el-form-item
          span.mr15 新注册用户奖励
          el-select(placeholder='新注册用户奖励' clearable v-model='form.reward')
            el-option(value='1') 10
          span.mr15.ml15 优惠金
          el-button(type='primary') 提交
        el-form-item
          span.mr15 推荐好友注册奖励
          el-select(placeholder='推荐好友注册奖励' clearable v-model='form.reward')
            el-option(value='1') 10
          span.mr15.ml15 优惠金/人
          el-button(type='primary') 提交
</template>

<script>
export default {
  data() {
    return {
      form: {
        reward: ''
      }
    }
  }
}
</script>

