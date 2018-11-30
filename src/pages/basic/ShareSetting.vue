<template lang="pug">
  .page
    el-collapse(v-model='names')
      el-collapse-item(title='分享/推荐设置：' name='1')
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
      names: ['1'],
      form: {
        reward: ''
      }
    }
  }
}
</script>

